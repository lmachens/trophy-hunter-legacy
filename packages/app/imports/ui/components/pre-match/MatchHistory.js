import Match, { MatchHeader } from './Match';
import React, { PureComponent } from 'react';
import { fetchChampionMatches, fetchChampionMatchesIfNeeded } from '../../../store/actions';

import PropTypes from 'prop-types';
import { Refresh } from '../generic';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
  title: {
    margin: 4
  },
  matches: {
    overflow: 'auto',
    maxHeight: 222
  },
  refresh: {
    position: 'absolute',
    top: 4,
    right: 210
  }
};

class MatchHistory extends PureComponent {
  UNSAFE_componentWillMount() {
    const { fetchChampionMatchesIfNeeded, championId } = this.props;
    if (championId) fetchChampionMatchesIfNeeded(championId);
  }

  componentDidUpdate(prevProps) {
    const { fetchChampionMatchesIfNeeded, championId } = this.props;
    if (championId !== prevProps.championId && championId) {
      fetchChampionMatchesIfNeeded(championId);
    }
  }

  handleRefreshClick = e => {
    e.preventDefault();

    const { fetchChampionMatches, championId } = this.props;
    if (championId) fetchChampionMatches(championId);
  };

  render() {
    const { championMatchesByChampionId, championId, style } = this.props;
    const { isFetching, lastUpdated, matches, error } = championMatchesByChampionId[championId] || {
      isFetching: true
    };

    return (
      <div style={style}>
        <div style={styles.title}>Trophy Hunter History</div>
        <div style={styles.matches}>
          <MatchHeader />
          <div style={styles.refresh}>
            <Refresh
              error={error}
              isRefreshing={isFetching}
              lastUpdated={lastUpdated}
              onClick={!isFetching ? this.handleRefreshClick : null}
            />
          </div>
          {!isFetching && (!matches || matches.length === 0) && 'Not matches found'}
          {matches &&
            matches.map(({ match, trophyHunter }) => (
              <Match
                key={`${match.gameId}-${trophyHunter._id}`}
                match={match}
                trophyHunter={trophyHunter}
              />
            ))}
        </div>
      </div>
    );
  }
}

MatchHistory.propTypes = {
  championId: PropTypes.number,
  style: PropTypes.object,
  championMatchesByChampionId: PropTypes.object.isRequired,
  fetchChampionMatches: PropTypes.func.isRequired,
  fetchChampionMatchesIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = ({ championMatchesByChampionId }) => {
  return {
    championMatchesByChampionId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChampionMatches: bindActionCreators(fetchChampionMatches, dispatch),
    fetchChampionMatchesIfNeeded: bindActionCreators(fetchChampionMatchesIfNeeded, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchHistory);
