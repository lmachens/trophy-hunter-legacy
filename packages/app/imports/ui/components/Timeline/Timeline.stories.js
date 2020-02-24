import Timeline from './Timeline';
import React from 'react';
import { storiesOf } from '@storybook/react';

const matchWithTimeline = {
  mapId: 12,
  participants: [],
  timeline: {
    frames: [
      {
        participantFrames: [],
        events: []
      }
    ]
  }
};

const extendedMatchResult = {
  teams: [{ bans: [] }, { bans: [] }],
  ...matchWithTimeline
};

storiesOf('Components', module).add('Timeline', () => (
  <Timeline extendedMatchResult={extendedMatchResult} matchWithTimeline={matchWithTimeline} />
));
