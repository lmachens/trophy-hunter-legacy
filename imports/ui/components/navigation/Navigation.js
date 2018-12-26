import React, { Component } from 'react';

import { Button } from '../generic';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  handleChange = value => {
    const { history } = this.props;
    history.push(value);
  };

  render() {
    const { items, history, style } = this.props;

    return (
      <div style={style}>
        {items.map(item => {
          return (
            <Button
              key={item.label}
              label={item.label.toUpperCase()}
              onClick={item.onClick || this.handleChange.bind(this, item.path)}
              primary={history.location.pathname === item.path}
              style={{ zIndex: 0 }}
            />
          );
        })}
      </div>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.array,
  style: PropTypes.object,
  history: PropTypes.object.isRequired
};

export default withRouter(Navigation);
