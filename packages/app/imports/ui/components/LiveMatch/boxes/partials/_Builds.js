import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';
import { IconButton } from '@material-ui/core';
import { HardwareKeyboardArrowLeftIcon, HardwareKeyboardArrowRightIcon } from '../../../icons';
import { Item } from './_Item';
import { MenuItem } from '../../../generic/MenuItem';
import PropTypes from 'prop-types';
import { Select } from '../../../generic/Select';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { fetchChampionStatsIfNeeded, setUIState } from '../../../../../store/actions';
import get from 'lodash.get';
import universeTheme from '../../../../layouts/universeTheme';

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
  },
  flex: {
    flex: 1
  },
  leftArrow: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    padding: 0,
    height: 24,
    width: 24,
    color: universeTheme.palette.textColor
  },
  rightArrow: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    padding: 0,
    height: 24,
    width: 24,
    color: universeTheme.palette.textColor
  }
};

const defaultStats = {
  count: 0,
  wins: 0,
  winRate: 0,
  items: []
};
const ranges = ['2-12', '12-22', '22-32', '32-42', '42-52'];
const builds = ['highestCount', 'highestWinrate'];
class Builds extends PureComponent {
  state = {
    range: ranges[0]
  };

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
    const itemsStats = (roleStats && roleStats.items && roleStats.items[build]) || {
      '2-12': [],
      '12-22': [],
      '22-32': [],
      '32-42': [],
      '42-52': []
    };

    return (
      <div className={classes.items}>
        <div className={classes.top}>
          <div className={classes.flex}></div>
          <Select name="build" onChange={this.handleChange} value={build}>
            <MenuItem value={builds[0]}>Most Frequent</MenuItem>
            <MenuItem value={builds[1]}>Highest Win Rate</MenuItem>
          </Select>
        </div>
        <div>
          <Typography variant="caption" component="div">
            Starters Build:
            <span className={classes.winRate}> {(firstItemsStats.winRate * 100).toFixed(2)}% </span>
            Win Rate | <span className={classes.winRate}>{firstItemsStats.count} </span>
            Games
          </Typography>
          {firstItemsStats.items.map((item, index) => {
            return <Item key={index} itemId={item} />;
          })}
        </div>
        <div>
          <Typography variant="caption" component="div">
            Good Items between {this.state.range} minutes:
          </Typography>
          <IconButton
            onClick={() => {
              this.setState({
                range:
                  ranges.indexOf(this.state.range) === 0
                    ? ranges[ranges.length - 1]
                    : ranges[ranges.indexOf(this.state.range) - 1]
              });
            }}
            style={styles.leftArrow}
          >
            <HardwareKeyboardArrowLeftIcon />
          </IconButton>
          {itemsStats[this.state.range].map((item, index) => {
            return <Item key={index} itemId={item.itemId} />;
          })}
          <IconButton
            onClick={() => {
              this.setState({
                range:
                  ranges.indexOf(this.state.range) >= ranges.length - 1
                    ? ranges[0]
                    : ranges[ranges.indexOf(this.state.range) + 1]
              });
            }}
            style={styles.rightArrow}
          >
            <HardwareKeyboardArrowRightIcon />
          </IconButton>
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
