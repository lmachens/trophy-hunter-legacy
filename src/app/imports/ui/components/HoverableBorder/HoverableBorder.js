import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { fade } from 'material-ui/utils/colorManipulator';
import transitions from 'material-ui/styles/transitions';
import universeTheme from '../../layouts/universeTheme';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  foreground: {
    padding: '2px',
    display: 'flex',
    flexFlow: 'column',
    transition: transitions.easeOut()
  }
};

class HoverableBorder extends Component {
  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { active, backgroundStyle, children, containerStyle, style } = this.props;

    const tmpContainerStyle = Object.assign(
      {
        border: `1px solid ${universeTheme.palette[active ? 'primary1Color' : 'borderColor']}`,
        borderBottomWidth: active ? 1 : 0,
        paddingBottom: active ? 0 : 1
      },
      containerStyle
    );

    const foregroundStyle = Object.assign(
      {
        backgroundColor: this.state.hovered ? fade(universeTheme.palette.textColor, 0.1) : null
      },
      styles.foreground,
      style
    );

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={tmpContainerStyle}
      >
        {backgroundStyle && <div style={backgroundStyle} />}
        <div style={foregroundStyle}>{children}</div>
      </div>
    );
  }
}

HoverableBorder.propTypes = {
  active: PropTypes.bool.isRequired,
  backgroundStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  routes: PropTypes.array,
  style: PropTypes.object,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const HoverableBorderContainer = withTracker(({ location, routes }) => {
  const active = routes ? routes.includes(location.pathname) : false;
  return { active };
})(HoverableBorder);

export default withRouter(HoverableBorderContainer);
