import { processRefreshRiotApiStatusJob } from '../../../api/status/server/jobs';

import { Job } from 'meteor/simonsimcity:job-collection';
import Jobs from '/imports/api/jobs/jobs';
import { Meteor } from 'meteor/meteor';
import cleanup from '/imports/api/jobs/server/cleanup';
import drawLotteryWinners from '/imports/api/jobs/server/drawLotteryWinners';
import refreshMatchForGameSession from '/imports/api/jobs/server/refreshMatchForGameSession';
import { refreshStreamsJob } from '/imports/api/twitch-api/server/refreshStreamsJob';
import ServerStats from '/imports/api/server-stats/server/collection';
import hostname from './hostname';

const processJobs = () => {
  console.log('Promoted to process jobs');
  ServerStats.update({ name: hostname }, { $set: { primary: true } });
  // Start the Jobs queue running
  Jobs.startJobServer();

  Jobs.remove({ type: 'cleanup' });
  new Job.processJobs('Jobs', 'cleanup', cleanup);

  new Job(Jobs, 'cleanup', {})
    .repeat({
      repeats: Job.forever,
      wait: 15 * 60000
    })
    .delay(60 * 1000)
    .save();

  new Job.processJobs(
    'Jobs',
    'refreshMatchForGameSession',
    { workTimeout: 120 * 60000 },
    refreshMatchForGameSession
  );

  new Job.processJobs(
    'Jobs',
    'drawLotteryWinners',
    { workTimeout: 10 * 120 * 60000 },
    drawLotteryWinners
  );

  Jobs.remove({ type: 'refreshStreams' });
  new Job.processJobs('Jobs', 'refreshStreams', { workTimeout: 30 * 60000 }, refreshStreamsJob);

  new Job(Jobs, 'refreshStreams', {})
    .repeat({
      repeats: Job.forever,
      wait: 60000
    })
    .save();

  processRefreshRiotApiStatusJob();
};

Meteor.startup(() => {
  let checkInstanceInterval;
  const checkInstance = () => {
    // Every instance should remove dead servers from ServerStats collection
    const shortPast = new Date(Date.now() - 5 * 60 * 1000);
    ServerStats.remove({ updatedAt: { $lt: shortPast } });

    const oldestInstance = ServerStats.findOne({}, { sort: { createdAt: 1 } });
    if (oldestInstance && oldestInstance.name === hostname) {
      processJobs();
      clearInterval(checkInstanceInterval);
    }
  };

  checkInstanceInterval = Meteor.setInterval(checkInstance, 60000);
  checkInstance();
});
