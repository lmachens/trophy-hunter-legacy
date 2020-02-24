import Notifications, { notificationTypes } from '/imports/api/notifications/notifications';
import Jobs from '/imports/api/jobs/jobs';

import Lotteries from '/imports/api/lotteries/lotteries';
import LotteryTickets from '/imports/api/lotteries/lotteryTickets';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';

export const drawLotteryWinners = lotteryId => {
  const lottery = Lotteries.findOne(lotteryId);
  if (!lottery) {
    throw new Meteor.Error('drawLotteryWinners', 'Lottery does not exists', lotteryId);
  }
  if (lottery.drawn) {
    throw new Meteor.Error('buyLotteryTicket', 'Winners already drawn', lotteryId);
  }
  const lotteryTicketsLeft = LotteryTickets.find({ lotteryId }).fetch();
  let ticketsLeft = lottery.soldTickets;
  lottery.prices.forEach(price => {
    if (!ticketsLeft) {
      return;
    }
    const randomTicketIndex = Math.floor(Math.random() * (ticketsLeft - 1));

    let currentIndex = 0;
    for (let i = 0; i < lotteryTicketsLeft.length; i++) {
      currentIndex += lotteryTicketsLeft[i].amount;
      if (randomTicketIndex < currentIndex) {
        const trophyHunter = TrophyHunters.findOne({ userId: lotteryTicketsLeft[i].userId });
        price.winner = {
          userId: trophyHunter.userId,
          summonerName: trophyHunter.summonerName,
          region: trophyHunter.region
        };

        // Remove ticket (limit to 1 price)
        ticketsLeft -= lotteryTicketsLeft[i].amount;
        lotteryTicketsLeft.splice(i, 1);

        Notifications.insert({
          userId: price.winner.userId,
          type: notificationTypes.LOTTERY_WIN,
          data: {
            lotteryId
          },
          important: true
        });

        break;
      }
    }
  });

  lotteryTicketsLeft.forEach(noWinner => {
    Notifications.insert({
      userId: noWinner.userId,
      type: notificationTypes.LOTTERY_LOSS,
      data: {
        lotteryId
      },
      important: true
    });
  });

  Lotteries.update(lotteryId, {
    $set: {
      drawn: true,
      prices: lottery.prices
    }
  });

  Lotteries.update(
    { active: false },
    {
      $set: {
        active: true
      }
    }
  );
};

const drawLotteryWinnersJob = (job, cb) => {
  try {
    console.log('drawLotteryWinners'.blue, 'start');

    Jobs.remove({ type: 'drawLotteryWinners', status: 'completed' });

    const { lotteryId } = job.data;
    drawLotteryWinners(lotteryId);

    console.log('drawLotteryWinners'.blue, 'end');
    job.done();
  } catch (error) {
    job.fail(error.message);
    console.error(error);
  }
  cb();
};

export default drawLotteryWinnersJob;
