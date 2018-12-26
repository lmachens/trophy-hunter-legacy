import { ARAM, SUMMONERS_RIFT, TWISTED_TREELINE } from '../types';

import { MATCHMAKING } from '/imports/api/riot-api/gameConstants';

const summonersRift = [
  MATCHMAKING.NORMAL_5x5_DRAFT,
  MATCHMAKING.NORMAL_DRAFT_PICK_5x5,
  MATCHMAKING.RANKED_SOLO_SR,
  MATCHMAKING.RANKED_FLEX_SR,
  MATCHMAKING.TB_BLIND_SUMMONERS_RIFT_5x5
];

const aram = [MATCHMAKING.ARAM_5v5, MATCHMAKING.BILGEWATER_ARAM_5x5];
const twistedTreeline = [MATCHMAKING.BLIND_PICK_3v3, MATCHMAKING.RANKED_3v3];

export const getTrophiesCategory = queueId => {
  if (summonersRift.includes(queueId)) return SUMMONERS_RIFT;
  if (aram.includes(queueId)) return ARAM;
  if (twistedTreeline.includes(queueId)) return TWISTED_TREELINE;
};
