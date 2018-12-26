import Encyclopedia, { TABS } from './Encyclopedia';

import React from 'react';
import { openEncyclopediaEntry } from '../../../store/actions';
import { store } from '../../../store/store';
import { storiesOf } from '@storybook/react';

storiesOf('Encyclopedia', module)
  .add('Trees', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.TREES }));
    return <Encyclopedia />;
  })
  .add('Trophies', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.TROPHIES }));
    return <Encyclopedia />;
  })
  .add('Playstyles', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.PLAYSTYLES }));
    return <Encyclopedia />;
  })
  .add('Attributes', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.ATTRIBUTES }));
    return <Encyclopedia />;
  });
