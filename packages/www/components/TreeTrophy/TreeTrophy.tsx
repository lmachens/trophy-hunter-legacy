import { Avatar, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import champions from '../../shared/riot-api/champions';
import version from '../../shared/riot-api/version';

interface ITreeTrophyProps {
  inactive?: boolean;
  tree: any;
  progress: number;
  onClick?(): void;
}

const useStyles = makeStyles({
  container: {
    cursor: 'pointer',
    position: 'relative',
    margin: '8px 16px'
  },
  image: {
    padding: 2,
    background: 'none',
    width: 58,
    height: 58
  },
  circle: {
    fill: 'transparent',
    strokeDasharray: 565.48,
    strokeDashoffset: 0,
    transition: 'stroke-dashoffset 1s linear',
    stroke: 'rgb(17, 19, 24)',
    strokeWidth: '0.9em'
  },
  circlePartial: {
    fill: 'transparent',
    strokeDasharray: 584.33,
    strokeDashoffset: 0,
    transition: 'stroke-dashoffset 1s linear',
    stroke: 'green',
    strokeWidth: '0.9em'
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    width: 60,
    height: 60
  },
  inactive: {
    filter: 'grayscale(100%)'
  }
});

const radius = 93;

const getChampionSquare = championId => {
  const champion = champions[championId.toString()];
  if (!champion) {
    return `https://avatar.leagueoflegends.com/NA/_unknown_th_champion_.png`;
  }
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`;
};

const calculateStrokeDashoffset = progress => {
  const c = Math.PI * (radius * 2);
  let val = progress ? progress * 100 : 0;
  if (val < 0) {
    val = 0;
  }
  if (val > 100) {
    val = 100;
  }

  return ((100 - val) / 100) * c;
};

const TreeTrophy: FunctionComponent<ITreeTrophyProps> = ({ tree, progress, onClick, inactive }) => {
  const classes = useStyles();

  return (
    <Tooltip title={<Typography color="primary">{tree.title}</Typography>}>
      <div onClick={onClick} className={classes.container}>
        <Avatar
          className={classNames(classes.image, { [classes.inactive]: inactive })}
          src={getChampionSquare(tree.championId)}
        />
        <svg
          className={classes.border}
          style={{
            boxShadow: `${progress === 1 ? '#f0ad4e' : 'rgb(134, 134, 134)'} 0px 0px 2px 2px`
          }}
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r={90} className={classes.circle} />
          <circle
            cx="100"
            cy="100"
            r={radius}
            className={classes.circlePartial}
            style={{
              strokeDashoffset: calculateStrokeDashoffset(progress)
            }}
          />
        </svg>
      </div>
    </Tooltip>
  );
};

export default TreeTrophy;
