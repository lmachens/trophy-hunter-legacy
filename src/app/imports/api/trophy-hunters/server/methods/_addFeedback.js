import { Meteor } from 'meteor/meteor';
import alerts from '../../../alerts/alerts';
import { getProfileIcon } from '../../../riot-api/staticData';
import moment from 'moment';

const addFeedback = function(
  details,
  { createdAt, overwolfUser, summonerName, region, profileIconId }
) {
  alerts.sendToSlack({
    username: 'Feedback Alerts',
    icon_emoji: ':information_source:',
    text: 'New feedback!',
    attachments: [
      {
        author_name: `${summonerName} (${region})`,
        author_icon: getProfileIcon(profileIconId),
        fields: [
          {
            title: 'Rating',
            value: `${details.rating}/5`,
            short: false
          },
          {
            title: 'Text',
            value: details.text,
            short: false
          },
          {
            title: 'Registered at',
            value: moment(createdAt).format('DD/MM/YYYY - hh:mma'),
            short: false
          },
          {
            title: 'Version',
            value: `App: ${overwolfUser && overwolfUser.appVersion}\nServer: ${
              Meteor.settings.public.version
            }\nOverwolf: ${overwolfUser && overwolfUser.overwolfVersion}\nChannel: ${overwolfUser &&
              overwolfUser.channel}\nPartner ID: ${overwolfUser && overwolfUser.partnerId}`,
            short: true
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

export { addFeedback };
