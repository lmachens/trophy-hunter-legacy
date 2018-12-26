import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';
import alerts from '../../../alerts/alerts';
import { getProfileIcon } from '../../../riot-api/staticData';
import moment from 'moment';

const addReferrer = function(referrerUserId) {
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

const sendAlert = function(
  { category, details },
  { createdAt, overwolfUser, summonerName, region, profileIconId }
) {
  alerts.sendToSlack({
    username: 'Referrer Alerts',
    icon_emoji: ':information_source:',
    text: 'New referrer!',
    attachments: [
      {
        author_name: `${summonerName} (${region})`,
        author_icon: getProfileIcon(profileIconId),
        fields: [
          {
            title: 'Categorie',
            value: category,
            short: false
          },
          {
            title: 'Details',
            value: details,
            short: false
          },
          {
            title: 'Registered at',
            value: moment(createdAt).format('DD/MM/YYYY - hh:mma'),
            short: false
          },
          {
            title: 'Overwolf user',
            value: `Username: ${overwolfUser && overwolfUser.username}\nUser ID: ${overwolfUser &&
              overwolfUser.userId}\nMachine ID: ${overwolfUser && overwolfUser.machineId}`,
            short: true
          }
        ]
      }
    ]
  });
};

export { addReferrer, sendAlert };
