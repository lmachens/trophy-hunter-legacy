import Jobs from '/imports/api/jobs/jobs';
import updateChampionGGStats from './updateChampionGGStats';

export const updateChampionGGStatsJob = (job, cb) => {
  console.log('updateChampionGGStats'.blue, 'start');

  updateChampionGGStats();

  // Remove old cleanup jobs
  Jobs.remove({ type: 'updateChampionGGStats', status: 'completed' });

  job.done();
  cb();
  console.log('updateChampionGGStats'.blue, 'end');
};
