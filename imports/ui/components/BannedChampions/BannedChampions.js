import React from 'react';
import { Avatar, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import champions from '../../../api/riot-api/static/champions';
import { getChampionSquare } from '../../../api/riot-api/staticData';

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block'
  },
  champion: {
    filter: 'grayscale(100%)',
    width: 30,
    height: 30
  },
  banned: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 1
  }
};

const BannedChampions = ({ bannedChampions }) => (
  <div>
    {bannedChampions
      .filter(bannedChampion => bannedChampion.championId > 0)
      .map(bannedChampion => {
        const champion = champions[bannedChampion.championId];
        const avatarSrc = champion ? getChampionSquare({ champion }) : '';

        return (
          <Tooltip key={bannedChampion.championId} title={champion && champion.name}>
            <div style={styles.container}>
              <div style={styles.banned}>X</div>
              <Avatar src={avatarSrc} style={styles.champion} />
            </div>
          </Tooltip>
        );
      })}
  </div>
);

BannedChampions.propTypes = {
  bannedChampions: PropTypes.array.isRequired
};

export default BannedChampions;
