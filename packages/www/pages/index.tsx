import './_bootstrap';

import React from 'react';
import Landing from '../components/Landing';
import Page from '../layouts/Page';

const LandingPage = props => (
  <Page {...props}>
    <Landing {...props} />
  </Page>
);

export default LandingPage;
