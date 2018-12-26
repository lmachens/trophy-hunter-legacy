import AvatarWithStatus from './AvatarWithStatus';
import { JoinClient } from 'meteor-publish-join';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const TrophyHunterAvatarContainer = withTracker(({ userId }) => {
  Meteor.subscribe('trophyHunters.public', [userId]);

  const trophyHunters = JoinClient.get(`trophyHunters${JSON.stringify([userId])}`);
  const trophyHunter = trophyHunters && trophyHunters[0];

  return {
    trophyHunter
  };
})(AvatarWithStatus);

export default TrophyHunterAvatarContainer;
