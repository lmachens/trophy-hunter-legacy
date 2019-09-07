import React, { Component } from 'react';
import { fetchTrophyStats, fetchTrophyStatsIfNeeded } from '../../../store/actions';

import PropTypes from 'prop-types';
import { Refresh } from '../generic';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mapIdLabels } from '/imports/shared/riot-api/gameConstants.ts';
import champions from '/imports/shared/riot-api/champions.ts';

const styles = {
  stats: {
    minHeight: 90
  }
};

class TrophyStats extends Component {
  UNSAFE_componentWillMount() {
    const { fetchTrophyStatsIfNeeded, trophy } = this.props;
    fetchTrophyStatsIfNeeded(trophy.name);
  }

  componentDidUpdate(prevProps) {
    const { fetchTrophyStatsIfNeeded, trophy } = this.props;
    if (trophy.name !== prevProps.trophy.name) {
      fetchTrophyStatsIfNeeded(trophy.name);
    }
  }

  handleRefreshClick = e => {
    e.preventDefault();

    const { fetchTrophyStats, trophy } = this.props;
    fetchTrophyStats(trophy.name);
  };

  render() {
    const { trophyStatsByTrophyName, trophy, hideRefresh } = this.props;

    const { isFetching, lastUpdated, stats, error } = trophyStatsByTrophyName[trophy.name] || {
      isFetching: true
    };
    return (
      <div style={styles.stats}>
        <div>
          <p>
            Obtained {stats && stats.totalCount} times by {stats && stats.distinctTrophyHunters}{' '}
            Trophy Hunters.
          </p>
          <b>Success rate by map</b>{' '}
          {!hideRefresh && (
            <Refresh
              error={error}
              isRefreshing={isFetching}
              lastUpdated={lastUpdated}
              onClick={!isFetching ? this.handleRefreshClick : null}
            />
          )}
          {!stats && isFetching && <div>Loading...</div>}
          {stats &&
            stats.frequencyByMapId &&
            Object.entries(stats.frequencyByMapId).map(([mapId, frequency]) => (
              <div key={mapId}>
                {mapIdLabels[mapId]}:{' '}
                {(((frequency.count || 0) / frequency.checks) * 100).toFixed(2)} %
              </div>
            ))}
          {stats && stats.lastMatch && (
            <p>
              Recently obtained by {stats.lastMatch.summonerName} with{' '}
              {champions[stats.lastMatch.championId].name}.
            </p>
          )}
        </div>
      </div>
    );
  }
}

TrophyStats.propTypes = {
  fetchTrophyStats: PropTypes.func.isRequired,
  fetchTrophyStatsIfNeeded: PropTypes.func.isRequired,
  trophy: PropTypes.object,
  trophyStatsByTrophyName: PropTypes.object.isRequired,
  hideRefresh: PropTypes.bool
};

const mapStateToProps = ({ trophyStatsByTrophyName }) => {
  return {
    trophyStatsByTrophyName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrophyStats: bindActionCreators(fetchTrophyStats, dispatch),
    fetchTrophyStatsIfNeeded: bindActionCreators(fetchTrophyStatsIfNeeded, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrophyStats);
