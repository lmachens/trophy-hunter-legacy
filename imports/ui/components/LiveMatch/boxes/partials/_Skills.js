import React, { PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import { MenuItem } from '../../../generic/MenuItem';
import PropTypes from 'prop-types';
import { Select } from '../../../generic/Select';
import { Skill } from './_Skill';
import { bindActionCreators } from 'redux';
import champions from '/imports/shared/riot-api/champions.ts';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { fetchChampionStatsIfNeeded, setUIState } from '../../../../../store/actions';
import get from 'lodash.get';

const styles = {
  skills: {
    textAlign: 'center'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 2px',
    height: 16
  },
  table: {
    fontSize: 'xx-small',
    borderSpacing: '3px 0',
    marginTop: 4
  },
  image: {
    width: 16,
    height: 16,
    verticalAlign: 'sub'
  },
  col: {
    width: 18
  },
  winRate: {
    color: '#89f5a2'
  }
};

const defaultStats = {
  count: 0,
  wins: 0,
  winRate: 0,
  order: []
};
const skills = ['highestCount', 'highestWinrate'];
class Skills extends PureComponent {
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
    const { skill, championId, classes, championStats = {}, role } = this.props;
    const roleStats = championStats[role];
    const skillOrderStats =
      (roleStats && roleStats.skillOrder && roleStats.skillOrder[skill]) || defaultStats;
    const champion = champions[championId];
    if (!champion) return null;

    return (
      <div className={classes.skills}>
        <div className={classes.top}>
          <Typography variant="caption">
            <span className={classes.winRate}> {(skillOrderStats.winRate * 100).toFixed(2)}% </span>
            Win Rate | <span className={classes.winRate}>{skillOrderStats.count} </span>
            Games
          </Typography>
          <Select name="skill" onChange={this.handleChange} value={skill}>
            <MenuItem value={skills[0]}>Most Frequent</MenuItem>
            <MenuItem value={skills[1]}>Highest Win Rate</MenuItem>
          </Select>
        </div>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>{champion.passive && <Skill isPassive={true} skill={champion.passive} />}</th>
              {[...Array(18)].map((x, i) => (
                <th className={classes.col} key={i + 1}>
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['Q', 'W', 'E', 'R'].map((char, index) => (
              <tr key={char}>
                <td>
                  <Skill skill={champion.spells[index]} />
                </td>
                {[...Array(18)].map((x, i) => (
                  <td className={classes.col} key={`${char}${i + 1}`}>
                    {skillOrderStats.order[i] === char ? char : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
  championId: PropTypes.number,
  role: PropTypes.string,
  championStats: PropTypes.object,
  fetchChampionStatsIfNeeded: PropTypes.func.isRequired,
  setUIState: PropTypes.func.isRequired,
  skill: PropTypes.string
};

const mapStateToProps = ({
  uiStates,
  championStatsByChampionId,
  liveMatch: { firstTeamTarget }
}) => {
  if (!firstTeamTarget) return { skill: uiStates.skill };
  const championId = firstTeamTarget.championId;
  const championStats = get(championStatsByChampionId, `${championId}.stats`) || {};

  return {
    championStats,
    championId: firstTeamTarget.championId,
    role: firstTeamTarget.role,
    skill: uiStates.skill
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
)(Skills);

export { enhanced as Skills };
