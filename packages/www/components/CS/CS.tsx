import { Tooltip, Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import React, { FunctionComponent } from 'react';

interface CSProps extends TypographyProps {
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
}

const CS: FunctionComponent<CSProps> = ({
  totalMinionsKilled = 0,
  neutralMinionsKilled = 0,
  ...other
}) => {
  return (
    <Tooltip title={`${totalMinionsKilled} Minions + ${neutralMinionsKilled} Jungle CS`}>
      <Typography {...other}>{totalMinionsKilled + neutralMinionsKilled} CS</Typography>
    </Tooltip>
  );
};

export default CS;
