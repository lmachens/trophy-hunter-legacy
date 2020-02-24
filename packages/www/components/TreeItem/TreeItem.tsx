import { Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { defs } from '../../shared/trophies/scores';

interface ITreeItemProps {
  treeProgress: any;
  col: number;
  row: number;
  parents: any;
  tree: any;
  trophy: any;
  obtained: boolean;
  readyToObtain: boolean;
}

const useStyles = makeStyles({
  skill: {
    width: 60,
    height: 60,
    position: 'absolute'
  },
  trophy: {
    background: 'white',
    position: 'relative',
    borderRadius: 10,
    width: 60,
    height: 60,
    filter: 'brightness(0.4)',
    zIndex: 1
  },
  svg: {
    position: 'absolute',
    fill: 'none'
  },
  line: {
    stroke: '#be9820',
    strokeWidth: '3px',
    opacity: 0.4,
    transition: 'all 0.3s ease-out'
  },
  obtained: {
    opacity: 1,
    filter: 'none'
  },
  trophySvg: {
    margin: '3px'
  },
  readyToObtain: {
    fill: '#000'
  },
  notObtained: {
    fill: '#8e8e8e'
  },
  tooltip: {
    textAlign: 'center'
  },
  readyToObtainBorder: {
    position: 'absolute',
    top: 0,
    opacity: 1,
    width: '100%',
    height: '100%',
    boxShadow: '#be9820 0px 0px 3px 3px',
    borderRadius: '10px',
    pointerEvents: 'none'
  }
});

const TreeItem: FunctionComponent<ITreeItemProps> = ({
  col,
  row,
  parents,
  tree,
  trophy,
  treeProgress,
  obtained,
  readyToObtain
}) => {
  const classes = useStyles();

  const size = 100;
  const halfSize = 30;
  const strokeOffset = 2;
  const divStyle = {
    left: size * col,
    top: size * row
  };

  const trophyHunterTree = treeProgress && treeProgress[tree.name];
  const { gradient, label } = defs[trophy.score];

  return (
    <div className={classes.skill} style={divStyle}>
      {parents.map((parent, index) => {
        const parentObtained = !!(
          trophyHunterTree &&
          trophyHunterTree.trophiesObtained &&
          trophyHunterTree.trophiesObtained.includes(parent.trophyName)
        );

        const x1 = size * parent.x;
        const y1 = size * parent.y;
        const x2 = divStyle.left;
        const y2 = divStyle.top;

        const diffX = x2 - x1;
        const diffY = y2 - y1;

        // console.log(x1, y1, x2, y2, diffX, diffY);
        let left;
        if (x1 > x2) {
          left = halfSize + 4;
        } else if (x1 === x2) {
          left = halfSize - strokeOffset;
        } else {
          left = halfSize - diffX;
        }

        const svgStyle = {
          left: left - 1,
          top: y1 >= y2 ? halfSize : halfSize - diffY,
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1)
        };

        const points = [];
        const startPoint = [
          diffX < 0 ? diffX * -1 - strokeOffset : 1,
          diffY < 0 ? diffY * -1 - strokeOffset : 30
        ];
        const endPoint = [
          diffX <= 0 ? strokeOffset : diffX - 1,
          diffY <= 0 ? strokeOffset : diffY - 30
        ];

        // Add start point
        points.push(startPoint.join(','));

        // Add corner points
        if (x1 !== x2 && y1 !== y2) {
          points.push([startPoint[0], 50].join(','));

          points.push([endPoint[0], 50].join(','));
        }

        // Add end point
        points.push(endPoint.join(','));

        return (
          <svg key={parent.trophyName + index} className={classes.svg} style={svgStyle}>
            <polyline
              points={points.join(' ')}
              strokeLinejoin="round"
              className={classNames(classes.line, { [classes.obtained]: parentObtained })}
            />
          </svg>
        );
      })}
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title={
          <div className={classes.tooltip}>
            <Typography color="primary">{trophy.title}</Typography>
            <Typography dangerouslySetInnerHTML={{ __html: trophy.description }} />
            <Typography style={{ color: gradient[0] }}>{label}</Typography>
          </div>
        }
      >
        <div className={classNames(classes.trophy, { [classes.obtained]: obtained })}>
          <svg
            className={classNames(classes.trophySvg, {
              [classes.readyToObtain]: readyToObtain,
              [classes.notObtained]: !obtained
            })}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={trophy.svgPath} />
          </svg>
          {readyToObtain && <div className={classes.readyToObtainBorder} />}
        </div>
      </Tooltip>
    </div>
  );
};

export default TreeItem;
