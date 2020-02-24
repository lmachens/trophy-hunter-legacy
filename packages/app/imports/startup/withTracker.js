import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    console.log(page);
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };

  class HOC extends React.Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.propTypes = {
    location: PropTypes.object.isRequired
  };
  return withRouter(HOC);
};

export default withTracker;
