import TrophyStats from './TrophyStats';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { trophies } from '/imports/shared/trophies/trophies.ts';
import { store } from '../../../store/store';
import { receiveTrophyStats } from '../../../store/actions';

const trophy = trophies.adventurer;

storiesOf('Components', module).add('TrophyStats', () => {
  store.dispatch(
    receiveTrophyStats(trophy.name, {
      totalCount: 123,
      distinctTrophyHunters: 42
    })
  );
  return <TrophyStats hideRefresh={false} trophy={trophy} />;
});
