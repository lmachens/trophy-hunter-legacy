import compose from 'recompose/compose';
import React, { PureComponent } from 'react';
import { gameQueueConfigIdLabels, mapIdLabels } from '/imports/shared/riot-api/gameConstants.ts';
import { connect } from 'react-redux';
import { BannedChampions } from './_BannedChampions';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '../../../generic';

const styles = {
  container: {
    display: 'flex'
  },
  mode: {
    flex: 1,
    textAlign: 'center'
  }
};

class General extends PureComponent {
  render() {
    const {
      classes,
      bannedChampionsTeam1,
      bannedChampionsTeam2,
      mapId,
      gameQueueConfigId = 0
    } = this.props;
    return (
      <div className={classes.container}>
        <BannedChampions bannedChampions={bannedChampionsTeam1} />
        <div className={classes.mode}>
          <Typography>{gameQueueConfigIdLabels[gameQueueConfigId]}</Typography>
          <Typography color="secondary">{mapIdLabels[mapId]}</Typography>
        </div>
        <BannedChampions bannedChampions={bannedChampionsTeam2} />
      </div>
    );
  }
}

General.propTypes = {
  classes: PropTypes.object.isRequired,
  mapId: PropTypes.number,
  gameQueueConfigId: PropTypes.number,
  bannedChampionsTeam1: PropTypes.array,
  bannedChampionsTeam2: PropTypes.array
};

const mapStateToProps = ({ liveMatch: { mapId, gameQueueConfigId, bannedChampions = [] } }) => {
  const bannedChampionsTeam1 = bannedChampions.filter(champion => champion.teamId === 100);
  const bannedChampionsTeam2 = bannedChampions.filter(champion => champion.teamId === 200);
  return {
    mapId,
    gameQueueConfigId,
    bannedChampionsTeam1,
    bannedChampionsTeam2
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(mapStateToProps)
)(General);

export { enhanced as General };
