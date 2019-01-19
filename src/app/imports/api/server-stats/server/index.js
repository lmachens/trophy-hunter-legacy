import ServerStats from './collection';
import { WebApp } from 'meteor/webapp';

const getConnections = () => {
  return new Promise(resolve => {
    WebApp.httpServer.getConnections((error, count) => {
      resolve(count);
    });
  });
};

export const register = ({ name }) => {
  const now = new Date();
  ServerStats.upsert(
    { name },
    { $setOnInsert: { createdAt: now, updatedAt: now, name, connections: 0 } }
  );

  process.on('exit', () => {
    ServerStats.remove({
      name
    });
  });

  setInterval(async () => {
    const count = await getConnections();
    const now = new Date();
    ServerStats.update({ name }, { $set: { connections: count, updatedAt: now } });
  }, 60000);

  process.on('exit', () => {
    ServerStats.remove({ name });
  });
};

export const removeDead = () => {
  const shortPast = new Date(Date.now() - 5 * 60 * 1000);
  return ServerStats.remove({ updatedAt: { $lt: shortPast } });
};
