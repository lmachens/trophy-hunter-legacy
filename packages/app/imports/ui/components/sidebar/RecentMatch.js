import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import GameSessions from '../../../api/game-sessions/gameSessions';
import HorizontalScroll from '../generic/HorizontalScroll';
import HoverableBorder from '../HoverableBorder';
import LoadingComponent from '../loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import Trophy from '../Trophy';
import champions from '/imports/shared/riot-api/champions.ts';
import { connect } from 'react-redux';
import { gameQueueConfigIdLabels } from '/imports/shared/riot-api/gameConstants.ts';
import { getSetting } from '../../../api/trophy-hunters/helpers';
import trophies from '/imports/shared/trophies/index.ts';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  background: {
    position: 'absolute',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }
};

class RecentMatch extends Component {
  componentDidUpdate(prevProps) {
    const { history, recentMatch, settings } = this.props;
    if (
      prevProps.recentMatch &&
      prevProps.recentMatch.checkedStatus === 'pending' &&
      recentMatch &&
      recentMatch.checkedStatus === 'checked'
    ) {
      if (!getSetting({ settings }, 'matchResults', 'avoidOpenWhenAnalysed')) {
        console.log('open analysed match');
        if (recentMatch.summonerName) {
          history.push(
            `/game/${recentMatch.game.platformId}/${recentMatch.game.gameId}/${recentMatch.summonerName}`
          );
        } else {
          history.push(
            `/match/${recentMatch.game.platformId}/${recentMatch.game.gameId}/${recentMatch.summonerId}`
          );
        }
      } else {
        console.log('do not open analysed match');
      }
    }
  }

  handleClick = event => {
    const { recentMatch } = this.props;
    if (recentMatch && recentMatch.checkedStatus === 'checked') {
      return;
    }
    event.preventDefault();

    if (recentMatch && recentMatch.checkedStatus === 'failed') {
      Meteor.call('restartJob', recentMatch._id);
    }
  };

  render() {
    const { loading, recentMatch, location } = this.props;

    let backgroundStyle;
    if (!loading && recentMatch) {
      const champion = champions[recentMatch.championId];
      backgroundStyle = Object.assign(
        {
          backgroundImage: champion
            ? `url(//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_1.jpg)`
            : '',
          filter: universeTheme.boxBackground.filter,
          opacity: universeTheme.boxBackground.opacity
        },
        styles.background
      );
    }
    let link;
    if (recentMatch) {
      if (recentMatch.summonerName) {
        link = `/game/${recentMatch.game.platformId}/${recentMatch.game.gameId}/${recentMatch.summonerName}`;
      } else {
        link = `/match/${recentMatch.game.platformId}/${recentMatch.game.gameId}/${recentMatch.summonerId}`;
      }
    } else {
      link = location.pathname;
    }

    return (
      <Link onClick={this.handleClick} to={link}>
        <HoverableBorder
          backgroundStyle={backgroundStyle}
          containerStyle={{
            position: 'relative',
            height: 70,
            width: '100%'
          }}
          routes={[link]}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            textAlign: 'center'
          }}
        >
          {loading && <LoadingComponent />}
          {!loading && (
            <div>
              <span
                style={{
                  color: universeTheme.palette.secondaryTextColor,
                  fontSize: '11px',
                  marginBottom: '2px'
                }}
              >
                Recent Match
              </span>
              {!recentMatch && (
                <span style={{ color: universeTheme.palette.textColor }}>
                  <br />
                  No match found.
                  <br />
                  Play a match to get
                  <br />
                  recognition by the app.
                </span>
              )}
              {recentMatch && (
                <span style={{ color: universeTheme.palette.textColor }}>
                  {this.renderQueue()}
                  {recentMatch.checkedStatus === 'checked' && this.renderChecked()}
                  {recentMatch.checkedStatus === 'matchInProgress' && this.renderInProgress()}
                  {recentMatch.checkedStatus === 'pending' && this.renderPending()}
                  {recentMatch.checkedStatus === 'failed' && this.renderFailed()}
                </span>
              )}
            </div>
          )}
        </HoverableBorder>
      </Link>
    );
  }

  renderChecked() {
    const { recentMatch, trophiesObtained } = this.props;

    const allTrophiesObtainedIcons = recentMatch.getSortedTrophyObtained().map(trophyObtained => {
      const trophy = trophies[trophyObtained.name];
      if (!trophy) {
        return <span key={trophyObtained.name} />;
      }
      const { newInTree, isNew } = trophyObtained;

      let badge;
      if (newInTree && isNew) {
        badge = 'firstTimeAndActiveQuest';
      } else if (newInTree) {
        badge = 'activeQuest';
      } else if (isNew) {
        badge = 'firstTime';
      }
      const obtained = trophiesObtained.find(t => t.name === trophy.name);

      return (
        <Trophy
          badge={badge}
          iconStyle={{ width: 18, height: 18 }}
          key={`recent-match-${trophy.name}`}
          obtainedCount={obtained ? obtained.count : 0}
          showPoints={true}
          style={{ margin: '0 4px', padding: 2, width: 18, height: 18 }}
          trophy={trophy}
        />
      );
    });

    return (
      <div>
        {recentMatch.features && Object.keys(recentMatch.features).length && this.renderStats()}
        <HorizontalScroll key={recentMatch._id} leftStyle={{ top: 0 }} rightStyle={{ top: 0 }}>
          {allTrophiesObtainedIcons}
        </HorizontalScroll>
      </div>
    );
  }

  renderStats() {
    const { recentMatch } = this.props;
    const { kills, deaths, assists } = recentMatch.features;

    return (
      <div>
        {kills}/{deaths}/{assists} KDA +{recentMatch.trophyPoints} TP
      </div>
    );
  }

  renderInProgress() {
    return <div>In Progress</div>;
  }

  renderPending() {
    return <div>Pending...</div>;
  }

  renderFailed() {
    return <div>Failed</div>;
  }

  renderQueue() {
    const { recentMatch } = this.props;

    return (
      <div>{gameQueueConfigIdLabels[recentMatch.game.gameQueueConfigId] || 'Custom Match'}</div>
    );
  }
}

RecentMatch.propTypes = {
  loading: PropTypes.bool,
  recentMatch: PropTypes.object,
  trophiesObtained: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const RecentMatchContainer = withTracker(({ userId }) => {
  const gameSessionsHandle = Meteor.subscribe('gameSessions.recentMatch');

  const loading = !gameSessionsHandle.ready();
  const recentMatch = GameSessions.findOne(
    {
      userId
    },
    { sort: { createdAt: -1 } }
  );

  return {
    loading,
    recentMatch
  };
})(RecentMatch);

const mapStateToProps = ({ account: { userId, trophyHunter } }) => {
  return {
    userId,
    trophiesObtained: (trophyHunter && trophyHunter.trophiesObtained) || [],
    settings: (trophyHunter && trophyHunter.settings) || {}
  };
};

export default connect(mapStateToProps)(withRouter(RecentMatchContainer));
