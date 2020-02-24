import React, { Component } from 'react';

import { Avatar } from '../generic';
import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import { TABS } from '../encyclopedia/Encyclopedia';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import { openEncyclopediaEntry } from '../../../store/actions';
import trees from '/imports/shared/trees/index.ts';

const styles = {
  container: {
    cursor: 'pointer',
    position: 'relative'
  },
  avatar: {
    padding: 2,
    background: 'none'
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
    left: 0,
    borderRadius: '50%'
  }
};

const radius = 93;

class TreeTrophy extends Component {
  calculateStrokeDashoffset(progress) {
    var c = Math.PI * (radius * 2);
    var val = progress ? progress * 100 : 0;
    if (val < 0) {
      val = 0;
    }
    if (val > 100) {
      val = 100;
    }

    return ((100 - val) / 100) * c;
  }

  handleClick = () => {
    const { treeTrophyName, onClick, openEncyclopediaEntry } = this.props;
    if (onClick) onClick();
    else openEncyclopediaEntry({ tab: TABS.TREES, value: treeTrophyName });
  };

  render() {
    const { treeTrophyName, avatarStyle, progress, size, style } = this.props;
    const tree = trees[treeTrophyName];

    return (
      <Tooltip PopperProps={{ style: { zIndex: 2222 } }} title={tree.title}>
        <span onClick={this.handleClick} style={Object.assign({}, styles.container, style)}>
          <Avatar
            size={size ? size - 2 : 58}
            src={getChampionSquare({ championId: tree.championId })}
            style={Object.assign({}, styles.avatar, avatarStyle)}
          />
          <svg
            style={Object.assign({}, styles.border, {
              boxShadow: `${progress === 1 ? '#f0ad4e' : 'rgb(134, 134, 134)'} 0px 0px 2px 2px`,
              width: size || 60,
              height: size || 60
            })}
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r={90} style={styles.circle} />
            <circle
              cx="100"
              cy="100"
              r={radius}
              style={Object.assign({}, styles.circlePartial, {
                strokeDashoffset: this.calculateStrokeDashoffset(progress)
              })}
            />
          </svg>
        </span>
      </Tooltip>
    );
  }
}

TreeTrophy.propTypes = {
  avatarStyle: PropTypes.object,
  onClick: PropTypes.func,
  progress: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  openEncyclopediaEntry: PropTypes.func.isRequired,
  treeTrophyName: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    openEncyclopediaEntry: bindActionCreators(openEncyclopediaEntry, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TreeTrophy);
