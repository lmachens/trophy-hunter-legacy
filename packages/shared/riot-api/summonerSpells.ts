export interface ISummonerSpell {
  id: number;
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  key: string;
}

interface ISummonerSpells {
  [key: string]: ISummonerSpell;
}

const summonerSpells: ISummonerSpells = {
  '1': {
    id: 1,
    name: 'Cleanse',
    description:
      'Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.',
    image: {
      full: 'SummonerBoost.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 48,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerBoost'
  },
  '3': {
    id: 3,
    name: 'Exhaust',
    description:
      'Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 3 seconds.',
    image: {
      full: 'SummonerExhaust.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 144,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerExhaust'
  },
  '4': {
    id: 4,
    name: 'Flash',
    description: "Teleports your champion a short distance toward your cursor's location.",
    image: {
      full: 'SummonerFlash.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 192,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerFlash'
  },
  '6': {
    id: 6,
    name: 'Ghost',
    description:
      'For 10 seconds, your champion can move through units and gains 24 - 48% Movement Speed (depending on champion level). Ghost extends its duration on takedown.',
    image: {
      full: 'SummonerHaste.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 240,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerHaste'
  },
  '7': {
    id: 7,
    name: 'Heal',
    description:
      'Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.',
    image: {
      full: 'SummonerHeal.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 288,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerHeal'
  },
  '11': {
    id: 11,
    name: 'Smite',
    description:
      'Deals 390-1000 true damage (depending on champion level) to target epic, large, or medium monster or enemy minion. Restores Health based on your maximum life when used against monsters.',
    image: {
      full: 'SummonerSmite.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 0,
      y: 48,
      w: 48,
      h: 48
    },
    key: 'SummonerSmite'
  },
  '12': {
    id: 12,
    name: 'Teleport',
    description:
      'After channeling for 4 seconds, teleports your champion to target allied structure, minion, or ward and grants a Movement Speed boost. The cooldown of Teleport scales from 420-240 seconds depending on champion level.',
    image: {
      full: 'SummonerTeleport.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 144,
      y: 48,
      w: 48,
      h: 48
    },
    key: 'SummonerTeleport'
  },
  '13': {
    id: 13,
    name: 'Clarity',
    description:
      "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",
    image: {
      full: 'SummonerMana.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 336,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerMana'
  },
  '14': {
    id: 14,
    name: 'Ignite',
    description:
      'Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.',
    image: {
      full: 'SummonerDot.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 96,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerDot'
  },
  '21': {
    id: 21,
    name: 'Barrier',
    description:
      'Shields your champion from 115-455 damage (depending on champion level) for 2 seconds.',
    image: {
      full: 'SummonerBarrier.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 0,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerBarrier'
  },
  '30': {
    id: 30,
    name: 'To the King!',
    description: "Quickly travel to the Poro King's side.",
    image: {
      full: 'SummonerPoroRecall.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 384,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerPoroRecall'
  },
  '31': {
    id: 31,
    name: 'Poro Toss',
    description:
      'Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.',
    image: {
      full: 'SummonerPoroThrow.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 432,
      y: 0,
      w: 48,
      h: 48
    },
    key: 'SummonerPoroThrow'
  },
  '32': {
    id: 32,
    name: 'Mark',
    description:
      'Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.',
    image: {
      full: 'SummonerSnowball.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 96,
      y: 48,
      w: 48,
      h: 48
    },
    key: 'SummonerSnowball'
  },
  '39': {
    id: 39,
    name: 'Mark',
    description:
      'Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.',
    image: {
      full: 'SummonerSnowURFSnowball_Mark.png',
      sprite: 'spell0.png',
      group: 'spell',
      x: 48,
      y: 48,
      w: 48,
      h: 48
    },
    key: 'SummonerSnowURFSnowball_Mark'
  }
};

export default summonerSpells;
