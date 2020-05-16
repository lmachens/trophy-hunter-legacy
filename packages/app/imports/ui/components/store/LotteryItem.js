import { Button, TextField } from '../generic';
import Lotteries, { prices } from '../../../api/lotteries/lotteries';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Countdown from 'react-countdown-now';
import LotteryTickets from '../../../api/lotteries/lotteryTickets';
import LotteryWin from '../LotteryWin';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import groupBy from 'lodash.groupby';
import moment from 'moment';
import { withTracker } from 'meteor/react-meteor-data';

class Lottery extends Component {
  state = {
    amount: 0,
    busy: false
  };

  handleTicketsChange = event => {
    const maxTickets = this.calculateMaxTickets();
    let amount = parseInt(event.target.value);
    if (amount < 0) {
      amount = 0;
    } else if (amount > maxTickets) {
      amount = maxTickets;
    }
    this.setState({ amount });
  };

  calculateMaxTickets = () => {
    const { lottery, trophyPoints } = this.props;
    return parseInt((trophyPoints || 0) / lottery.pricePerTicket);
  };

  handleBuy = () => {
    const { lottery } = this.props;
    const { amount } = this.state;
    this.setState(
      {
        busy: true
      },
      () => {
        Meteor.call('buyLotteryTickets', lottery._id, amount, () => {
          this.setState({ amount: 0, busy: false });
        });
      }
    );
  };

  render() {
    const { lottery, myLotteryTicket } = this.props;
    const { amount, busy } = this.state;
    const maxTickets = this.calculateMaxTickets();
    const boughtTickets = myLotteryTicket ? myLotteryTicket.amount : 0;

    const winRate = Math.min(
      ((Object.keys(lottery.prices).length * boughtTickets) / lottery.soldTickets) * 100,
      100
    );
    return (
      <div>
        <h2>
          Next drawing in{' '}
          <b>
            <Countdown date={lottery.drawingAt} />
          </b>
        </h2>
        <div>
          Price per ticket: <b>{lottery.pricePerTicket} TP</b>
          <br />
          Sold tickets: <b>{new Intl.NumberFormat().format(lottery.soldTickets)}</b>
          <br />
          You have <b>{new Intl.NumberFormat().format(boughtTickets)}</b> tickets (
          {boughtTickets > 0 ? winRate.toFixed(2) : '0'} % win rate)
        </div>

        <div>
          Prices:{' '}
          {Object.entries(groupBy(lottery.prices, price => price.type)).map(([type, values]) => (
            <b key={type}>
              {values.length} x {prices[type]}
            </b>
          ))}
        </div>
        {Date.now() < lottery.drawingAt && (
          <div>
            <TextField
              floatingLabelText={`You can buy ${maxTickets} tickets`}
              hintStyle={{ color: '#757575' }}
              hintText="Number of Tickets"
              max={maxTickets}
              min={0}
              onChange={this.handleTicketsChange}
              type="number"
              value={amount}
            />
            <Button disabled={amount === 0 || busy} label="Buy" onClick={this.handleBuy} />
          </div>
        )}
      </div>
    );
  }
}

Lottery.propTypes = {
  lottery: PropTypes.object.isRequired,
  myLotteryTicket: PropTypes.object,
  trophyPoints: PropTypes.number
};

const LotteryContainer = withTracker(({ lottery, userId }) => {
  if (!userId) {
    return {};
  }
  Meteor.subscribe('myLotteryTicket', lottery._id);

  const myLotteryTicket = LotteryTickets.findOne({ lotteryId: lottery._id, userId });

  return {
    myLotteryTicket
  };
})(Lottery);

const mapStateToProps = ({ account: { userId, trophyHunter } }) => {
  return { userId, trophyPoints: get(trophyHunter, 'trophyPoints') };
};

const LotteryContainerWithRedux = connect(mapStateToProps)(LotteryContainer);

const LotteryStats = ({ lastLotteries }) => {
  const totalPrice = lastLotteries.reduce((prev, current) => {
    return prev + current.prices.length * 10;
  }, 0);

  return (
    <div>
      We already gave away <b>${totalPrice}</b>
      !!! RP codes are paid from our ads revenue.
    </div>
  );
};

LotteryStats.propTypes = {
  lastLotteries: PropTypes.array.isRequired
};

const PastLottery = ({ lottery }) => (
  <div>
    <h2>Lottery from {moment(lottery.drawingAt).calendar()}</h2>
    {Object.entries(groupBy(lottery.prices, price => price.type)).map(([type, values]) => (
      <b key={`${lottery._id}-${type}`}>
        <LotteryWin lotteryId={lottery._id} />
        <br />
        {values.length} x {prices[type]} ({new Intl.NumberFormat().format(lottery.soldTickets)} sold
        tickets)
        <br />
        {values
          .map((value, index) => (
            <div key={index}>
              {value.winner && (
                <Link to={`/profile/${value.winner.userId}/trees`}>
                  {value.winner.summonerName} ({value.winner.region})
                </Link>
              )}
            </div>
          ))
          .reduce((prev, curr) => [prev, ' ', curr])}
      </b>
    ))}
  </div>
);

PastLottery.propTypes = {
  lottery: PropTypes.object.isRequired
};

const LotteryItem = ({ lotteries }) => {
  let activeLottery, lastLotteries;
  if (lotteries[0] && !lotteries[0].drawn) {
    activeLottery = lotteries[0];
    if (lotteries[1]) {
      lastLotteries = lotteries.slice(1);
    }
  } else {
    lastLotteries = lotteries;
  }
  return (
    <div style={{ height: 418 }}>
      <p>
        We already gave away $2950 in the last years!!!
        <br />
        But there won't be any more lotteries. I spend nearly the same money on hosting and the RP
        lottery as I earn with the ads revenue in the last few months.
        <br />
        In addition, a new version of Trophy Hunter is in development and will hopefully released
        end of this summer.
      </p>
      {activeLottery && <LotteryContainerWithRedux lottery={activeLottery} />}
      {lastLotteries && (
        <>
          <LotteryStats lastLotteries={lastLotteries} />
          {lastLotteries.map(lastLottery => (
            <PastLottery key={lastLottery._id} lottery={lastLottery} />
          ))}
        </>
      )}
    </div>
  );
};

LotteryItem.propTypes = {
  lotteries: PropTypes.array.isRequired,
  trophyHunter: PropTypes.object
};

const LotteryItemContainer = withTracker(() => {
  Meteor.subscribe('lotteries');
  const lotteries = Lotteries.find({}, { sort: { drawingAt: -1 } }).fetch();

  return {
    lotteries
  };
})(LotteryItem);

export default LotteryItemContainer;
