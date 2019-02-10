import React, { Component } from 'react';
import { getFirstTimeBonus, getTreeBonus } from '../../../api/trophies';

import { IconButton } from '../generic';
import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import SCORES, { defs } from '/imports/shared/trophies/scores.ts';
import { TABS } from '../encyclopedia/Encyclopedia';
import TrophyStats from '../TrophyStats';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openEncyclopediaEntry } from '../../../store/actions';
import { TooltipTitle } from '../generic/TooltipTitle';

const badges = {
  activeQuest:
    'M101.265 58.881h53.377l-28.835 51.29 53.1 5.232-78.643 81.716 24.95-62.497-48.121-5.661z',
  firstTimeAndActiveQuest:
    'M128 53.524l-17.354 51.819-54.646.492 43.92 32.518-16.418 52.123L128 158.754l44.498 31.722-16.418-52.123L200 105.835l-54.646-.492z',
  firstTime: 'M119 64v55H64v18h55v55h18v-55h55v-18h-55V64h-18z'
};

class Trophy extends Component {
  state = {
    loadTrophyStats: false
  };

  static id = 0;

  handleClick = () => {
    const { openEncyclopediaEntry, trophy } = this.props;
    openEncyclopediaEntry({ tab: TABS.TROPHIES, value: trophy.name });
  };

  handleOpen = () => {
    this.setState({
      loadTrophyStats: true
    });
  };

  render() {
    const { disabled, forceColors, obtainedCount, iconStyle, style, trophy } = this.props;

    const { gradient, shadow } = defs[trophy.score];
    const id = `trophyTooltip${trophy.name}${Trophy.id++}`;
    let fill;
    if (disabled) {
      fill = 'grey';
    } else if (!obtainedCount && !forceColors) {
      fill = 'rgba(255, 255, 255, 0.298039)';
    } else if (gradient) {
      fill = `url(#gradient-${id})`;
    }

    const filter = obtainedCount && shadow && `url(#shadow-${id})`;
    return (
      <span onClick={this.handleClick}>
        <Tooltip
          onOpen={this.handleOpen}
          title={<TooltipTitle content={this.renderTooltipContent()} title={trophy.title} />}
        >
          <IconButton iconStyle={iconStyle} style={Object.assign({ transition: 'none' }, style)}>
            <svg viewBox="0 0 512 512">
              <defs>
                {shadow && (
                  <filter height="300%" id={`shadow-${id}`} width="300%" x="-100%" y="-100%">
                    <feFlood floodColor={shadow} result="flood" />
                    <feComposite
                      in="flood"
                      in2="SourceGraphic"
                      operator="atop"
                      result="composite"
                    />
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
              {this.renderBadge()}
            </svg>
          </IconButton>
        </Tooltip>
      </span>
    );
  }

  renderBadge() {
    const { badge } = this.props;
    if (badges[badge]) {
      return (
        <g transform="translate(128,128), scale(2)">
          <circle cx="128" cy="128" fill="#111318" r="64" />
          <path d={badges[badge]} fill="#fff" />
        </g>
      );
    }
  }

  renderTooltipContent = () => {
    const { badge, showPoints, trophy, obtainedCount } = this.props;
    const { loadTrophyStats } = this.state;

    return (
      <div>
        {obtainedCount !== undefined && (
          <span>
            {' '}
            ({obtainedCount}
            x)
          </span>
        )}
        <div dangerouslySetInnerHTML={{ __html: trophy.description }} />
        {showPoints && (
          <p>
            + {trophy.score} Points
            <br />
            {(badge === 'firstTime' || badge === 'firstTimeAndActiveQuest') && (
              <span>
                + {getFirstTimeBonus(trophy)} Points (first time bonus)
                <br />
              </span>
            )}
            {(badge === 'activeQuest' || badge === 'firstTimeAndActiveQuest') && (
              <span>
                + {getTreeBonus(trophy)} Points (active quest bonus)
                <br />
              </span>
            )}
          </p>
        )}
        {loadTrophyStats && trophy.score !== SCORES.SPECIAL && (
          <TrophyStats hideRefresh={true} trophy={trophy} />
        )}
        {trophy.specialDescription && <p>{trophy.specialDescription}</p>}
        <p>
          <b>Click for details</b>
        </p>
      </div>
    );
  };
}

Trophy.propTypes = {
  badge: PropTypes.string,
  disabled: PropTypes.bool,
  forceColors: PropTypes.bool,
  iconStyle: PropTypes.object,
  style: PropTypes.object,
  obtainedCount: PropTypes.number,
  showPoints: PropTypes.bool,
  trophy: PropTypes.object.isRequired,
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
)(Trophy);
