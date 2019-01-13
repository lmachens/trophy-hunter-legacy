import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.registerLoginHandler(({ userId }) => {
  if (!userId) {
    return undefined;
  }

  const user = Meteor.users.findOne(userId);
  if (!user) {
    return {
      userId: null,
      error: 'no user found'
    };
  }

  //creating the token and adding to the user
  const stampedToken = Accounts._generateStampedLoginToken();
  const hashStampedToken = Accounts._hashStampedToken(stampedToken);

  Meteor.users.update(userId, {
    $push: { 'services.resume.loginTokens': hashStampedToken }
  });

  //sending token along with the userId
  return {
    userId,
    token: stampedToken.token
  };
});
