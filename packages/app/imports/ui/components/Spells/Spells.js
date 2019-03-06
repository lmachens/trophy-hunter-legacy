import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from '../generic/Tooltip';
import { getSummonerSpell } from '../../../api/riot-api/staticData';
import summonerSpells from '/imports/shared/riot-api/summonerSpells.ts';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  spell: {
    width: '24px',
    marginRight: '4px'
  }
};

const Spells = ({ participant }) => {
  const spell1 = summonerSpells[participant.spell1Id.toString()];
  const spell2 = summonerSpells[participant.spell2Id.toString()];
  if (!spell1 || !spell2) {
    return;
  }
  const spell1Img = spell1.image.full;
  const spell1Src = getSummonerSpell(`${spell1Img}`);
  const spell2Img = spell2.image.full;
  const spell2Src = getSummonerSpell(`${spell2Img}`);

  return (
    <div>
      <Tooltip title={<TooltipTitle content={spell1.description} title={spell1.name} />}>
        <img src={spell1Src} style={styles.spell} />
      </Tooltip>
      <Tooltip title={<TooltipTitle content={spell2.description} title={spell2.name} />}>
        <img src={spell2Src} style={styles.spell} />
      </Tooltip>
    </div>
  );
};

Spells.propTypes = {
  participant: PropTypes.object.isRequired
};

export default Spells;
