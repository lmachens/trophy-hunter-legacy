import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from '../generic/Tooltip';
import { TABS } from '../encyclopedia/Encyclopedia';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openEncyclopediaEntry } from '../../../store/actions';
import { TooltipTitle } from '../generic/TooltipTitle';

const defaultStyle = {
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
    cursor: 'pointer',
    opacity: 0.35,
    filter: 'alpha(opacity=35)',
    transition: 'all 0.3s ease-out',
    zIndex: 1
  },
  svg: {
    position: 'absolute'
  },
  line: {
    stroke: '#be9820',
    strokeWidth: '3px',
    fill: 'transparent',
    opacity: 0.35,
    filter: 'alpha(opacity=35)',
    transition: 'all 0.3s ease-out'
  },
  obtained: {
    opacity: 1,
    filter: 'alpha(opacity=100)'
  }
};

class TreeItem extends React.Component {
  handleClick = () => {
    const { trophy, openEncyclopediaEntry } = this.props;
    openEncyclopediaEntry({ tab: TABS.TROPHIES, value: trophy.name });
  };

  isObtained = () => {
    const { tree, trophy, trophyHunter } = this.props;

    if (!trophyHunter) {
      return false;
    }
    const trophyHunterTree = trophyHunter.trees[tree.name];
    if (!trophyHunterTree) {
      return false;
    }
    // Is the tree level complete?
    if (tree.level < trophyHunterTree.level) {
      return true;
    }
    return (
      trophyHunterTree.trophiesObtained && trophyHunterTree.trophiesObtained.includes(trophy.name)
    );
  };

  isReadyToObtain = () => {
    const { parents, tree, trophyHunter } = this.props;

    if (!trophyHunter) {
      return !parents.length && tree.level === 1;
    }

    if (this.isObtained()) {
      // allready obtained
      return false;
    }

    if (parents.length === 0) {
      return true;
    }
    const trophyHunterTree = trophyHunter.trees[tree.name];
    return (
      trophyHunterTree &&
      parents.every(
        parent =>
          trophyHunterTree.trophiesObtained &&
          trophyHunterTree.trophiesObtained.includes(parent.trophyName)
      )
    );
  };

  render() {
    const { col, row, parents, tree, trophyHunter } = this.props;

    const size = 100;
    const halfSize = 30;
    const strokeOffset = 2;
    const divStyle = Object.assign(
      {
        left: size * col,
        top: size * row
      },
      defaultStyle.skill
    );

    const trophyHunterTree = trophyHunter && trophyHunter.trees[tree.name];
    return (
      <div style={divStyle}>
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

          //console.log(x1, y1, x2, y2, diffX, diffY);
          let left;
          if (x1 > x2) {
            left = halfSize + 4;
          } else if (x1 == x2) {
            left = halfSize - strokeOffset;
          } else {
            left = halfSize - diffX;
          }

          const svgStyle = Object.assign(
            {
              left: left - 1,
              top: y1 >= y2 ? halfSize : halfSize - diffY,
              width: Math.abs(x2 - x1),
              height: Math.abs(y2 - y1)
            },
            defaultStyle.svg
          );

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
          if (x1 != x2 && y1 != y2) {
            points.push([startPoint[0], 50].join(','));

            points.push([endPoint[0], 50].join(','));
          }

          // Add end point
          points.push(endPoint.join(','));

          const polylineStyle = Object.assign({}, defaultStyle.line);
          if (parentObtained) {
            Object.assign(polylineStyle, defaultStyle.obtained);
          }
          return (
            <svg key={parent.trophyName + index} style={svgStyle}>
              <polyline points={points.join(' ')} strokeLinejoin="round" style={polylineStyle} />
            </svg>
          );
        })}
        {this.renderTrophy()}
      </div>
    );
  }

  renderTrophy = () => {
    const { trophy, trophyHunter } = this.props;

    const obtained = this.isObtained();
    const trophyStyle = Object.assign({}, defaultStyle.trophy);
    if (obtained) {
      Object.assign(trophyStyle, defaultStyle.obtained);
    }

    const svgStyle = { margin: '3px' };

    if (this.isReadyToObtain()) {
      svgStyle.fill = '#000';
    } else if (!this.isObtained()) {
      svgStyle.fill = '#8e8e8e';
    }
    return (
      <Tooltip
        title={
          <TooltipTitle
            content={
              <div>
                {trophyHunter && (
                  <span style={{ fontStyle: 'italic' }}>
                    {obtained ? 'Complete' : 'Incomplete'}
                    <br />
                  </span>
                )}
                <br />
                <span dangerouslySetInnerHTML={{ __html: trophy.description }} />
                <p>
                  <b>Click for details</b>
                </p>
              </div>
            }
            title={trophy.title}
          />
        }
      >
        <div onClick={this.handleClick} style={trophyStyle}>
          <svg style={svgStyle} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d={trophy.svgPath} fillRule="evenodd" />
          </svg>
          {this.isReadyToObtain() && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                opacity: 1,
                width: '100%',
                height: '100%',
                boxShadow: '0px 0px 5px 5px rgb(142, 121, 36)',
                borderRadius: '10px',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
      </Tooltip>
    );
  };
}

TreeItem.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number,
  parents: PropTypes.array,
  tree: PropTypes.object,
  trophyHunter: PropTypes.object,
  trophy: PropTypes.object,
  openEncyclopediaEntry: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    openEncyclopediaEntry: bindActionCreators(openEncyclopediaEntry, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TreeItem);
