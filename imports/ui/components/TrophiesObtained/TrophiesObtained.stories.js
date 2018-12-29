import TrophiesObtained from './TrophiesObtained';
import React from 'react';
import { storiesOf } from '@storybook/react';

const extendedMatchResult = {
  platformId: 'NA1',
  participantIdentity: {
    player: {
      summonerId: 1
    }
  },
  gameId: 123
};

storiesOf('TrophiesObtained', module).add('TrophiesObtained', () => (
  <TrophiesObtained extendedMatchResult={extendedMatchResult} />
));
