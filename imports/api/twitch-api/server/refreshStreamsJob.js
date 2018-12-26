import Future from 'fibers/future';
import Jobs from '/imports/api/jobs/jobs';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import TwitchStreams from '../twitchStreams';
import twitchApi from '../twitchApi';

export const refreshStreamsJob = (job, cb) => {
  job.log('started refreshStreamsJob');

  Jobs.remove({ type: 'refreshStreams', status: 'completed' });

  const trophyHunters = TrophyHunters.find(
    {
      status: { $in: ['online', 'ingame', 'away'] },
      'items.twitch.name': { $exists: true },
      'items.twitch.visible': true
    },
    {
      fields: TrophyHunters.publicFields
    }
  ).fetch();

  job.log(`fetched ${trophyHunters.length} trophyHunters`);

  const futures = trophyHunters.map(trophyHunter => {
    const future = new Future();

    Meteor.defer(() => {
      const twitchStream = twitchApi.getStreamByUser(trophyHunter.items.twitch.name);
      if (!twitchStream) {
        job.log(`twitch.streams.online stream not found ${trophyHunter.items.twitch.name}`);
        future.return(null);
        return;
      }

      if (!twitchStream.stream) {
        future.return(null);
        return;
      }

      future.return({
        stream: twitchStream.stream,
        trophyHunter
      });
    });

    return future;
  });

  job.log('created futures');

  let cameOnline = 0;
  let staysOnline = 0;
  const onlineIds = [];
  futures.forEach(future => {
    const result = future.wait();
    if (!result) {
      return;
    }
    onlineIds.push(result.stream._id);
    const existingTwitchStream = TwitchStreams.findOne({ 'stream._id': result.stream._id });
    if (existingTwitchStream) {
      staysOnline++;
      TwitchStreams.update(
        { 'stream._id': result.stream._id },
        {
          $set: {
            stream: result.stream,
            trophyHunter: result.trophyHunter
          }
        }
      );
    } else {
      cameOnline++;
      TwitchStreams.insert({
        stream: result.stream,
        trophyHunter: result.trophyHunter
      });
    }
  });
  const cameOffline = TwitchStreams.remove({ 'stream._id': { $nin: onlineIds } });

  job.log('Refreshed streams');

  job.done({ cameOnline, cameOffline, staysOnline });
  cb();
};
