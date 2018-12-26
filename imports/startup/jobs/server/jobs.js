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
import { updateChampionGGStatsJob } from '/imports/api/champions/server/jobs';

Meteor.startup(function() {
  // Start the Jobs queue running
  Jobs.startJobServer();

  Jobs.remove({ type: 'cleanup' });
  new Job.processJobs('Jobs', 'cleanup', cleanup);

  if (!Meteor.settings.preventCleanup) {
    new Job(Jobs, 'cleanup', {})
      .delay(60 * 1000) // delay first run for 1 minute
      .save();
  }

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

  Jobs.remove({ type: 'updateChampionGGStats' });
  new Job.processJobs('Jobs', 'updateChampionGGStats', updateChampionGGStatsJob);

  new Job(Jobs, 'updateChampionGGStats', {})
    .repeat({
      repeats: Job.forever,
      wait: 12 * 60 * 60 * 1000 // every 12 hours
    })
    .delay(60000 * 3)
    .save();

  processRefreshRiotApiStatusJob();
  processHeartbeatJobsServiceJob();
});
