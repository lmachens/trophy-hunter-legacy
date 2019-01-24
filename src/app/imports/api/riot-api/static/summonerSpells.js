const summonerSpells = {
  data: {
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
        'Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds.',
      image: {
        full: 'SummonerExhaust.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 240,
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
        x: 288,
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
        'Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds.',
      image: {
        full: 'SummonerHaste.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 336,
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
        x: 384,
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
        x: 336,
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
        'After channeling for 4 seconds, teleports your champion to target allied structure, minion, or ward.',
      image: {
        full: 'SummonerTeleport.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 0,
        y: 96,
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
        x: 432,
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
        x: 192,
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
        x: 144,
        y: 48,
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
        x: 192,
        y: 48,
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
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerSnowball'
    },
    '33': {
      id: 33,
      name: 'Nexus Siege: Siege Weapon Slot',
      description:
        'In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!',
      image: {
        full: 'SummonerSiegeChampSelect1.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerSiegeChampSelect1'
    },
    '34': {
      id: 34,
      name: 'Nexus Siege: Siege Weapon Slot',
      description:
        'In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!',
      image: {
        full: 'SummonerSiegeChampSelect2.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerSiegeChampSelect2'
    },
    '35': {
      id: 35,
      name: 'Disabled Summoner Spells',
      description: 'Summoner spells are disabled in this mode.',
      image: {
        full: 'SummonerDarkStarChampSelect1.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      key: 'SummonerDarkStarChampSelect1'
    },
    '36': {
      id: 36,
      name: 'Disabled Summoner Spells',
      description: 'Summoner spells are disabled in this mode.',
      image: {
        full: 'SummonerDarkStarChampSelect2.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      key: 'SummonerDarkStarChampSelect2'
    },
    '39': {
      id: 39,
      name: 'Ultra (Rapidly Flung) Mark',
      description: "It's a snowball! It's a Poro! It's...uh...one of those.",
      image: {
        full: 'SummonerSnowURFSnowball_Mark.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerSnowURFSnowball_Mark'
    },
    '50': {
      id: 50,
      name: 'Resuscitate',
      description:
        'Revive a fallen friend by remaining next to them for 2 seconds. Exiting the area early does not consume your cooldown. ',
      image: {
        full: 'SummonerOdysseyRevive.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerOdysseyRevive'
    },
    '51': {
      id: 51,
      name: 'Ghost',
      description:
        'Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds.',
      image: {
        full: 'SummonerOdysseyGhost.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerOdysseyGhost'
    },
    '52': {
      id: 52,
      name: 'Warp',
      description:
        'Dash through spacetime, becoming briefly untargetable and invulnerable as you rapidly move towards a location.',
      image: {
        full: 'SummonerOdysseyFlash.png',
        sprite: 'spell0.png',
        group: 'spell',
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      key: 'SummonerOdysseyFlash'
    }
  },
  type: 'summoner',
  version: '9.2.1'
};

export default summonerSpells;
