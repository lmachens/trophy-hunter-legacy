import { HTTP } from 'meteor/http';
import { Job } from 'meteor/simonsimcity:job-collection';
import Jobs from '/imports/api/jobs/jobs';
import { RiotApiStatus } from '../../collections';

const apiUrl = 'https://querijn.codes/api_status/1.1/';
const relevantEndpoints = [
  'champion-mastery-v4',
  'league-v4',
  'match-v4',
  'spectator-v4',
  'summoner-v4'
];

const refreshRiotApiStatus = (job, cb) => {
  job.log('started refreshRiotApiStatus');

  Jobs.remove({ type: 'refreshRiotApiStatus', status: 'completed' });

  try {
    const beforeUpdateDate = new Date();

    const result = HTTP.get(apiUrl);
    const content = JSON.parse(result.content);
    Object.entries(content).forEach(([endpoint, regions]) => {
      if (!relevantEndpoints[endpoint]) return;
      Object.entries(regions).forEach(([region, status]) => {
        if (status.state !== 'up') {
          RiotApiStatus.upsert(
            {
              endpoint,
              region
            },
            {
              $setOnInsert: {
                endpoint,
                region
              },
              $set: {
                state: status.state,
                invalidate: false
              }
            }
          );
        }
      });
    });

    // Invalidate old status
    RiotApiStatus.update(
      { updatedAt: { $lt: beforeUpdateDate } },
      { $set: { invalidate: true } },
      { multi: true }
    );
  } catch (error) {
    // failed
  }

  job.done();
  cb();
};

export const processRefreshRiotApiStatusJob = () => {
  Jobs.remove({ type: 'refreshRiotApiStatus' });
  new Job.processJobs('Jobs', 'refreshRiotApiStatus', refreshRiotApiStatus);
  new Job(Jobs, 'refreshRiotApiStatus', {})
    .repeat({
      repeats: Job.forever,
      wait: 60 * 1000
    })
    .delay(60000 * 2)
    .save();
};
