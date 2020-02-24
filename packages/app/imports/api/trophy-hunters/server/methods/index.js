import { Meteor } from 'meteor/meteor';
import { disconnectPatreon } from './_disconnectPatreon';
import { getRanking } from './_getRanking';
import { getTrophyHunterByName } from './_getTrophyHunterByName';
import { spectateCurrentMatch } from './_spectateCurrentMatch';
import { toggleFriend } from './_toggleFriend';
import { unlockItem } from './_unlockItem';
import updateOverwolfUser from './updateOverwolfUser';
import loginTrophyHunter from './loginTrophyHunter';
import readChangelog from './readChangelog';

Meteor.methods({
  unlockItem,
  spectateCurrentMatch,
  toggleFriend,
  getRanking,
  getTrophyHunterByName,
  updateOverwolfUser,
  disconnectPatreon,
  loginTrophyHunter,
  readChangelog
});
