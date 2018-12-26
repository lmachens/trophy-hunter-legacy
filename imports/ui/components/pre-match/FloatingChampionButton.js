import { Avatar, Badge, FloatingActionButton, IconButton } from '../generic';

import { CloseIcon } from '../icons';
import PropTypes from 'prop-types';
import React from 'react';
import champions from '../../../api/riot-api/static/champions';
import { getChampionSquare } from '../../../api/riot-api/staticData';

const styles = {
  floating: {
    position: 'fixed',
    right: -8,
    bottom: 70,
    zIndex: 10
  },
  badge: {
    top: 10,
    right: 10
  },
  champion: {
    border: '2px ridge #c4b998'
  }
};

const FloatingChampionButton = ({ localPlayerCellId, myTeam, onOpenClick, onCloseClick }) => {
  const mySummoner = myTeam.find(player => player.cellId === localPlayerCellId);
  if (!mySummoner) {
    return;
  }
  const { championId, championPickIntent } = mySummoner;
  const champion = champions[championId || championPickIntent];

  return (
    <Badge
      badgeContent={
        <IconButton onClick={onCloseClick}>
          <CloseIcon />
        </IconButton>
      }
      badgeStyle={styles.badge}
      primary={true}
      style={styles.floating}
    >
      <FloatingActionButton onClick={onOpenClick} style={styles.champion}>
        <Avatar size={56} src={getChampionSquare({ champion })} />
      </FloatingActionButton>
    </Badge>
  );
};

FloatingChampionButton.propTypes = {
  localPlayerCellId: PropTypes.number.isRequired,
  myTeam: PropTypes.array.isRequired,
  onOpenClick: PropTypes.func,
  onCloseClick: PropTypes.func
};

export default FloatingChampionButton;
