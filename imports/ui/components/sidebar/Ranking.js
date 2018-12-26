import React, { PureComponent } from 'react';

import HoverableBorder from './HoverableBorder';
import { JoinClient } from 'meteor-publish-join';
import { Link } from 'react-router-dom';
import LoadingComponent from '../loading/LoadingComponent';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { SEASONS, fieldsBySeason } from '../../../api/ranking/seasons';
import TrophyHunter from '../trophy-hunter/TrophyHunter';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

const limit = 30;

class Ranking extends PureComponent {
  render() {
    const { trophyHunters, season } = this.props;
    const field = fieldsBySeason[season];
    const link = `/ranking?season=${season}&limit=${limit}&skip=${
      trophyHunters && trophyHunters.length
        ? trophyHunters[0][field] - (trophyHunters[0][field] % limit)
        : 0
    }`;
    return (
      <Link to={link}>
        <div>
          {!trophyHunters && <LoadingComponent />}
          {trophyHunters && trophyHunters.length ? (
            this.renderRanking()
          ) : (
            <div style={{ textAlign: 'center', marginBottom: '2px' }}>
              Click to visit the ranking
            </div>
          )}
        </div>
      </Link>
    );
  }

  renderRank(rankTrophyHunter) {
    const { season } = this.props;
    if (!rankTrophyHunter) {
      return;
    }

    return (
      <div key={rankTrophyHunter.userId} style={{ margin: '2px' }}>
        <TrophyHunter
          avoidPopover={true}
          rankField={fieldsBySeason[season]}
          trophyHunters={[rankTrophyHunter]}
        />
      </div>
    );
  }

  renderRanking() {
    const { trophyHunters } = this.props;

    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, width: '100%' }}>
          {this.renderRank(trophyHunters[0])}
          {this.renderRank(trophyHunters[1])}
          {this.renderRank(trophyHunters[2])}
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  trophyHunters: PropTypes.array,
  season: PropTypes.string.isRequired
};

const RankingContainer = withTracker(({ season }) => {
  Meteor.subscribe('trophyHunters.private.ranking', season);
  const trophyHunters = JoinClient.get(`trophyHuntersRanking${season}`);

  return {
    trophyHunters
  };
})(Ranking);

class RankingSelector extends PureComponent {
  state = {
    season: SEASONS.S8
  };

  handleClick = season => event => {
    event.preventDefault();
    this.setState({
      season
    });
  };

  render() {
    const { season } = this.state;
    return (
      <HoverableBorder routes={['/ranking']}>
        <span
          style={{
            textAlign: 'center',
            color: universeTheme.palette.secondaryTextColor,
            fontSize: '11px',
            marginBottom: '2px'
          }}
        >
          <span
            onClick={this.handleClick(SEASONS.S8)}
            style={{
              cursor: 'pointer',
              marginRight: 3,
              color:
                universeTheme.palette[season === SEASONS.S8 ? 'secondaryTextColor' : 'textColor']
            }}
          >
            S8
          </span>
          <span
            onClick={this.handleClick(SEASONS.ALLTIME)}
            style={{
              cursor: 'pointer',
              marginRight: 3,
              color:
                universeTheme.palette[
                  season === SEASONS.ALLTIME ? 'secondaryTextColor' : 'textColor'
                ]
            }}
          >
            All-Time
          </span>
          <span
            onClick={this.handleClick(SEASONS.TOURNAMENT1)}
            style={{
              cursor: 'pointer',
              color:
                universeTheme.palette[
                  season === SEASONS.TOURNAMENT1 ? 'secondaryTextColor' : 'textColor'
                ]
            }}
          >
            Trophy Hunt
          </span>
        </span>
        <RankingContainer season={season} />
      </HoverableBorder>
    );
  }
}

export default RankingSelector;
