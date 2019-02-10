import { SvgIcon, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { defs } from '../../shared/trophies/scores';

interface ITrophyProps {
  trophy: any;
}

const useStyles = makeStyles({
  icon: {
    margin: 5
  },
  tooltip: {
    textAlign: 'center'
  }
});

const Trophy: FunctionComponent<ITrophyProps> = ({ trophy }) => {
  const classes = useStyles();
  const { gradient, shadow, label } = defs[trophy.score];

  return (
    <Tooltip
      title={
        <div className={classes.tooltip}>
          <Typography color="primary">{trophy.title}</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: trophy.description }} />
          <Typography style={{ color: gradient[0] }}>{label}</Typography>
        </div>
      }
    >
      <SvgIcon viewBox="0 0 512 512" className={classes.icon}>
        <defs>
          {shadow && (
            <filter height="300%" id={`shadow-${trophy.score}`} width="300%" x="-100%" y="-100%">
              <feFlood floodColor={shadow} result="flood" />
              <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite" />
              <feGaussianBlur in="composite" result="blur" stdDeviation="20" />
              <feOffset dx="0" dy="0" result="offset" />
              <feComposite in="SourceGraphic" in2="offset" operator="over" />
            </filter>
          )}
          {gradient && (
            <radialGradient id={`gradient-${trophy.score}`}>
              <stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
              <stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
            </radialGradient>
          )}
        </defs>
        <path
          d={trophy.svgPath}
          fill={`url(#gradient-${trophy.score})`}
          filter={shadow && `url(#shadow-${trophy.score})`}
        />
      </SvgIcon>
    </Tooltip>
  );
};

export default Trophy;
