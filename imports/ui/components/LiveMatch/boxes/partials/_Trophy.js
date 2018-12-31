import React, { PureComponent } from 'react';
import { SvgIcon } from '@material-ui/core';
import { withStyles } from '../../../generic';
import PropTypes from 'prop-types';
import SCORES from '../../../../../api/trophies/scores';
import { Tooltip } from '../../../generic/Tooltip';
import { TooltipTitle } from '../../../generic/TooltipTitle';

const styles = {
  icon: {
    margin: 4
  }
};

export const defs = {
  [SCORES.SPECIAL]: {
    shadow: '#4282cc',
    gradient: ['#f5f5f5', '#b2b2c8'],
    label: 'Special'
  },
  [SCORES.EASY]: {
    gradient: ['#b2ff62', '#4c8b00'],
    label: 'Easy'
  },
  [SCORES.MEDIUM]: {
    gradient: ['#1ca7ff', '#0e67d6'],
    label: 'Medium'
  },
  [SCORES.HARD]: {
    shadow: '#cc4242',
    gradient: ['#f7ee96', '#bfb11c'],
    label: 'Hard'
  },
  [SCORES.VERY_HARD]: {
    shadow: '#d0021b',
    gradient: ['#f5a623', '#8b572a'],
    label: 'Very Hard'
  },
  [SCORES.EPIC]: {
    shadow: '#9f0013',
    gradient: ['#ff3d3c', '#9e0120'],
    label: 'Epic'
  }
};

class Trophy extends PureComponent {
  render() {
    const { classes, trophy } = this.props;

    const { gradient, shadow } = defs[trophy.score];
    const id = `trophyTooltip${trophy.name}${Trophy.id++}`;
    let fill;
    if (gradient) {
      fill = `url(#gradient-${id})`;
    }

    const filter = shadow && `url(#shadow-${id})`;
    return (
      <Tooltip title={<TooltipTitle content={trophy.description} title={trophy.title} />}>
        <SvgIcon className={classes.icon} viewBox="0 0 512 512">
          <defs>
            {shadow && (
              <filter height="300%" id={`shadow-${id}`} width="300%" x="-100%" y="-100%">
                <feFlood floodColor={shadow} result="flood" />
                <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite" />
                <feGaussianBlur in="composite" result="blur" stdDeviation="20" />
                <feOffset dx="0" dy="0" result="offset" />
                <feComposite in="SourceGraphic" in2="offset" operator="over" />
              </filter>
            )}
            {gradient && (
              <radialGradient id={`gradient-${id}`}>
                <stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
                <stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
              </radialGradient>
            )}
          </defs>
          <path d={trophy.svgPath} fill={fill} filter={filter} />
        </SvgIcon>
      </Tooltip>
    );
  }
}

Trophy.propTypes = {
  classes: PropTypes.object.isRequired,
  trophy: PropTypes.object.isRequired
};

const enhanced = withStyles(styles)(Trophy);

export { enhanced as Trophy };
