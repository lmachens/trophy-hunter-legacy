import { getChampionSquare, getPerkImage, getUnknown } from '../../../api/riot-api/staticData';

import AvatarWithStatus from '../AvatarWithStatus';
import Items from '../Items';
import PropTypes from 'prop-types';
import React from 'react';
import Spells from '../Spells';
import extendMatchResult from '../../../api/matches/extendMatchResult';
import perks from '../../../api/riot-api/static/perks';
import universeTheme from '../../layouts/universeTheme';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    color: universeTheme.palette.primary1Color
  },
  image: {
    width: 30,
    height: 30
  },
  champion: {
    margin: 4,
    width: 30
  },
  trophyHunter: {
    margin: 4,
    width: 30
  },
  rank: {
    margin: '4px 4px 4px 10px',
    width: 60
  },
  kda: {
    margin: 4,
    width: 60
  },
  gold: {
    margin: 4,
    width: 60
  },
  keystone: {
    margin: 4,
    width: 60
  },
  build: {
    margin: 4,
    width: 196
  },
  spells: {
    margin: 4,
    width: 56
  }
};

export const MatchHeader = () => (
  <div style={Object.assign({}, styles.root, styles.header)}>
    <div style={styles.champion} />
    <div style={styles.trophyHunter} />
    <div style={styles.rank}>Rank</div>
    <div style={styles.kda}>K/D/A</div>
    <div style={styles.gold}>Gold</div>
    <div style={styles.keystone}>Keystone</div>
    <div style={styles.build} />
    <div style={styles.spells} />
  </div>
);

const Match = ({ match, trophyHunter }) => {
  const { participant } = extendMatchResult(null, match, trophyHunter.summonerId);
  const perk = perks[participant.stats.perk0];
  return (
    <div style={styles.root}>
      <div style={styles.champion}>
        <img src={getChampionSquare({ championId: participant.championId })} style={styles.image} />
      </div>
      <div style={styles.trophyHunter}>
        <AvatarWithStatus hideStatus size={30} trophyHunter={trophyHunter} />
      </div>
      <div style={styles.rank}>{trophyHunter.seasonRank}</div>
      <div style={styles.kda}>
        {participant.stats.kills}/{participant.stats.deaths}/{participant.stats.assists}
      </div>
      <div style={styles.gold}>{participant.stats.goldEarned}</div>
      <div style={styles.keystone}>
        <img
          src={perk && perk.icon ? getPerkImage(perk.icon) : getUnknown()}
          style={styles.image}
        />
      </div>
      <div style={styles.build}>
        <Items stats={participant.stats} />
      </div>
      <div style={styles.spells}>
        <Spells participant={participant} />
      </div>
    </div>
  );
};

Match.propTypes = {
  match: PropTypes.object.isRequired,
  trophyHunter: PropTypes.object.isRequired
};

export default Match;
