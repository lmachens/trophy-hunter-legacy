import React, { Component } from 'react';
import { getBasicStats, getName } from '../../../api/trophy-hunters/helpers';

import AvatarWithStatus from '../AvatarWithStatus';
import Badges from '../Badges';
import { Button } from '../generic';
import FollowersChip from '../FollowersChip';
import { Link } from 'react-router-dom';
import LoadingComponent from '../loading/LoadingComponent';
import Matches from '../Matches';
import { Meteor } from 'meteor/meteor';
import Playstyle from '../playstyle/Playstyle';
import PropTypes from 'prop-types';
import Rank from '../Rank';
import Trees from '../Trees';
import AllTrophies from '../AllTrophies';
import TrophyHunters from '../../../api/trophy-hunters/trophyHunters';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  container: {
    height: '100%',
    position: 'relative'
  },
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  foreground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentBox: {
    overflowY: 'auto',
    flex: 1
  },
  header: {
    display: 'flex',
    margin: '10px'
  }
};

class Level extends Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.loading;
  }

  handleTwitchClick(url, userId, event) {
    event.preventDefault();
    window.open(url);
    Meteor.call('channelClick', userId);
  }

  render() {
    const { loading, tab, trophyHunter, userId } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }

    let title;
    let subtitle;
    if (trophyHunter) {
      title = getName(trophyHunter);
      subtitle = (
        <span>
          <Rank rank={trophyHunter.seasonRank} /> | {getBasicStats(trophyHunter)}
        </span>
      );
    } else {
      title = 'New Trophy Hunter';
      subtitle = 'No stats available';
    }

    const backgroundStyle = Object.assign(
      {
        backgroundImage:
          'url(//universe-meeps.leagueoflegends.com/v1/assets/images/factions/shadow-isles_splash.jpg)',
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );

    const items = [];
    const twitch = trophyHunter && trophyHunter.items.twitch;
    if (twitch && twitch.visible) {
      items.push(
        <a
          href="#"
          key="twitch"
          onClick={event =>
            this.handleTwitchClick(
              `https://www.twitch.tv/${twitch.name}`,
              trophyHunter.userId,
              event
            )
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/twitch_small.png"
            style={{ marginRight: '6px', height: '40px', width: '40px' }}
          />
        </a>
      );
    }
    const youTube = trophyHunter && trophyHunter.items.youTube;
    if (youTube && youTube.visible) {
      items.push(
        <a
          href={`https://www.youtube.com/${youTube.type}/${youTube.name}`}
          key="youTube"
          onClick={this.handleItemClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/youTube_small.png"
            style={{ marginRight: '6px', height: '40px', width: '40px' }}
          />
        </a>
      );
    }

    return (
      <div style={styles.container}>
        <div style={backgroundStyle} />
        <div style={styles.foreground}>
          <div style={styles.header}>
            <AvatarWithStatus style={{ margin: 5 }} trophyHunter={trophyHunter} />
            <div style={{ margin: '15px 5px', flex: 1 }}>
              <div style={{ color: universeTheme.palette.secondaryTextColor }}>
                {title}
                <Badges items={trophyHunter && trophyHunter.items} />
              </div>
              <div>{subtitle}</div>
            </div>
            <div style={{ paddingTop: 10 }}>
              {items}
              <FollowersChip
                followers={trophyHunter && trophyHunter.followers}
                style={{ display: 'inline-flex', verticalAlign: 'top' }}
              />
            </div>
          </div>
          <div style={{ clear: 'both' }}>
            <Link to={trophyHunter && userId ? `/profile/${trophyHunter.userId}/trees` : '/trees'}>
              <Button label="Trees" primary={tab === 'trees'} style={{ zIndex: 0 }} />
            </Link>
            <Link
              to={trophyHunter && userId ? `/profile/${trophyHunter.userId}/trophies` : '/trophies'}
            >
              <Button label="Trophies" primary={tab === 'trophies'} style={{ zIndex: 0 }} />
            </Link>
            <Link
              to={trophyHunter && userId ? `/profile/${trophyHunter.userId}/matches` : '/matches'}
            >
              <Button label="Matches" primary={tab === 'matches'} style={{ zIndex: 0 }} />
            </Link>
            <Link
              to={
                trophyHunter && userId ? `/profile/${trophyHunter.userId}/playstyle` : '/playstyle'
              }
            >
              <Button label="Playstyle" primary={tab === 'playstyle'} style={{ zIndex: 0 }} />
            </Link>
          </div>
          <div style={styles.contentBox}>
            {tab === 'trees' && <Trees trophyHunter={trophyHunter} />}

            {tab === 'trophies' && <AllTrophies trophyHunter={trophyHunter} />}

            {tab === 'matches' && <Matches trophyHunter={trophyHunter} userId={userId} />}
            {tab === 'playstyle' && <Playstyle trophyHunter={trophyHunter} userId={userId} />}
          </div>
        </div>
      </div>
    );
  }
}

Level.propTypes = {
  loading: PropTypes.bool,
  trophyHunter: PropTypes.object,
  iconStyle: PropTypes.object,
  userId: PropTypes.string,
  tab: PropTypes.string,
  style: PropTypes.object
};

const LevelContainer = withTracker(({ userId }) => {
  if (userId) {
    const trophyHuntersHandle = Meteor.subscribe('trophyHunters.public.details', userId);
    const loading = !trophyHuntersHandle.ready();
    if (loading) {
      return { loading };
    }
  } else {
    userId = Meteor.userId();
  }

  const trophyHunter = userId
    ? TrophyHunters.findOne({
        userId: userId
      })
    : undefined;

  return {
    trophyHunter
  };
})(Level);

export default LevelContainer;
