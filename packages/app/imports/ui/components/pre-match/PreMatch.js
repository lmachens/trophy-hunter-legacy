import React, { Component } from 'react';

import ChampionGuide from './ChampionGuide';
import PropTypes from 'prop-types';
import TeamPreview from './TeamPreview';
import isEqual from 'lodash.isequal';
import pick from 'lodash.pick';

const styles = {
  container: {
    display: 'flex'
  },
  team: {
    width: 50,
    zIndex: 1
  },
  details: {
    flex: 1
  }
};

class PreMatch extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    const propTypes = Object.keys(PreMatch.propTypes);
    return (
      !isEqual(pick(this.props, propTypes), pick(nextProps, propTypes)) ||
      !isEqual(this.state, nextState)
    );
  }

  handleClick = cellId => {
    this.setState({ selectedCellId: cellId });
  };

  render() {
    const { localPlayerCellId, myTeam, theirTeam } = this.props;
    const { selectedCellId } = this.state;

    const selectedSummoner =
      (selectedCellId !== undefined && myTeam.find(player => player.cellId === selectedCellId)) ||
      theirTeam.find(player => player.cellId === selectedCellId);
    const mySummoner = myTeam.find(player => player.cellId === localPlayerCellId);
    const selectedChampionId =
      mySummoner &&
      ((selectedSummoner && (selectedSummoner.championId || selectedSummoner.championPickIntent)) ||
        mySummoner.championId ||
        mySummoner.championPickIntent);
    return (
      <div style={styles.container}>
        {selectedChampionId > 0 && (
          <div style={styles.team}>
            <TeamPreview
              firstTeam={true}
              onClick={this.handleClick}
              selectedCellId={selectedCellId !== undefined ? selectedCellId : localPlayerCellId}
              team={myTeam}
            />
          </div>
        )}
        <div style={styles.details}>
          <ChampionGuide championId={selectedChampionId} />
        </div>
        {selectedChampionId > 0 && (
          <div style={styles.team}>
            <TeamPreview
              firstTeam={false}
              onClick={this.handleClick}
              selectedCellId={selectedCellId || localPlayerCellId}
              team={theirTeam}
            />
          </div>
        )}
      </div>
    );
  }
}

PreMatch.propTypes = {
  //actions: PropTypes.array.isRequired,
  //bans: PropTypes.object.isRequired,
  //isSpectating: PropTypes.bool.isRequired,
  localPlayerCellId: PropTypes.number.isRequired,
  myTeam: PropTypes.array.isRequired,
  theirTeam: PropTypes.array.isRequired
};

export default PreMatch;
