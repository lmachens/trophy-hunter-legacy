import { Meteor } from 'meteor/meteor';
import alerts from '../../../alerts/alerts';
import moment from 'moment';

const addFeedback = function(details, { createdAt, overwolfUser, summonerName, region }) {
  alerts.sendToDiscord({
    username: 'Trophy Hunter Bot',
    content: 'New feedback!',
    embeds: [
      {
        title: 'Rating',
        description: `${details.rating} of 5 stars`
      },
      {
        title: 'Text',
        description: details.text
      },
      {
        title: 'Summoner',
        description: `${summonerName} (${region})`
      },
      {
        title: 'Registered at',
        description: moment(createdAt).calendar()
      },
      {
        title: 'Version',
        description: `App: ${overwolfUser && overwolfUser.appVersion}\nServer: ${
          Meteor.settings.public.version
        }\nOverwolf: ${overwolfUser && overwolfUser.overwolfVersion}\nChannel: ${overwolfUser &&
          overwolfUser.channel}\nPartner ID: ${overwolfUser && overwolfUser.partnerId}`,
        short: true
      }
    ]
  });
};

export { addFeedback };
