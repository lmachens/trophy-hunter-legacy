import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import { HardwareKeyboardArrowRightIcon } from '../../../icons';
import { Item } from './_Item';
import { MenuItem } from '../../../generic/MenuItem';
import PropTypes from 'prop-types';
import { Select } from '../../../generic/Select';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { fetchChampionStatsIfNeeded, setUIState } from '../../../../../store/actions';
import get from 'lodash.get';

const styles = {
  items: {
    textAlign: 'center'
  },
  winRate: {
    color: '#89f5a2'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 2px',
    height: 16
  }
};

const defaultStats = {
  count: 0,
  wins: 0,
  winRate: 0,
  items: []
};
const builds = ['highestCount', 'highestWinrate'];
class Builds extends PureComponent {
  componentDidMount() {
    const { championId, fetchChampionStatsIfNeeded } = this.props;
    if (championId) fetchChampionStatsIfNeeded(championId);
  }

  componenDidUpdate(prevProps) {
    const { championId, fetchChampionStatsIfNeeded } = this.props;
    if (championId && championId !== prevProps.championId) fetchChampionStatsIfNeeded(championId);
  }

  handleChange = event => {
    this.props.setUIState({ [event.target.name]: event.target.value });
  };

  render() {
    const { build, classes, championStats = {}, role } = this.props;
    const roleStats = championStats[role];
    const firstItemsStats =
      (roleStats && roleStats.firstItems && roleStats.firstItems[build]) || defaultStats;
    const finalItemsStats =
      (roleStats && roleStats.finalItems && roleStats.finalItems[build]) || defaultStats;

    return (
      <div className={classes.items}>
        <div className={classes.top}>
          <Select name="build" onChange={this.handleChange} value={build}>
            <MenuItem value={builds[0]}>Most Frequent</MenuItem>
            <MenuItem value={builds[1]}>Highest Win Rate</MenuItem>
          </Select>
        </div>
        <div>
          <Typography variant="caption">
            Starters Build:
            <span className={classes.winRate}> {(firstItemsStats.winRate * 100).toFixed(2)}% </span>
            Win Rate | <span className={classes.winRate}>{firstItemsStats.count} </span>
            Games
          </Typography>
          {firstItemsStats.items.map((item, index) => {
            return (
              <span key={index}>
                {index > 0 && <HardwareKeyboardArrowRightIcon />}
                <Item itemId={item} />
              </span>
            );
          })}
        </div>
        <div>
          <Typography variant="caption">
            Completed Build:
            <span className={classes.winRate}> {(finalItemsStats.winRate * 100).toFixed(2)}% </span>
            Win Rate | <span className={classes.winRate}>{finalItemsStats.count} </span>
            Games
          </Typography>
          {finalItemsStats.items.map((item, index) => {
            return (
              <span key={index}>
                {index > 0 && <HardwareKeyboardArrowRightIcon />}
                <Item itemId={item} />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

Builds.propTypes = {
  classes: PropTypes.object.isRequired,
  championId: PropTypes.number,
  role: PropTypes.string,
  championStats: PropTypes.object,
  fetchChampionStatsIfNeeded: PropTypes.func.isRequired,
  setUIState: PropTypes.func.isRequired,
  build: PropTypes.string
};

const mapStateToProps = ({
  uiStates,
  championStatsByChampionId,
  liveMatch: { firstTeamTarget }
}) => {
  if (!firstTeamTarget) return { build: uiStates.build };
  const championId = firstTeamTarget.championId;
  const championStats = get(championStatsByChampionId, `${championId}.stats`) || {};

  return {
    championStats,
    championId,
    role: firstTeamTarget.role,
    build: uiStates.build
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChampionStatsIfNeeded: bindActionCreators(fetchChampionStatsIfNeeded, dispatch),
    setUIState: bindActionCreators(setUIState, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Builds);

export { enhanced as Builds };
