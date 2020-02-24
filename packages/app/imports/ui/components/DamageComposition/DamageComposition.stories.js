import DamageComposition from './DamageComposition';
import React from 'react';
import { storiesOf } from '@storybook/react';

const participants = [
  {
    roleStats: {
      damageComposition: {
        totalTrue: 0.1,
        totalMagical: 0.4,
        totalPhysical: 0.5
      }
    }
  }
];

storiesOf('Components', module).add('DamageComposition', () => (
  <DamageComposition
    barStyle={{}}
    hideLegend={true}
    participants={participants}
    style={{}}
    title={`Team Damage`}
  />
));
