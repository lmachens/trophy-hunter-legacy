import { LOGGED_IN, LOGGED_OUT, LOGGING_IN, RECEIVE_TROPHY_HUNTER } from '../types';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';

let called = false;
export const trackAccount = () => {
  if (!called) {
    called = true;
    return dispatch => {
      Tracker.autorun(() => {
        const userId = Meteor.userId();
        if (userId) {
          dispatch({
            type: LOGGED_IN,
            userId
          });
        } else {
          dispatch({
            type: LOGGED_OUT
          });
        }
      });

      Tracker.autorun(() => {
        dispatch({
          type: LOGGING_IN,
          loggingIn: Meteor.loggingIn()
        });
      });

      Tracker.autorun(() => {
        dispatch({
          type: RECEIVE_TROPHY_HUNTER,
          trophyHunter: TrophyHunters.findOne({ userId: Meteor.userId() })
        });
      });
    };
  }
};
