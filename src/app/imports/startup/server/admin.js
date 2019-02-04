import GameSessions from '/imports/api/game-sessions/gameSessions';
import { Meteor } from 'meteor/meteor';
import os from 'os';
import Jobs from '/imports/api/jobs/jobs';
import { check } from 'meteor/check';
import { drawLotteryWinners } from '/imports/api/jobs/server/drawLotteryWinners';

const hostname = os.hostname();

export const checkUser = () => {
  const user = Meteor.user();
  if (
    !user ||
    (user._id !== '68yz7FfLwgQJoY3c2' &&
      user._id !== 'ZLqcYvH4oyL2sC7jx' &&
      user.username !== 'EUW.24688273')
  ) {
    throw new Meteor.Error('not-authorized');
  }
};

Meteor.methods({
  hostname() {
    return hostname;
  },
  memoryUsage() {
    return process.memoryUsage();
  },
  forceShutdown() {
    this.unblock();
    checkUser();

    console.log('exit');
    process.exit(1);
  },
  reprocessFailed() {
    this.unblock();
    checkUser();
    GameSessions.find({ checkedStatus: 'failed' }, { limit: 100 }).forEach(gameSession => {
      console.log(gameSession._id);
      gameSession.restartJob();
    });
  },
  getConnection() {
    this.unblock();
    checkUser();

    return this.connection;
  },
  restartLottery() {
    Jobs.find({ type: 'drawLotteryWinners', status: 'failed' })
      .fetch()
      .forEach(job => {
        new Job(Jobs, 'drawLotteryWinners', { lotteryId: job.data.lotteryId }).save();
        Jobs.remove(job._id);
      });
  },
  drawLotteryWinners(lotteryId) {
    check(lotteryId, String);

    drawLotteryWinners(lotteryId);
  }
});
