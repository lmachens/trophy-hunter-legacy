import React from 'react';
import Match from '../components/Match';
import Page from '../layouts/Page';
import extendMatchResult from '../shared/matches/extendMatchResult';
import { getMatchWithTimeline } from '../shared/th-api';
import calculateTrophies from '../shared/trophies/calculateTrophies';

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

  const matchWithTimeline = await getMatchWithTimeline({ platformId, matchId });
  const match = extendMatchResult({
    matchResult: matchWithTimeline,
    summonerName
  });
  const trophies = calculateTrophies({ extendedMatchResult: match });

  return { match, trophies, summonerName };
};

export default MatchPage;
