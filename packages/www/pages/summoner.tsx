import axios from 'axios';
import Summoner, { ISummonerProps } from 'components/Summoner';
import Page from 'layouts/Page';
import { NextFunctionComponent } from 'next';
import React from 'react';
import {
  getLeaguePositions,
  getMatchList,
  getMatchWithTimeline,
  getPlatformIdByRegion,
  getSummoner,
  getTrophyHunter
} from 'shared/th-api';

const SummonerPage: NextFunctionComponent<ISummonerProps> = props => (
  <Page {...props}>
    <Summoner {...props} />{' '}
  </Page>
);

SummonerPage.getInitialProps = async ({ query }) => {
  const { region, summonerName } = query;
  if (!region || typeof region !== 'string' || !summonerName || typeof summonerName !== 'string') {
    throw new Error('invalid query');
  }

  try {
    const platformId = getPlatformIdByRegion(region);
    const summonerPromise = getSummoner({ platformId, summonerName });

    const trophyHunterPromise = getTrophyHunter({ region, summonerName });
    const [summoner, trophyHunter] = await axios.all([summonerPromise, trophyHunterPromise]);

    const leaguePositionsPromise = getLeaguePositions({ platformId, summonerId: summoner.id });
    const lastMatchesPromise = getMatchList({ platformId, accountId: summoner.accountId }).then(
      matchList => {
        const matchPromises = matchList.matches
          .slice(0, 10)
          .map(match => getMatchWithTimeline({ platformId, matchId: match.gameId }));
        return Promise.all(matchPromises);
      }
    );
    const [leaguePositions, lastMatches] = await axios.all([
      leaguePositionsPromise,
      lastMatchesPromise
    ]);
    return { region, summoner, summonerName, leaguePositions, trophyHunter, lastMatches };
  } catch (error) {
    return {
      region,
      summoner: {
        profileIconId: 0,
        name: summonerName,
        summonerLevel: 0
      },
      summonerName,
      leaguePositions: [],
      lastMatches: [],
      trophyHunter: null
    };
  }
};

export default SummonerPage;
