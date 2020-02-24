import React from 'react';
import Match from '../components/Match';
import Page from '../layouts/Page';
import { getMatchWithTimeline } from '../shared/th-api';

const MatchPage = props => (
  <Page {...props}>
    <Match {...props} />
  </Page>
);

MatchPage.getInitialProps = async ({ query }) => {
  const { platformId, matchId, summonerName } = query;
  if (!platformId || !matchId) {
    throw new Error('invalid query');
  }

  const match = await getMatchWithTimeline({ platformId, matchId });

  return { match, summonerName };
};

export default MatchPage;
