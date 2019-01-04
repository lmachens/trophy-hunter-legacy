import React, { Component } from 'react';

import DamageComposition from '../DamageComposition';
import PropTypes from 'prop-types';
import SummonerDetails from './SummonerDetails';
import champions from '/imports/shared/riot-api/static/champions.ts';
import get from 'lodash.get';
import { getRole } from './helpers';
import isEqual from 'lodash.isequal';
import { withChampionStats } from '../../hocs/withChampionStats';

const styles = {
  root: {
    textAlign: 'left',
    width: 225,
    fontSize: 'small',
    position: 'absolute'
  },
  barStyle: {
    margin: '4px 0',
    width: 'calc(100% - 70px)'
  },
  secondTeam: {
    right: 170
  }
};

class TeamPreview extends Component {
  state = {
    damageParticipants: []
  };

  UNSAFE_componentWillMount() {
    this.updateState(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState({ firstTeam, team, championStatsByChampionId }) {
    const damageParticipants = team
      .filter(participant => participant.championId || participant.championPickIntent)
      .map(participant => {
        const selectedChampionId = participant.championId || participant.championPickIntent;
        const champion = champions[selectedChampionId];
        const championStats = get(championStatsByChampionId, `${selectedChampionId}.stats`) || {};
        const roleStats = championStats[getRole(championStats)];
        return {
          championId: champion.id,
          roleStats
        };
      });

    this.setState({
      damageParticipants,
      firstTeam,
      team
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  render() {
    const { selectedCellId, onClick } = this.props;
    const { damageParticipants, firstTeam, team } = this.state;

    return (
      <div style={styles.root}>
        <DamageComposition
          barStyle={styles.barStyle}
          participants={damageParticipants}
          style={!firstTeam ? styles.secondTeam : {}}
          title={`Team ${firstTeam ? 1 : 2} Damage`}
        />
        {team.map(participant => (
          <SummonerDetails
            key={participant.cellId}
            onClick={onClick}
            participant={participant}
            selected={selectedCellId === participant.cellId}
          />
        ))}
      </div>
    );
  }
}

TeamPreview.propTypes = {
  team: PropTypes.array.isRequired,
  firstTeam: PropTypes.bool.isRequired,
  championStatsByChampionId: PropTypes.object.isRequired,
  selectedCellId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default withChampionStats(TeamPreview);
