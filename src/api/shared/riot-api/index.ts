import axios from 'axios';

const leagueApiKey = process.env.LEAGUE_API_KEY;
export const getMatch = ({ platformId, matchId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${leagueApiKey}`
    )
    .then(response => response.data);
};

export const getTimeline = ({ platformId, matchId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/match/v3/timelines/by-match/${matchId}?api_key=${leagueApiKey}`
    )
    .then(response => response.data);
};

export const getSummoner = ({ platformId, summonerId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/summoner/v3/summoners/${summonerId}?api_key=${leagueApiKey}`
    )
    .then(response => response.data);
};

export const getActiveGame = ({ platformId, summonerId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${summonerId}?api_key=${leagueApiKey}`
    )
    .then(response => response.data);
};

export const getLeaguePositions = ({ platformId, summonerId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/league/v3/positions/by-summoner/${summonerId}?api_key=${leagueApiKey}`
    )
    .then(response => response.data);
};

export const getChampionMastery = ({ platformId, summonerId, championId }) => {
  return axios
    .get(
      `https://${platformId}.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}?api_key=${leagueApiKey}`
    )
    .then(response => response.data);
};
