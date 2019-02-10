import { SvgIcon, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { defs } from '../../shared/trophies/scores';

const useStyles = makeStyles({
  tooltip: {
    textAlign: 'center'
  },
  icon: {
    margin: 4,
    height: 30,
    width: 30
  }
});

const Trophy = ({ name, title, description, svgPath, score }) => {
  const classes = useStyles();
  const { gradient, shadow, label } = defs[score];
  const fill = `url(#gradient-${name})`;
  const filter = shadow && `url(#shadow-${name})`;

  return (
    <Tooltip
      title={
        <div className={classes.tooltip}>
          <Typography color="primary">{title}</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: description }} />
          <Typography style={{ color: gradient[0] }}>{label}</Typography>
        </div>
      }
    >
      <SvgIcon className={classes.icon}>
        <svg viewBox="0 0 512 512">
          <defs>
            {shadow && (
              <filter height="300%" id={`shadow-${name}`} width="300%" x="-100%" y="-100%">
                <feFlood floodColor={shadow} result="flood" />
                <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite" />
                <feGaussianBlur in="composite" result="blur" stdDeviation="20" />
                <feOffset dx="0" dy="0" result="offset" />
                <feComposite in="SourceGraphic" in2="offset" operator="over" />
              </filter>
            )}
            {gradient && (
              <radialGradient id={`gradient-${name}`}>
                <stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
                <stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
              </radialGradient>
            )}
          </defs>
          <path d={svgPath} fill={fill} filter={filter} />
        </svg>
      </SvgIcon>
    </Tooltip>
  );
};

export default Trophy;
