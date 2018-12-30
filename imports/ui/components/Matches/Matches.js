import { Avatar, List, ListItem } from '../generic';

import GameSessions from '../../../api/game-sessions/gameSessions';
import HelpBox from '../HelpBox';
import InfiniteScroll from 'react-infinite-scroller';
import { JoinClient } from 'meteor-publish-join';
import LoadingComponent from '../loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import Trophy from '../Trophy';
import champions from '../../../api/riot-api/static/champions';
import { gameQueueConfigIdLabels } from '../../../api/riot-api/gameConstants';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import moment from 'moment';
import { trophies } from '../../../api/trophies';
import universeTheme from '../../layouts/universeTheme';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

export class Matches extends React.Component {
  componentWillUnmount() {
    this.handle && this.handle.stop();
  }

  loadMore = page => {
    const { userId } = this.props;
    if (this.handle && !this.handle.ready()) {
      return;
    }

    const handle = Meteor.subscribe('gameSessions.public', userId, page);
    this.handle && this.handle.stop();
    this.handle = handle;
  };

  render() {
    const { count, lastMatches, loading } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }

    const matches = this.renderMatches();
    const hasMore = count > lastMatches.length;

    return (
      <List style={{ padding: '0px' }}>
        <div style={{ maxHeight: 558, overflowY: 'auto', overflowX: 'hidden' }}>
          <HelpBox>
            This section shows your last Trophy Hunter matches and your achieved trophies. Click on
            a match to see its details. We save matches of the last 2 months.
          </HelpBox>
          <InfiniteScroll
            hasMore={hasMore}
            loadMore={this.loadMore}
            loader={<div style={{ textAlign: 'center' }}>Loading ...</div>}
            pageStart={0}
            threshold={120}
            useWindow={false}
          >
            {matches}
          </InfiniteScroll>
        </div>
      </List>
    );
  }

  handleMatchClick = match => {
    const { history } = this.props;

    if (match.checkedStatus === 'failed') {
      Meteor.call('restartJob', match._id);
    } else if (match.checkedStatus === 'checked' && match.isMatched()) {
      history.push(`/match/${match.game.platformId}/${match.game.gameId}/${match.summonerId}`);
    }
  };

  getTrophiesObtained(match) {
    const { trophyHunter } = this.props;

    return match.getSortedTrophyObtained().map(trophyObtained => {
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
      const obtained =
        trophyHunter && trophyHunter.trophiesObtained.find(t => t.name === trophy.name);

      return (
        <Trophy
          badge={badge}
          key={trophy.name}
          obtainedCount={obtained ? obtained.count : 0}
          showPoints={true}
          trophy={trophy}
        />
      );
    });
  }

  renderMatches() {
    const { lastMatches } = this.props;
    let matches;
    if (lastMatches.length) {
      matches = lastMatches.map((match, index) => {
        const primaryText = `${gameQueueConfigIdLabels[match.game.gameQueueConfigId]} - ${moment(
          match.createdAt
        ).format('DD/MM/YYYY - hh:mma')}`;
        let secondaryText = '';
        const checkedStatus = match.checkedStatus;
        if (checkedStatus === 'checked') {
          if (match.isMatched()) {
            if (!match.features || !Object.keys(match.features).length) {
              secondaryText = 'No stats available';
            } else {
              const { kills, deaths, assists, wins } = match.features;
              let ratio = (kills + assists) / deaths;
              if (ratio === 'Infinity') {
                ratio = 'Perfect';
              } else if (ratio < 0) {
                ratio = '0.00';
              } else {
                ratio = ratio.toFixed(2) + ':1';
              }
              const outcomeColor = universeTheme.palette[wins ? 'win' : 'loss'];

              secondaryText = (
                <div style={{ height: 'initial' }}>
                  <span style={{ color: outcomeColor }}>{wins ? 'Win' : 'Loss'}</span> {kills}/
                  {deaths}/{assists} KDA +{match.trophyPoints} TP
                  <div style={{ margin: '0 -12px' }}>{this.getTrophiesObtained(match)}</div>
                </div>
              );
            }
          } else {
            secondaryText = 'Unranked match';
          }
        } else if (checkedStatus === 'pending') {
          secondaryText = 'Check pending';
        } else if (checkedStatus === 'matchInProgress') {
          secondaryText = 'Match in progress';
        } else if (checkedStatus === 'failed') {
          secondaryText = 'Check failed';
        }
        const champion = champions[match.championId];
        const avatarSrc = champion ? getChampionSquare({ champion }) : '';
        return (
          <ListItem
            disabled={
              !match.isMatched() ||
              (match.checkedStatus !== 'checked' && match.checkedStatus !== 'failed')
            }
            key={index}
            leftIcon={
              <Avatar size={35} src={avatarSrc} style={{ height: '35px', width: '35px' }} />
            }
            onClick={this.handleMatchClick.bind(this, match)}
            primaryText={primaryText}
            secondaryText={secondaryText}
            secondaryTextLines={2}
          />
        );
      });
    } else {
      matches = <div style={{ textAlign: 'center' }}>No match found</div>;
    }
    return matches;
  }
}

Matches.propTypes = {
  count: PropTypes.number,
  loading: PropTypes.bool,
  lastMatches: PropTypes.array,
  trophyHunter: PropTypes.object,
  userId: PropTypes.string,
  history: PropTypes.object.isRequired
};

const MatchesContainer = withTracker(({ userId }) => {
  if (!userId) {
    userId = Meteor.userId();
  }
  let loading = false;
  let count = 0;
  if (userId) {
    Meteor.subscribe('gameSessions.count.public', userId);
    const gameSessionsHandle = Meteor.subscribe('gameSessions.public', userId);
    count = JoinClient.get(`numGameSessions${userId}`);
    loading = !gameSessionsHandle.ready();
    if (loading) {
      return { loading };
    }
  }

  const lastMatches = userId
    ? GameSessions.find({ userId: userId }, { sort: { createdAt: -1 } }).fetch()
    : [];

  return {
    count,
    loading,
    lastMatches,
    userId
  };
})(Matches);

export default withRouter(MatchesContainer);
