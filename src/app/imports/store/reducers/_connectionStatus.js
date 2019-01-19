import { RECEIVE_CONNECTION_STATUS } from '../types';

export const connectionStatus = (
  state = {
    status: 'connected',
    connected: true,
    retryCount: 0,
    retryTime: null
  },
  action
) => {
  const { type, ...data } = action;
  switch (type) {
    case RECEIVE_CONNECTION_STATUS:
      return { ...data.connectionStatus };
    default:
      return state;
  }
};
