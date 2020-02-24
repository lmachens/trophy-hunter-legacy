import { Button, TextField } from '../generic';
import Lotteries, { LOTTERY_TYPES, prices } from '../../../api/lotteries/lotteries';
import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

export class LotteryWin extends Component {
  state = {
    busy: false,
    priceValue: null
  };

  handleRedeem = () => {
    const { lotteryId } = this.props;
    this.setState(
      {
        busy: true
      },
      () => {
        Meteor.call('redeemPrice', lotteryId, (err, result) => {
          this.setState({
            busy: false,
            priceValue: result
          });
        });
      }
    );
  };

  handleFocus = event => {
    event.target.select();
  };

  render() {
    const { lottery, userId } = this.props;
    const { busy, priceValue } = this.state;

    if (!lottery) {
      return <div />;
    }

    const price = lottery.prices.find(price => price.winner && price.winner.userId === userId);
    if (!price) {
      return <div>Sorry, you didn&#x27;t win this time.</div>;
    }
    return (
      <div>
        Congratulations! You won <b>1 x {prices[price.type]}</b>!<br />
        {!priceValue && <Button disabled={busy} label="Redeem price" onClick={this.handleRedeem} />}
        {priceValue && (
          <TextField
            floatingLabelFixed={true}
            floatingLabelStyle={{ width: '100%', transformOrigin: 'center' }}
            floatingLabelText="Press CTRL+C to copy code"
            inputStyle={{ textAlign: 'center' }}
            name="redeemPrice"
            onFocus={this.handleFocus}
            style={{ width: 300 }}
            value={priceValue}
          />
        )}
        <br />
        {price.type === LOTTERY_TYPES.RP_CODE_10 && priceValue && (
          <a
            href="https://support.riotgames.com/hc/en-us/articles/202801810-Code-Cards-FAQ"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
            target="_blank"
          >
            How can I use this code?
          </a>
        )}
      </div>
    );
  }
}

LotteryWin.propTypes = {
  lotteryId: PropTypes.string.isRequired,
  lottery: PropTypes.object,
  userId: PropTypes.string
};

const LotteryWinContainer = withTracker(({ lotteryId }) => {
  Meteor.subscribe('lotteries', lotteryId);
  const lottery = Lotteries.findOne(lotteryId);
  const userId = Meteor.userId();

  return {
    lottery,
    userId
  };
})(LotteryWin);

export default LotteryWinContainer;
