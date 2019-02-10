import { LotteryWin } from './LotteryWin';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { LOTTERY_TYPES } from '../../../api/lotteries/lotteries';

const lottery = {
  prices: [
    { winner: { userId: 123 }, type: LOTTERY_TYPES.RP_CODE_10 },
    { winner: { userId: 345 }, type: LOTTERY_TYPES.RP_CODE_10 }
  ]
};

storiesOf('Components', module)
  .add('LotteryWin:Loss', () => <LotteryWin lottery={lottery} userId={0} />)
  .add('LotteryWin:Win', () => <LotteryWin lottery={lottery} userId={123} />);
