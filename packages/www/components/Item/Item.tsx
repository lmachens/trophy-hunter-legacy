import { Avatar, Tooltip } from '@material-ui/core';
import { AvatarProps } from '@material-ui/core/Avatar';
import React, { FunctionComponent } from 'react';
import items, { IItem } from 'shared/riot-api/items';
import version from 'shared/riot-api/version';

interface ItemProps extends AvatarProps {
  itemId: number;
}

const getItemImage = (item: IItem) => {
  if (!item.id) {
    return 'https://avatar.leagueoflegends.com/NA/_unknown_th_champion_.png';
  }
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.id}.png`;
};

const Item: FunctionComponent<ItemProps> = ({ itemId, ...other }) => {
  const item = items[itemId] || {
    name: 'Unknown Item',
    sanitizedDescription: 'No Description'
  };

  return (
    <Tooltip title={`${item.name} - ${item.sanitizedDescription}`}>
      <Avatar src={getItemImage(item)} {...other} />
    </Tooltip>
  );
};

export default Item;
