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

export type ILeaguePositions = ILeaguePosition[];
