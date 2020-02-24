import React from 'react';
import { object } from 'prop-types';

export default Component => {
  const destructedComponent = ({ match: { params } }) => <Component {...params} />;

  destructedComponent.propTypes = {
    match: object.isRequired
  };

  return destructedComponent;
};
