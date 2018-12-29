import { BuildOrder } from './BuildOrder';
import React from 'react';
import { storiesOf } from '@storybook/react';

const champion = {
  id: 69,
  key: 'Cassiopeia'
};

const role = 'MIDDLE';
const setValue = 'highestCount';
const style = {
  width: 340,
  height: 120
};

const championStatsByChampionId = {
  69: {
    stats: {
      MIDDLE: {
        firstItems: {
          highestCount: {
            count: 123,
            winRate: 0.61,
            items: [1001, 1004]
          }
        },
        finalItems: {
          highestCount: {
            count: 123,
            winRate: 0.61,
            items: [2051, 2057, 3057, 3080, 3104]
          }
        }
      }
    }
  }
};

storiesOf('Components', module).add('BuildOrder', () => (
  <BuildOrder
    champion={champion}
    championStatsByChampionId={championStatsByChampionId}
    role={role}
    setValue={setValue}
    style={style}
  />
));
