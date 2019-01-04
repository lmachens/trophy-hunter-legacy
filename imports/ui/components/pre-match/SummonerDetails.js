import React, { Component } from 'react';

import { Avatar } from '../generic';
import DamageComposition from '../DamageComposition';
import PropTypes from 'prop-types';
import champions from '/imports/shared/riot-api/static/champions.ts';
import get from 'lodash.get';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import { getRole } from './helpers';
import isEqual from 'lodash.isequal';
import { withChampionStats } from '../../hocs/withChampionStats';

const styles = {
  player: {
    marginTop: 10
  },
  barStyle: {
    width: 40
  },
  avatar: {
    border: `2px solid transparent`
  },
  clickable: {
    cursor: 'pointer'
  },
  selected: {
    border: '2px ridge #c4b998'
  }
};

class SummonerDetails extends Component {
  state = {
    champion: null,
    participants: []
  };

  UNSAFE_componentWillMount() {
    this.updateState(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState({ participant: { championId, championPickIntent }, championStatsByChampionId }) {
    const selectedChampionId = championId || championPickIntent;
    if (!selectedChampionId) return;

    const champion = champions[selectedChampionId];
    const championStats = get(championStatsByChampionId, `${selectedChampionId}.stats`) || {};
    const roleStats = championStats[getRole(championStats)];

    const participants = [
      {
        championId: champion.id,
        roleStats
      }
    ];
    this.setState({
      champion,
      participants
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  handleClick = () => {
    const { onClick, participant } = this.props;
    onClick(participant.cellId);
  };

  render() {
    const { selected } = this.props;
    const { champion, participants } = this.state;
    const avatarStyle = Object.assign(
      {},
      styles.avatar,
      champion ? styles.clickable : {},
      selected ? styles.selected : {}
    );
    return (
      <div style={styles.player}>
        <Avatar
          onClick={champion && this.handleClick}
          size={44}
          src={champion && getChampionSquare({ champion })}
          style={avatarStyle}
        />
        <DamageComposition
          barStyle={styles.barStyle}
          hideLegend={true}
          participants={participants}
        />
      </div>
    );
  }
}

SummonerDetails.propTypes = {
  participant: PropTypes.object.isRequired,
  championStatsByChampionId: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withChampionStats(SummonerDetails);
