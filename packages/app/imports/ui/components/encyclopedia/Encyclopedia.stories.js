import Encyclopedia, { TABS } from './Encyclopedia';

import React from 'react';
import { openEncyclopediaEntry } from '../../../store/actions';
import { store } from '../../../store/store';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module)
  .add('Encyclopedia:Trees', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.TREES }));
    return <Encyclopedia />;
  })
  .add('Encyclopedia:Trophies', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.TROPHIES }));
    return <Encyclopedia />;
  })
  .add('Encyclopedia:Playstyles', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.PLAYSTYLES }));
    return <Encyclopedia />;
  })
  .add('Encyclopedia:Attributes', () => {
    store.dispatch(openEncyclopediaEntry({ tab: TABS.ATTRIBUTES }));
    return <Encyclopedia />;
  });
