import { Meteor } from 'meteor/meteor';
import { disconnectPatreon } from './_disconnectPatreon';
import { getRanking } from './_getRanking';
import { getTrophyHunterByName } from './_getTrophyHunterByName';
import { handleLogin } from './_handleLogin';
import { spectateCurrentMatch } from './_spectateCurrentMatch';
import { toggleFriend } from './_toggleFriend';
import { unlockItem } from './_unlockItem';
import { updateOverwolfUser } from './_updateOverwolfUser';

Meteor.methods({
  handleLogin,
  unlockItem,
  spectateCurrentMatch,
  toggleFriend,
  getRanking,
  getTrophyHunterByName,
  updateOverwolfUser,
  disconnectPatreon
});
