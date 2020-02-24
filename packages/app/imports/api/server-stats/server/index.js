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
  console.log('register', name);
  const now = new Date();
  ServerStats.upsert(
    { name },
    { $setOnInsert: { createdAt: now, updatedAt: now, name, connections: 0 } }
  );

  setInterval(async () => {
    const count = await getConnections();
    const now = new Date();

    ServerStats.upsert(
      { name },
      {
        $setOnInsert: { createdAt: now, name },
        $set: { connections: count, updatedAt: now }
      }
    );
  }, 60000);

  process.on('exit', () => {
    ServerStats.remove({ name });
  });
};
