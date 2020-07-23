interface IPerk {
  id: number;
  key: string;
  icon: string;
  name: string;
  shortDesc: string;
  longDesc: string;
}

interface IPerks {
  [key: string]: IPerk;
}

const perks: IPerks = {
  '8005': {
    id: 8005,
    key: 'PressTheAttack',
    icon: 'perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png',
    name: 'Press the Attack',
    shortDesc:
      'Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for 6s.',
    longDesc:
      'Hitting an enemy champion with 3 consecutive basic attacks deals 40 - 180 bonus adaptive damage (based on level) and makes them vulnerable, increasing the damage they take by 8 - 12% from all sources for 6s.'
  },
  '8008': {
    id: 8008,
    key: 'LethalTempo',
    icon: 'perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png',
    name: 'Lethal Tempo',
    shortDesc:
      '1.5s after damaging a champion gain a large amount of Attack Speed. Lethal Tempo allows you to temporarily exceed the attack speed limit.',
    longDesc:
      '1.5s after damaging a champion gain 40 - 110% Attack Speed (based on level) for 3s. Attacking a champion extends the effect to 6s.Cooldown: 6sLethal Tempo allows you to temporarily exceed the attack speed limit.'
  },
  '8009': {
    id: 8009,
    key: 'PresenceOfMind',
    icon: 'perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png',
    name: 'Presence of Mind',
    shortDesc: 'Takedowns restore mana or energy and increase their maximum amounts. ',
    longDesc:
      'Takedowns restore 20% of your maximum mana or energy and increase your maximum mana by 100 (up to 500) or your maximum energy by 10 (up to 50). '
  },
  '8010': {
    id: 8010,
    key: 'Conqueror',
    icon: 'perk-images/Styles/Precision/Conqueror/Conqueror.png',
    name: 'Conqueror',
    shortDesc:
      'Gain stacks of adaptive force when attacking enemy champions. After reaching 12 stacks, heal for a portion of damage you deal to champions.',
    longDesc:
      'Basic attacks or spells that deal damage to an enemy champion grant 2 stacks of Conqueror for 6s, gaining 1.7-4.2 Adaptive Force per stack. Stacks up to 12 times. Ranged champions gain only 1 stack per basic attack.When fully stacked, heal for 15% of the damage you deal to champions (8% for ranged champions).'
  },
  '8014': {
    id: 8014,
    key: 'CoupDeGrace',
    icon: 'perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png',
    name: 'Coup de Grace',
    shortDesc: 'Deal more damage to low health enemy champions.',
    longDesc: 'Deal 8% more damage to champions who have less than 40% health.'
  },
  '8017': {
    id: 8017,
    key: 'CutDown',
    icon: 'perk-images/Styles/Precision/CutDown/CutDown.png',
    name: 'Cut Down',
    shortDesc: 'Deal more damage to champions with more max health than you.',
    longDesc:
      'Deal 5% to 15% more damage to champions, based on how much more max health they have than you.Bonus damage scales up linearly against enemies with 10% to 100% more max health than you.'
  },
  '8021': {
    id: 8021,
    key: 'FleetFootwork',
    icon: 'perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png',
    name: 'Fleet Footwork',
    shortDesc:
      'Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased MS.',
    longDesc:
      'Attacking and moving builds Energy stacks. At 100 stacks, your next attack is EnergizedEnergized attacks heal you for 3 - 60 (+0.3 Bonus AD, +0.3 AP) and grant +20% movement speed for 1s.Healing from minions is 20% effective for Ranged Champions.'
  },
  '8105': {
    id: 8105,
    key: 'RelentlessHunter',
    icon: 'perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png',
    name: 'Relentless Hunter',
    shortDesc: 'Unique takedowns grant permanent out of combat MS. ',
    longDesc:
      'Gain 10 out of combat Movement Speed plus 9 per Bounty Hunter stack.Bounty Hunter stacks are earned the first time you get a takedown on each enemy champion.'
  },
  '8106': {
    id: 8106,
    key: 'UltimateHunter',
    icon: 'perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png',
    name: 'Ultimate Hunter',
    shortDesc: 'Unique takedowns grant permanent cooldown reduction on your Ultimate. ',
    longDesc:
      'Your ultimate gains 5% reduced cooldown, plus an additional 4% per Bounty Hunter stack.Bounty Hunter stacks are earned the first time you get a takedown on each enemy champion.'
  },
  '8112': {
    id: 8112,
    key: 'Electrocute',
    icon: 'perk-images/Styles/Domination/Electrocute/Electrocute.png',
    name: 'Electrocute',
    shortDesc:
      'Hitting a champion with 3 separate attacks or abilities in 3s deals bonus adaptive damage.',
    longDesc:
      "Hitting a champion with 3 separate attacks or abilities within 3s deals bonus adaptive damage.Damage: 30 - 180 (+0.4 bonus AD, +0.25 AP) damage.Cooldown: 25 - 20s'We called them the Thunderlords, for to speak of their lightning was to invite disaster.'"
  },
  '8120': {
    id: 8120,
    key: 'GhostPoro',
    icon: 'perk-images/Styles/Domination/GhostPoro/GhostPoro.png',
    name: 'Ghost Poro',
    shortDesc:
      'When your wards expire, they leave behind a Ghost Poro. The Ghost Poro grants vision until discovered. Gain permanent AD or AP, adaptive for each Ghost Poro and when your Ghost Poro spots an enemy champion, plus bonus upon completion.',
    longDesc:
      'When your wards expire, they leave behind a Ghost Poro, which grants vision for 60s. Nearby enemy champions scare the Ghost Poro away.Gain an adaptive bonus of 1.2 Attack Damage or 2 Ability Power for every Ghost Poro spawned and when your Ghost Poro spots an enemy champion up to 10 stacks. After gaining 10 stacks, additionally gain 10 adaptive force.'
  },
  '8124': {
    id: 8124,
    key: 'Predator',
    icon: 'perk-images/Styles/Domination/Predator/Predator.png',
    name: 'Predator',
    shortDesc:
      'Add an active effect to your boots that grants a large boost of MS and causes your next attack or ability to deal bonus adaptive damage.',
    longDesc:
      "Enchants your boots with the active effect 'Predator.'Gain increased Movement Speed, ramping up to 45% Movement Speed over 1.5 seconds, while chasing enemy champions. After ramping up, damaging attacks or abilities to champions end this effect, dealing 40-120 (+0.2 bonus AD)(+0.1 AP) bonus adaptive damage.Cooldown: 90s-60s."
  },
  '8126': {
    id: 8126,
    key: 'CheapShot',
    icon: 'perk-images/Styles/Domination/CheapShot/CheapShot.png',
    name: 'Cheap Shot',
    shortDesc: 'Deal bonus true damage to enemy champions with impaired movement or actions. ',
    longDesc:
      'Damaging champions with impaired movement or actions deals 10 - 45 bonus true damage (based on level).Cooldown: 4sActivates on damage occurring after the impairment.'
  },
  '8128': {
    id: 8128,
    key: 'DarkHarvest',
    icon: 'perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png',
    name: 'Dark Harvest',
    shortDesc:
      'Damaging a low health champion inflicts adaptive damage and harvests a soul from the victim.',
    longDesc:
      "Damaging a Champion below 50% health deals adaptive damage and harvests their soul, permanently increasing Dark Harvest's damage by 5.Dark Harvest damage: 20-60 (based on level) (+5 damage per soul) (+0.25 bonus AD) (+0.15 AP)Cooldown: 45s (resets to 1.5s on takedown)"
  },
  '8134': {
    id: 8134,
    key: 'IngeniousHunter',
    icon: 'perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png',
    name: 'Ingenious Hunter',
    shortDesc: 'Unique takedowns grant permanent Active Item CDR (includes Trinkets).',
    longDesc:
      'Gain 15% Active Item CDR plus an additional 5% per Bounty Hunter stack (includes Trinkets).Bounty Hunter stacks are earned the first time you get a takedown on each enemy champion.'
  },
  '8135': {
    id: 8135,
    key: 'RavenousHunter',
    icon: 'perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png',
    name: 'Ravenous Hunter',
    shortDesc: 'Unique takedowns grant permanent healing from ability damage. ',
    longDesc:
      'Heal for a percentage of the damage dealt by your abilities.Healing: 1.5% + 2.5% per Bounty Hunter stack. Bounty Hunter stacks are earned the first time you get a takedown on each enemy champion.Healing reduced to one third for Area of Effect abilities.'
  },
  '8136': {
    id: 8136,
    key: 'ZombieWard',
    icon: 'perk-images/Styles/Domination/ZombieWard/ZombieWard.png',
    name: 'Zombie Ward',
    shortDesc:
      'Takedowns on enemy Wards cause friendly Zombie Wards to sprout from their corpses. Gain permanent AD or AP, adaptive for each Zombie Ward spawned plus bonus upon completion.',
    longDesc:
      'Takedowns on enemy Wards cause friendly Zombie Wards to sprout from their corpses.Gain an adaptive bonus of 1.2 Attack Damage or 2 Ability Power for every Zombie Ward spawned, up to 10. After spawning 10 Zombie Wards, additionally gain 10 adaptive force.Zombie Wards are visible, last for 120s and do not count towards your ward limit.'
  },
  '8138': {
    id: 8138,
    key: 'EyeballCollection',
    icon: 'perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png',
    name: 'Eyeball Collection',
    shortDesc:
      'Collect eyeballs for champion takedowns. Gain permanent AD or AP, adaptive for each eyeball plus bonus upon collection completion.',
    longDesc:
      'Collect eyeballs for champion takedowns. Gain an adaptive bonus of 1.2 Attack Damage or 2 Ability Power, per eyeball collected. Upon completing your collection at 10 eyeballs, additionally gain an adaptive bonus of 6 Attack Damage, or 10 Ability Power.Collect 1 eyeball per champion takedown.'
  },
  '8139': {
    id: 8139,
    key: 'TasteOfBlood',
    icon: 'perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png',
    name: 'Taste of Blood',
    shortDesc: 'Heal when you damage an enemy champion.',
    longDesc:
      'Heal when you damage an enemy champion.Healing: 18-35 (+0.2 bonus AD, +0.1 AP) health (based on level)Cooldown: 20s'
  },
  '8143': {
    id: 8143,
    key: 'SuddenImpact',
    icon: 'perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png',
    name: 'Sudden Impact',
    shortDesc:
      'Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.',
    longDesc:
      'After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 7 Lethality and 6 Magic Penetration for 5s.Cooldown: 4s'
  },
  '8210': {
    id: 8210,
    key: 'Transcendence',
    icon: 'perk-images/Styles/Sorcery/Transcendence/Transcendence.png',
    name: 'Transcendence',
    shortDesc: 'Gain 10% CDR when you reach level 10. Excess CDR becomes AP or AD, adaptive.',
    longDesc:
      'Gain 10% CDR when you reach level 10.Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus of 1.2 Attack Damage or 2 Ability Power.'
  },
  '8214': {
    id: 8214,
    key: 'SummonAery',
    icon: 'perk-images/Styles/Sorcery/SummonAery/SummonAery.png',
    name: 'Summon Aery',
    shortDesc:
      'Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.',
    longDesc:
      'Damaging enemy champions with basic attacks or abilities sends Aery to them, dealing 10 - 40 based on level (+0.1 AP) (+0.15 bonus AD).Empower or protecting allies with abilities sends Aery to them, shielding them for 35 - 80 based on level (+0.25 AP) (+0.4 bonus AD).Aery cannot be sent out again until she returns to you.'
  },
  '8224': {
    id: 8224,
    key: 'NullifyingOrb',
    icon: 'perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png',
    name: 'Nullifying Orb',
    shortDesc: 'Gain a magic damage shield when taken to low health by magic damage.',
    longDesc:
      'When you take magic damage that would reduce your Health below 30%, gain a shield that absorbs 40 - 120 magic damage based on level (+0.1 AP and +0.15 bonus AD) for 4s.Cooldown: 60s'
  },
  '8226': {
    id: 8226,
    key: 'ManaflowBand',
    icon: 'perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png',
    name: 'Manaflow Band',
    shortDesc:
      'Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.',
    longDesc:
      'Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.After reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.Cooldown: 15 seconds'
  },
  '8229': {
    id: 8229,
    key: 'ArcaneComet',
    icon: 'perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png',
    name: 'Arcane Comet',
    shortDesc: 'Damaging a champion with an ability hurls a damaging comet at their location.',
    longDesc:
      'Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.Adaptive Damage: 30 - 100 based on level (+0.2 AP and +0.35 bonus AD)Cooldown: 20 - 8sCooldown Reduction:Single Target: 20%.Area of Effect: 10%.Damage over Time: 5%.'
  },
  '8230': {
    id: 8230,
    key: 'PhaseRush',
    icon: 'perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png',
    name: 'Phase Rush',
    shortDesc:
      'Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS. ',
    longDesc:
      'Hitting an enemy champion with 3 attacks or separate abilities within 4s grants 25 - 40% Movement Speed based on level and 75% Slow Resistance. Movement speed is increased to 40 - 60% for Melee champions.Duration: 3sCooldown: 15s'
  },
  '8232': {
    id: 8232,
    key: 'Waterwalking',
    icon: 'perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png',
    name: 'Waterwalking',
    shortDesc: 'Gain MS and AP or AD, adaptive in the river.',
    longDesc:
      'Gain 25 Movement Speed and an adaptive bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.May you be as swift as the rushing river and agile as a startled Rift Scuttler.'
  },
  '8233': {
    id: 8233,
    key: 'AbsoluteFocus',
    icon: 'perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png',
    name: 'Absolute Focus',
    shortDesc: 'While above 70% health, gain extra adaptive damage.',
    longDesc:
      'While above 70% health, gain an adaptive bonus of up to 18 Attack Damage or 30 Ability Power (based on level). Grants 1.8 Attack Damage or 3 Ability Power at level 1. '
  },
  '8234': {
    id: 8234,
    key: 'Celerity',
    icon: 'perk-images/Styles/Sorcery/Celerity/CelerityTemp.png',
    name: 'Celerity',
    shortDesc:
      'All movement speed bonuses are 7% more effective on you and gain 1% Movement Speed.',
    longDesc: 'All movement bonuses are 7% more effective on you and gain 1% Movement Speed.'
  },
  '8236': {
    id: 8236,
    key: 'GatheringStorm',
    icon: 'perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png',
    name: 'Gathering Storm',
    shortDesc: 'Gain increasing amounts of AD or AP, adaptive over the course of the game.',
    longDesc:
      'Every 10 min gain AP or AD, adaptive.10 min: + 8 AP or 5 AD 20 min: + 24 AP or 14 AD30 min: + 48 AP or 29 AD40 min: + 80 AP or 48 AD50 min: + 120 AP or 72 AD60 min: + 168 AP or 101 ADetc...'
  },
  '8237': {
    id: 8237,
    key: 'Scorch',
    icon: 'perk-images/Styles/Sorcery/Scorch/Scorch.png',
    name: 'Scorch',
    shortDesc: 'Your first damaging ability hit every 10s burns champions.',
    longDesc:
      'Your next damaging ability hit sets champions on fire dealing 15 - 35 bonus magic damage based on level after 1s.Cooldown: 10s'
  },
  '8242': {
    id: 8242,
    key: 'Unflinching',
    icon: 'perk-images/Styles/Sorcery/Unflinching/Unflinching.png',
    name: 'Unflinching',
    shortDesc: 'Gain a small amount of tenacity that increases with missing health. ',
    longDesc:
      'Gain 10% Tenacity and 10% Slow Resist. These values increase by up to an additional 20% Tenacity and 20% Slow Resist based on missing health. Maximum value achieved at 30% health. '
  },
  '8275': {
    id: 8275,
    key: 'NimbusCloak',
    icon: 'perk-images/Styles/Sorcery/NimbusCloak/6361.png',
    name: 'Nimbus Cloak',
    shortDesc:
      'After casting a Summoner Spell, gain a short movement speed increase that allows you to pass through units.',
    longDesc:
      "After casting a Summoner Spell, gain a movement speed increase that lasts for 2.5s and allows you to pass through units.Increase: 15% - 35% Movement Speed based on the Summoner Spell's cooldown. (Higher cooldown Summoner Spells grant more Movement Speed). "
  },
  '8299': {
    id: 8299,
    key: 'LastStand',
    icon: 'perk-images/Styles/Sorcery/LastStand/LastStand.png',
    name: 'Last Stand',
    shortDesc: 'Deal more damage to champions while you are low on health.',
    longDesc:
      'Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.'
  },
  '8304': {
    id: 8304,
    key: 'MagicalFootwear',
    icon: 'perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png',
    name: 'Magical Footwear',
    shortDesc:
      'You get free boots at 12 min but you cannot buy boots before then. Each takedown you get makes your boots come 45s sooner.',
    longDesc:
      'You get free Slightly Magical Boots at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.Slightly Magical Boots give you an additional +10 Movement Speed.'
  },
  '8306': {
    id: 8306,
    key: 'HextechFlashtraption',
    icon: 'perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png',
    name: 'Hextech Flashtraption',
    shortDesc:
      'While Flash is on cooldown it is replaced by Hexflash.Hexflash: Channel, then blink to a new location.',
    longDesc:
      'While Flash is on cooldown it is replaced by Hexflash.Hexflash: Channel for 2s to blink to a new location.Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat.'
  },
  '8313': {
    id: 8313,
    key: 'PerfectTiming',
    icon: 'perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png',
    name: 'Perfect Timing',
    shortDesc:
      'Gain a free Commencing Stopwatch. After 14 minutes, it can be used for a one time Stasis effect. Each takedown you get shortens this timer by 120 seconds.',
    longDesc:
      'Begin the game with a Commencing Stopwatch that transforms into a Stopwatch after 14 minutes. Each takedown you acquire reduces this timer by 120 seconds.Stopwatch can be used for a one time 2.5 second Stasis effect.'
  },
  '8316': {
    id: 8316,
    key: 'MinionDematerializer',
    icon: 'perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png',
    name: 'Minion Dematerializer',
    shortDesc:
      'Start the game with 3 Minion Dematerializers. Killing minions with the item gives permanent bonus damage vs. that minion type.',
    longDesc:
      'Start the game with 3 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 180s of the game.Absorbing a minion increases your damage by +6% against that type of minion permanently, and an extra +3% for each additional minion of that type absorbed.'
  },
  '8321': {
    id: 8321,
    key: 'FuturesMarket',
    icon: 'perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png',
    name: "Future's Market",
    shortDesc: 'You can enter debt to buy items.',
    longDesc:
      'You can enter debt to buy items. The amount you can borrow increases over time.Lending Fee: 50 gold'
  },
  '8345': {
    id: 8345,
    key: 'BiscuitDelivery',
    icon: 'perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
    name: 'Biscuit Delivery',
    shortDesc:
      'Gain a free Biscuit every 2 min, until 6 min. Consuming or selling a Biscuit permanently increases your max mana and restores health and mana.',
    longDesc:
      'Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 2 mins, until 6 min.Biscuits restore 10% of your missing health and mana. Consuming or selling a Biscuit permanently increases your mana cap by 50. Manaless: Champions without mana restore 12% missing health instead.'
  },
  '8347': {
    id: 8347,
    key: 'CosmicInsight',
    icon: 'perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png',
    name: 'Cosmic Insight',
    shortDesc: '+5% CDR+5% Max CDR+5% Summoner Spell CDR+5% Item CDR',
    longDesc: '+5% CDR+5% Max CDR+5% Summoner Spell CDR+5% Item CDR'
  },
  '8351': {
    id: 8351,
    key: 'GlacialAugment',
    icon: 'perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png',
    name: 'Glacial Augment',
    shortDesc:
      'Your first attack against an enemy champion slows them (per unit cooldown). Slowing champions with active items shoots a freeze ray at them, creating a lingering slow zone.',
    longDesc:
      'Basic attacking a champion slows them for 2s. The slow increases in strength over its duration.Ranged: Ranged attacks slow by up to 30% - 40% Melee: Melee attacks slow by up to 45% - 55%Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 60%.Cooldown: 7-4s per unit'
  },
  '8352': {
    id: 8352,
    key: 'TimeWarpTonic',
    icon: 'perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png',
    name: 'Time Warp Tonic',
    shortDesc:
      'Potions and biscuits grant some restoration immediately. Gain MS  while under their effects.',
    longDesc:
      'Consuming a potion or biscuit grants 50% of its health or mana restoration immediately, but puts that consumable on a short cooldown. In addition, gain 5% Movement Speed while under their effects.Cooldown: equal to the duration of the consumable.'
  },
  '8358': {
    id: 8358,
    key: 'MasterKey',
    icon: 'perk-images/Styles/Inspiration/MasterKey/MasterKey.png',
    name: 'Prototype: Omnistone',
    shortDesc: 'Periodically grants a single use of another random keystone.',
    longDesc:
      'Periodically grants a single use of another random keystone.5-3  second cooldown between using a keystone and gaining the next. (9-7 seconds for ranged users)After 40 seconds of not using a given keystone, Omnistone will re-roll when you exit champion combat.Aftershock is only available to champions who have learned a basic spell that can trigger it.Predator is only available to champions who have already purchased boots.'
  },
  '8360': {
    id: 8360,
    key: 'UnsealedSpellbook',
    icon: 'perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png',
    name: 'Unsealed Spellbook',
    shortDesc:
      'Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.',
    longDesc:
      'Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 20s (initial swap cooldown is at 4 mins). Your first swap becomes available at 6 mins. Summoner Spells can only be swapped while out of combat. After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again. '
  },
  '8401': {
    id: 8401,
    key: 'ShieldBash',
    icon: 'perk-images/Styles/Resolve/MirrorShell/MirrorShell.png',
    name: 'Shield Bash',
    shortDesc:
      'Whenever you gain a shield, your next basic attack against a champion deals bonus adaptive damage.',
    longDesc:
      'While shielded, gain 1 - 10 Armor and Magic Resist based on Level.Whenever you gain a new shield,  your next basic attack against a champion deals 5 - 30 (+1.5% Bonus Health) (+8.5% New Shield Amount) bonus adaptive damage.You have up to 2s after the shield expires to use this effect.'
  },
  '8410': {
    id: 8410,
    key: 'ApproachVelocity',
    icon: 'perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png',
    name: 'Approach Velocity',
    shortDesc:
      'Bonus MS towards nearby enemy champions that are movement impaired, increased for enemy champions that you impair.',
    longDesc:
      'Gain 7.5% Movement Speed towards nearby enemy champions that are movement impaired. This bonus is increased to 15% Movement Speed for any enemy champion that you impair. Activation Range for CC from allies: 1000'
  },
  '8429': {
    id: 8429,
    key: 'Conditioning',
    icon: 'perk-images/Styles/Resolve/Conditioning/Conditioning.png',
    name: 'Conditioning',
    shortDesc:
      'After 12 min gain +9 Armor and +9 Magic Resist and increase your Armor and Magic Resist by 5%.',
    longDesc:
      'After 12 min gain +9 Armor and +9 Magic Resist and increase your Armor and Magic Resist by 5%.'
  },
  '8437': {
    id: 8437,
    key: 'GraspOfTheUndying',
    icon: 'perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png',
    name: 'Grasp of the Undying',
    shortDesc:
      'Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.',
    longDesc:
      'Every 4s in combat, your next basic attack on a champion will:Deal bonus magic damage equal to 4% of your max healthHeals you for 2% of your max healthPermanently increase your health by 5Ranged Champions: Damage, healing, and permanent health gained reduced by 40%.'
  },
  '8439': {
    id: 8439,
    key: 'Aftershock',
    icon: 'perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png',
    name: 'Aftershock',
    shortDesc:
      'After immobilizing an enemy champion gain defenses and later deal a burst of magic damage around you.',
    longDesc:
      'After immobilizing an enemy champion, increase your Armor and Magic Resist by 35 + 80% of your Bonus Resists for 2.5s. Then explode, dealing magic damage to nearby enemies.Damage: 25 - 120 (+8% of your bonus health)Cooldown: 20sResistance bonus from Aftershock capped at: 80-150 (based on level)'
  },
  '8444': {
    id: 8444,
    key: 'SecondWind',
    icon: 'perk-images/Styles/Resolve/SecondWind/SecondWind.png',
    name: 'Second Wind',
    shortDesc:
      'After taking damage from an enemy champion heal back some missing health over time. ',
    longDesc:
      'After taking damage from an enemy champion, heal for 4% of your missing health +6 over 10s.'
  },
  '8446': {
    id: 8446,
    key: 'Demolish',
    icon: 'perk-images/Styles/Resolve/Demolish/Demolish.png',
    name: 'Demolish',
    shortDesc: 'Charge up a powerful attack against a tower while near it.',
    longDesc:
      'Charge up a powerful attack against a tower over 3s, while within 600 range of it. The charged attack deals 100 (+35% of your max health) bonus physical damage. Cooldown: 45s'
  },
  '8451': {
    id: 8451,
    key: 'Overgrowth',
    icon: 'perk-images/Styles/Resolve/Overgrowth/Overgrowth.png',
    name: 'Overgrowth',
    shortDesc: 'Gain permanent max health when minions or monsters die near you.',
    longDesc:
      "Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.When you've absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health."
  },
  '8453': {
    id: 8453,
    key: 'Revitalize',
    icon: 'perk-images/Styles/Resolve/Revitalize/Revitalize.png',
    name: 'Revitalize',
    shortDesc:
      'Heals and shields you cast or receive are 5% stronger and increased by an additional 10% on low health targets.',
    longDesc:
      'Heals and shields you cast or receive are 5% stronger and increased by an additional 10% on targets below 40% health.'
  },
  '8463': {
    id: 8463,
    key: 'FontOfLife',
    icon: 'perk-images/Styles/Resolve/FontOfLife/FontOfLife.png',
    name: 'Font of Life',
    shortDesc:
      "Impairing the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked. ",
    longDesc:
      'Impairing the movement of an enemy champion marks them for 4s.Ally champions who attack marked enemies heal for 5 + 1% of your max health over 2s. '
  },
  '8465': {
    id: 8465,
    key: 'Guardian',
    icon: 'perk-images/Styles/Resolve/Guardian/Guardian.png',
    name: 'Guardian',
    shortDesc:
      "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage based on level, you're both granted a shield.",
    longDesc:
      'Guard allies within 350 units of you, and allies you target with spells for 2.5s. While Guarding, if you or the ally take more than a small amount of damage over the duration of the Guard, both of you gain a shield for 1.5s.Cooldown: 70 - 40 secondsShield: 70 - 150 + 25% of your ability power + 12% of your bonus healthProc Threshold: 90 - 250 postmitigation damage'
  },
  '8473': {
    id: 8473,
    key: 'BonePlating',
    icon: 'perk-images/Styles/Resolve/BonePlating/BonePlating.png',
    name: 'Bone Plating',
    shortDesc:
      'After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 less damage.Duration: 1.5sCooldown: 45s',
    longDesc:
      'After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 less damage.Duration: 1.5sCooldown: 45s'
  },
  '9101': {
    id: 9101,
    key: 'Overheal',
    icon: 'perk-images/Styles/Precision/Overheal.png',
    name: 'Overheal',
    shortDesc: 'Excess healing on you becomes a shield.',
    longDesc:
      'Excess healing on you becomes a shield, for up to 10 (+10% Max Health).Shield is built up from 20 to 100% of excess healing from yourself or any ally.'
  },
  '9103': {
    id: 9103,
    key: 'LegendBloodline',
    icon: 'perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png',
    name: 'Legend: Bloodline',
    shortDesc:
      'Takedowns on enemies grant permanent Lifesteal. Weaker earlier but stronger later game than other Legend Runes.',
    longDesc:
      'Gain 0.6% life steal for every Legend stack (max 20 stacks).Earn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.'
  },
  '9104': {
    id: 9104,
    key: 'LegendAlacrity',
    icon: 'perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png',
    name: 'Legend: Alacrity',
    shortDesc: 'Takedowns on enemies grant permanent Attack Speed. ',
    longDesc:
      'Gain 3% attack speed plus an additional 1.5% for every Legend stack (max 10 stacks).Earn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.'
  },
  '9105': {
    id: 9105,
    key: 'LegendTenacity',
    icon: 'perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png',
    name: 'Legend: Tenacity',
    shortDesc: 'Takedowns on enemies grant permanent Tenacity. ',
    longDesc:
      'Gain 5% tenacity plus an additional 2.5% for every Legend stack (max 10 stacks).Earn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.'
  },
  '9111': {
    id: 9111,
    key: 'Triumph',
    icon: 'perk-images/Styles/Precision/Triumph.png',
    name: 'Triumph',
    shortDesc: 'Takedowns restore 12% of your missing health and grant an additional 20 gold. ',
    longDesc:
      "Takedowns restore 12% of your missing health and grant an additional 20 gold. 'The most dangerous game brings the greatest glory.' —Noxian Reckoner"
  },
  '9923': {
    id: 9923,
    key: 'HailOfBlades',
    icon: 'perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png',
    name: 'Hail of Blades',
    shortDesc:
      'Gain a large amount of Attack Speed for the first 3 attacks made against enemy champions.',
    longDesc:
      'Gain 110% Attack Speed when you attack an enemy champion for up to 3 attacks.No more than 3s can elapse between attacks or this effect will end.Cooldown: 8s out of combat with champions.Attack resets increase the attack limit by 1.Allows you to temporarily exceed the attack speed limit.'
  }
};

export default perks;
