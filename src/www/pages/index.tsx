import React from 'react';
import Landing from '../components/Landing';
import Page from '../layouts/Page';

export default props => (
  <Page {...props}>
    <Landing {...props} />
  </Page>
);
