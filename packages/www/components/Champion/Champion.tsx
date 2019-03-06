import { Avatar, Tooltip } from '@material-ui/core';
import { AvatarProps } from '@material-ui/core/Avatar';
import React, { FunctionComponent } from 'react';
import champions, { IChampion, unknownChamp } from 'shared/riot-api/champions';
import version from 'shared/riot-api/version';

interface ChampionProps extends AvatarProps {
  championId: number;
}

const getChampionSquareImage = (champion: IChampion) => {
  if (!champion.image.full) {
    return 'https://avatar.leagueoflegends.com/NA/_unknown_th_champion_.png';
  }
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`;
};

const Champion: FunctionComponent<ChampionProps> = ({ championId, ...other }) => {
  const champion = champions[championId] || unknownChamp;
  return (
    <Tooltip title={`${champion.name} - ${champion.title}`}>
      <Avatar src={getChampionSquareImage(champion)} {...other} />
    </Tooltip>
  );
};

export default Champion;
