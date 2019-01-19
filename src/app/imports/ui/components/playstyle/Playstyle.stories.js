import Playstyle from './Playstyle';
import React from 'react';
import { storiesOf } from '@storybook/react';
import playstyles from '../../../api/playstyles/playstyles';

const trophyHunter = {
  playstyle: playstyles.theBear,
  attributes: {}
};

storiesOf('Components', module).add('Playstyle  ', () => <Playstyle trophyHunter={trophyHunter} />);
