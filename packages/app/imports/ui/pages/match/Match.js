import React, { Component } from 'react';
import {
  gameQueueConfigIdLabels,
  matchedMatchModes
} from '/imports/shared/riot-api/gameConstants.ts';

import { Button } from '../../components/generic';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { OpenInNewIcon } from '../../components/icons';
import PropTypes from 'prop-types';
import Timeline from '../../components/Timeline';
import TrophiesObtained from '../../components/TrophiesObtained';
import champions from '/imports/shared/riot-api/champions.ts';
import extendMatchResult from '/imports/shared/matches/extendMatchResult/index.ts';
import moment from 'moment';
import universeTheme from '../../layouts/universeTheme';
import { getMatchWithTimeline } from '/imports/shared/th-api/index.ts';

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
    padding: '2px'
  }
};

class Match extends Component {
  state = {
    extendedMatchResult: null,
    matchWithTimeline: null,
    noData: false
  };

  UNSAFE_componentWillMount() {
    this.updateMatchWithTimeline(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { matchId } = nextProps;
    if (this.props.matchId !== matchId) {
      this.setState({
        extendedMatchResult: null,
        matchWithTimeline: null,
        noData: false
      });
      this.updateMatchWithTimeline(nextProps);
    }
  }

  updateMatchWithTimeline({ matchId, platformId, summonerId, summonerName }) {
    matchId = parseInt(matchId);
    summonerId = parseInt(summonerId) || summonerId;
    getMatchWithTimeline({ platformId, matchId })
      .then(result => {
        const extendedMatchResult = extendMatchResult({
          matchResult: result,
          summonerId,
          summonerName
        });

        this.setState({
          matchWithTimeline: result,
          extendedMatchResult: extendedMatchResult
        });
      })
      .catch(() => {
        this.setState({
          extendedMatchResult: null,
          matchWithTimeline: null,
          noData: true
        });
      });
  }

  render() {
    const { extendedMatchResult, noData } = this.state;

    if (!extendedMatchResult) {
      return (
        <div style={{ height: '100px' }}>{noData ? 'No data available' : <LoadingComponent />}</div>
      );
    }

    const championId = extendedMatchResult.participant.championId;
    const champion = champions[championId];
    const backgroundStyle = Object.assign(
      {
        backgroundImage: champion
          ? `url(//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_1.jpg)`
          : '',
        filter: universeTheme.boxBackground.filter,
        opacity: universeTheme.boxBackground.opacity
      },
      styles.background
    );

    return (
      <div style={styles.container}>
        <div style={backgroundStyle} />
        <div style={styles.foreground}>{this.renderMatch()}</div>
      </div>
    );
  }

  handleParticipantSelect = participantId => {
    const { extendedMatchResult, matchWithTimeline } = this.state;

    const participantIdenty = extendedMatchResult.participantIdentities.find(identity => {
      return identity.participantId === participantId;
    });
    const newExtendedMatchResult = extendMatchResult({
      matchResult: matchWithTimeline,
      summonerId: participantIdenty.player.summonerId,
      summonerName: participantIdenty.player.summonerName
    });
    this.setState({
      extendedMatchResult: newExtendedMatchResult
    });
  };

  isMatched = () => {
    const { matchWithTimeline } = this.state;
    return matchWithTimeline && matchedMatchModes.includes(matchWithTimeline.queueId);
  };

  renderMatch() {
    const { extendedMatchResult, matchWithTimeline, noData } = this.state;

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h2>{this.renderOutcome()}</h2>
          {this.renderGameType()}
          <div style={{ marginTop: '5px', height: 62 }}>
            {this.isMatched() ? (
              <TrophiesObtained extendedMatchResult={extendedMatchResult} />
            ) : (
              <span>Trophies are not obtainable for this game mode.</span>
            )}
          </div>
        </div>
        {matchWithTimeline ? (
          <Timeline
            extendedMatchResult={extendedMatchResult}
            matchWithTimeline={matchWithTimeline}
            onParticipantSelect={this.handleParticipantSelect}
          />
        ) : (
          <div style={{ margin: '30px', fontSize: 'large', textAlign: 'center' }}>
            {noData ? 'No data available' : <LoadingComponent />}
          </div>
        )}
      </div>
    );
  }

  renderOutcome() {
    const { extendedMatchResult } = this.state;
    if (!extendedMatchResult) {
      return 'Unknown';
    }

    const { summonerName } = extendedMatchResult.participantIdentity.player;
    const { win } = extendedMatchResult.participant.stats;
    return (
      <span>
        {summonerName}{' '}
        <span style={{ color: universeTheme.palette[win ? 'win' : 'loss'] }}>
          {win ? 'won' : 'lost'}!
        </span>
      </span>
    );
  }

  renderGameType() {
    const { matchWithTimeline } = this.state;
    const startedAt = moment(matchWithTimeline.gameCreation).format('DD/MM/YYYY - hh:mma');
    const duration = matchWithTimeline.gameDuration || 0;
    let minutes = Math.floor(duration / 60);
    if (minutes < 10) minutes = `0${minutes}`;
    let seconds = Math.floor(duration - minutes * 60);
    if (seconds < 10) seconds = `0${seconds}`;

    return (
      <div>
        {gameQueueConfigIdLabels[matchWithTimeline.queueId || 0]} | {startedAt}
        {duration && (
          <span>
            {' '}
            | {minutes}:{seconds}
          </span>
        )}
      </div>
    );
  }
}

Match.propTypes = {
  platformId: PropTypes.string.isRequired,
  matchId: PropTypes.string.isRequired,
  summonerName: PropTypes.string.isRequired
};

export default Match;
