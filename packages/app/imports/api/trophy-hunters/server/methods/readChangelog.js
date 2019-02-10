import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';

const serverVersion = Meteor.settings && Meteor.settings.public.version;

const readChangelog = function() {
  // Make sure the user is logged in
  const userId = Meteor.userId();
  if (!userId) {
    throw new Meteor.Error('not-authorized');
  }

  return TrophyHunters.update(
    { userId },
    {
      $set: {
        lastVersion: serverVersion
      }
    }
  );
};

export default readChangelog;
