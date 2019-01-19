import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import { TABS } from '../encyclopedia/Encyclopedia';
import attributes from '../../../api/attributes/attributes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openEncyclopediaEntry } from '../../../store/actions';
import { TooltipTitle } from '../generic/TooltipTitle';

const styles = {
  svg: {
    height: 80,
    width: 80,
    overflow: 'visible',
    cursor: 'pointer'
  }
};

class Attribute extends Component {
  handleClick = () => {
    const { attribute, openEncyclopediaEntry } = this.props;
    openEncyclopediaEntry({ tab: TABS.ATTRIBUTES, value: attribute });
  };

  render() {
    const { attribute, style, value } = this.props;
    return (
      <Tooltip
        title={
          <TooltipTitle
            content={
              <div>
                <p>{attributes[attribute].description}</p>
                {value !== undefined && <p>Points: {Math.round(value)}</p>}
                <p>
                  <b>Click for details</b>
                </p>
              </div>
            }
            title={attributes[attribute].title}
          />
        }
      >
        <svg
          onClick={this.handleClick}
          style={Object.assign({}, styles.svg, style)}
          viewBox="0 0 512 512"
        >
          <defs>
            <radialGradient id="gradient-attribute">
              <stop offset="0%" stopColor="#937342" stopOpacity="1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </radialGradient>
          </defs>
          <polygon
            fill="url(#gradient-attribute)"
            points="427.12,427.12,256,498,84.88,427.12,14,256,84.88,84.88,256,14,427.12,84.88,498,256"
            stroke="rgba(187, 187, 188, 1)"
            strokeWidth="14"
          />
          <g transform="translate(0,0)">
            <path
              d={attributes[attribute].svgPath}
              fill="rgba(187, 187, 188, 1)"
              stroke="rgba(0, 0, 0, 1)"
              strokeWidth="2"
              transform="translate(76.8, 76.8) scale(0.7, 0.7)"
            />
          </g>
          <g
            fontFamily="Roboto"
            fontSize="110"
            fontWeight="bold"
            textAnchor="middle"
            transform="translate(254,438)"
          >
            <text stroke="rgba(0, 0, 0, 1)" strokeWidth="22.5">
              {attributes[attribute].title}
            </text>
            <text fill="#bbbbbc">{attributes[attribute].title}</text>
          </g>
        </svg>
      </Tooltip>
    );
  }
}

Attribute.propTypes = {
  attribute: PropTypes.string.isRequired,
  style: PropTypes.object,
  value: PropTypes.number,
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
)(Attribute);
