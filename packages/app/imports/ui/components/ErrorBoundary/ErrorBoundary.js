import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <div>{this.state.error && this.state.error.toString()}</div>
          {this.state.errorInfo.componentStack.split('\n').map((part, i) => (
            <div key={i}>{part}</div>
          ))}
        </div>
      );
    }
    return this.props.children || null;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
