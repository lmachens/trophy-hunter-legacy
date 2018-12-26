import ChampionGuide from './ChampionGuide';
import PreMatch from './PreMatch';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Pre-Match', module)
  .add('Champ select', () => (
    <PreMatch localPlayerCellId={6} myTeam={myTeam} theirTeam={theirTeam} />
  ))
  .add('Unknown Champion', () => <ChampionGuide championId={0} />)
  .add('Annie', () => <ChampionGuide championId={1} />)
  .add('Cassiopeia', () => <ChampionGuide championId={69} />);

const myTeam = [
  {
    assignedPosition: 'BOTTOM',
    cellId: 5,
    championId: 21,
    championPickIntent: 21,
    displayName: 'TheGreenPuzzles',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 7,
    spell2Id: 4,
    summonerId: 80740532,
    team: 2,
    wardSkinId: -1
  },
  {
    assignedPosition: 'TOP',
    cellId: 6,
    championId: 0,
    championPickIntent: 69,
    displayName: 'Aromakeks',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 12,
    spell2Id: 4,
    summonerId: 23638216,
    team: 2,
    wardSkinId: 19
  },
  {
    assignedPosition: 'MIDDLE',
    cellId: 7,
    championId: 0,
    championPickIntent: 0,
    displayName: 'ComplexityNP',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 12,
    spell2Id: 4,
    summonerId: 79770682,
    team: 2,
    wardSkinId: -1
  },
  {
    assignedPosition: 'JUNGLE',
    cellId: 8,
    championId: 0,
    championPickIntent: 0,
    displayName: 'Aligor91',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 4,
    spell2Id: 14,
    summonerId: 22459271,
    team: 2,
    wardSkinId: -1
  },
  {
    assignedPosition: 'UTILITY',
    cellId: 9,
    championId: 0,
    championPickIntent: 0,
    displayName: 'Jesus Riven ',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 4,
    spell2Id: 11,
    summonerId: 19996792,
    team: 2,
    wardSkinId: -1
  }
];

const theirTeam = [
  {
    assignedPosition: '',
    cellId: 0,
    championId: 0,
    championPickIntent: 0,
    displayName: '',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 0,
    spell2Id: 0,
    summonerId: 0,
    team: 1,
    wardSkinId: -1
  },
  {
    assignedPosition: '',
    cellId: 1,
    championId: 0,
    championPickIntent: 0,
    displayName: '',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 0,
    spell2Id: 0,
    summonerId: 0,
    team: 1,
    wardSkinId: -1
  },
  {
    assignedPosition: '',
    cellId: 2,
    championId: 0,
    championPickIntent: 0,
    displayName: '',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 0,
    spell2Id: 0,
    summonerId: 0,
    team: 1,
    wardSkinId: -1
  },
  {
    assignedPosition: '',
    cellId: 3,
    championId: 0,
    championPickIntent: 0,
    displayName: '',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 0,
    spell2Id: 0,
    summonerId: 0,
    team: 1,
    wardSkinId: -1
  },
  {
    assignedPosition: '',
    cellId: 4,
    championId: 0,
    championPickIntent: 0,
    displayName: '',
    playerType: '',
    selectedSkinId: 0,
    spell1Id: 0,
    spell2Id: 0,
    summonerId: 0,
    team: 1,
    wardSkinId: -1
  }
];
