import { Job } from 'meteor/simonsimcity:job-collection';
import Jobs from '/imports/api/jobs/jobs';
import { JobsServiceStatus } from '../../collections';

const heartbeatJobsService = (job, cb) => {
  job.log('started heartbeatJobsService');

  Jobs.remove({ type: 'heartbeatJobsService', status: 'completed' });

  JobsServiceStatus.upsert(
    {
      job: 'core'
    },
    {
      $setOnInsert: {
        job: 'core'
      },
      $set: {
        healthy: true
      }
    }
  );

  job.done();
  cb();
};

export const processHeartbeatJobsServiceJob = () => {
  Jobs.remove({ type: 'heartbeatJobsService' });
  new Job.processJobs('Jobs', 'heartbeatJobsService', heartbeatJobsService);
  new Job(Jobs, 'heartbeatJobsService', {})
    .repeat({
      repeats: Job.forever,
      wait: 60 * 1000
    })
    .delay(60000)
    .save();
};
