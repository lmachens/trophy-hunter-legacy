import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';

export const addReferrer = function(referrerUserId) {
  const userId = Meteor.userId();
  if (!userId) throw new Error('addReferrer', 'You have to be logged in');
  const trophyHunter = TrophyHunters.findOne({ userId }, { fields: { referrerUserId: 1 } });
  if (trophyHunter.referrerUserId) throw new Error('addReferrer', 'You already added a referrer');

  TrophyHunters.update({ userId }, { $set: { referrerUserId } });

  const referrerTrophyHunter = TrophyHunters.findOne({ userId: referrerUserId });
  const existingReferrerTrophy = referrerTrophyHunter.trophiesObtained.find(
    trophyObtained => trophyObtained.name === 'referrer'
  );
  if (!existingReferrerTrophy) {
    referrerTrophyHunter.trophiesObtained.push({
      name: 'referrer',
      date: new Date(),
      count: 1
    });
  } else {
    existingReferrerTrophy.count++;
  }
  TrophyHunters.update(referrerTrophyHunter._id, {
    $set: { trophiesObtained: referrerTrophyHunter.trophiesObtained },
    $addToSet: { referredUserIds: userId },
    $inc: { trophyPoints: 1000 }
  });
};
