import { ILeaguePositions, IMatchWithTimeline, ISummoner } from '../../shared/riot-api/typings';

export interface ISummonerProps {
  summoner: ISummoner;
  region: string;
  summonerName: string;
  leaguePositions: ILeaguePositions;
  trophyHunter: any;
  lastMatches: IMatchWithTimeline[];
}
