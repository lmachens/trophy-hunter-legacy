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
