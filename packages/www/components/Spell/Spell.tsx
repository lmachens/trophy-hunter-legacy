import { Avatar, Tooltip } from '@material-ui/core';
import { AvatarProps } from '@material-ui/core/Avatar';
import React, { FunctionComponent } from 'react';
import summonerSpells, { ISummonerSpell } from 'shared/riot-api/summonerSpells';
import version from 'shared/riot-api/version';

interface SpellProps extends AvatarProps {
  spellId: number;
}

const getSummonerSpellById = (spell: ISummonerSpell) => {
  if (!spell.image.full) {
    return 'https://avatar.leagueoflegends.com/NA/_unknown_th_champion_.png';
  }
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`;
};

const Spell: FunctionComponent<SpellProps> = ({ spellId, ...other }) => {
  const spell = summonerSpells[spellId] || {
    description: 'Unknown Spell',
    image: {}
  };

  return (
    <Tooltip title={spell.description}>
      <Avatar src={getSummonerSpellById(spell)} {...other} />
    </Tooltip>
  );
};

export default Spell;
