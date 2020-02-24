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
        items: {
          '2-12': [
            {
              matches: 2,
              winRate: 1,
              itemId: 1028
            },
            {
              matches: 11,
              winRate: 0.7272727272727273,
              itemId: 3802
            },
            {
              matches: 14,
              winRate: 0.6428571428571429,
              itemId: 2003
            },
            {
              matches: 19,
              winRate: 0.631578947368421,
              itemId: 3070
            },
            {
              matches: 16,
              winRate: 0.5625,
              itemId: 1052
            }
          ],
          '12-22': [
            {
              matches: 7,
              winRate: 0.8571428571428571,
              itemId: 3116
            },
            {
              matches: 15,
              winRate: 0.7333333333333333,
              itemId: 1052
            },
            {
              matches: 14,
              winRate: 0.7142857142857143,
              itemId: 1026
            },
            {
              matches: 17,
              winRate: 0.6470588235294118,
              itemId: 3003
            },
            {
              matches: 5,
              winRate: 0.6,
              itemId: 2003
            }
          ],
          '22-32': [
            {
              matches: 2,
              winRate: 1,
              itemId: 3165
            },
            {
              matches: 6,
              winRate: 0.6666666666666666,
              itemId: 1052
            },
            {
              matches: 3,
              winRate: 0.6666666666666666,
              itemId: 3136
            },
            {
              matches: 2,
              winRate: 0.5,
              itemId: 1058
            },
            {
              matches: 6,
              winRate: 0.3333333333333333,
              itemId: 1026
            }
          ],
          '32-42': [
            {
              matches: 1,
              winRate: 1,
              itemId: 2139
            },
            {
              matches: 1,
              winRate: 1,
              itemId: 1026
            },
            {
              matches: 1,
              winRate: 1,
              itemId: 1052
            },
            {
              matches: 1,
              winRate: 1,
              itemId: 1058
            },
            {
              matches: 1,
              winRate: 1,
              itemId: 2055
            }
          ],
          '42-52': []
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
