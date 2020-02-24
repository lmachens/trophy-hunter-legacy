import { Tooltip, Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import React, { FunctionComponent } from 'react';

interface KDAProps extends TypographyProps {
  kills: number;
  deaths: number;
  assists: number;
}

const KDA: FunctionComponent<KDAProps> = ({ kills, deaths, assists, ...other }) => {
  return (
    <Tooltip title={`${kills} Kills ${deaths} Deaths ${assists} Assists`}>
      <Typography {...other}>
        {kills}/{deaths}/{assists}
      </Typography>
    </Tooltip>
  );
};

export default KDA;
