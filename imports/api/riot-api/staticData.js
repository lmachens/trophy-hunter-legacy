import champions from '/imports/shared/riot-api/champions.ts';
import summonerSpells from './static/summonerSpells';
import version from './version';

const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/';

const regionToPlatformIdMap = {
  BR: 'BR1',
  EUNE: 'EUNE',
  EUW: 'EUW1',
  JP: 'JP1',
  KR: 'KR',
  LAN: 'LA1',
  LAS: 'LA2',
  NA: 'NA1',
  OCE: 'OC1',
  TR: 'TR1',
  RU: 'RU',
  PBE: 'PBE1'
};

export const avatarUrl = (region, name) =>
  `https://avatar.leagueoflegends.com/${regionToPlatformIdMap[region]}/${name}.png`;
export const getUnknown = () => avatarUrl('NA', '_unknown_th_champion_');
// Perk images
export const getPerkImage = icon => `${baseUrl}img/${icon}`;
// Profile Icons
export const getProfileIcon = id => `${baseUrl}${version}/img/profileicon/${id}`;
// Champions (Square)
export const getChampionSquare = ({ champion, championId }) => {
  if (!champion) {
    champion = champions[championId];
  }
  if (!champion) {
    return getUnknown();
  }
  return `${baseUrl}${version}/img/champion/${champion.image.full}`;
};
// Passive Abilities
export const getPassiveAbility = id => `${baseUrl}${version}/img/passive/${id}`;
// Champion Abilities
export const getChampionAbility = id => `${baseUrl}${version}/img/spell/${id}`;
// Summoner Spells
export const getSummonerSpell = id => `${baseUrl}${version}/img/spell/${id}`;
export const getSummonerSpellById = id => {
  if (!id) {
    return getUnknown();
  }
  return getSummonerSpell(summonerSpells.data[id.toString()].image.full);
};
// Items
export const getItem = id => `${baseUrl}${version}/img/item/${id}`;
export const getItemById = id => {
  if (!id) {
    return getUnknown();
  }
  return getItem(`${id}.png`);
};
// Sprites
export const getSprite = id => `${baseUrl}${version}/img/sprite/${id}`;
// Minimaps
export const getMinimap = id => {
  return `https://s3-us-west-1.amazonaws.com/riot-developer-portal/docs/map${id}.png`;
};
// Scoreboard Icons
export const getScoreboardIcon = id => `${baseUrl}${version}/img/ui/${id}`;

// SPECTATOR GRIDS & PLATFORM IDS
export const getSpectatorDomainAndPort = platformId => {
  switch (platformId) {
    case 'NA1':
      return {
        domain: 'spectator.na.lol.riotgames.com',
        port: 80
      };

    case 'EUW1':
      return {
        domain: 'spectator.euw1.lol.riotgames.com',
        port: 80
      };

    case 'EUN1':
      return {
        domain: 'spectator.eu.lol.riotgames.com',
        port: 8088
      };

    case 'JP1':
      return {
        domain: 'spectator.jp1.lol.riotgames.com',
        port: 80
      };

    case 'KR':
      return {
        domain: 'spectator.kr.lol.riotgames.com',
        port: 80
      };

    case 'OC1':
      return {
        domain: 'spectator.oc1.lol.riotgames.com',
        port: 80
      };

    case 'BR1':
      return {
        domain: 'spectator.br.lol.riotgames.com',
        port: 80
      };

    case 'LA1':
      return {
        domain: 'spectator.la1.lol.riotgames.com',
        port: 80
      };

    case 'LA2':
      return {
        domain: 'spectator.la2.lol.riotgames.com',
        port: 80
      };

    case 'RU':
      return {
        domain: 'spectator.ru.lol.riotgames.com',
        port: 80
      };

    case 'TR1':
      return {
        domain: 'spectator.tr.lol.riotgames.com',
        port: 80
      };

    case 'PBE1':
      return {
        domain: 'spectator.pbe1.lol.riotgames.com',
        port: 8088
      };
  }
};
