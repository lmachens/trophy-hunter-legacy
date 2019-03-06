import { Avatar, Tooltip } from '@material-ui/core';
import { AvatarProps } from '@material-ui/core/Avatar';
import React, { FunctionComponent } from 'react';
import perkStyles from 'shared/riot-api/perk-styles';
import perks from 'shared/riot-api/perks';

interface PerkProps extends AvatarProps {
  perkId: number;
}

const getPerkImage = (src: string) => {
  if (!src) {
    return 'https://avatar.leagueoflegends.com/NA/_unknown_th_champion_.png';
  }
  return `https://ddragon.leagueoflegends.com/cdn/img/${src}`;
};

const Perk: FunctionComponent<PerkProps> = ({ perkId, ...other }) => {
  const perk = (perkId && (perks[perkId] || perkStyles[perkId])) || {
    name: 'Unknown Rune',
    shortDesc: '',
    icon: ''
  };

  return (
    <Tooltip title={perk.name}>
      <Avatar src={getPerkImage(perk.icon)} {...other} />
    </Tooltip>
  );
};

export default Perk;
