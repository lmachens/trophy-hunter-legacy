import React from 'react';
import About from '../components/About';
import Page from '../layouts/Page';

export default props => (
  <Page {...props}>
    <About {...props} />
  </Page>
);
