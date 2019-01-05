import axios from 'axios';
import NodeCache from 'node-cache';

const matchApiEndpoint = process.env.MATCH_API_ENDPOINT || 'https://www.th.gl/api/match';
const timelineApiEndpoint = process.env.TIMELINE_API_ENDPOINT || 'https://www.th.gl/api/timeline';
const trophiesApiEndpoint = process.env.TROPHIES_API_ENDPOINT || 'https://www.th.gl/api/trophies';
const summonerApiEndpoint = process.env.SUMMONER_API_ENDPOINT || 'https://www.th.gl/api/summoner';

const matchesCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const timelineCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const trophiesCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

const summonerCache = new NodeCache({
  checkperiod: 120, // seconds
  stdTTL: 100 // seconds
});

export const getMatch = ({ platformId, matchId }) => {
  const key = `${platformId}-${matchId}`;
  const data = matchesCache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(`${matchApiEndpoint}?platformId=${platformId}&matchId=${matchId}`)
    .then(response => {
      if (response.data) {
        matchesCache.set(key, response.data);
      }
      return response.data;
    });
};

export const getTimeline = ({ platformId, matchId }) => {
  const key = `${platformId}-${matchId}`;
  const data = timelineCache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(`${timelineApiEndpoint}?platformId=${platformId}&matchId=${matchId}`)
    .then(response => {
      if (response.data) {
        timelineCache.set(key, response.data);
      }
      return response.data;
    });
};

export const getSummoner = ({ platformId, summonerId }) => {
  const key = `${platformId}-${summonerId}`;
  const data = summonerCache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(`${summonerApiEndpoint}?platformId=${platformId}&summonerId=${summonerId}`)
    .then(response => {
      if (response.data) {
        summonerCache.set(key, response.data);
      }
      return response.data;
    });
};

export const getTrophies = ({ platformId, matchId, summonerId }) => {
  const key = `${platformId}-${matchId}`;
  const data = trophiesCache.get(key);
  if (data) {
    return new Promise(resolve => resolve(data));
  }
  return axios
    .get(
      `${trophiesApiEndpoint}?platformId=${platformId}&matchId=${matchId}&summonerId=${summonerId}`
    )
    .then(response => {
      if (response.data) {
        trophiesCache.set(key, response.data);
      }
      return response.data;
    });
};

const regionToPlatformId = {
  br: 'br1',
  eune: 'eun1',
  euw: 'euw1',
  jp: 'jp1',
  kr: 'kr',
  lan: 'la1',
  las: 'la2',
  oce: 'oc1',
  tr: 'tr1',
  ru: 'ru',
  pbe: 'pbe1',
  global: 'global'
};

export const getPlatformIdByRegion = region => {
  const lowerCaseRegion = region.toLowerCase();
  return regionToPlatformId[lowerCaseRegion] || lowerCaseRegion;
};
