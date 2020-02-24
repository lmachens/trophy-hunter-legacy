import { Meteor } from 'meteor/meteor';
import { RECEIVE_CONNECTION_STATUS } from '../types';
import { Tracker } from 'meteor/tracker';

let called = false;
export const trackConnectionStatus = () => {
  if (!called) {
    called = true;
    return dispatch => {
      Tracker.autorun(() => {
        const connectionStatus = Meteor.connection.status();
        dispatch({
          type: RECEIVE_CONNECTION_STATUS,
          connectionStatus
        });
      });
    };
  }
};

export const reconnect = () => {
  return () => {
    Meteor.connection.reconnect();
  };
};
