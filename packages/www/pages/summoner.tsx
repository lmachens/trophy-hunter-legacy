import './_bootstrap';

import axios from 'axios';
import React from 'react';
import Summoner from '../components/Summoner';
import Page from '../layouts/Page';
import {
  getLeaguePositions,
  getPlatformIdByRegion,
  getSummoner,
  getTrophyHunter
} from '../shared/th-api';

const SummonerPage = props => (
  <Page {...props}>
    <Summoner {...props} />{' '}
  </Page>
);

SummonerPage.getInitialProps = async ({ query }) => {
  const { region, summonerName } = query;
  if (!region || !summonerName) {
    throw new Error('invalid query');
  }

  try {
    const platformId = getPlatformIdByRegion(region);
    const summonerPromise = getSummoner({ platformId, summonerName });

    const trophyHunterPromise = getTrophyHunter({ region, summonerName });

    const [summoner, trophyHunter] = await axios.all([summonerPromise, trophyHunterPromise]);

    const leaguePositions = await getLeaguePositions({ platformId, summonerId: summoner.id });

    return { region, summoner, summonerName, leaguePositions, trophyHunter };
  } catch (error) {
    return {
      region,
      summoner: {
        profileIconId: 0,
        name: summonerName,
        summonerLevel: 0
      },
      summonerName,
      leaguePositions: []
    };
  }
};

export default SummonerPage;
