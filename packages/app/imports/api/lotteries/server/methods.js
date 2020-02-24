import { Job } from 'meteor/simonsimcity:job-collection';
import Jobs from '/imports/api/jobs/jobs';
import Lotteries from '../lotteries';
import LotteryTickets from '../lotteryTickets';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophy-hunters/trophyHunters';
import { check } from 'meteor/check';

Meteor.methods({
  /**
   * Meteor.call('addLottery', {
   *   drawingAt: new Date(),
   *   prices: [{type: 'RP_CODE_10', value: '123'}],
   *   pricePerTicket: 1
   * })
   * @param {*} props
   */
  addLottery(props) {
    check(props, {
      drawingAt: Date,
      prices: Array,
      pricePerTicket: Number
    });

    const user = Meteor.user();
    if (
      !user ||
      (user._id !== '68yz7FfLwgQJoY3c2' &&
        user._id !== 'ZLqcYvH4oyL2sC7jx' &&
        user.username !== 'EUW.24688273')
    ) {
      throw new Meteor.Error('addLottery', 'not-authorized');
    }
    props.active = !Lotteries.findOne({ active: true, drawn: false });
    const lotteryId = Lotteries.insert(props);
    new Job(Jobs, 'drawLotteryWinners', { lotteryId }).delay(props.drawingAt - Date.now()).save();

    return true;
  },
  buyLotteryTickets(lotteryId, amount) {
    //this.unblock();
    check(lotteryId, String);
    check(amount, Number);

    const lottery = Lotteries.findOne(lotteryId);
    if (!lottery) {
      throw new Error('buyLotteryTicket', 'Lottery does not exists', lotteryId);
    }
    if (lottery.drawn) {
      throw new Error('buyLotteryTicket', 'Winners already drawn', lotteryId);
    }
    if (amount < 1) {
      throw new Error('buyLotteryTicket', 'Amount has to be at least 1', amount);
    }

    const userId = Meteor.userId();
    if (!userId) {
      throw new Error('buyLotteryTicket', 'Not logged in');
    }
    const trophyHunter = TrophyHunters.findOne({ userId });
    if (!trophyHunter) {
      throw new Error('buyLotteryTicket', 'Trophy Hunter not found', userId);
    }
    const totalPrice = lottery.pricePerTicket * amount;
    if (trophyHunter.trophyPoints < totalPrice) {
      throw new Error(
        'buyLotteryTicket',
        'Not enough trophy points',
        trophyHunter.trophyPoints,
        totalPrice
      );
    }

    TrophyHunters.update(
      { userId },
      {
        $inc: {
          trophyPoints: -totalPrice
        }
      }
    );
    const lotteryTicket = LotteryTickets.findOne({
      lotteryId,
      userId
    });
    // Due to reasons upsert is not working here (maybe Meteor 1.6 issue?)
    if (lotteryTicket) {
      LotteryTickets.update(lotteryTicket._id, {
        $inc: {
          amount
        }
      });
    } else {
      LotteryTickets.insert({
        lotteryId,
        userId,
        amount
      });
    }

    Lotteries.update(lotteryId, {
      $inc: {
        soldTickets: amount
      }
    });
    return true;
  },
  redeemPrice(lotteryId) {
    //this.unblock();
    check(lotteryId, String);

    const lottery = Lotteries.findOne(lotteryId);
    if (!lottery) {
      throw new Error('redeemPrice', 'Lottery does not exists', lotteryId);
    }
    if (!lottery.drawn) {
      throw new Error('redeemPrice', 'Winners not drawn', lotteryId);
    }

    const userId = Meteor.userId();
    if (!userId) {
      throw new Error('redeemPrice', 'Not logged in');
    }

    const price = lottery.prices.find(price => price.winner.userId === userId);
    if (!price) {
      throw new Error('redeemPrice', 'Price not found');
    }

    Lotteries.update(
      {
        _id: lotteryId,
        'prices.winner.userId': userId
      },
      {
        $set: {
          'prices.$.redeemed': true
        }
      }
    );

    return price.value;
  }
});
