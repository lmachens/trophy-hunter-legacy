import TimelineParticipant from './TimelineParticipant';
import React from 'react';
import { storiesOf } from '@storybook/react';
import champions from '../../../api/riot-api/static/champions';

const participant = {
  spell1Id: 1,
  spell2Id: 3
};

const participantIdentity = {
  player: {
    summonerName: 'Summoner'
  }
};

storiesOf('Components', module).add('TimelineParticipant', () => (
  <TimelineParticipant
    champion={champions[103]}
    participant={participant}
    participantIdentity={participantIdentity}
  />
));
