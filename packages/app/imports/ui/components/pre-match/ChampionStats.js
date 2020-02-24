import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import get from 'lodash.get';
import universeTheme from '../../layouts/universeTheme';
import { withChampionStats } from '../../hocs/withChampionStats';

const styles = {
  root: {
    textAlign: 'left',
    width: 225,
    fontSize: 'small',
    margin: 10,
    position: 'absolute',
    top: 55,
    left: 60,
    zIndex: 2
  },
  stats: {
    display: 'flex'
  },
  rate: {
    marginRight: 8
  }
};

const toPercent = value => `${(value * 100).toFixed(2)} %`;
class ChampionStats extends Component {
  state = {
    set: 'highestCount'
  };

  handleToggle = (event, isInputChecked) => {
    this.setState({
      set: isInputChecked ? 'highestCount' : 'highestWinrate'
    });
  };

  render() {
    const { champion, championStatsByChampionId, role } = this.props;
    const championStats = get(championStatsByChampionId, `${champion.id}.stats`) || {};
    const roleStats = championStats[role];

    return (
      <div style={styles.root}>
        <div style={styles.stats}>
          <Tooltip title="How often this champ wins">
            <div style={styles.rate}>
              <div>Win Rate</div>
              <div style={{ color: universeTheme.palette.primary1Color }}>
                {roleStats && toPercent(roleStats.winRate)}
              </div>
            </div>
          </Tooltip>
          <Tooltip title="How often this champ is picked/played">
            <div style={styles.rate}>
              <div>Play Rate</div>
              <div style={{ color: universeTheme.palette.primary1Color }}>
                {roleStats && toPercent(roleStats.playRate)}
              </div>
            </div>
          </Tooltip>
          <Tooltip title="How often this champ is banned">
            <div style={styles.rate}>
              <div>Ban Rate</div>
              <div style={{ color: universeTheme.palette.primary1Color }}>
                {roleStats && toPercent(roleStats.banRate)}
              </div>
            </div>
          </Tooltip>
        </div>
        <div style={styles.stats}>
          <Tooltip title="How often this champ achieves first blood">
            <div style={styles.rate}>
              <div>First Blood</div>
              <div style={{ color: universeTheme.palette.primary1Color }}>
                {roleStats && toPercent(roleStats.firstBloodKill)}
              </div>
            </div>
          </Tooltip>
          <Tooltip title="How often this champ achieves five kills before twelve minutes">
            <div style={styles.rate}>
              <div>Snowballing</div>
              <div style={{ color: universeTheme.palette.primary1Color }}>
                {roleStats && toPercent(roleStats.snowballKills)}
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    );
  }
}

ChampionStats.propTypes = {
  champion: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
  championStatsByChampionId: PropTypes.object.isRequired
};

export default withChampionStats(ChampionStats);
