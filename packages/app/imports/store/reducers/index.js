import { account } from './_account';
import { championMatchesByChampionId } from './_championMatches';
import { championStatsByChampionId } from './_championStats';
import { combineReducers } from 'redux';
import { connectionStatus } from './_connectionStatus';
import { encyclopediaDialog } from './_encyclopedia';
import { liveMatch } from './_liveMatch';
import { matchesByMatchup } from './_matchupMatches';
import { matchesByParticipant } from './_participantMatches';
import { participantsHeatmapByParticipant } from './_participantsHeatmap';
import { participantsPerformanceByParticipant } from './_participantsPerformance';
import { playedTogetherBySummonerNames } from './_playedTogether';
import { statsByMatchup } from './_matchupStats';
import { trophyStatsByTrophyName } from './_trophyStats';
import { uiStates } from './_uiStates';

const reducers = combineReducers({
  account,
  championStatsByChampionId,
  championMatchesByChampionId,
  connectionStatus,
  encyclopediaDialog,
  trophyStatsByTrophyName,
  liveMatch,
  matchesByMatchup,
  matchesByParticipant,
  participantsHeatmapByParticipant,
  participantsPerformanceByParticipant,
  playedTogetherBySummonerNames,
  statsByMatchup,
  uiStates
});

export default reducers;
