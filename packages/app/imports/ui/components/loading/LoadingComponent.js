import { CircularProgress } from '../generic';
import PropTypes from 'prop-types';
import React from 'react';

const LoadingComponent = () => (
  <div style={{ position: 'relative', height: '100%', minHeight: 80 }}>
    <CircularProgress
      size={80}
      style={{
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
      thickness={5}
    />
  </div>
);

export default LoadingComponent;

function Loading({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return <LoadingComponent />;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
}
Loading.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  pastDelay: PropTypes.bool
};
export { Loading };
