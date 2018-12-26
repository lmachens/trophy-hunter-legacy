import Notifications, { notificationTypes } from '/imports/api/notifications/notifications';

import Lotteries from '/imports/api/lotteries/lotteries';
import LotteryTickets from '/imports/api/lotteries/lotteryTickets';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';

const drawLotteryWinners = (job, cb) => {
  console.log('drawLotteryWinners'.blue, 'start');

  const { lotteryId } = job.data;

  const lottery = Lotteries.findOne(lotteryId);
  if (!lottery) {
    throw new Error('drawLotteryWinners', 'Lottery does not exists', lotteryId);
  }
  if (lottery.drawn) {
    throw new Error('buyLotteryTicket', 'Winners already drawn', lotteryId);
  }
  const lotteryTicketsLeft = LotteryTickets.find({ lotteryId }).fetch();
  let ticketsLeft = lottery.soldTickets;
  lottery.prices.forEach((price, index) => {
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

        job.log(`Price index ${index}`, { data: { winner: price.winner } });
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

  console.log('drawLotteryWinners'.blue, 'end');
  job.done();
  cb();
};

export default drawLotteryWinners;
