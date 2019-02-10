import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import { SvgIcon } from '../generic';
import { TABS } from '../encyclopedia/Encyclopedia';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openEncyclopediaEntry } from '../../../store/actions';
import { TooltipTitle } from '../generic/TooltipTitle';

const defaultStyle = {
  height: 32,
  width: 32,
  cursor: 'pointer'
};

class PlaystyleIcon extends Component {
  static id = 0;

  handleClick = () => {
    const { playstyle, openEncyclopediaEntry } = this.props;
    openEncyclopediaEntry({ tab: TABS.PLAYSTYLES, value: playstyle.name });
  };

  render() {
    const { containerStyle, playstyle, style } = this.props;

    const id = `playstyleIcon${PlaystyleIcon.id++}`;
    return (
      <div style={containerStyle}>
        <Tooltip
          title={
            <TooltipTitle
              content={
                <div>
                  {playstyle.description}
                  <br />
                  <p>
                    <b>Click for details</b>
                  </p>
                </div>
              }
              title={playstyle.title}
            />
          }
        >
          <SvgIcon
            onClick={this.handleClick}
            style={Object.assign({}, defaultStyle, style)}
            viewBox="0 0 512 512"
          >
            <defs>
              <clipPath id={`${id}-icon-bg`}>
                <circle
                  cx="256"
                  cy="256"
                  r="252"
                  transform="translate(-25.6, -25.6) scale(1.1, 1.1) rotate(0, 256, 256)"
                />
              </clipPath>
            </defs>
            <circle cx="256" cy="256" fill="#1c2227" r="252" stroke="#937341" strokeWidth="10" />
            <path
              clipPath={`url(#${id}-icon-bg)`}
              d={playstyle.icon}
              fill="#937341"
              transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256)"
            />
          </SvgIcon>
        </Tooltip>
      </div>
    );
  }
}

PlaystyleIcon.propTypes = {
  containerStyle: PropTypes.object,
  playstyle: PropTypes.object.isRequired,
  style: PropTypes.object,
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
)(PlaystyleIcon);
