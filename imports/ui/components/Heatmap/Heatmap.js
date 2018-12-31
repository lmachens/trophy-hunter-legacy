import React, { Component } from 'react';

import PropTypes from 'prop-types';
import h337 from 'heatmap.js';

class Heatmap extends Component {
  state = {
    settings: null
  };

  componentDidMount() {
    const { data, config } = this.props;

    const defaultConfig = {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight
    };

    const settings = Object.assign(
      {
        container: this.container
      },
      defaultConfig,
      config
    );

    this.heatmapInstance = h337.create(settings);
    this.setState({ settings: settings });
    this.heatmapInstance.setData(data);
  }

  componentDidUpdate() {
    const { data, config } = this.props;

    this.heatmapInstance.setData(data);

    const defaultConfig = {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight
    };
    const settings = Object.assign(
      {
        container: this.container
      },
      defaultConfig,
      config
    );
    this.heatmapInstance.configure(settings);
  }

  render() {
    const { children, containerStyle, style } = this.props;

    return (
      <div style={containerStyle}>
        <div ref={value => (this.container = value)} style={style}>
          {children}
        </div>
      </div>
    );
  }
}

Heatmap.propTypes = {
  children: PropTypes.element,
  containerStyle: PropTypes.object,
  config: PropTypes.object,
  data: PropTypes.object.isRequired,
  style: PropTypes.object
};

export default Heatmap;
