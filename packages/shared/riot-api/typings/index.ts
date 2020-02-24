export interface ISummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface ILeaguePosition {
  leagueId: string;
  leagueName: string;
  queueType: string;
  position: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
  summonerId: string;
  summonerName: string;
}

export interface IMatchReference {
  platformId: string;
  gameId: number;
  champion: number;
  queue: number;
  season: number;
  timestamp: number;
  role: string;
  lane: string;
}

export interface IMatchList {
  matches: IMatchReference[];
  totalGames: number;
  startIndex: number;
  endIndex: number;
}

export interface IMatch {
  platformId: string;
  gameId: number;
  gameCreation: number;
  gameDuration: number;
  queueId: number;
  mapId: number;
  seasonId: number;
  gameVersion: string;
  gameMode: string;
  gameType: string;
  teams: any[];
  participants: any[];
  participantIdentities: any[];
}

export interface ITimeline {
  frames: any[];
  frameInterval: number;
}

export interface IMatchWithTimeline extends IMatch {
  timeline: ITimeline;
}

export type ILeaguePositions = ILeaguePosition[];
