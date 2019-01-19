import {
  processHeartbeatJobsServiceJob,
  processRefreshRiotApiStatusJob
} from '../../../api/status/server/jobs';

import { Job } from 'meteor/simonsimcity:job-collection';
import Jobs from '/imports/api/jobs/jobs';
import { Meteor } from 'meteor/meteor';
import cleanup from '/imports/api/jobs/server/cleanup';
import drawLotteryWinners from '/imports/api/jobs/server/drawLotteryWinners';
import refreshMatchForGameSession from '/imports/api/jobs/server/refreshMatchForGameSession';
import { refreshStreamsJob } from '/imports/api/twitch-api/server/refreshStreamsJob';

Meteor.startup(function() {
  // Start the Jobs queue running
  Jobs.startJobServer();

  Jobs.remove({ type: 'cleanup' });
  new Job.processJobs('Jobs', 'cleanup', cleanup);

  new Job.processJobs(
    'Jobs',
    'refreshMatchForGameSession',
    {
      concurrency: 1
    },
    refreshMatchForGameSession
  );

  new Job.processJobs('Jobs', 'drawLotteryWinners', drawLotteryWinners);

  Jobs.remove({ type: 'refreshStreams' });
  new Job.processJobs('Jobs', 'refreshStreams', refreshStreamsJob);
  new Job(Jobs, 'refreshStreams', {})
    .repeat({
      repeats: Job.forever,
      wait: 60000
    })
    .save();

  processRefreshRiotApiStatusJob();
  processHeartbeatJobsServiceJob();
});
