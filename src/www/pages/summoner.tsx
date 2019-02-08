import './_bootstrap';

import React from 'react';
import Summoner from '../components/Summoner';
import Page from '../layouts/Page';
import { getLeaguePositions, getPlatformIdByRegion, getSummoner } from '../shared/th-api';

const SummonerPage = props => (
  <Page {...props}>
    <Summoner {...props} />
  </Page>
);

SummonerPage.getInitialProps = async ({ query }) => {
  const { region, summonerName } = query;
  if (!region || !summonerName) {
    throw new Error('invalid query');
  }

  const platformId = getPlatformIdByRegion(region);
  const summoner = await getSummoner({ platformId, summonerName });
  const leaguePositions = await getLeaguePositions({ platformId, summonerId: summoner.id });

  return { region, summoner, summonerName, leaguePositions };
};

export default SummonerPage;
