import LotteryItem from './LotteryItem';
import React from 'react';
import { storiesOf } from '@storybook/react';

const exampleLotteries = [
  {
    active: false,
    drawingAt: new Date(),
    prices: [
      {
        type: 'LOTTERY_TYPES.RP_CODE_10',
        value: 'test',
        winner: {
          summonerName: 'testname',
          region: 'EUW'
        },
        redeemed: false
      }
    ],
    pricePerTicket: 1.2,
    soldTickets: 750,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

storiesOf('Components', module).add('LotteryItem', () => (
  <LotteryItem lotteries={exampleLotteries} />
));
