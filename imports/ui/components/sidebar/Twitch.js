import { Avatar, IconButton } from '../generic';
import React, { Component } from 'react';

import HorizontalScroll from '../generic/HorizontalScroll';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import TrophyHunter from '../trophy-hunter/TrophyHunter';
import TwitchStreams from '../../../api/twitch-api/twitchStreams';
import { connect } from 'react-redux';
import { notificationTypes } from '../../../api/notifications/notifications';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  container: {},
  foreground: {
    padding: '2px',
    display: 'flex',
    flexFlow: 'column'
  }
};

class Twitch extends Component {
  componentDidUpdate(prevProps) {
    const { twitchStreams, friends } = this.props;
    const prevTwitchStreams = prevProps.twitchStreams;

    if (friends.length && twitchStreams && twitchStreams.length) {
      twitchStreams.forEach(stream => {
        if (
          prevTwitchStreams &&
          prevTwitchStreams.find(
            prevStream => prevStream.trophyHunter.userId === stream.trophyHunter.userId
          )
        ) {
          return;
        }
        if (friends.includes(stream.trophyHunter.userId)) {
          Meteor.call('createNotification', notificationTypes.STREAM_ONLINE, {
            channelUrl: stream.stream.channel.url,
            userId: stream.trophyHunter.userId
          });
        }
      });
    }
  }

  handleClick(url, userId, event) {
    event.preventDefault();
    window.open(url);
    Meteor.call('channelClick', userId);
  }

  render() {
    const { twitchStreams } = this.props;

    if (!twitchStreams) {
      return <div />;
    }

    const containerStyle = Object.assign(
      {
        border: `1px solid ${universeTheme.palette.borderColor}`,
        borderBottomWidth: 0,
        paddingBottom: 1
      },
      styles.container
    );

    return (
      <div style={containerStyle}>
        <div style={styles.foreground}>
          <span
            style={{
              textAlign: 'center',
              color: universeTheme.palette.secondaryTextColor,
              fontSize: '11px',
              marginBottom: '2px'
            }}
          >
            Live Streams
          </span>
          <div style={{ marginBottom: 4, textAlign: 'center' }}>
            {twitchStreams.length > 0 && (
              <HorizontalScroll ref={value => (this.horizontalScroll = value)}>
                {twitchStreams.map(({ stream, trophyHunter }) => (
                  <Tooltip
                    key={stream.channel.display_name}
                    title={
                      <TooltipTitle
                        content={
                          <div>
                            <p>{stream.channel.status}</p>
                            <p>{stream.viewers} Viewers</p>
                            <img
                              src={`${stream.preview.medium}?timestamp=${Date.now()}`}
                              style={{ width: 320, height: 180 }}
                            />
                            <div style={{ width: 200, margin: '0 auto' }}>
                              <TrophyHunter
                                avoidPopover={true}
                                rankField="rank"
                                trophyHunters={[trophyHunter]}
                              />
                            </div>
                          </div>
                        }
                        title={stream.channel.display_name}
                      />
                    }
                  >
                    <IconButton
                      key={stream.channel.display_name}
                      onClick={event =>
                        this.handleClick(stream.channel.url, trophyHunter.userId, event)
                      }
                      style={{ width: 40, height: 40, margin: '4px 0', padding: 0, zIndex: 0 }}
                    >
                      <Avatar size={30} src={stream.channel.logo} />
                    </IconButton>
                  </Tooltip>
                ))}
              </HorizontalScroll>
            )}
            {twitchStreams.length === 0 && <span>No live stream found</span>}
          </div>
        </div>
      </div>
    );
  }
}

Twitch.propTypes = {
  twitchStreams: PropTypes.array,
  style: PropTypes.object,
  friends: PropTypes.array.isRequired
};

const TwitchContainer = withTracker(() => {
  Meteor.subscribe('twitch.streams.online');
  const onlineTwitchStreams = TwitchStreams.find().fetch();
  const twitchStreams =
    onlineTwitchStreams && onlineTwitchStreams.sort((a, b) => b.stream.viewers - a.stream.viewers);

  return {
    twitchStreams
  };
})(Twitch);

const mapStateToProps = ({ account: { userId, trophyHunter } }) => {
  return { userId, friends: (trophyHunter && trophyHunter.friends) || [] };
};

export default connect(mapStateToProps)(TwitchContainer);
