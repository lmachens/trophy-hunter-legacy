export interface IChampion {
  id: number;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  spells: Array<{
    name: string;
    sanitizedDescription: string;
    image: {
      full: string;
    };
    cooldownBurn: string;
  }>;
  passive: {
    image: {
      full: string;
    };
    name: string;
    sanitizedDescription: string;
  };
  range: string;
}

interface IChampions {
  [key: string]: IChampion;
}

const champions: IChampions = {
  '1': {
    id: 1,
    key: 'Annie',
    name: 'Annie',
    title: 'the Dark Child',
    image: {
      full: 'Annie.png'
    },
    spells: [
      {
        name: 'Disintegrate',
        sanitizedDescription:
          'Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.',
        image: {
          full: 'AnnieQ.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Incinerate',
        sanitizedDescription:
          'Annie casts a blazing cone of fire, dealing damage to all enemies in the area.',
        image: {
          full: 'AnnieW.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Molten Shield',
        sanitizedDescription:
          'Grants Annie and Tibbers increased percentage Damage Resist and damages enemies who attack with basic attacks.',
        image: {
          full: 'AnnieE.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Summon: Tibbers',
        sanitizedDescription:
          'Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.',
        image: {
          full: 'AnnieR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Annie_Passive.png'
      },
      name: 'Pyromania',
      sanitizedDescription:
        "After casting 4 spells, Annie's next offensive spell will stun the target for a short duration."
    },
    range: 'Ranged'
  },
  '2': {
    id: 2,
    key: 'Olaf',
    name: 'Olaf',
    title: 'the Berserker',
    image: {
      full: 'Olaf.png'
    },
    spells: [
      {
        name: 'Undertow',
        sanitizedDescription:
          "Olaf throws an axe into the ground at a target location, dealing damage to enemies it passes through and slowing their Movement Speed. If Olaf picks up the axe, the ability's cooldown is reduced by 4.5 seconds.",
        image: {
          full: 'OlafAxeThrowCast.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Vicious Strikes',
        sanitizedDescription:
          "Olaf's Attack Speed is increased, he gains Life Steal and has increased healing from all sources based on how much Health he is missing.",
        image: {
          full: 'OlafFrenziedStrikes.png'
        },
        cooldownBurn: '16'
      },
      {
        name: 'Reckless Swing',
        sanitizedDescription:
          'Olaf attacks with such force that it deals true damage to his target and himself, refunding the Health cost if he destroys the target.',
        image: {
          full: 'OlafRecklessStrike.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: 'Ragnarok',
        sanitizedDescription: 'Olaf temporarily becomes immune to disables.',
        image: {
          full: 'OlafRagnarok.png'
        },
        cooldownBurn: '100/90/80'
      }
    ],
    passive: {
      image: {
        full: 'Olaf_Passive.png'
      },
      name: 'Berserker Rage',
      sanitizedDescription:
        "Olaf's Attack Speed is increased by 1% for each 1% of his Health he is missing."
    },
    range: 'Melee'
  },
  '3': {
    id: 3,
    key: 'Galio',
    name: 'Galio',
    title: 'the Colossus',
    image: {
      full: 'Galio.png'
    },
    spells: [
      {
        name: 'Winds of War',
        sanitizedDescription:
          'Galio fires two windblasts that converge into a large tornado that deals damage over time.',
        image: {
          full: 'GalioQ.png'
        },
        cooldownBurn: '10/9.5/9/8.5/8'
      },
      {
        name: 'Shield of Durand',
        sanitizedDescription:
          'Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt and damage nearby enemies.',
        image: {
          full: 'GalioW.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Justice Punch',
        sanitizedDescription:
          'Galio will briefly step back and charge, knocking up the first enemy champion he encounters.',
        image: {
          full: 'GalioE.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: "Hero's Entrance",
        sanitizedDescription:
          "Galio designates an ally's position as his landing spot. After a delay Galio smashes down location, knocking up nearby enemies.",
        image: {
          full: 'GalioR.png'
        },
        cooldownBurn: '200/180/160'
      }
    ],
    passive: {
      image: {
        full: 'Galio_Passive.png'
      },
      name: 'Colossal Smash',
      sanitizedDescription:
        "Every few seconds, Galio's next basic attack deals bonus magic damage in an area. Colossal Smash's cooldown is reduced when Galio hits champions with his spells."
    },
    range: 'Melee'
  },
  '4': {
    id: 4,
    key: 'TwistedFate',
    name: 'Twisted Fate',
    title: 'the Card Master',
    image: {
      full: 'TwistedFate.png'
    },
    spells: [
      {
        name: 'Wild Cards',
        sanitizedDescription:
          'Twisted Fate throws three cards, dealing damage to each enemy unit they pass through.',
        image: {
          full: 'WildCards.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Pick A Card',
        sanitizedDescription:
          'Twisted Fate chooses a magic card from his deck, and uses that for his next attack, causing bonus effects.',
        image: {
          full: 'PickACard.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Stacked Deck',
        sanitizedDescription:
          'Every 4 attacks, Twisted Fate deals bonus damage. In addition, his Attack Speed is increased.',
        image: {
          full: 'CardmasterStack.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Destiny',
        sanitizedDescription:
          'Twisted Fate predicts the fortunes of his foes, revealing all enemy champions and enabling the use of Gate, which teleports Twisted Fate to any target location in 1.5 seconds.',
        image: {
          full: 'Destiny.png'
        },
        cooldownBurn: '180/150/120'
      }
    ],
    passive: {
      image: {
        full: 'Cardmaster_SealFate.png'
      },
      name: 'Loaded Dice',
      sanitizedDescription:
        "Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving anywhere between 1 and 6 bonus gold."
    },
    range: 'Ranged'
  },
  '5': {
    id: 5,
    key: 'XinZhao',
    name: 'Xin Zhao',
    title: 'the Seneschal of Demacia',
    image: {
      full: 'XinZhao.png'
    },
    spells: [
      {
        name: 'Three Talon Strike',
        sanitizedDescription:
          "Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.",
        image: {
          full: 'XinZhaoQ.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Wind Becomes Lightning',
        sanitizedDescription:
          'Xin Zhao slashes in front of himself with his spear, then thrusts it forward, slowing affected enemies.',
        image: {
          full: 'XinZhaoW.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Audacious Charge',
        sanitizedDescription:
          'Xin Zhao charges to an enemy, dealing damage to all enemies in the area and slowing them briefly.',
        image: {
          full: 'XinZhaoE.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Crescent Guard',
        sanitizedDescription:
          'Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back. Xin Zhao is impervious to damage dealt by champions outside of the circle created.',
        image: {
          full: 'XinZhaoR.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'XinZhaoP.png'
      },
      name: 'Determination',
      sanitizedDescription: 'Every third attack deals bonus damage and heals Xin Zhao.'
    },
    range: 'Melee'
  },
  '6': {
    id: 6,
    key: 'Urgot',
    name: 'Urgot',
    title: 'the Dreadnought',
    image: {
      full: 'Urgot.png'
    },
    spells: [
      {
        name: 'Corrosive Charge',
        sanitizedDescription:
          'Fires an explosive charge at the target location, dealing physical damage and slowing enemies caught in the explosion.',
        image: {
          full: 'UrgotQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Purge',
        sanitizedDescription:
          'Urgot slows himself while he unloads his weapon on nearby enemies. Prioritizes enemy champions Urgot has recently struck with other abilities and triggers Echoing Flames.',
        image: {
          full: 'UrgotW.png'
        },
        cooldownBurn: '12/9/6/3/0'
      },
      {
        name: 'Disdain',
        sanitizedDescription:
          'Urgot charges in a direction, shielding himself and trampling non-champion enemies. If he catches an enemy champion, he will stop and hurl them out of his way.',
        image: {
          full: 'UrgotE.png'
        },
        cooldownBurn: '14'
      },
      {
        name: 'Fear Beyond Death',
        sanitizedDescription:
          'Urgot fires a chem-drill that impales the first enemy champion hit. If that champion falls below a health threshold, Urgot judges them weak and can execute them.',
        image: {
          full: 'UrgotR.png'
        },
        cooldownBurn: '120/95/70'
      }
    ],
    passive: {
      image: {
        full: 'Urgot_Passive.png'
      },
      name: 'Echoing Flames',
      sanitizedDescription:
        "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage."
    },
    range: 'Ranged'
  },
  '7': {
    id: 7,
    key: 'Leblanc',
    name: 'LeBlanc',
    title: 'the Deceiver',
    image: {
      full: 'Leblanc.png'
    },
    spells: [
      {
        name: 'Sigil of Malice',
        sanitizedDescription:
          'LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage.',
        image: {
          full: 'LeblancQ.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Distortion',
        sanitizedDescription:
          'LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.',
        image: {
          full: 'LeblancW.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Ethereal Chains',
        sanitizedDescription:
          'LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage.',
        image: {
          full: 'LeblancE.png'
        },
        cooldownBurn: '14/13.25/12.5/11.75/11'
      },
      {
        name: 'Mimic',
        sanitizedDescription: 'LeBlanc casts a mimicked version of one of her basic spells.',
        image: {
          full: 'LeblancR.png'
        },
        cooldownBurn: '60/45/30'
      }
    ],
    passive: {
      image: {
        full: 'LeBlancP.png'
      },
      name: 'Mirror Image',
      sanitizedDescription:
        'When LeBlanc drops below 40% health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.Mirror Image has a 1 minute cooldown.Mirror Image can be controlled by holding the Alt key and using the right mouse button.'
    },
    range: 'Ranged'
  },
  '8': {
    id: 8,
    key: 'Vladimir',
    name: 'Vladimir',
    title: 'the Crimson Reaper',
    image: {
      full: 'Vladimir.png'
    },
    spells: [
      {
        name: 'Transfusion',
        sanitizedDescription:
          "Vladimir steals life from the target enemy. When Vladimir's resource is full, Transfusion will benefit from massively increased damage and healing for a brief time.",
        image: {
          full: 'VladimirQ.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Sanguine Pool',
        sanitizedDescription:
          'Vladimir sinks into a pool of blood, becoming untargetable for 2 seconds. Additionally, enemies on the pool are slowed and Vladimir siphons life from them.',
        image: {
          full: 'VladimirSanguinePool.png'
        },
        cooldownBurn: '28/25/22/19/16'
      },
      {
        name: 'Tides of Blood',
        sanitizedDescription:
          'Vladimir pays his own health to charge up a reservoir of blood which, when released, deals damage in the area around him but can be blocked by enemy units.',
        image: {
          full: 'VladimirE.png'
        },
        cooldownBurn: '13/11/9/7/5'
      },
      {
        name: 'Hemoplague',
        sanitizedDescription:
          'Vladimir infects an area with a virulent plague. Affected enemies take increased damage for the duration. After a few seconds, Hemoplague deals magic damage to infected enemies and heals Vladimir for each enemy Champion hit.',
        image: {
          full: 'VladimirHemoplague.png'
        },
        cooldownBurn: '150/135/120'
      }
    ],
    passive: {
      image: {
        full: 'VladimirP.png'
      },
      name: 'Crimson Pact',
      sanitizedDescription:
        'Every 40 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.4 bonus Health (does not stack with itself).'
    },
    range: 'Ranged'
  },
  '9': {
    id: 9,
    key: 'Fiddlesticks',
    name: 'Fiddlesticks',
    title: 'the Harbinger of Doom',
    image: {
      full: 'Fiddlesticks.png'
    },
    spells: [
      {
        name: 'Terrify',
        sanitizedDescription:
          'Strikes a target unit with fear, causing it to flee in terror for a duration.',
        image: {
          full: 'Terrify.png'
        },
        cooldownBurn: '15/14/13/12/11'
      },
      {
        name: 'Drain',
        sanitizedDescription:
          'Fiddlesticks saps the life force of an enemy, dealing damage to a target over time and healing himself.',
        image: {
          full: 'Drain.png'
        },
        cooldownBurn: '4/3.75/3.5/3.25/3'
      },
      {
        name: 'Dark Wind',
        sanitizedDescription:
          'A wisp of wind strikes an enemy unit and then bounces to nearby enemy units, dealing damage and silencing the victims.',
        image: {
          full: 'FiddlesticksDarkWind.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Crowstorm',
        sanitizedDescription:
          'A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.',
        image: {
          full: 'Crowstorm.png'
        },
        cooldownBurn: '140/110/80'
      }
    ],
    passive: {
      image: {
        full: 'FiddleSticks_Passive.png'
      },
      name: 'Dread',
      sanitizedDescription:
        'Standing still or channeling abilities for 1.5 seconds empowers Fiddlesticks with Dread. Immobilizing crowd control resets this timer.Dread grants Movement Speed, but only lasts for 1.5s after Fiddlesticks starts moving.'
    },
    range: 'Ranged'
  },
  '10': {
    id: 10,
    key: 'Kayle',
    name: 'Kayle',
    title: 'the Righteous',
    image: {
      full: 'Kayle.png'
    },
    spells: [
      {
        name: 'Radiant Blast',
        sanitizedDescription:
          'Kayle conjures a portal, summoning a celestial sword that pierces through enemies, slowing, damaging, and reducing the resistances of all hit.',
        image: {
          full: 'KayleQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Celestial Blessing',
        sanitizedDescription:
          'Blessed by the divine, Kayle heals and grants movement speed to herself and the nearest ally.',
        image: {
          full: 'KayleW.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Starfire Spellblade',
        sanitizedDescription:
          "Passive: Kayle's celestial sword, Virtue, deals bonus magic damage to enemies she attacks.Active: Kayle's next attack smites her target with celestial fire, dealing bonus damage proportionate to their missing health.",
        image: {
          full: 'KayleE.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Divine Judgment',
        sanitizedDescription:
          'Kayle makes an ally invulnerable and calls upon former Aspects of Justice to purify the area around her target with a holy rain of swords.',
        image: {
          full: 'KayleR.png'
        },
        cooldownBurn: '160/120/80'
      }
    ],
    passive: {
      image: {
        full: 'Kayle_P.png'
      },
      name: '',
      sanitizedDescription: ''
    },
    range: 'ShapeShifter'
  },
  '11': {
    id: 11,
    key: 'MasterYi',
    name: 'Master Yi',
    title: 'the Wuju Bladesman',
    image: {
      full: 'MasterYi.png'
    },
    spells: [
      {
        name: 'Alpha Strike',
        sanitizedDescription:
          "Master Yi teleports across the battlefield with blinding speed, dealing physical damage to multiple units in his path, while simultaneously becoming untargetable. Alpha Strike can critically strike and deals bonus physical damage to monsters. Basic attacks reduce Alpha Strike's cooldown.",
        image: {
          full: 'AlphaStrike.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Meditate',
        sanitizedDescription:
          'Master Yi rejuvenates his body by focus of mind, restoring Health and taking reduced damage for a short time. In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.',
        image: {
          full: 'Meditate.png'
        },
        cooldownBurn: '28'
      },
      {
        name: 'Wuju Style',
        sanitizedDescription:
          'Master Yi becomes skilled in the art of Wuju, passively increasing his Attack Damage. Activating Wuju Style grants bonus true damage on basic attacks, but the passive bonus is then lost while on cooldown.',
        image: {
          full: 'WujuStyle.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Highlander',
        sanitizedDescription:
          "Master Yi moves with unparalleled agility, temporarily increasing his Movement and Attack Speeds as well as making him immune to all slowing effects. While active, Champion kills or assists extend Highlander's duration. Passively reduces cooldown for his other abilities on a kill or assist.",
        image: {
          full: 'Highlander.png'
        },
        cooldownBurn: '85'
      }
    ],
    passive: {
      image: {
        full: 'MasterYi_Passive1.png'
      },
      name: 'Double Strike',
      sanitizedDescription: 'Every few strikes, Master Yi strikes twice.'
    },
    range: 'Melee'
  },
  '12': {
    id: 12,
    key: 'Alistar',
    name: 'Alistar',
    title: 'the Minotaur',
    image: {
      full: 'Alistar.png'
    },
    spells: [
      {
        name: 'Pulverize',
        sanitizedDescription:
          'Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.',
        image: {
          full: 'Pulverize.png'
        },
        cooldownBurn: '17/16/15/14/13'
      },
      {
        name: 'Headbutt',
        sanitizedDescription:
          'Alistar rams a target with his head, dealing damage and knocking the target back.',
        image: {
          full: 'Headbutt.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Trample',
        sanitizedDescription:
          "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
        image: {
          full: 'AlistarE.png'
        },
        cooldownBurn: '12/11.5/11/10.5/10'
      },
      {
        name: 'Unbreakable Will',
        sanitizedDescription:
          'Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.',
        image: {
          full: 'FerociousHowl.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Alistar_E.png'
      },
      name: 'Triumphant Roar',
      sanitizedDescription:
        'Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself and all nearby allied champions.'
    },
    range: 'Melee'
  },
  '13': {
    id: 13,
    key: 'Ryze',
    name: 'Ryze',
    title: 'the Rune Mage',
    image: {
      full: 'Ryze.png'
    },
    spells: [
      {
        name: 'Overload',
        sanitizedDescription:
          "Passively, Ryze's other damaging spells reset Overload and begin to charge a Rune that can be used to empower Overload.On cast, Ryze throws a charge of pure energy in a line, dealing damage to the first enemy struck. If a Rune is fully charged, Ryze also gains a shield and Movement Speed.",
        image: {
          full: 'RyzeQWrapper.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Rune Prison',
        sanitizedDescription:
          'Ryze traps a target enemy unit in a cage of runes, damaging them and preventing them from moving.',
        image: {
          full: 'RyzeW.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Spell Flux',
        sanitizedDescription:
          "Ryze releases an orb of pure magical power that damages an enemy and debuffs them. Ryze's spells have additional effects against the debuffed enemy.",
        image: {
          full: 'RyzeE.png'
        },
        cooldownBurn: '3.25/3/2.75/2.5/2.25'
      },
      {
        name: 'Realm Warp',
        sanitizedDescription:
          'Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.',
        image: {
          full: 'RyzeR.png'
        },
        cooldownBurn: '180'
      }
    ],
    passive: {
      image: {
        full: 'Ryze_P.png'
      },
      name: 'Arcane Mastery',
      sanitizedDescription:
        "Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power."
    },
    range: 'Ranged'
  },
  '14': {
    id: 14,
    key: 'Sion',
    name: 'Sion',
    title: 'The Undead Juggernaut',
    image: {
      full: 'Sion.png'
    },
    spells: [
      {
        name: 'Decimating Smash',
        sanitizedDescription:
          'Sion charges a powerful swing in an area in front of himself that will deal damage to enemies when released. If he charges for enough time, enemies hit by the swing will also be knocked up and stunned.',
        image: {
          full: 'SionQ.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Soul Furnace',
        sanitizedDescription:
          'Sion shields himself and can reactivate after 3 seconds to deal Magic Damage to enemies nearby. When Sion kills enemies, he passively gains maximum Health.',
        image: {
          full: 'SionW.png'
        },
        cooldownBurn: '15/14/13/12/11'
      },
      {
        name: 'Roar of the Slayer',
        sanitizedDescription:
          'Sion fires a short range shockwave that damages and slows and reduces the Armor of the first enemy hit. If the shockwave hits a minion or monster, it will be knocked back, damaging, slowing, and reducing the Armor of all enemies that it passes through.',
        image: {
          full: 'SionE.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Unstoppable Onslaught',
        sanitizedDescription:
          'Sion charges in a direction, ramping up speed over time. He can steer his charge slightly with the mouse cursor location. When he collides with an enemy he deals damage and knocks them up based on the distance he has charged.',
        image: {
          full: 'SionR.png'
        },
        cooldownBurn: '140/100/60'
      }
    ],
    passive: {
      image: {
        full: 'Sion_Passive1.png'
      },
      name: 'Glory in Death',
      sanitizedDescription:
        "After being killed, Sion will reanimate with rapidly decaying Health. His attacks become very rapid, gain 100% Lifesteal and deal bonus damage equal to 10% of his target's maximum Health (max 75 to monsters).All his abilities are replaced with Death Surge, which grants a burst of Movement Speed."
    },
    range: 'Melee'
  },
  '15': {
    id: 15,
    key: 'Sivir',
    name: 'Sivir',
    title: 'the Battle Mistress',
    image: {
      full: 'Sivir.png'
    },
    spells: [
      {
        name: 'Boomerang Blade',
        sanitizedDescription:
          'Sivir hurls her crossblade like a boomerang, dealing damage each way.',
        image: {
          full: 'SivirQ.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Ricochet',
        sanitizedDescription:
          "Sivir's next few basic attacks will bounce to nearby targets, dealing reduced damage to secondary targets.",
        image: {
          full: 'SivirW.png'
        },
        cooldownBurn: '12/10.5/9/7.5/6'
      },
      {
        name: 'Spell Shield',
        sanitizedDescription:
          'Creates a magical barrier that blocks a single enemy ability cast on Sivir. She receives Mana back if a spell is blocked.',
        image: {
          full: 'SivirE.png'
        },
        cooldownBurn: '22/19/16/13/10'
      },
      {
        name: 'On The Hunt',
        sanitizedDescription:
          'Sivir leads her allies in battle, granting them a surge Movement Speed for a period of time. Additionally passively grants Sivir bonus Attack Speed while Ricochet is active.',
        image: {
          full: 'SivirR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Sivir_Passive.png'
      },
      name: 'Fleet of Foot',
      sanitizedDescription:
        'Sivir gains a short burst of Movement Speed when she attacks an enemy champion.'
    },
    range: 'Ranged'
  },
  '16': {
    id: 16,
    key: 'Soraka',
    name: 'Soraka',
    title: 'the Starchild',
    image: {
      full: 'Soraka.png'
    },
    spells: [
      {
        name: 'Starcall',
        sanitizedDescription:
          'A star falls from the sky at the target location dealing magic damage and slowing enemies. If an enemy champion is hit by Starcall, Soraka recovers health and gains movement speed when moving away from enemy champions.',
        image: {
          full: 'SorakaQ.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Astral Infusion',
        sanitizedDescription:
          'Soraka sacrifices a portion of her own health to heal another friendly champion.',
        image: {
          full: 'SorakaW.png'
        },
        cooldownBurn: '8/6.5/5/3.5/2'
      },
      {
        name: 'Equinox',
        sanitizedDescription:
          'Creates a zone at a location that silences all enemies inside. When the zone expires, all enemies still inside are rooted.',
        image: {
          full: 'SorakaE.png'
        },
        cooldownBurn: '24/22/20/18/16'
      },
      {
        name: 'Wish',
        sanitizedDescription:
          'Soraka fills her allies with hope, instantly restoring health to herself and all friendly champions.',
        image: {
          full: 'SorakaR.png'
        },
        cooldownBurn: '160/145/130'
      }
    ],
    passive: {
      image: {
        full: 'Soraka_Passive.png'
      },
      name: 'Salvation',
      sanitizedDescription: 'Soraka runs faster towards nearby low health allies.'
    },
    range: 'Ranged'
  },
  '17': {
    id: 17,
    key: 'Teemo',
    name: 'Teemo',
    title: 'the Swift Scout',
    image: {
      full: 'Teemo.png'
    },
    spells: [
      {
        name: 'Blinding Dart',
        sanitizedDescription:
          "Obscures an enemy's vision with a powerful venom, dealing damage to the target unit and blinding it for the duration.",
        image: {
          full: 'BlindingDart.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Move Quick',
        sanitizedDescription:
          "Teemo scampers around, passively increasing his Movement Speed until he is struck by an enemy champion or turret. Teemo can sprint to gain bonus Movement Speed that isn't stopped by being struck for a short time.",
        image: {
          full: 'MoveQuick.png'
        },
        cooldownBurn: '17'
      },
      {
        name: 'Toxic Shot',
        sanitizedDescription:
          "Each of Teemo's attacks will poison the target, dealing damage on impact and each second after for 4 seconds.",
        image: {
          full: 'ToxicShot.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Noxious Trap',
        sanitizedDescription:
          'Teemo throws an explosive poisonous trap using one of the mushrooms stored in his pack. If an enemy steps on the trap, it will release a poisonous cloud, slowing enemies and damaging them over time. If Teemo throws a mushroom onto another mushroom it will bounce, gaining additional range.',
        image: {
          full: 'TeemoRCast.png'
        },
        cooldownBurn: '0.25'
      }
    ],
    passive: {
      image: {
        full: 'Teemo_P.png'
      },
      name: 'Guerrilla Warfare',
      sanitizedDescription:
        "If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for 3 seconds."
    },
    range: 'Ranged'
  },
  '18': {
    id: 18,
    key: 'Tristana',
    name: 'Tristana',
    title: 'the Yordle Gunner',
    image: {
      full: 'Tristana.png'
    },
    spells: [
      {
        name: 'Rapid Fire',
        sanitizedDescription:
          'Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.',
        image: {
          full: 'TristanaQ.png'
        },
        cooldownBurn: '20/19/18/17/16'
      },
      {
        name: 'Rocket Jump',
        sanitizedDescription:
          'Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.',
        image: {
          full: 'TristanaW.png'
        },
        cooldownBurn: '22/20/18/16/14'
      },
      {
        name: 'Explosive Charge',
        sanitizedDescription:
          'When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.',
        image: {
          full: 'TristanaE.png'
        },
        cooldownBurn: '16/15.5/15/14.5/14'
      },
      {
        name: 'Buster Shot',
        sanitizedDescription:
          'Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.',
        image: {
          full: 'TristanaR.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'Tristana_Passive.png'
      },
      name: 'Draw a Bead',
      sanitizedDescription: "Increases Tristana's Attack Range as she levels."
    },
    range: 'Ranged'
  },
  '19': {
    id: 19,
    key: 'Warwick',
    name: 'Warwick',
    title: 'the Uncaged Wrath of Zaun',
    image: {
      full: 'Warwick.png'
    },
    spells: [
      {
        name: 'Jaws of the Beast',
        sanitizedDescription:
          'Warwick lunges forward and bites his target, dealing damage based on their maximum health and healing for damage dealt.',
        image: {
          full: 'WarwickQ.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Blood Hunt',
        sanitizedDescription:
          'Warwick senses enemies below 50% health, gaining movement speed toward and attack speed against them. When they fall below 20% health, he frenzies and these bonuses triple.',
        image: {
          full: 'WarwickW.png'
        },
        cooldownBurn: '120/105/90/75/60'
      },
      {
        name: 'Primal Howl',
        sanitizedDescription:
          'Warwick gains damage reduction for 2.5 seconds. At the end, or if re-activated, he howls, causing nearby enemies to flee for 1 second.',
        image: {
          full: 'WarwickE.png'
        },
        cooldownBurn: '15/14/13/12/11'
      },
      {
        name: 'Infinite Duress',
        sanitizedDescription:
          'Warwick leaps in a direction (scaling with his bonus movement speed), suppressing the first champion he collides with for 1.5 seconds.',
        image: {
          full: 'WarwickR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'WarwickP.png'
      },
      name: 'Eternal Hunger',
      sanitizedDescription:
        "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples."
    },
    range: 'Melee'
  },
  '20': {
    id: 20,
    key: 'Nunu',
    name: 'Nunu & Willump',
    title: 'the Boy and His Yeti',
    image: {
      full: 'Nunu.png'
    },
    spells: [
      {
        name: 'Consume',
        sanitizedDescription:
          'Willump takes a bite out of a minion, monster, or enemy champion, dealing damage and healing himself.',
        image: {
          full: 'NunuQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Biggest Snowball Ever!',
        sanitizedDescription:
          'Willump creates a snowball that grows in size and speed as he rolls it.  The snowball damages and knocks up enemies.',
        image: {
          full: 'NunuW.png'
        },
        cooldownBurn: '14'
      },
      {
        name: 'Snowball Barrage',
        sanitizedDescription:
          "Nunu throws multiple snowballs that damage enemies.  When he's finished, Willump roots any champions or large monsters that were hit by a snowball.",
        image: {
          full: 'NunuE.png'
        },
        cooldownBurn: '14'
      },
      {
        name: 'Absolute Zero',
        sanitizedDescription:
          'Nunu & Willump create a powerful blizzard in an area that slows enemies and deals massive damage at the end.',
        image: {
          full: 'NunuR.png'
        },
        cooldownBurn: '110/100/90'
      }
    ],
    passive: {
      image: {
        full: 'NunuPassive.png'
      },
      name: 'Call of the Freljord',
      sanitizedDescription:
        'Nunu increases the attack speed and movement speed of Willump and a nearby ally.'
    },
    range: 'Melee'
  },
  '21': {
    id: 21,
    key: 'MissFortune',
    name: 'Miss Fortune',
    title: 'the Bounty Hunter',
    image: {
      full: 'MissFortune.png'
    },
    spells: [
      {
        name: 'Double Up',
        sanitizedDescription:
          'Miss Fortune fires a bullet at an enemy, damaging them and a target behind them. Both strikes can also apply Love Tap.',
        image: {
          full: 'MissFortuneRicochetShot.png'
        },
        cooldownBurn: '7/6/5/4/3'
      },
      {
        name: 'Strut',
        sanitizedDescription:
          "Miss Fortune passively gains Movement Speed when not attacked. This ability can be activated to grant bonus Attack Speed for a short duration. While it's on cooldown, Love Taps reduce the remaining cooldown of Strut.",
        image: {
          full: 'MissFortuneViciousStrikes.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Make It Rain',
        sanitizedDescription:
          'Miss Fortune reveals an area with a flurry of bullets, dealing waves of damage to opponents and slowing them.',
        image: {
          full: 'MissFortuneScattershot.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Bullet Time',
        sanitizedDescription:
          'Miss Fortune channels a barrage of bullets into a cone in front of her, dealing large amounts of damage to enemies. Each wave of Bullet Time can critically strike',
        image: {
          full: 'MissFortuneBulletTime.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'MissFortune_W.png'
      },
      name: 'Love Tap',
      sanitizedDescription:
        'Miss Fortune deals bonus physical damage whenever she attacks a new target.'
    },
    range: 'Ranged'
  },
  '22': {
    id: 22,
    key: 'Ashe',
    name: 'Ashe',
    title: 'the Frost Archer',
    image: {
      full: 'Ashe.png'
    },
    spells: [
      {
        name: "Ranger's Focus",
        sanitizedDescription:
          "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
        image: {
          full: 'AsheQ.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Volley',
        sanitizedDescription:
          'Ashe fires 9 arrows in a cone for increased damage. Also applies Frost Shot.',
        image: {
          full: 'Volley.png'
        },
        cooldownBurn: '15/12.5/10/7.5/5'
      },
      {
        name: 'Hawkshot',
        sanitizedDescription:
          'Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.',
        image: {
          full: 'AsheSpiritOfTheHawk.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Enchanted Crystal Arrow',
        sanitizedDescription:
          'Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.',
        image: {
          full: 'EnchantedCrystalArrow.png'
        },
        cooldownBurn: '100/90/80'
      }
    ],
    passive: {
      image: {
        full: 'Ashe_P.png'
      },
      name: 'Frost Shot',
      sanitizedDescription:
        "Ashe's attacks slow their target, causing her to deal increased damage to these targets.Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target."
    },
    range: 'Ranged'
  },
  '23': {
    id: 23,
    key: 'Tryndamere',
    name: 'Tryndamere',
    title: 'the Barbarian King',
    image: {
      full: 'Tryndamere.png'
    },
    spells: [
      {
        name: 'Bloodlust',
        sanitizedDescription:
          'Tryndamere thrives on the thrills of combat, increasing his Attack Damage as he is more and more wounded. He can cast Bloodlust to consume his Fury and heal himself.',
        image: {
          full: 'TryndamereQ.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Mocking Shout',
        sanitizedDescription:
          "Tryndamere lets out an insulting cry, decreasing surrounding champions' Attack Damage. Enemies with their backs turned to Tryndamere also have their Movement Speed reduced.",
        image: {
          full: 'TryndamereW.png'
        },
        cooldownBurn: '14'
      },
      {
        name: 'Spinning Slash',
        sanitizedDescription:
          'Tryndamere slices toward a target unit, dealing damage to enemies in his path.',
        image: {
          full: 'TryndamereE.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Undying Rage',
        sanitizedDescription:
          "Tryndamere's lust for battle becomes so strong that he is unable to die, no matter how wounded he becomes.",
        image: {
          full: 'UndyingRage.png'
        },
        cooldownBurn: '110/100/90'
      }
    ],
    passive: {
      image: {
        full: 'Tryndamere_Passive.png'
      },
      name: 'Battle Fury',
      sanitizedDescription:
        'Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.'
    },
    range: 'Melee'
  },
  '24': {
    id: 24,
    key: 'Jax',
    name: 'Jax',
    title: 'Grandmaster at Arms',
    image: {
      full: 'Jax.png'
    },
    spells: [
      {
        name: 'Leap Strike',
        sanitizedDescription:
          'Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.',
        image: {
          full: 'JaxLeapStrike.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Empower',
        sanitizedDescription:
          'Jax charges his weapon with energy, causing his next attack to deal additional damage.',
        image: {
          full: 'JaxEmpowerTwo.png'
        },
        cooldownBurn: '7/6/5/4/3'
      },
      {
        name: 'Counter Strike',
        sanitizedDescription:
          "Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.",
        image: {
          full: 'JaxCounterStrike.png'
        },
        cooldownBurn: '16/14/12/10/8'
      },
      {
        name: "Grandmaster's Might",
        sanitizedDescription:
          'Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to strengthen his resolve, increasing his Armor and Magic Resist for a short duration.',
        image: {
          full: 'JaxRelentlessAssault.png'
        },
        cooldownBurn: '80'
      }
    ],
    passive: {
      image: {
        full: 'Armsmaster_MasterOfArms.png'
      },
      name: 'Relentless Assault',
      sanitizedDescription:
        "Jax's consecutive basic attacks continuously increase his Attack Speed."
    },
    range: 'Melee'
  },
  '25': {
    id: 25,
    key: 'Morgana',
    name: 'Morgana',
    title: 'the Fallen',
    image: {
      full: 'Morgana.png'
    },
    spells: [
      {
        name: 'Dark Binding',
        sanitizedDescription:
          "Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage. ",
        image: {
          full: 'MorganaQ.png'
        },
        cooldownBurn: '11'
      },
      {
        name: 'Tormented Shadow',
        sanitizedDescription:
          'Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are.',
        image: {
          full: 'MorganaW.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Black Shield',
        sanitizedDescription:
          'Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken.',
        image: {
          full: 'MorganaE.png'
        },
        cooldownBurn: '23/21/19/17/15'
      },
      {
        name: 'Soul Shackles',
        sanitizedDescription:
          'Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining movement speed towards them. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them.',
        image: {
          full: 'MorganaR.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'FallenAngel_Empathize.png'
      },
      name: '',
      sanitizedDescription: ''
    },
    range: 'Ranged'
  },
  '26': {
    id: 26,
    key: 'Zilean',
    name: 'Zilean',
    title: 'the Chronokeeper',
    image: {
      full: 'Zilean.png'
    },
    spells: [
      {
        name: 'Time Bomb',
        sanitizedDescription:
          'Tosses a bomb to target area that sticks to units that come near it (prioritizes Champions). It detonates after 3 seconds, dealing area of effect damage. If a Time Bomb is detonated early by another Time Bomb, it also stuns enemies.',
        image: {
          full: 'ZileanQ.png'
        },
        cooldownBurn: '10/9.5/9/8.5/8'
      },
      {
        name: 'Rewind',
        sanitizedDescription:
          'Zilean can prepare himself for future confrontations, reducing the cooldowns of his other basic abilities.',
        image: {
          full: 'ZileanW.png'
        },
        cooldownBurn: '14/12/10/8/6'
      },
      {
        name: 'Time Warp',
        sanitizedDescription:
          "Zilean bends time around any unit, decreasing an enemy's Movement Speed or increasing an ally's Movement Speed for a short time.",
        image: {
          full: 'TimeWarp.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Chronoshift',
        sanitizedDescription:
          'Zilean places a protective time rune on an allied champion, teleporting the champion back in time if they take lethal damage.',
        image: {
          full: 'ChronoShift.png'
        },
        cooldownBurn: '120/90/60'
      }
    ],
    passive: {
      image: {
        full: 'Zilean_Passive.png'
      },
      name: 'Time in a Bottle',
      sanitizedDescription:
        "Zilean stores time as Experience. When he has enough Experience to finish an ally's level, he can right-click them to impart it. Zilean receives as much Experience as he gives. Cannot be used in combat."
    },
    range: 'Ranged'
  },
  '27': {
    id: 27,
    key: 'Singed',
    name: 'Singed',
    title: 'the Mad Chemist',
    image: {
      full: 'Singed.png'
    },
    spells: [
      {
        name: 'Poison Trail',
        sanitizedDescription:
          'Leaves a trail of poison behind Singed, dealing damage to enemies caught in the path.',
        image: {
          full: 'PoisonTrail.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Mega Adhesive',
        sanitizedDescription:
          'Throws a vial of mega adhesive on the ground, slowing and grounding enemies who walk on it.',
        image: {
          full: 'MegaAdhesive.png'
        },
        cooldownBurn: '17/16/15/14/13'
      },
      {
        name: 'Fling',
        sanitizedDescription:
          'Damages target enemy unit and flings them into the air behind Singed. If the target Singed flings lands in his Mega Adhesive, they are also rooted.',
        image: {
          full: 'Fling.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Insanity Potion',
        sanitizedDescription:
          'Singed drinks a potent brew of chemicals, granting him increased combat stats.',
        image: {
          full: 'InsanityPotion.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'Singed_Passive.png'
      },
      name: 'Noxious Slipstream',
      sanitizedDescription:
        'Singed drafts off nearby champions, gaining a burst of movement speed when passing them.'
    },
    range: 'Melee'
  },
  '28': {
    id: 28,
    key: 'Evelynn',
    name: 'Evelynn',
    title: "Agony's Embrace",
    image: {
      full: 'Evelynn.png'
    },
    spells: [
      {
        name: 'Hate Spike',
        sanitizedDescription:
          'Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes up to 3 times.',
        image: {
          full: 'EvelynnQ.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Allure',
        sanitizedDescription:
          'Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.',
        image: {
          full: 'EvelynnW.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Whiplash',
        sanitizedDescription:
          'Evelynn whips her target with her Lasher, dealing damage. She then gains movement speed for a short duration.',
        image: {
          full: 'EvelynnE.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Last Caress',
        sanitizedDescription:
          'Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.',
        image: {
          full: 'EvelynnR.png'
        },
        cooldownBurn: '140/110/80'
      }
    ],
    passive: {
      image: {
        full: 'Evelynn_Passive.png'
      },
      name: 'Demon Shade',
      sanitizedDescription:
        'When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.'
    },
    range: 'Melee'
  },
  '29': {
    id: 29,
    key: 'Twitch',
    name: 'Twitch',
    title: 'the Plague Rat',
    image: {
      full: 'Twitch.png'
    },
    spells: [
      {
        name: 'Ambush',
        sanitizedDescription:
          "Twitch becomes Camouflaged for a short duration and gains Movement Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration.When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",
        image: {
          full: 'TwitchHideInShadows.png'
        },
        cooldownBurn: '16'
      },
      {
        name: 'Venom Cask',
        sanitizedDescription:
          'Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.',
        image: {
          full: 'TwitchVenomCask.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Contaminate',
        sanitizedDescription:
          'Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.',
        image: {
          full: 'TwitchExpunge.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Spray and Pray',
        sanitizedDescription:
          'Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.',
        image: {
          full: 'TwitchFullAutomatic.png'
        },
        cooldownBurn: '90'
      }
    ],
    passive: {
      image: {
        full: 'Twitch_Passive.png'
      },
      name: 'Deadly Venom',
      sanitizedDescription:
        "Twitch's basic attacks infect the target, dealing true damage each second."
    },
    range: 'Ranged'
  },
  '30': {
    id: 30,
    key: 'Karthus',
    name: 'Karthus',
    title: 'the Deathsinger',
    image: {
      full: 'Karthus.png'
    },
    spells: [
      {
        name: 'Lay Waste',
        sanitizedDescription:
          'Karthus unleashes a delayed blast at a location, dealing damage to nearby enemies.',
        image: {
          full: 'KarthusLayWasteA1.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Wall of Pain',
        sanitizedDescription:
          'Karthus creates a passable screen of leeching energy. Any enemy units that walk through the screen have their Movement Speed and Magic Resist reduced for a period.',
        image: {
          full: 'KarthusWallOfPain.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Defile',
        sanitizedDescription:
          'Karthus passively steals energy from his victims, gaining Mana on each kill. Alternatively, Karthus can surround himself in the souls of his prey, dealing damage to nearby enemies, but quickly draining his own Mana.',
        image: {
          full: 'KarthusDefile.png'
        },
        cooldownBurn: '0.5'
      },
      {
        name: 'Requiem',
        sanitizedDescription:
          'After channeling for 3 seconds, Karthus deals damage to all enemy champions.',
        image: {
          full: 'KarthusFallenOne.png'
        },
        cooldownBurn: '200/180/160'
      }
    ],
    passive: {
      image: {
        full: 'Karthus_Passive.png'
      },
      name: 'Death Defied',
      sanitizedDescription:
        'Upon dying, Karthus enters a spirit form that allows him to continue casting spells for 7 seconds.'
    },
    range: 'Ranged'
  },
  '31': {
    id: 31,
    key: 'Chogath',
    name: "Cho'Gath",
    title: 'the Terror of the Void',
    image: {
      full: 'Chogath.png'
    },
    spells: [
      {
        name: 'Rupture',
        sanitizedDescription:
          'Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.',
        image: {
          full: 'Rupture.png'
        },
        cooldownBurn: '9'
      },
      {
        name: 'Feral Scream',
        sanitizedDescription:
          "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
        image: {
          full: 'FeralScream.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Vorpal Spikes',
        sanitizedDescription:
          "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
        image: {
          full: 'VorpalSpikes.png'
        },
        cooldownBurn: '8/7/6/5/4'
      },
      {
        name: 'Feast',
        sanitizedDescription:
          "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
        image: {
          full: 'Feast.png'
        },
        cooldownBurn: '80'
      }
    ],
    passive: {
      image: {
        full: 'GreenTerror_TailSpike.png'
      },
      name: 'Carnivore',
      sanitizedDescription:
        "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level."
    },
    range: 'Melee'
  },
  '32': {
    id: 32,
    key: 'Amumu',
    name: 'Amumu',
    title: 'the Sad Mummy',
    image: {
      full: 'Amumu.png'
    },
    spells: [
      {
        name: 'Bandage Toss',
        sanitizedDescription:
          'Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.',
        image: {
          full: 'BandageToss.png'
        },
        cooldownBurn: '16/14/12/10/8'
      },
      {
        name: 'Despair',
        sanitizedDescription:
          'Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their Curses refreshed.',
        image: {
          full: 'AuraofDespair.png'
        },
        cooldownBurn: '1'
      },
      {
        name: 'Tantrum',
        sanitizedDescription:
          'Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced by 0.5 seconds.',
        image: {
          full: 'Tantrum.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Curse of the Sad Mummy',
        sanitizedDescription:
          'Amumu entangles surrounding enemy units in bandages, applying his Curse, damaging them and rendering them unable to attack or move.',
        image: {
          full: 'CurseoftheSadMummy.png'
        },
        cooldownBurn: '150/130/110'
      }
    ],
    passive: {
      image: {
        full: 'Amumu_Passive.png'
      },
      name: 'Cursed Touch',
      sanitizedDescription:
        "Amumu's basic attacks Curse enemies for 3 seconds, causing them to take 10% bonus true damage from any magic damage dealt to them."
    },
    range: 'Melee'
  },
  '33': {
    id: 33,
    key: 'Rammus',
    name: 'Rammus',
    title: 'the Armordillo',
    image: {
      full: 'Rammus.png'
    },
    spells: [
      {
        name: 'Powerball',
        sanitizedDescription:
          'Rammus accelerates in a ball towards his enemies, dealing damage and slowing targets affected by the impact.',
        image: {
          full: 'PowerBall.png'
        },
        cooldownBurn: '16/13.5/11/8.5/6'
      },
      {
        name: 'Defensive Ball Curl',
        sanitizedDescription:
          "Rammus goes into a defensive formation, vastly increasing his Armor and Magic Resistance, amplifying Spiked Shells' damage, and returning damage to enemies that basic attack him, but he is also slowed during this time.",
        image: {
          full: 'DefensiveBallCurl.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Frenzying Taunt',
        sanitizedDescription:
          'Rammus taunts an enemy champion or monster into a reckless assault against him. Additionally, he gains increased Attack Speed for a short time, but this bonus is extended by having any of his other spells active.',
        image: {
          full: 'PuncturingTaunt.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Tremors',
        sanitizedDescription:
          'Rammus creates waves of destruction pulsing through the ground, causing damage to nearby enemies and slowing them. Turrets take double damage from Tremors.',
        image: {
          full: 'Tremors2.png'
        },
        cooldownBurn: '100/80/60'
      }
    ],
    passive: {
      image: {
        full: 'Armordillo_ScavengeArmor.png'
      },
      name: 'Spiked Shell',
      sanitizedDescription: "Rammus' basic attacks deal bonus magic damage, scaling with his Armor."
    },
    range: 'Melee'
  },
  '34': {
    id: 34,
    key: 'Anivia',
    name: 'Anivia',
    title: 'the Cryophoenix',
    image: {
      full: 'Anivia.png'
    },
    spells: [
      {
        name: 'Flash Frost',
        sanitizedDescription:
          'Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.',
        image: {
          full: 'FlashFrost.png'
        },
        cooldownBurn: '10/9.5/9/8.5/8'
      },
      {
        name: 'Crystallize',
        sanitizedDescription:
          'Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.',
        image: {
          full: 'Crystallize.png'
        },
        cooldownBurn: '17'
      },
      {
        name: 'Frostbite',
        sanitizedDescription:
          'With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing a low amount of damage. If the target was recently stunned by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.',
        image: {
          full: 'Frostbite.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Glacial Storm',
        sanitizedDescription:
          'Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.',
        image: {
          full: 'GlacialStorm.png'
        },
        cooldownBurn: '6'
      }
    ],
    passive: {
      image: {
        full: 'Anivia_P.png'
      },
      name: 'Rebirth',
      sanitizedDescription:
        'Upon dying, Anivia will revert into an egg. If the egg can survive for six seconds, she is gloriously reborn.'
    },
    range: 'Ranged'
  },
  '35': {
    id: 35,
    key: 'Shaco',
    name: 'Shaco',
    title: 'the Demon Jester',
    image: {
      full: 'Shaco.png'
    },
    spells: [
      {
        name: 'Deceive',
        sanitizedDescription:
          "Shaco becomes Invisible and teleports to target location.His first attack while Invisible is empowered, dealing bonus damage and reducing Deceive's cooldown",
        image: {
          full: 'Deceive.png'
        },
        cooldownBurn: '16/15.5/15/14.5/14'
      },
      {
        name: 'Jack In The Box',
        sanitizedDescription:
          'Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.',
        image: {
          full: 'JackInTheBox.png'
        },
        cooldownBurn: '16'
      },
      {
        name: 'Two-Shiv Poison',
        sanitizedDescription:
          "Shaco's Shivs passively poison targets on hit, slowing their movement speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage based on the target's missing Health.",
        image: {
          full: 'TwoShivPoison.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Hallucinate',
        sanitizedDescription:
          'Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets).  Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.',
        image: {
          full: 'HallucinateFull.png'
        },
        cooldownBurn: '100/90/80'
      }
    ],
    passive: {
      image: {
        full: 'Jester_CarefulStrikes.png'
      },
      name: 'Backstab',
      sanitizedDescription:
        "Shaco's basic attack critically strikes for extra damage when striking a unit from behind. Units can't be Backstabbed more than once every few seconds, modified by Shaco's cooldown reduction."
    },
    range: 'Melee'
  },
  '36': {
    id: 36,
    key: 'DrMundo',
    name: 'Dr. Mundo',
    title: 'the Madman of Zaun',
    image: {
      full: 'DrMundo.png'
    },
    spells: [
      {
        name: 'Infected Cleaver',
        sanitizedDescription:
          "Dr. Mundo hurls his cleaver, dealing damage equal to a portion of his target's current Health and slowing them for a short time. Dr. Mundo delights in the suffering of others, so he is returned a portion of the Health cost when he successfully lands a cleaver (doubled on killing blows).",
        image: {
          full: 'InfectedCleaverMissileCast.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Burning Agony',
        sanitizedDescription:
          'Dr. Mundo drains his Health to reduce the duration of disables and deal continual damage to nearby enemies.',
        image: {
          full: 'BurningAgony.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Masochism',
        sanitizedDescription:
          'Dr. Mundo gains bonus attack damage based on his missing health, and his next basic attack headbutts his target for additional damage. Passively increases magic resist whenever Dr. Mundo is dealt magic damage or pays a health cost.',
        image: {
          full: 'Masochism.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Sadism',
        sanitizedDescription:
          'Dr. Mundo sacrifices a portion of his Health for increased Movement Speed and drastically increased Health Regeneration.',
        image: {
          full: 'Sadism.png'
        },
        cooldownBurn: '110/100/90'
      }
    ],
    passive: {
      image: {
        full: 'DrMundo_Passive.png'
      },
      name: 'Adrenaline Rush',
      sanitizedDescription: 'Dr. Mundo regenerates 0.3% of his maximum Health each second.'
    },
    range: 'Melee'
  },
  '37': {
    id: 37,
    key: 'Sona',
    name: 'Sona',
    title: 'Maven of the Strings',
    image: {
      full: 'Sona.png'
    },
    spells: [
      {
        name: 'Hymn of Valor',
        sanitizedDescription:
          'Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.',
        image: {
          full: 'SonaQ.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Aria of Perseverance',
        sanitizedDescription:
          'Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.',
        image: {
          full: 'SonaW.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Song of Celerity',
        sanitizedDescription:
          'Sona plays the Song of Celerity, granting nearby allies bonus Movement Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Movement Speed on their next attack.',
        image: {
          full: 'SonaE.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Crescendo',
        sanitizedDescription:
          "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them. Each rank reduces the base cooldown of Sona's basic abilities.",
        image: {
          full: 'SonaR.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'Sona_Passive_Charged.png'
      },
      name: 'Power Chord',
      sanitizedDescription:
        "After casting 3 spells, Sona's next attack deals bonus magic damage in addition to a bonus effect depending on what song Sona last activated."
    },
    range: 'Ranged'
  },
  '38': {
    id: 38,
    key: 'Kassadin',
    name: 'Kassadin',
    title: 'the Void Walker',
    image: {
      full: 'Kassadin.png'
    },
    spells: [
      {
        name: 'Null Sphere',
        sanitizedDescription:
          'Kassadin fires an orb of void energy at a target, dealing damage and interrupting channels. The excess energy forms around himself, granting a temporary shield that absorbs magic damage.',
        image: {
          full: 'NullLance.png'
        },
        cooldownBurn: '9'
      },
      {
        name: 'Nether Blade',
        sanitizedDescription:
          "Passive: Kassadin's basic attacks deal bonus magic damage. Active: Kassadin's next basic attack deals significant bonus magic damage and restores Mana.",
        image: {
          full: 'NetherBlade.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Force Pulse',
        sanitizedDescription:
          'Kassadin draws energy from spells cast in his vicinity. Upon charging up, Kassadin can use Force Pulse to damage and slow enemies in a cone in front of him.',
        image: {
          full: 'ForcePulse.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Riftwalk',
        sanitizedDescription:
          'Kassadin teleports to a nearby location dealing damage to nearby enemy units. Multiple Riftwalks in a short period of time cost additional Mana but also deal additional damage.',
        image: {
          full: 'RiftWalk.png'
        },
        cooldownBurn: '5/3.5/2'
      }
    ],
    passive: {
      image: {
        full: 'Kassadin_Passive.png'
      },
      name: 'Void Stone',
      sanitizedDescription: 'Kassadin takes 15% reduced magic damage and ignores unit collision.'
    },
    range: 'Melee'
  },
  '39': {
    id: 39,
    key: 'Irelia',
    name: 'Irelia',
    title: 'the Blade Dancer',
    image: {
      full: 'Irelia.png'
    },
    spells: [
      {
        name: 'Bladesurge',
        sanitizedDescription:
          'Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.',
        image: {
          full: 'IreliaQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Defiant Dance',
        sanitizedDescription:
          'Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.',
        image: {
          full: 'IreliaW.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Flawless Duet',
        sanitizedDescription:
          'Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.',
        image: {
          full: 'IreliaE.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: "Vanguard's Edge",
        sanitizedDescription:
          'Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.',
        image: {
          full: 'IreliaR.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'Irelia_Passive.png'
      },
      name: 'Ionian Fervor',
      sanitizedDescription:
        'When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.'
    },
    range: 'Melee'
  },
  '40': {
    id: 40,
    key: 'Janna',
    name: 'Janna',
    title: "the Storm's Fury",
    image: {
      full: 'Janna.png'
    },
    spells: [
      {
        name: 'Howling Gale',
        sanitizedDescription:
          'By creating a localized change in pressure and temperature, Janna is able to create a small storm that grows in size with time. She can activate the spell again to release the storm. On release this storm will fly towards the direction it was cast in, dealing damage and knocking away any enemies in its path.',
        image: {
          full: 'HowlingGale.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Zephyr',
        sanitizedDescription:
          "Janna summons an air elemental that passively increases her Movement Speed and enables her to pass through units. She may also activate this ability to deal damage and slow an enemy's Movement Speed. The passive is lost while this ability is on cooldown.",
        image: {
          full: 'SowTheWind.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Eye Of The Storm',
        sanitizedDescription:
          'Janna conjures a defensive gale that shields an ally champion or turret from incoming damage and increases their Attack Damage.',
        image: {
          full: 'EyeOfTheStorm.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Monsoon',
        sanitizedDescription:
          'Janna surrounds herself in a magical storm, throwing enemies back. After the storm has settled, soothing winds heal nearby allies while the ability is active.',
        image: {
          full: 'ReapTheWhirlwind.png'
        },
        cooldownBurn: '150/135/120'
      }
    ],
    passive: {
      image: {
        full: 'Janna_Tailwind.png'
      },
      name: 'Tailwind',
      sanitizedDescription:
        "Janna passively gains 8% Movement Speed, and nearby allied champions gain this bonus when moving toward her.Additionally, Janna's basic attacks cause additional magic damage based on her bonus Movement Speed."
    },
    range: 'Ranged'
  },
  '41': {
    id: 41,
    key: 'Gangplank',
    name: 'Gangplank',
    title: 'the Saltwater Scourge',
    image: {
      full: 'Gangplank.png'
    },
    spells: [
      {
        name: 'Parrrley',
        sanitizedDescription: 'Shoots target, plundering Gold for each enemy unit killed.',
        image: {
          full: 'GangplankQWrapper.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Remove Scurvy',
        sanitizedDescription: 'Eats citrus to cure crowd control effects and restore Health.',
        image: {
          full: 'GangplankW.png'
        },
        cooldownBurn: '22/20/18/16/14'
      },
      {
        name: 'Powder Keg',
        sanitizedDescription:
          "Gangplank uncovers a powder keg at target location. If he attacks it, it explodes, spreading the attack's damage to enemies in the area, slowing them.",
        image: {
          full: 'GangplankE.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Cannon Barrage',
        sanitizedDescription:
          'Gangplank signals his ship to bombard an area, slowing and damaging enemies.',
        image: {
          full: 'GangplankR.png'
        },
        cooldownBurn: '180/160/140'
      }
    ],
    passive: {
      image: {
        full: 'Gangplank_Passive.png'
      },
      name: 'Trial by Fire',
      sanitizedDescription:
        "Every few seconds, Gangplank's melee strike will set his opponent on fire."
    },
    range: 'Melee'
  },
  '42': {
    id: 42,
    key: 'Corki',
    name: 'Corki',
    title: 'the Daring Bombardier',
    image: {
      full: 'Corki.png'
    },
    spells: [
      {
        name: 'Phosphorus Bomb',
        sanitizedDescription:
          'Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.',
        image: {
          full: 'PhosphorusBomb.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Valkyrie',
        sanitizedDescription:
          'Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.',
        image: {
          full: 'CarpetBomb.png'
        },
        cooldownBurn: '20/19/18/17/16'
      },
      {
        name: 'Gatling Gun',
        sanitizedDescription:
          "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
        image: {
          full: 'GGun.png'
        },
        cooldownBurn: '16'
      },
      {
        name: 'Missile Barrage',
        sanitizedDescription:
          'Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.',
        image: {
          full: 'MissileBarrage.png'
        },
        cooldownBurn: '2'
      }
    ],
    passive: {
      image: {
        full: 'Corki_RapidReload.png'
      },
      name: 'Hextech Munitions',
      sanitizedDescription:
        "Corki's basic attack deals a percentage of their damage as magic instead of physical. Every once in a while, The Package arrives in Corki's base to be picked up, temporarily granting him out of combat Movement Speed and upgrading Valkyrie into Special Delivery."
    },
    range: 'Ranged'
  },
  '43': {
    id: 43,
    key: 'Karma',
    name: 'Karma',
    title: 'the Enlightened One',
    image: {
      full: 'Karma.png'
    },
    spells: [
      {
        name: 'Inner Flame',
        sanitizedDescription:
          'Karma sends forth a ball of spirit energy that explodes and deals damage upon hitting an enemy unit.Mantra Bonus: In addition to the explosion, Mantra increases the destructive power of her Inner Flame, creating a cataclysm which deals damage after a short delay.',
        image: {
          full: 'KarmaQ.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Focused Resolve',
        sanitizedDescription:
          'Karma creates a tether between herself and a targeted enemy, dealing damage and revealing them. If the tether is not broken, the enemy will be rooted and damaged again.Mantra Bonus: Karma strengthens the link, healing herself and extending the root duration.',
        image: {
          full: 'KarmaSpiritBind.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Inspire',
        sanitizedDescription:
          'Karma summons a protective shield that absorbs incoming damage and increases the Movement Speed of the protected ally.Mantra Bonus: Energy radiates out from her target, strengthening the initial shield and applying Inspire to nearby allied champions.',
        image: {
          full: 'KarmaSolKimShield.png'
        },
        cooldownBurn: '10/9.5/9/8.5/8'
      },
      {
        name: 'Mantra',
        sanitizedDescription:
          'Karma empowers her next ability to do an additional effect. Mantra is available at level 1 and does not require a skill point.',
        image: {
          full: 'KarmaMantra.png'
        },
        cooldownBurn: '45/42/39/36'
      }
    ],
    passive: {
      image: {
        full: 'Karma_Passive.png'
      },
      name: 'Gathering Fire',
      sanitizedDescription:
        "Reduces Mantra's cooldown each time Karma damages an enemy champion with one of her abilities (Half-effect for Karma's basic attacks)"
    },
    range: 'Ranged'
  },
  '44': {
    id: 44,
    key: 'Taric',
    name: 'Taric',
    title: 'the Shield of Valoran',
    image: {
      full: 'Taric.png'
    },
    spells: [
      {
        name: "Starlight's Touch",
        sanitizedDescription:
          "Heals nearby allied champions based on charges stored. Bravado-empowered attacks grant a charge of Starlight's Touch.",
        image: {
          full: 'TaricQ.png'
        },
        cooldownBurn: '3'
      },
      {
        name: 'Bastion',
        sanitizedDescription:
          "Passively increase the Armor of Taric and any allied champion with Bastion.Actively shields an ally and grants them Bastion for as long as they remain near Taric. Taric's spells also cast off the ally with Bastion.",
        image: {
          full: 'TaricW.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Dazzle',
        sanitizedDescription:
          'Taric readies a beam of starlight that, after a brief delay, deals magic damage and stuns enemies.',
        image: {
          full: 'TaricE.png'
        },
        cooldownBurn: '17/16/15/14/13'
      },
      {
        name: 'Cosmic Radiance',
        sanitizedDescription:
          'Pulses cosmic energy onto nearby allied champions after a delay, making them invulnerable for a short duration.',
        image: {
          full: 'TaricR.png'
        },
        cooldownBurn: '180/150/120'
      }
    ],
    passive: {
      image: {
        full: 'Taric_Passive.png'
      },
      name: 'Bravado',
      sanitizedDescription:
        "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession."
    },
    range: 'Melee'
  },
  '45': {
    id: 45,
    key: 'Veigar',
    name: 'Veigar',
    title: 'the Tiny Master of Evil',
    image: {
      full: 'Veigar.png'
    },
    spells: [
      {
        name: 'Baleful Strike',
        sanitizedDescription:
          'Veigar unleashes a bolt of dark energy that deals magic damage to the first two enemies hit. Units killed by this bolt grant Veigar some ability power permanently.',
        image: {
          full: 'VeigarBalefulStrike.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Dark Matter',
        sanitizedDescription:
          "Veigar calls a great mass of dark matter to fall from the sky to the target location, dealing magic damage when it lands. Stacks of Phenomenal Evil reduce Dark Matter's cooldown.",
        image: {
          full: 'VeigarDarkMatter.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Event Horizon',
        sanitizedDescription:
          'After a brief delay Veigar twists the edges of space around the target location for 3 seconds, stunning enemies who pass through the perimeter.',
        image: {
          full: 'VeigarEventHorizon.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Primordial Burst',
        sanitizedDescription:
          "Blasts target enemy champion, dealing a large amount of magic damage, increasing based on the target's missing health.",
        image: {
          full: 'VeigarR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Veigar_Entropy.png'
      },
      name: 'Phenomenal Evil Power',
      sanitizedDescription:
        "Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power."
    },
    range: 'Ranged'
  },
  '48': {
    id: 48,
    key: 'Trundle',
    name: 'Trundle',
    title: 'the Troll King',
    image: {
      full: 'Trundle.png'
    },
    spells: [
      {
        name: 'Chomp',
        sanitizedDescription:
          'Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.',
        image: {
          full: 'TrundleTrollSmash.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Frozen Domain',
        sanitizedDescription:
          'Trundle turns target location into his domain, gaining Attack Speed, Movement Speed, and increased healing from all sources while on it.',
        image: {
          full: 'trundledesecrate.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Pillar of Ice',
        sanitizedDescription:
          'Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.',
        image: {
          full: 'TrundleCircle.png'
        },
        cooldownBurn: '24/22/20/18/16'
      },
      {
        name: 'Subjugate',
        sanitizedDescription:
          "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
        image: {
          full: 'TrundlePain.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'Trundle_Passive.png'
      },
      name: "King's Tribute",
      sanitizedDescription:
        'When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.'
    },
    range: 'Melee'
  },
  '50': {
    id: 50,
    key: 'Swain',
    name: 'Swain',
    title: 'the Noxian Grand General',
    image: {
      full: 'Swain.png'
    },
    spells: [
      {
        name: "Death's Hand",
        sanitizedDescription:
          'Swain unleashes several bolts of eldritch power that pierce through targets killed. Enemies hit take more damage for each bolt they are struck by.',
        image: {
          full: 'SwainQ.png'
        },
        cooldownBurn: '7.5/6.25/5/3.75/2.5'
      },
      {
        name: 'Vision of Empire',
        sanitizedDescription:
          'Swain opens a demon eye that deals damage and slows enemies. Champions hit are revealed and also grant Swain a Soul Fragment.',
        image: {
          full: 'SwainW.png'
        },
        cooldownBurn: '22/21/20/19/18'
      },
      {
        name: 'Nevermove',
        sanitizedDescription:
          'Swain launches a wave of demonic power forward. It then returns to Swain and roots enemies it hits.',
        image: {
          full: 'SwainE.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Demonic Ascension',
        sanitizedDescription:
          'Swain transforms into a demon and drains health from the 3 closest enemy champions. After draining enough health, Swain can cast Demonflare to end his transformation and decimate nearby enemies with a nova of soulfire.',
        image: {
          full: 'SwainR.png'
        },
        cooldownBurn: '120'
      }
    ],
    passive: {
      image: {
        full: 'Swain_P.png'
      },
      name: 'Ravenous Flock',
      sanitizedDescription:
        "Swain's ravens collect Soul Fragments that heal him. Swain can right-click an immobilized enemy champions to pull them closer to him, dealing damage and ripping out a Soul Fragment."
    },
    range: 'Ranged'
  },
  '51': {
    id: 51,
    key: 'Caitlyn',
    name: 'Caitlyn',
    title: 'the Sheriff of Piltover',
    image: {
      full: 'Caitlyn.png'
    },
    spells: [
      {
        name: 'Piltover Peacemaker',
        sanitizedDescription:
          'Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).',
        image: {
          full: 'CaitlynPiltoverPeacemaker.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Yordle Snap Trap',
        sanitizedDescription:
          'Caitlyn sets a trap to find sneaky yordles. When sprung, the trap reveals and immobilizes the enemy champion for 1.5 seconds.',
        image: {
          full: 'CaitlynYordleTrap.png'
        },
        cooldownBurn: '0.5'
      },
      {
        name: '90 Caliber Net',
        sanitizedDescription:
          'Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.',
        image: {
          full: 'CaitlynEntrapment.png'
        },
        cooldownBurn: '16/14.5/13/11.5/10'
      },
      {
        name: 'Ace in the Hole',
        sanitizedDescription:
          'Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.',
        image: {
          full: 'CaitlynAceintheHole.png'
        },
        cooldownBurn: '90/75/60'
      }
    ],
    passive: {
      image: {
        full: 'Caitlyn_Headshot.png'
      },
      name: 'Headshot',
      sanitizedDescription:
        "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled."
    },
    range: 'Ranged'
  },
  '53': {
    id: 53,
    key: 'Blitzcrank',
    name: 'Blitzcrank',
    title: 'the Great Steam Golem',
    image: {
      full: 'Blitzcrank.png'
    },
    spells: [
      {
        name: 'Rocket Grab',
        sanitizedDescription:
          'Blitzcrank fires his right hand to grab an opponent on its path, dealing damage and dragging it back to him.',
        image: {
          full: 'RocketGrab.png'
        },
        cooldownBurn: '20/19/18/17/16'
      },
      {
        name: 'Overdrive',
        sanitizedDescription:
          'Blitzcrank super charges himself to get dramatically increased Movement and Attack Speed. He is temporarily slowed after the effect ends.',
        image: {
          full: 'Overdrive.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Power Fist',
        sanitizedDescription:
          'Blitzcrank charges up his fist to make his next attack deal double damage and pop his target up in the air.',
        image: {
          full: 'PowerFist.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Static Field',
        sanitizedDescription:
          'Passively causes lightning bolts to damage a nearby enemy. Additionally, Blitzcrank can activate this ability to damage nearby enemies and silence them for 0.5 seconds, but doing so removes the passive lightning until Static Field becomes available again.',
        image: {
          full: 'StaticField.png'
        },
        cooldownBurn: '60/40/20'
      }
    ],
    passive: {
      image: {
        full: 'Blitzcrank_ManaBarrier.png'
      },
      name: 'Mana Barrier',
      sanitizedDescription:
        "When Blitzcrank's life is brought below 20% health, he activates Mana Barrier. This creates a mana shield equal to 50% of his mana for 10 seconds. Mana Barrier can only occur once every 90 seconds."
    },
    range: 'Melee'
  },
  '54': {
    id: 54,
    key: 'Malphite',
    name: 'Malphite',
    title: 'Shard of the Monolith',
    image: {
      full: 'Malphite.png'
    },
    spells: [
      {
        name: 'Seismic Shard',
        sanitizedDescription:
          'Using his primal elemental magic, Malphite sends a shard of the earth through the ground at his foe, dealing damage upon impact and stealing Movement Speed for 4 seconds.',
        image: {
          full: 'SeismicShard.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Brutal Strikes',
        sanitizedDescription:
          'Malphite starts to hit with such force that his attacks deal damage to all units in front of him. Passively increases his Armor (this amount is tripled while Granite Shield is active).',
        image: {
          full: 'Obduracy.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Ground Slam',
        sanitizedDescription:
          'Malphite slams the ground, sending out a shockwave that deals magic damage based on his Armor as damage and reduces the Attack Speed of enemies for a short duration.',
        image: {
          full: 'Landslide.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Unstoppable Force',
        sanitizedDescription:
          'Malphite ferociously charges to a location, damaging enemies and knocking them into the air.',
        image: {
          full: 'UFSlash.png'
        },
        cooldownBurn: '130/105/80'
      }
    ],
    passive: {
      image: {
        full: 'Malphite_GraniteShield.png'
      },
      name: 'Granite Shield',
      sanitizedDescription:
        'Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for 10 seconds, this effect recharges.'
    },
    range: 'Melee'
  },
  '55': {
    id: 55,
    key: 'Katarina',
    name: 'Katarina',
    title: 'the Sinister Blade',
    image: {
      full: 'Katarina.png'
    },
    spells: [
      {
        name: 'Bouncing Blade',
        sanitizedDescription:
          'Katarina throws a Dagger at the target that then bounces to nearby enemies before ricocheting onto the ground.',
        image: {
          full: 'KatarinaQ.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: 'Preparation',
        sanitizedDescription:
          'Katarina gains a burst of movement speed, tossing a Dagger into the air directly above herself.',
        image: {
          full: 'KatarinaW.png'
        },
        cooldownBurn: '15/14/13/12/11'
      },
      {
        name: 'Shunpo',
        sanitizedDescription:
          'Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.',
        image: {
          full: 'KatarinaEWrapper.png'
        },
        cooldownBurn: '14/12.5/11/9.5/8'
      },
      {
        name: 'Death Lotus',
        sanitizedDescription:
          'Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.',
        image: {
          full: 'KatarinaR.png'
        },
        cooldownBurn: '90/60/45'
      }
    ],
    passive: {
      image: {
        full: 'Katarina_Passive.png'
      },
      name: 'Voracity',
      sanitizedDescription:
        'Whenever an enemy champion dies that Katarina has damaged in the last 3 seconds, her ability cooldowns are reduced by 15 seconds.If Katarina picks up a Dagger, she uses it to slash through all nearby enemies, dealing magic damage.'
    },
    range: 'Melee'
  },
  '56': {
    id: 56,
    key: 'Nocturne',
    name: 'Nocturne',
    title: 'the Eternal Nightmare',
    image: {
      full: 'Nocturne.png'
    },
    spells: [
      {
        name: 'Duskbringer',
        sanitizedDescription:
          'Nocturne throws a shadow blade that deals damage, leaves a Dusk Trail, and causes champions to leave a Dusk Trail. While on the trail, Nocturne can move through units and has increased Movement Speed and Attack Damage.',
        image: {
          full: 'NocturneDuskbringer.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Shroud of Darkness',
        sanitizedDescription:
          'Nocturne empowers his blades, passively gaining Attack Speed. Activating Shroud of Darkness allows Nocturne to fade into the shadows, creating a magical barrier which blocks a single enemy ability and doubles his passive Attack Speed if successful.',
        image: {
          full: 'NocturneShroudofDarkness.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Unspeakable Horror',
        sanitizedDescription:
          "Nocturne plants a nightmare into his target's mind, dealing damage each second and applying fear to the target if they do not get out of range by the end of the duration.",
        image: {
          full: 'NocturneUnspeakableHorror.png'
        },
        cooldownBurn: '15/14/13/12/11'
      },
      {
        name: 'Paranoia',
        sanitizedDescription:
          'Nocturne reduces the sight radius of all enemy champions and removes their ally vision in the process. He can then launch himself at a nearby enemy champion.',
        image: {
          full: 'NocturneParanoia.png'
        },
        cooldownBurn: '150/125/100'
      }
    ],
    passive: {
      image: {
        full: 'Nocturne_UmbraBlades.png'
      },
      name: 'Umbra Blades',
      sanitizedDescription:
        "Every 10 seconds, Nocturne's next attack strikes surrounding enemies for 120% physical damage and heals himself. Nocturne's basic attacks reduce this cooldown by 1 second (2 against champions)."
    },
    range: 'Melee'
  },
  '57': {
    id: 57,
    key: 'Maokai',
    name: 'Maokai',
    title: 'the Twisted Treant',
    image: {
      full: 'Maokai.png'
    },
    spells: [
      {
        name: 'Bramble Smash',
        sanitizedDescription:
          'Maokai knocks back nearby enemies with a shockwave, dealing magic damage and slowing them.',
        image: {
          full: 'MaokaiQ.png'
        },
        cooldownBurn: '8/7.25/6.5/5.75/5'
      },
      {
        name: 'Twisted Advance',
        sanitizedDescription:
          'Maokai contorts into a mass of moving roots, becoming untargetable and dashing to the target. Upon arrival, he roots the target.',
        image: {
          full: 'MaokaiW.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Sapling Toss',
        sanitizedDescription:
          'Maokai flings a sapling to the target area to stand guard. More effective in brush.',
        image: {
          full: 'MaokaiE.png'
        },
        cooldownBurn: '10'
      },
      {
        name: "Nature's Grasp",
        sanitizedDescription:
          'Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, damaging and rooting any enemies in the path.',
        image: {
          full: 'MaokaiR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Maokai_Passive.png'
      },
      name: 'Sap Magic',
      sanitizedDescription:
        "Maokai's basic attack also heal him on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced."
    },
    range: 'Melee'
  },
  '58': {
    id: 58,
    key: 'Renekton',
    name: 'Renekton',
    title: 'the Butcher of the Sands',
    image: {
      full: 'Renekton.png'
    },
    spells: [
      {
        name: 'Cull the Meek',
        sanitizedDescription:
          'Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.',
        image: {
          full: 'RenektonCleave.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Ruthless Predator',
        sanitizedDescription:
          'Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, dealing high physical damage and stuns them for 1.5 seconds.',
        image: {
          full: 'RenektonPreExecute.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Slice and Dice',
        sanitizedDescription:
          'Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.',
        image: {
          full: 'RenektonSliceAndDice.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Dominus',
        sanitizedDescription:
          'Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.',
        image: {
          full: 'RenektonReignOfTheTyrant.png'
        },
        cooldownBurn: '120'
      }
    ],
    passive: {
      image: {
        full: 'Renekton_Passive.png'
      },
      name: 'Reign of Anger',
      sanitizedDescription:
        'Renekton gains Fury for every autoattack he makes. This Fury can empower his abilities with bonus effects. Additionally, Renekton gains bonus Fury when he is low on life.'
    },
    range: 'Melee'
  },
  '59': {
    id: 59,
    key: 'JarvanIV',
    name: 'Jarvan IV',
    title: 'the Exemplar of Demacia',
    image: {
      full: 'JarvanIV.png'
    },
    spells: [
      {
        name: 'Dragon Strike',
        sanitizedDescription:
          'Jarvan IV extends his lance, dealing physical damage and lowering the Armor of enemies in its path. Additionally, this will pull Jarvan to his Demacian Standard, knocking up enemies in his path.',
        image: {
          full: 'JarvanIVDragonStrike.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Golden Aegis',
        sanitizedDescription:
          'Jarvan IV calls upon the ancient kings of Demacia to shield him from harm and slow surrounding enemies.',
        image: {
          full: 'JarvanIVGoldenAegis.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Demacian Standard',
        sanitizedDescription:
          'Jarvan IV carries the pride of Demacia, passively granting him bonus Attack Speed. Activating Demacian Standard allows Jarvan IV to place a Demacian flag that deals magic damage on impact and grants Attack Speed to nearby allied champions.',
        image: {
          full: 'JarvanIVDemacianStandard.png'
        },
        cooldownBurn: '11'
      },
      {
        name: 'Cataclysm',
        sanitizedDescription:
          'Jarvan IV heroically leaps into battle at a target with such force that he terraforms the surrounding area to create an arena around them. Nearby enemies are damaged at the moment of impact.',
        image: {
          full: 'JarvanIVCataclysm.png'
        },
        cooldownBurn: '120/105/90'
      }
    ],
    passive: {
      image: {
        full: 'JarvanIV_MartialCadence.png'
      },
      name: 'Martial Cadence',
      sanitizedDescription:
        "Jarvan IV's initial basic attack on a target deals bonus physical damage. This effect cannot occur again on the same target for a short duration."
    },
    range: 'Melee'
  },
  '60': {
    id: 60,
    key: 'Elise',
    name: 'Elise',
    title: 'the Spider Queen',
    image: {
      full: 'Elise.png'
    },
    spells: [
      {
        name: 'Neurotoxin / Venomous Bite',
        sanitizedDescription:
          "Human Form: Deals damage based upon how high the target's Health is.Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
        image: {
          full: 'EliseHumanQ.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Volatile Spiderling / Skittering Frenzy',
        sanitizedDescription:
          'Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target.Spider Form: Elise and her Spiderlings gain Attack Speed.',
        image: {
          full: 'EliseHumanW.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Cocoon / Rappel',
        sanitizedDescription:
          "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed.Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
        image: {
          full: 'EliseHumanE.png'
        },
        cooldownBurn: '12/11.5/11/10.5/10'
      },
      {
        name: 'Spider Form',
        sanitizedDescription:
          'Transforms into a menacing spider, reducing her attack range in exchange for movement speed, new abilities, and a Spiderling swarm that will attack her foes.',
        image: {
          full: 'EliseR.png'
        },
        cooldownBurn: '4'
      }
    ],
    passive: {
      image: {
        full: 'ElisePassive.png'
      },
      name: 'Spider Queen',
      sanitizedDescription:
        "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.Spider Form: Basic attacks deal bonus magic damage and restore health to Elise."
    },
    range: 'ShapeShifter'
  },
  '61': {
    id: 61,
    key: 'Orianna',
    name: 'Orianna',
    title: 'the Lady of Clockwork',
    image: {
      full: 'Orianna.png'
    },
    spells: [
      {
        name: 'Command: Attack',
        sanitizedDescription:
          'Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.',
        image: {
          full: 'OrianaIzunaCommand.png'
        },
        cooldownBurn: '6/5.25/4.5/3.75/3'
      },
      {
        name: 'Command: Dissonance',
        sanitizedDescription:
          'Orianna commands the Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.',
        image: {
          full: 'OrianaDissonanceCommand.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Command: Protect',
        sanitizedDescription:
          'Orianna commands her Ball to attach to an allied champion, shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.',
        image: {
          full: 'OrianaRedactCommand.png'
        },
        cooldownBurn: '9'
      },
      {
        name: 'Command: Shockwave',
        sanitizedDescription:
          'Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.',
        image: {
          full: 'OrianaDetonateCommand.png'
        },
        cooldownBurn: '110/95/80'
      }
    ],
    passive: {
      image: {
        full: 'OriannaPassive.png'
      },
      name: 'Clockwork Windup',
      sanitizedDescription:
        "Orianna's autoattack deals additional magic damage. This damage increases the more Orianna attacks the same target."
    },
    range: 'Ranged'
  },
  '62': {
    id: 62,
    key: 'MonkeyKing',
    name: 'Wukong',
    title: 'the Monkey King',
    image: {
      full: 'MonkeyKing.png'
    },
    spells: [
      {
        name: 'Crushing Blow',
        sanitizedDescription:
          "Wukong's next attack deals additional physical damage, gains range, and reduces the enemy's Armor for a short duration.",
        image: {
          full: 'MonkeyKingDoubleAttack.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Decoy',
        sanitizedDescription:
          "Wukong becomes Invisible for a short duration, leaving behind a decoy that will deal Magic Damage to enemies near it when Wukong's stealth expires.",
        image: {
          full: 'MonkeyKingDecoy.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Nimbus Strike',
        sanitizedDescription:
          'Wukong dashes to target enemy and sends out images to attack up to 2 additional enemies near his target, dealing physical damage to each enemy struck.',
        image: {
          full: 'MonkeyKingNimbus.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Cyclone',
        sanitizedDescription:
          "Wukong's staff grows outward and he spins it around, dealing damage and knocking up enemies. Wukong gains Movement Speed over the duration of the spell.",
        image: {
          full: 'MonkeyKingSpinToWin.png'
        },
        cooldownBurn: '120/105/90'
      }
    ],
    passive: {
      image: {
        full: 'MonkeyKingStoneSkin.png'
      },
      name: 'Stone Skin',
      sanitizedDescription:
        "Increases Wukong's Armor and Magic Resist for each nearby enemy champion."
    },
    range: 'Melee'
  },
  '63': {
    id: 63,
    key: 'Brand',
    name: 'Brand',
    title: 'the Burning Vengeance',
    image: {
      full: 'Brand.png'
    },
    spells: [
      {
        name: 'Sear',
        sanitizedDescription:
          'Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.',
        image: {
          full: 'BrandQ.png'
        },
        cooldownBurn: '8/7.5/7/6.5/6'
      },
      {
        name: 'Pillar of Flame',
        sanitizedDescription:
          'After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.',
        image: {
          full: 'BrandW.png'
        },
        cooldownBurn: '10/9.5/9/8.5/8'
      },
      {
        name: 'Conflagration',
        sanitizedDescription:
          'Brand conjures a powerful blast at his target, dealing magic damage to them. If the target is ablaze, Conflagration spreads to nearby enemies.',
        image: {
          full: 'BrandE.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Pyroclasm',
        sanitizedDescription:
          'Brand unleashes a devastating torrent of fire, dealing magic damage each time it bounces, up to 5 bounces. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.',
        image: {
          full: 'BrandR.png'
        },
        cooldownBurn: '105/90/75'
      }
    ],
    passive: {
      image: {
        full: 'BrandP.png'
      },
      name: 'Blaze',
      sanitizedDescription:
        "Brand's spells light his targets ablaze, dealing 2% of their maximum Health in magic damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim."
    },
    range: 'Ranged'
  },
  '64': {
    id: 64,
    key: 'LeeSin',
    name: 'Lee Sin',
    title: 'the Blind Monk',
    image: {
      full: 'LeeSin.png'
    },
    spells: [
      {
        name: 'Sonic Wave / Resonating Strike',
        sanitizedDescription:
          "Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds.Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing physical damage based on the target's missing Health.",
        image: {
          full: 'BlindMonkQOne.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: 'Safeguard / Iron Will',
        sanitizedDescription:
          "Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will for the next 3 seconds.Iron Will: Lee Sin's intense training allows him to thrive in battle. For 4 seconds, Lee Sin gains Life Steal and Spell Vamp.",
        image: {
          full: 'BlindMonkWOne.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Tempest / Cripple',
        sanitizedDescription:
          'Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple for the next 3 seconds.Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Movement Speed for 4 seconds. Movement Speed recovers gradually over the duration.',
        image: {
          full: 'BlindMonkEOne.png'
        },
        cooldownBurn: '10'
      },
      {
        name: "Dragon's Rage",
        sanitizedDescription:
          'Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.',
        image: {
          full: 'BlindMonkRKick.png'
        },
        cooldownBurn: '110/85/60'
      }
    ],
    passive: {
      image: {
        full: 'LeeSinPassive.png'
      },
      name: 'Flurry',
      sanitizedDescription:
        'After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy.'
    },
    range: 'Melee'
  },
  '67': {
    id: 67,
    key: 'Vayne',
    name: 'Vayne',
    title: 'the Night Hunter',
    image: {
      full: 'Vayne.png'
    },
    spells: [
      {
        name: 'Tumble',
        sanitizedDescription:
          'Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.',
        image: {
          full: 'VayneTumble.png'
        },
        cooldownBurn: '4/3.5/3/2.5/2'
      },
      {
        name: 'Silver Bolts',
        sanitizedDescription:
          "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's maximum Health as bonus true damage. (Max: 200 damage vs. Monsters)",
        image: {
          full: 'VayneSilveredBolts.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Condemn',
        sanitizedDescription:
          'Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.',
        image: {
          full: 'VayneCondemn.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Final Hour',
        sanitizedDescription:
          'Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and triple the bonus Movement Speed from Night Hunter.',
        image: {
          full: 'VayneInquisition.png'
        },
        cooldownBurn: '100/85/70'
      }
    ],
    passive: {
      image: {
        full: 'Vayne_NightHunter.png'
      },
      name: 'Night Hunter',
      sanitizedDescription:
        'Vayne ruthlessly hunts evil-doers, gaining 30 movement speed when moving toward nearby enemy champions.'
    },
    range: 'Ranged'
  },
  '68': {
    id: 68,
    key: 'Rumble',
    name: 'Rumble',
    title: 'the Mechanized Menace',
    image: {
      full: 'Rumble.png'
    },
    spells: [
      {
        name: 'Flamespitter',
        sanitizedDescription:
          'Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.',
        image: {
          full: 'RumbleFlameThrower.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Scrap Shield',
        sanitizedDescription:
          'Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.',
        image: {
          full: 'RumbleShield.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Electro Harpoon',
        sanitizedDescription:
          'Rumble launches a taser, electrocuting his target with magic damage and slowing their Movement Speed. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.',
        image: {
          full: 'RumbleGrenade.png'
        },
        cooldownBurn: '0.5'
      },
      {
        name: 'The Equalizer',
        sanitizedDescription:
          'Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.',
        image: {
          full: 'RumbleCarpetBomb.png'
        },
        cooldownBurn: '110/100/90'
      }
    ],
    passive: {
      image: {
        full: 'Rumble_JunkyardTitan1.png'
      },
      name: 'Junkyard Titan',
      sanitizedDescription:
        'Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds. '
    },
    range: 'Melee'
  },
  '69': {
    id: 69,
    key: 'Cassiopeia',
    name: 'Cassiopeia',
    title: "the Serpent's Embrace",
    image: {
      full: 'Cassiopeia.png'
    },
    spells: [
      {
        name: 'Noxious Blast',
        sanitizedDescription:
          'Cassiopeia blasts an area with Poison after a brief delay, granting her increased Movement Speed if she hits an enemy champion.',
        image: {
          full: 'CassiopeiaQ.png'
        },
        cooldownBurn: '3.5'
      },
      {
        name: 'Miasma',
        sanitizedDescription:
          'Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.',
        image: {
          full: 'CassiopeiaW.png'
        },
        cooldownBurn: '18/17.5/17/16.5/16'
      },
      {
        name: 'Twin Fang',
        sanitizedDescription:
          'Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.',
        image: {
          full: 'CassiopeiaE.png'
        },
        cooldownBurn: '0.75'
      },
      {
        name: 'Petrifying Gaze',
        sanitizedDescription:
          'Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.',
        image: {
          full: 'CassiopeiaR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Cassiopeia_Passive.png'
      },
      name: 'Serpentine Grace',
      sanitizedDescription:
        'Cassiopeia gains Movement Speed per level, but she cannot purchase Boots items.'
    },
    range: 'Ranged'
  },
  '72': {
    id: 72,
    key: 'Skarner',
    name: 'Skarner',
    title: 'the Crystal Vanguard',
    image: {
      full: 'Skarner.png'
    },
    spells: [
      {
        name: 'Crystal Slash',
        sanitizedDescription:
          'Skarner lashes out with his claws, dealing physical damage to all nearby enemies and charging himself with Crystal Energy for several seconds if a unit is struck. If he casts Crystal Slash again while powered by Crystal Energy, he deals bonus magic damage.',
        image: {
          full: 'SkarnerVirulentSlash.png'
        },
        cooldownBurn: '3.5/3.25/3/2.75/2.5'
      },
      {
        name: 'Crystalline Exoskeleton',
        sanitizedDescription:
          'Skarner gains a shield and has increased Movement Speed while the shield persists.',
        image: {
          full: 'SkarnerExoskeleton.png'
        },
        cooldownBurn: '13/12.5/12/11.5/11'
      },
      {
        name: 'Fracture',
        sanitizedDescription:
          'Skarner summons a blast of crystalline energy which deals damage to enemies struck and slows them. Basic attacking these enemies within a short window will stun them.',
        image: {
          full: 'SkarnerFracture.png'
        },
        cooldownBurn: '14/13.5/13/12.5/12'
      },
      {
        name: 'Impale',
        sanitizedDescription:
          'Skarner suppresses an enemy champion and deals damage to it. During this time, Skarner can move freely and will drag his helpless victim around with him. When the effect ends, the target will be dealt additional damage.',
        image: {
          full: 'SkarnerImpale.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Skarner_Passive.png'
      },
      name: 'Crystal Spires',
      sanitizedDescription:
        "Skarner's presence causes crystals to spawn in set locations around the map. While near crystals his team owns, Skarner gains tremendous movement speed, attack speed, and mana regeneration."
    },
    range: 'Melee'
  },
  '74': {
    id: 74,
    key: 'Heimerdinger',
    name: 'Heimerdinger',
    title: 'the Revered Inventor',
    image: {
      full: 'Heimerdinger.png'
    },
    spells: [
      {
        name: 'H-28 G Evolution Turret',
        sanitizedDescription:
          'Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).',
        image: {
          full: 'HeimerdingerQ.png'
        },
        cooldownBurn: '1'
      },
      {
        name: 'Hextech Micro-Rockets',
        sanitizedDescription: 'Heimerdinger fires long-range rockets that converge on his cursor.',
        image: {
          full: 'HeimerdingerW.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: 'CH-2 Electron Storm Grenade',
        sanitizedDescription:
          'Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.',
        image: {
          full: 'HeimerdingerE.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'UPGRADE!!!',
        sanitizedDescription: '',
        image: {
          full: 'HeimerdingerR.png'
        },
        cooldownBurn: '100/85/70'
      }
    ],
    passive: {
      image: {
        full: 'Heimerdinger_Passive.png'
      },
      name: 'Hextech Affinity',
      sanitizedDescription:
        'Gain Movement Speed while near allied towers and turrets deployed by Heimerdinger.'
    },
    range: 'Ranged'
  },
  '75': {
    id: 75,
    key: 'Nasus',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    image: {
      full: 'Nasus.png'
    },
    spells: [
      {
        name: 'Siphoning Strike',
        sanitizedDescription:
          'Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.',
        image: {
          full: 'NasusQ.png'
        },
        cooldownBurn: '8/7/6/5/4'
      },
      {
        name: 'Wither',
        sanitizedDescription:
          'Nasus ages an enemy champion, decelerating their Movement and Attack Speeds over time.',
        image: {
          full: 'NasusW.png'
        },
        cooldownBurn: '15/14/13/12/11'
      },
      {
        name: 'Spirit Fire',
        sanitizedDescription:
          'Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.',
        image: {
          full: 'NasusE.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Fury of the Sands',
        sanitizedDescription:
          'Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance for the duration.',
        image: {
          full: 'NasusR.png'
        },
        cooldownBurn: '120'
      }
    ],
    passive: {
      image: {
        full: 'Nasus_Passive.png'
      },
      name: 'Soul Eater',
      sanitizedDescription: "Nasus drains his foe's spiritual energy, giving him bonus Life Steal."
    },
    range: 'Melee'
  },
  '76': {
    id: 76,
    key: 'Nidalee',
    name: 'Nidalee',
    title: 'the Bestial Huntress',
    image: {
      full: 'Nidalee.png'
    },
    spells: [
      {
        name: 'Javelin Toss / Takedown',
        sanitizedDescription:
          'In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies.  As a cougar, her next attack will attempt to fatally wound her target, dealing more damage the less life they have.',
        image: {
          full: 'JavelinToss.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Bushwhack / Pounce',
        sanitizedDescription:
          'In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target. As a cougar, she jumps in a direction, dealing damage in an area where she lands.',
        image: {
          full: 'Bushwhack.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Primal Surge / Swipe',
        sanitizedDescription:
          'In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration. As a cougar, she claws in a direction, dealing damage to enemies in front of her.',
        image: {
          full: 'PrimalSurge.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Aspect Of The Cougar',
        sanitizedDescription: 'Nidalee transforms into a cougar, gaining new abilities.',
        image: {
          full: 'AspectOfTheCougar.png'
        },
        cooldownBurn: '3'
      }
    ],
    passive: {
      image: {
        full: 'Nidalee_Passive.png'
      },
      name: 'Prowl',
      sanitizedDescription:
        "Moving through brush increases Nidalee's Movement Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range.Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt, granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Movement Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them."
    },
    range: 'Ranged'
  },
  '77': {
    id: 77,
    key: 'Udyr',
    name: 'Udyr',
    title: 'the Spirit Walker',
    image: {
      full: 'Udyr.png'
    },
    spells: [
      {
        name: 'Tiger Stance',
        sanitizedDescription:
          "Tiger Stance: Activation - Udyr's Attack Speed is increased for a few seconds. Persistent Effect - Udyr's first attack and every third attack after will deal a high amount of damage over 2 seconds.",
        image: {
          full: 'UdyrTigerStance.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Turtle Stance',
        sanitizedDescription:
          "Turtle Stance: Activation - Udyr gains a temporary shield that absorbs damage. Persistent Effect - Udyr's first attack and every third attack after heals him for 2.5% of his maximum health.",
        image: {
          full: 'UdyrTurtleStance.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Bear Stance',
        sanitizedDescription:
          "Bear Stance: Activation - Udyr increases Movement Speed for a short duration. Persistent Effect - Udyr's basic attacks stun his target for 1 second. This effect cannot occur on the same target for several seconds.",
        image: {
          full: 'UdyrBearStance.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Phoenix Stance',
        sanitizedDescription:
          "Phoenix Stance: Activation - Udyr unleashes pulsing waves of fire, dealing damage to nearby enemies. Persistent Effect - Udyr's first attack and every third attack after engulfs enemies in front of him with flames.",
        image: {
          full: 'UdyrPhoenixStance.png'
        },
        cooldownBurn: '6'
      }
    ],
    passive: {
      image: {
        full: 'Udyr_MonkeysAgility.png'
      },
      name: "Monkey's Agility",
      sanitizedDescription:
        'Entering a stance grants Udyr bonus Attack Speed and Movement Speed for a short duration. This effect can stack multiple times.'
    },
    range: 'Melee'
  },
  '78': {
    id: 78,
    key: 'Poppy',
    name: 'Poppy',
    title: 'Keeper of the Hammer',
    image: {
      full: 'Poppy.png'
    },
    spells: [
      {
        name: 'Hammer Shock',
        sanitizedDescription:
          'Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.',
        image: {
          full: 'PoppyQ.png'
        },
        cooldownBurn: '8/7/6/5/4'
      },
      {
        name: 'Steadfast Presence',
        sanitizedDescription:
          'Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to stop enemy dashes around her and gain movement speed.',
        image: {
          full: 'PoppyW.png'
        },
        cooldownBurn: '24/22/20/18/16'
      },
      {
        name: 'Heroic Charge',
        sanitizedDescription:
          'Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.',
        image: {
          full: 'PoppyE.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: "Keeper's Verdict",
        sanitizedDescription: 'Poppy channels a hammer strike that knocks enemies very far away.',
        image: {
          full: 'PoppyR.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'Poppy_Passive.png'
      },
      name: 'Iron Ambassador',
      sanitizedDescription:
        'Poppy throws her buckler, gaining range and bonus magic damage.The buckler lands at a nearby location and Poppy can pick it up to gain a shield. Enemies can step on the buckler to destroy it.'
    },
    range: 'Melee'
  },
  '79': {
    id: 79,
    key: 'Gragas',
    name: 'Gragas',
    title: 'the Rabble Rouser',
    image: {
      full: 'Gragas.png'
    },
    spells: [
      {
        name: 'Barrel Roll',
        sanitizedDescription:
          'Gragas rolls his cask to a location, which can be activated to explode or will explode on its own after 4 seconds. Enemies struck by the blast have their Movement Speed slowed.',
        image: {
          full: 'GragasQ.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: 'Drunken Rage',
        sanitizedDescription:
          'Gragas guzzles down brew from his cask for 1 second. After finishing, he becomes drunkenly empowered, dealing magic damage to all nearby enemies on his next basic attack and reducing damage received.',
        image: {
          full: 'GragasW.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Body Slam',
        sanitizedDescription:
          'Gragas charges to a location and collides with the first enemy unit he comes across, dealing damage to all nearby enemy units and stunning them.',
        image: {
          full: 'GragasE.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Explosive Cask',
        sanitizedDescription:
          'Gragas hurls his cask to a location, dealing damage and knocking back enemies caught in the blast radius.',
        image: {
          full: 'GragasR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'GragasPassiveHeal.png'
      },
      name: 'Happy Hour',
      sanitizedDescription:
        'On ability use, Gragas takes a drink restoring 6% of his max Health. This effect can only happen every 8 seconds.'
    },
    range: 'Melee'
  },
  '80': {
    id: 80,
    key: 'Pantheon',
    name: 'Pantheon',
    title: 'the Artisan of War',
    image: {
      full: 'Pantheon.png'
    },
    spells: [
      {
        name: 'Spear Shot',
        sanitizedDescription: 'Pantheon hurls his spear at an opponent, dealing damage.',
        image: {
          full: 'PantheonQ.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Aegis of Zeonia',
        sanitizedDescription:
          'Pantheon leaps at an enemy and bashes them with his shield, stunning them. After finishing the attack, Pantheon readies himself to block the next attack.',
        image: {
          full: 'PantheonW.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Heartseeker Strike',
        sanitizedDescription:
          "Pantheon focuses and unleashes 3 swift strikes to the area in front of him dealing damage to all enemies. Pantheon also becomes more aware of his enemy's vital spots, allowing him to always crit enemies below 15% Health.",
        image: {
          full: 'PantheonE.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Grand Skyfall',
        sanitizedDescription:
          'Pantheon composes himself then leaps into the air to a target, striking all enemy units in an area. Enemies closer to the impact point take more damage.',
        image: {
          full: 'PantheonRJump.png'
        },
        cooldownBurn: '150/135/120'
      }
    ],
    passive: {
      image: {
        full: 'Pantheon_AOZ.png'
      },
      name: 'Aegis Protection',
      sanitizedDescription:
        'After attacking or casting spells 4 times, Pantheon will block the next incoming basic attack or turret attack.'
    },
    range: 'Melee'
  },
  '81': {
    id: 81,
    key: 'Ezreal',
    name: 'Ezreal',
    title: 'the Prodigal Explorer',
    image: {
      full: 'Ezreal.png'
    },
    spells: [
      {
        name: 'Mystic Shot',
        sanitizedDescription:
          'Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.',
        image: {
          full: 'EzrealQ.png'
        },
        cooldownBurn: '5.5/5.25/5/4.75/4.5'
      },
      {
        name: 'Essence Flux',
        sanitizedDescription:
          'Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.',
        image: {
          full: 'EzrealW.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Arcane Shift',
        sanitizedDescription:
          'Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.',
        image: {
          full: 'EzrealE.png'
        },
        cooldownBurn: '19/17.5/16/14.5/13'
      },
      {
        name: 'Trueshot Barrage',
        sanitizedDescription:
          'Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).',
        image: {
          full: 'EzrealR.png'
        },
        cooldownBurn: '120'
      }
    ],
    passive: {
      image: {
        full: 'Ezreal_RisingSpellForce.png'
      },
      name: 'Rising Spell Force',
      sanitizedDescription:
        'Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.'
    },
    range: 'Ranged'
  },
  '82': {
    id: 82,
    key: 'Mordekaiser',
    name: 'Mordekaiser',
    title: 'the Iron Revenant',
    image: {
      full: 'Mordekaiser.png'
    },
    spells: [
      {
        name: 'Mace of Spades',
        sanitizedDescription: "Mordekaiser's next three attacks deal escalating bonus damage.",
        image: {
          full: 'MordekaiserMaceOfSpades.png'
        },
        cooldownBurn: '10/8.5/7/5.5/4'
      },
      {
        name: 'Harvesters of Sorrow',
        sanitizedDescription:
          "Coats an ally in magnetic metal, increasing each unit's movement speed toward one another. While near one another, the metal swirls violently dealing damage per second to enemies.",
        image: {
          full: 'MordekaiserCreepingDeathCast.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Siphon of Destruction',
        sanitizedDescription:
          "Mordekaiser deals damage to enemies in a cone in front of him. For each unit hit, Mordekaiser's shield absorbs energy.",
        image: {
          full: 'MordekaiserSyphonOfDestruction.png'
        },
        cooldownBurn: '6/5.75/5.5/5.25/5'
      },
      {
        name: 'Children of the Grave',
        sanitizedDescription:
          'Mordekaiser curses an enemy champion or the Dragon, stealing a percent of their life initially and each second. If the target dies while the spell is active, their soul is enslaved and will follow Mordekaiser as a ghost.',
        image: {
          full: 'MordekaiserChildrenOfTheGrave.png'
        },
        cooldownBurn: '120/105/90'
      }
    ],
    passive: {
      image: {
        full: 'MordekaiserPassive.png'
      },
      name: 'Iron Man',
      sanitizedDescription:
        'A percent of the damage dealt from abilities is converted into a temporary shield, absorbing incoming damage.'
    },
    range: 'Melee'
  },
  '83': {
    id: 83,
    key: 'Yorick',
    name: 'Yorick',
    title: 'Shepherd of Souls',
    image: {
      full: 'Yorick.png'
    },
    spells: [
      {
        name: 'Last Rites',
        sanitizedDescription:
          'Yorick deals bonus damage on his next attack and heals himself. If the target dies a grave will be dug.',
        image: {
          full: 'YorickQ.png'
        },
        cooldownBurn: '7/6.25/5.5/4.75/4'
      },
      {
        name: 'Dark Procession',
        sanitizedDescription:
          'Yorick summons a destructible wall at target location that will block enemy movement.',
        image: {
          full: 'YorickW.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Mourning Mist',
        sanitizedDescription:
          'Yorick throws a globule of Black Mist that damages, slows and marks enemies.',
        image: {
          full: 'YorickE.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Eulogy of the Isles',
        sanitizedDescription:
          "Yorick summons the Maiden of the Mist that causes Yorick's attacks against the Maiden's target to deal bonus damage. The Maiden will also automatically raise Walkers from dead enemies.",
        image: {
          full: 'YorickR.png'
        },
        cooldownBurn: '160/130/100'
      }
    ],
    passive: {
      image: {
        full: 'Yorick_P.png'
      },
      name: 'Shepherd of Souls',
      sanitizedDescription:
        'Yorick can raise Mist Walkers with his abilities. Enemies that die near Yorick will sometimes leave a grave.'
    },
    range: 'Melee'
  },
  '84': {
    id: 84,
    key: 'Akali',
    name: 'Akali',
    title: 'the Rogue Assassin',
    image: {
      full: 'Akali.png'
    },
    spells: [
      {
        name: 'Five Point Strike',
        sanitizedDescription:
          'Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.',
        image: {
          full: 'AkaliQ.png'
        },
        cooldownBurn: '1.5'
      },
      {
        name: 'Twilight Shroud',
        sanitizedDescription:
          'Akali drops a cover of smoke. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks and gains Movement Speed. Attacking or using abilities will briefly reveal her.',
        image: {
          full: 'AkaliW.png'
        },
        cooldownBurn: '21/19/17/15/13'
      },
      {
        name: 'Shuriken Flip',
        sanitizedDescription:
          'Flip backward and fire a shuriken forward, dealing physical damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.',
        image: {
          full: 'AkaliE.png'
        },
        cooldownBurn: '16/14.5/13/11.5/10'
      },
      {
        name: 'Perfect Execution',
        sanitizedDescription:
          'Akali leaps in a direction, stunning and damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.',
        image: {
          full: 'AkaliR.png'
        },
        cooldownBurn: '100/85/70'
      }
    ],
    passive: {
      image: {
        full: 'Akali_P.png'
      },
      name: "Assassin's Mark",
      sanitizedDescription:
        "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next autoattack with bonus range and damage."
    },
    range: 'Melee'
  },
  '85': {
    id: 85,
    key: 'Kennen',
    name: 'Kennen',
    title: 'the Heart of the Tempest',
    image: {
      full: 'Kennen.png'
    },
    spells: [
      {
        name: 'Thundering Shuriken',
        sanitizedDescription:
          'Kennen throws a fast moving shuriken towards a location, causing damage and adding a Mark of the Storm to any opponent that it hits.',
        image: {
          full: 'KennenShurikenHurlMissile1.png'
        },
        cooldownBurn: '8/7/6/5/4'
      },
      {
        name: 'Electrical Surge',
        sanitizedDescription:
          'Kennen passively deals extra damage and adds a Mark of the Storm to his target every few attacks, and he can activate this ability to damage and add another Mark of the Storm to targets who are already marked.',
        image: {
          full: 'KennenBringTheLight.png'
        },
        cooldownBurn: '14/12/10/8/6'
      },
      {
        name: 'Lightning Rush',
        sanitizedDescription:
          'Kennen morphs into a lightning form, enabling him to pass through units and apply a Mark of the Storm. Kennen gains defense and movement speed when entering this form, and attack speed when leaving it.',
        image: {
          full: 'KennenLightningRush.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Slicing Maelstrom',
        sanitizedDescription:
          'Kennen summons a storm that strikes at nearby enemy champions for magical damage.',
        image: {
          full: 'KennenShurikenStorm.png'
        },
        cooldownBurn: '120'
      }
    ],
    passive: {
      image: {
        full: 'Kennen_Passive.png'
      },
      name: 'Mark of the Storm',
      sanitizedDescription:
        "Kennen's abilities add one stack of Mark of the Storm to their target for 6 seconds. If the target reaches 3 stacks, it is stunned for 1.25 seconds and Kennen gains 25 Energy. The stun will be a diminished duration of 0.5 seconds if it occurs again within 6 seconds."
    },
    range: 'Ranged'
  },
  '86': {
    id: 86,
    key: 'Garen',
    name: 'Garen',
    title: 'The Might of Demacia',
    image: {
      full: 'Garen.png'
    },
    spells: [
      {
        name: 'Decisive Strike',
        sanitizedDescription:
          'Garen gains a burst of movement speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.',
        image: {
          full: 'GarenQ.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Courage',
        sanitizedDescription:
          'Garen passively increases his armor and magic resist by killing enemies. He may also activate this ability to give him a huge burst of Tenacity and damage reduction for a brief moment followed by a lesser amount of damage reduction for a longer duration.',
        image: {
          full: 'GarenW.png'
        },
        cooldownBurn: '24/23/22/21/20'
      },
      {
        name: 'Judgment',
        sanitizedDescription:
          'Garen performs a dance of death with his sword, dealing damage around him for the duration and shredding the armor of enemy champions hit.',
        image: {
          full: 'GarenE.png'
        },
        cooldownBurn: '9'
      },
      {
        name: 'Demacian Justice',
        sanitizedDescription:
          "The enemy champion with the most recent kills is the Villain. Garen's attacks deal additional true damage to that champion.Garen can call upon the might of Demacia to deal a finishing blow to an enemy champion that deals damage based upon how much health his target has missing. This damage is true damage against the Villain.",
        image: {
          full: 'GarenR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Garen_Passive.png'
      },
      name: 'Perseverance',
      sanitizedDescription:
        'If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second. Minion damage does not stop Perseverance.'
    },
    range: 'Melee'
  },
  '89': {
    id: 89,
    key: 'Leona',
    name: 'Leona',
    title: 'the Radiant Dawn',
    image: {
      full: 'Leona.png'
    },
    spells: [
      {
        name: 'Shield of Daybreak',
        sanitizedDescription:
          'Leona uses her shield to perform her next basic attack, dealing bonus magic damage and stunning the target.',
        image: {
          full: 'LeonaShieldOfDaybreak.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Eclipse',
        sanitizedDescription:
          'Leona raises her shield to gain Armor and Magic Resist. When the duration first ends, if there are nearby enemies, she will deal magic damage to them and prolong the duration of the effect.',
        image: {
          full: 'LeonaSolarBarrier.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Zenith Blade',
        sanitizedDescription:
          'Leona projects a solar image of her sword, dealing magic damage to all enemies in a line. When the image fades, the last enemy champion struck will be briefly immobilized and Leona will dash to them.',
        image: {
          full: 'LeonaZenithBlade.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Solar Flare',
        sanitizedDescription:
          "Leona calls down a beam of solar energy, dealing damage to enemies in an area. Enemies in the center of the area are stunned, while enemies on the outside are slowed. Afterward, Leona's sword is charged with the power of the sun and deals bonus magic damage for a few attacks.",
        image: {
          full: 'LeonaSolarFlare.png'
        },
        cooldownBurn: '90/75/60'
      }
    ],
    passive: {
      image: {
        full: 'LeonaSunlight.png'
      },
      name: 'Sunlight',
      sanitizedDescription:
        'Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.'
    },
    range: 'Melee'
  },
  '90': {
    id: 90,
    key: 'Malzahar',
    name: 'Malzahar',
    title: 'the Prophet of the Void',
    image: {
      full: 'Malzahar.png'
    },
    spells: [
      {
        name: 'Call of the Void',
        sanitizedDescription:
          'Malzahar opens up two portals to the Void. After a short delay, they fire projectiles that deal Magic Damage and silence enemy champions.',
        image: {
          full: 'MalzaharQ.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Void Swarm',
        sanitizedDescription: 'Malzahar summons Voidlings to attack nearby enemies.',
        image: {
          full: 'MalzaharW.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Malefic Visions',
        sanitizedDescription:
          "Malzahar infects his target's mind with cruel visions of their demise, dealing damage over time. Using Malzahar's other spells on the target will refresh the visions.If the target dies while afflicted by the visions, they pass on to a nearby enemy unit and Malzahar gains Mana. Malzahar's Voidlings are attracted to affected units.",
        image: {
          full: 'MalzaharE.png'
        },
        cooldownBurn: '15/13/11/9/7'
      },
      {
        name: 'Nether Grasp',
        sanitizedDescription:
          'Malzahar channels the essence of the Void to suppress an enemy champion over a zone of damaging negative energy.',
        image: {
          full: 'MalzaharR.png'
        },
        cooldownBurn: '140/110/80'
      }
    ],
    passive: {
      image: {
        full: 'Malzahar_Passive.png'
      },
      name: 'Void Shift',
      sanitizedDescription:
        "When he hasn't recently taken damage or been crowd controlled, Malzahar gains massive damage reduction and crowd control immunity, lingering for a short period after taking damage.Damage from lane minions is unaffected."
    },
    range: 'Ranged'
  },
  '91': {
    id: 91,
    key: 'Talon',
    name: 'Talon',
    title: "the Blade's Shadow",
    image: {
      full: 'Talon.png'
    },
    spells: [
      {
        name: 'Noxian Diplomacy',
        sanitizedDescription:
          'Talon stabs the target unit. If they are within melee range, this attack deals critical damage. If they are outside melee range, Talon will leap at his target before stabbing them. Talon refunds some health and cooldown if this ability kills the target.',
        image: {
          full: 'TalonQ.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Rake',
        sanitizedDescription:
          'Talon sends out a volley of daggers that then return back to him, dealing physical damage every time it passes through an enemy. The returning blades deal bonus damage and slow units hit.',
        image: {
          full: 'TalonW.png'
        },
        cooldownBurn: '9'
      },
      {
        name: "Assassin's Path",
        sanitizedDescription:
          'Talon vaults over any terrain or structure, up to a max distance. This ability has a low cooldown, but puts the used terrain on a long cooldown.',
        image: {
          full: 'TalonE.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Shadow Assault',
        sanitizedDescription:
          'Talon disperses a ring of blades and becomes Invisible while gaining additional Movement Speed. When Talon emerges from Invisibility, the blades converge on his location. Each time the blades move, Shadow Assault deals physical damage to enemies hit by at least one blade.',
        image: {
          full: 'TalonR.png'
        },
        cooldownBurn: '100/80/60'
      }
    ],
    passive: {
      image: {
        full: 'TalonP.png'
      },
      name: "Blade's End",
      sanitizedDescription:
        "Talon's spells Wound champions and epic monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time."
    },
    range: 'Melee'
  },
  '92': {
    id: 92,
    key: 'Riven',
    name: 'Riven',
    title: 'the Exile',
    image: {
      full: 'Riven.png'
    },
    spells: [
      {
        name: 'Broken Wings',
        sanitizedDescription:
          'Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.',
        image: {
          full: 'RivenTriCleave.png'
        },
        cooldownBurn: '13'
      },
      {
        name: 'Ki Burst',
        sanitizedDescription: 'Riven emits a Ki Burst, damaging and stunning nearby enemies.',
        image: {
          full: 'RivenMartyr.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: 'Valor',
        sanitizedDescription: 'Riven steps forward a short distance and blocks incoming damage.',
        image: {
          full: 'RivenFeint.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Blade of the Exile',
        sanitizedDescription:
          'Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.',
        image: {
          full: 'RivenFengShuiEngine.png'
        },
        cooldownBurn: '120/90/60'
      }
    ],
    passive: {
      image: {
        full: 'RivenRunicBlades.png'
      },
      name: 'Runic Blade',
      sanitizedDescription:
        "Riven's abilities charge her blade, causing her basic attacks to deal bonus physical damage. Riven's blade may be charged up to three times and expends one charge per attack."
    },
    range: 'Melee'
  },
  '96': {
    id: 96,
    key: 'KogMaw',
    name: "Kog'Maw",
    title: 'the Mouth of the Abyss',
    image: {
      full: 'KogMaw.png'
    },
    spells: [
      {
        name: 'Caustic Spittle',
        sanitizedDescription:
          "Kog'Maw launches a corrosive projectile which deals magic damage and corrodes the target's armor and magic resist for a short time. Kog'Maw also gains additional attack speed.",
        image: {
          full: 'KogMawQ.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Bio-Arcane Barrage',
        sanitizedDescription:
          "Kog'Maw's attacks gain range and deal a percent of the target's maximum health as magic damage.",
        image: {
          full: 'KogMawBioArcaneBarrage.png'
        },
        cooldownBurn: '17'
      },
      {
        name: 'Void Ooze',
        sanitizedDescription:
          "Kog'Maw launches a peculiar ooze which damages all enemies it passes through and leaves a trail which slows enemies who stand on it.",
        image: {
          full: 'KogMawVoidOoze.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Living Artillery',
        sanitizedDescription:
          "Kog'Maw fires an artillery shell at a great distance dealing magic damage (increased significantly on low health enemies) and revealing non-stealthed targets. Additionally, multiple Living Artilleries in a short period of time cause them to cost additional Mana.",
        image: {
          full: 'KogMawLivingArtillery.png'
        },
        cooldownBurn: '2/1.5/1'
      }
    ],
    passive: {
      image: {
        full: 'KogMaw_IcathianSurprise.png'
      },
      name: 'Icathian Surprise',
      sanitizedDescription:
        "Upon dying, Kog'Maw starts a chain reaction in his body which causes him to move faster and detonate after 4 seconds; dealing 100 + (25 x lvl) true damage to surrounding enemies."
    },
    range: 'Ranged'
  },
  '98': {
    id: 98,
    key: 'Shen',
    name: 'Shen',
    title: 'the Eye of Twilight',
    image: {
      full: 'Shen.png'
    },
    spells: [
      {
        name: 'Twilight Assault',
        sanitizedDescription:
          "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.",
        image: {
          full: 'ShenQ.png'
        },
        cooldownBurn: '8/7.25/6.5/5.75/5'
      },
      {
        name: "Spirit's Refuge",
        sanitizedDescription:
          'Attacks that would hit Shen or his allies near his spirit blade are blocked.',
        image: {
          full: 'ShenW.png'
        },
        cooldownBurn: '18/16.5/15/13.5/11'
      },
      {
        name: 'Shadow Dash',
        sanitizedDescription: 'Shen dashes in a direction, taunting enemies in his path.',
        image: {
          full: 'ShenE.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Stand United',
        sanitizedDescription:
          'Shen shields target allied champion from incoming damage, and soon after teleports to their location.',
        image: {
          full: 'ShenR.png'
        },
        cooldownBurn: '200/180/160'
      }
    ],
    passive: {
      image: {
        full: 'Shen_Passive.png'
      },
      name: 'Ki Barrier',
      sanitizedDescription:
        'After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.'
    },
    range: 'Melee'
  },
  '99': {
    id: 99,
    key: 'Lux',
    name: 'Lux',
    title: 'the Lady of Luminosity',
    image: {
      full: 'Lux.png'
    },
    spells: [
      {
        name: 'Light Binding',
        sanitizedDescription:
          'Lux releases a sphere of light that binds and deals damage to up to two enemy units.',
        image: {
          full: 'LuxLightBinding.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Prismatic Barrier',
        sanitizedDescription:
          'Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.',
        image: {
          full: 'LuxPrismaticWave.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Lucent Singularity',
        sanitizedDescription:
          'Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.',
        image: {
          full: 'LuxLightStrikeKugel.png'
        },
        cooldownBurn: '10/9.5/9/8.5/8'
      },
      {
        name: 'Final Spark',
        sanitizedDescription:
          "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. If Final Spark helps take down a champion, part of its cooldown is refunded. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.",
        image: {
          full: 'LuxMaliceCannon.png'
        },
        cooldownBurn: '80/65/50'
      }
    ],
    passive: {
      image: {
        full: 'LuxIlluminatingFraulein.png'
      },
      name: 'Illumination',
      sanitizedDescription:
        "Lux's damaging spells charge the target with energy for 6 seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target."
    },
    range: 'Ranged'
  },
  '101': {
    id: 101,
    key: 'Xerath',
    name: 'Xerath',
    title: 'the Magus Ascendant',
    image: {
      full: 'Xerath.png'
    },
    spells: [
      {
        name: 'Arcanopulse',
        sanitizedDescription:
          'Fires a long-range beam of energy, dealing magic damage to all targets hit.',
        image: {
          full: 'XerathArcanopulseChargeUp.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Eye of Destruction',
        sanitizedDescription:
          'Calls down a barrage of arcane energy, slowing and dealing magic damage to all enemies in an area. Targets in the middle receive additional damage and a stronger slow.',
        image: {
          full: 'XerathArcaneBarrage2.png'
        },
        cooldownBurn: '1'
      },
      {
        name: 'Shocking Orb',
        sanitizedDescription: 'Deals magic damage to an enemy and stuns them.',
        image: {
          full: 'XerathMageSpear.png'
        },
        cooldownBurn: '13/12.5/12/11.5/11'
      },
      {
        name: 'Rite of the Arcane',
        sanitizedDescription: 'Xerath immobilizes himself and gains numerous long-range barrages.',
        image: {
          full: 'XerathLocusOfPower2.png'
        },
        cooldownBurn: '130/115/100'
      }
    ],
    passive: {
      image: {
        full: 'Xerath_Passive1.png'
      },
      name: 'Mana Surge',
      sanitizedDescription: "Xerath's basic attacks periodically restore Mana."
    },
    range: 'Ranged'
  },
  '102': {
    id: 102,
    key: 'Shyvana',
    name: 'Shyvana',
    title: 'the Half-Dragon',
    image: {
      full: 'Shyvana.png'
    },
    spells: [
      {
        name: 'Twin Bite',
        sanitizedDescription:
          'Shyvana strikes twice on her next attack. Basic attacks reduce the cooldown of Twin Bite by 0.5 seconds.Dragon Form: Twin Bite cleaves all units in front of Shyvana.',
        image: {
          full: 'ShyvanaDoubleAttack.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Burnout',
        sanitizedDescription:
          'Shyvana surrounds herself in fire, dealing magic damage per second to nearby enemies and moving faster for 3 seconds, part of this damage is applied again when Shyvana basic attacks an enemy with Burnout active. The Movement Speed reduces over the duration of the spell. Basic attacks extend the duration of Burnout. Dragon Form: Burnout grows in size.',
        image: {
          full: 'ShyvanaImmolationAura.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Flame Breath',
        sanitizedDescription:
          "Shyvana unleashes a fireball that deals damage to all enemies it encounters and leaves cinders on the target, marking them for 5 seconds. Shyvana's basic attacks on marked targets deal a percentage of their maximum Health as damage on-hit.Dragon Form: Flame Breath explodes on impact or at target location, dealing bonus damage and scorching the earth for a short duration.",
        image: {
          full: 'ShyvanaFireball.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: "Dragon's Descent",
        sanitizedDescription:
          'Shyvana transforms into a dragon and takes flight to a target location. Enemies along her path take damage and are knocked toward her target location.Shyvana passively gains Fury per second and gains 2 Fury on basic attack.',
        image: {
          full: 'ShyvanaTransformCast.png'
        },
        cooldownBurn: '0'
      }
    ],
    passive: {
      image: {
        full: 'ShyvanaReinforcedScales.png'
      },
      name: 'Fury of the Dragonborn',
      sanitizedDescription:
        'Shyvana deals bonus damage to dragons and gains Armor and Magic Resistance. As Shyvana and her allies slay more dragons, she gains more bonus Armor and Magic Resistance.'
    },
    range: 'Melee'
  },
  '103': {
    id: 103,
    key: 'Ahri',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    image: {
      full: 'Ahri.png'
    },
    spells: [
      {
        name: 'Orb of Deception',
        sanitizedDescription:
          "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. After earning several spell hits, Ahri's next orb hits will restore her health.",
        image: {
          full: 'AhriOrbofDeception.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Fox-Fire',
        sanitizedDescription:
          'Ahri releases three fox-fires, that lock onto and attack nearby enemies.',
        image: {
          full: 'AhriFoxFire.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Charm',
        sanitizedDescription:
          'Ahri blows a kiss that damages and charms an enemy it encounters, causing them to walk harmlessly towards her and take more damage from her abilities.',
        image: {
          full: 'AhriSeduce.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Spirit Rush',
        sanitizedDescription:
          'Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown.',
        image: {
          full: 'AhriTumble.png'
        },
        cooldownBurn: '130/105/80'
      }
    ],
    passive: {
      image: {
        full: 'Ahri_SoulEater2.png'
      },
      name: 'Vastayan Grace',
      sanitizedDescription:
        "Whenever Ahri's spells hit a champion 2 times within a short period, she briefly gains movement speed."
    },
    range: 'Ranged'
  },
  '104': {
    id: 104,
    key: 'Graves',
    name: 'Graves',
    title: 'the Outlaw',
    image: {
      full: 'Graves.png'
    },
    spells: [
      {
        name: 'End of the Line',
        sanitizedDescription:
          'Graves fires an explosive shell that detonates after 2 seconds, or 0.2 seconds if it strikes terrain.',
        image: {
          full: 'GravesQLineSpell.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Smoke Screen',
        sanitizedDescription:
          'Graves fires a smoke canister at the target area creating a cloud of smoke that reduces sight range. Enemies caught in the initial impact are dealt magic damage and have their movement speed reduced briefly.',
        image: {
          full: 'GravesSmokeGrenade.png'
        },
        cooldownBurn: '26/24/22/20/18'
      },
      {
        name: 'Quickdraw',
        sanitizedDescription:
          'Graves dashes forward gaining an Armor boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.',
        image: {
          full: 'GravesMove.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Collateral Damage',
        sanitizedDescription:
          'Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.',
        image: {
          full: 'GravesChargeShot.png'
        },
        cooldownBurn: '120/90/60'
      }
    ],
    passive: {
      image: {
        full: 'GravesTrueGrit.png'
      },
      name: 'New Destiny',
      sanitizedDescription:
        "Graves's shotgun holds two shells. After firing them he must reload. Each attack fires several bullets in a cone. Hitting an enemy with multiple bullets does bonus damage. These bullets cannot pass through units."
    },
    range: 'Ranged'
  },
  '105': {
    id: 105,
    key: 'Fizz',
    name: 'Fizz',
    title: 'the Tidal Trickster',
    image: {
      full: 'Fizz.png'
    },
    spells: [
      {
        name: 'Urchin Strike',
        sanitizedDescription:
          'Fizz dashes through his target, dealing magic damage and applying on hit effects.',
        image: {
          full: 'FizzQ.png'
        },
        cooldownBurn: '8/7.5/7/6.5/6'
      },
      {
        name: 'Seastone Trident',
        sanitizedDescription:
          "Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.",
        image: {
          full: 'FizzW.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Playful / Trickster',
        sanitizedDescription:
          'Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.',
        image: {
          full: 'FizzE.png'
        },
        cooldownBurn: '16/14.5/13/11.5/10'
      },
      {
        name: 'Chum the Waters',
        sanitizedDescription:
          'Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.',
        image: {
          full: 'FizzR.png'
        },
        cooldownBurn: '100/85/70'
      }
    ],
    passive: {
      image: {
        full: 'Fizz_P.png'
      },
      name: 'Nimble Fighter',
      sanitizedDescription:
        "Fizz's dexterity allows him to move through units and take less physical damage from basic attacks."
    },
    range: 'Melee'
  },
  '106': {
    id: 106,
    key: 'Volibear',
    name: 'Volibear',
    title: "the Thunder's Roar",
    image: {
      full: 'Volibear.png'
    },
    spells: [
      {
        name: 'Rolling Thunder',
        sanitizedDescription:
          'Volibear drops to all fours and runs faster. This bonus speed increases when chasing enemy champions. The first enemy he attacks is thrown backwards over Volibear.',
        image: {
          full: 'VolibearQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Frenzy',
        sanitizedDescription:
          "Volibear's repeated attacks grant him additional Attack Speed. Once Volibear has repeatedly attacked three times, he can perform a vicious bite on his target which deals increased damage based on the target's missing Health.",
        image: {
          full: 'VolibearW.png'
        },
        cooldownBurn: '18'
      },
      {
        name: 'Majestic Roar',
        sanitizedDescription:
          'Volibear lets out a powerful roar that damages, slows, and slightly knocks back enemies. Enemies who are airborne or dashing are dealt additional damage. Minions and monsters are feared as well.',
        image: {
          full: 'VolibearE.png'
        },
        cooldownBurn: '11'
      },
      {
        name: 'Thunder Claws',
        sanitizedDescription:
          "Volibear erupts with chain lightning, damaging a number of nearby enemies. The power of the storm causes Volibear's attacks to blast his targets with lightning that bounces to other nearby enemies.",
        image: {
          full: 'VolibearR.png'
        },
        cooldownBurn: '100/90/80'
      }
    ],
    passive: {
      image: {
        full: 'VolibearPassive.png'
      },
      name: 'Chosen of the Storm',
      sanitizedDescription:
        'Volibear heals rapidly for a few seconds when his Health drops to a critical level.'
    },
    range: 'Melee'
  },
  '107': {
    id: 107,
    key: 'Rengar',
    name: 'Rengar',
    title: 'the Pridestalker',
    image: {
      full: 'Rengar.png'
    },
    spells: [
      {
        name: 'Savagery',
        sanitizedDescription:
          "Rengar's next attack brutally stabs his target for bonus damage.Ferocity effect: deals increased damage and grants Attack Speed.",
        image: {
          full: 'RengarQ.png'
        },
        cooldownBurn: '0.25'
      },
      {
        name: 'Battle Roar',
        sanitizedDescription:
          'Rengar lets out a battle roar, damaging enemies and healing for some of the recent damage he has taken.Ferocity effect: additionally breaks crowd control effects.',
        image: {
          full: 'RengarW.png'
        },
        cooldownBurn: '0.25'
      },
      {
        name: 'Bola Strike',
        sanitizedDescription:
          'Rengar throws a bola, slowing the first target hit for a short duration.Ferocity effect: roots the target.',
        image: {
          full: 'RengarE.png'
        },
        cooldownBurn: '0.25'
      },
      {
        name: 'Thrill of the Hunt',
        sanitizedDescription:
          "Rengar's predatory instincts take over, Camouflaging him and revealing the nearest enemy champion in a large radius around him. During Thrill of the Hunt, Rengar gains Movement Speed and he can leap to the tracked enemy without being in brush, reducing their armor.",
        image: {
          full: 'RengarR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'Rengar_P.png'
      },
      name: 'Unseen Predator',
      sanitizedDescription:
        "While in brush, Rengar leaps at his target with his basic attack.Rengar's abilities build Ferocity. Upon reaching full Ferocity, his next ability becomes empowered and grants him Movement Speed on cast, but he instantly loses all Ferocity if he leaves combat.Killing enemy champions awards trophies on Rengar's Bonetooth Necklace, permanently increasing his Attack Damage."
    },
    range: 'Melee'
  },
  '110': {
    id: 110,
    key: 'Varus',
    name: 'Varus',
    title: 'the Arrow of Retribution',
    image: {
      full: 'Varus.png'
    },
    spells: [
      {
        name: 'Piercing Arrow',
        sanitizedDescription:
          'Varus readies and then fires a powerful shot that gains extra range and damage the longer he spends preparing to fire.',
        image: {
          full: 'VarusQ.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Blighted Quiver',
        sanitizedDescription:
          "Passive: Varus' basic attacks deal bonus magic damage and apply Blight. Varus' other abilities detonate Blight, dealing magic damage based on the target's maximum Health. Active: Varus empowers his next Piercing Arrow.",
        image: {
          full: 'VarusW.png'
        },
        cooldownBurn: '40'
      },
      {
        name: 'Hail of Arrows',
        sanitizedDescription:
          "Varus fires a hail of arrows that deal physical damage and desecrate the ground. Desecrated ground slows enemies' Movement Speed and reduces their self healing and regeneration. ",
        image: {
          full: 'VarusE.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Chain of Corruption',
        sanitizedDescription:
          'Varus flings out a damaging tendril of corruption that immobilizes the first enemy champion hit and then spreads towards nearby uninfected champions, immobilizing them too on contact. ',
        image: {
          full: 'VarusR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'VarusPassive.png'
      },
      name: 'Living Vengeance',
      sanitizedDescription:
        'On kill or assist, Varus temporarily gains Attack Speed. This bonus is larger if the enemy is a champion.'
    },
    range: 'Ranged'
  },
  '111': {
    id: 111,
    key: 'Nautilus',
    name: 'Nautilus',
    title: 'the Titan of the Depths',
    image: {
      full: 'Nautilus.png'
    },
    spells: [
      {
        name: 'Dredge Line',
        sanitizedDescription:
          'Nautilus hurls his anchor forward. If it hits a champion, he drags both himself and the opponent close together. If it hits terrain, Nautilus instead pulls himself to the anchor, the cooldown of Dredge Line is reduced by half, and half the Mana cost is refunded.',
        image: {
          full: 'NautilusAnchorDrag.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: "Titan's Wrath",
        sanitizedDescription:
          'Nautilus surrounds himself with dark energies, gaining a shield that blocks incoming damage. While the shield persists, his attacks apply a damage over time effect to enemies around his target.',
        image: {
          full: 'NautilusPiercingGaze.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Riptide',
        sanitizedDescription:
          'Nautilus slams the ground, causing the earth to explode around him in a set of three explosions. Each explosion damages and slows enemies.',
        image: {
          full: 'NautilusSplashZone.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Depth Charge',
        sanitizedDescription:
          'Nautilus fires a shockwave into the earth that chases an opponent. This shockwave rips up the earth above it, knocking enemies into the air. When it reaches the opponent, the shockwave erupts, knocking his target into the air and stunning them.',
        image: {
          full: 'NautilusGrandLine.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Nautilus_StaggeringBlow.png'
      },
      name: 'Staggering Blow',
      sanitizedDescription:
        "Nautilus' basic attacks deal bonus physical damage and immobilize his targets. This effect cannot happen more than once every few seconds on the same target."
    },
    range: 'Melee'
  },
  '112': {
    id: 112,
    key: 'Viktor',
    name: 'Viktor',
    title: 'the Machine Herald',
    image: {
      full: 'Viktor.png'
    },
    spells: [
      {
        name: 'Siphon Power',
        sanitizedDescription:
          "Viktor blasts an enemy unit dealing magic damage, gaining a shield and empowering his next basic attack.Augment: Siphon Power's shield is increased by 60% and Viktor gains bonus Movement Speed after casting.",
        image: {
          full: 'ViktorPowerTransfer.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Gravity Field',
        sanitizedDescription:
          'Viktor conjures a heavy gravitational field that slows enemies in its radius. Enemies who stay within the device for too long are stunned.Augment: Enemies stunned by Gravity Field are dragged to the center.',
        image: {
          full: 'ViktorGravitonField.png'
        },
        cooldownBurn: '17/16/15/14/13'
      },
      {
        name: 'Death Ray',
        sanitizedDescription:
          "Viktor uses his robotic arm to fire a chaos beam that cuts across the field in a line, dealing damage to all enemies in its path.Augment: An explosion follows the Death Ray's wake, dealing magic damage.",
        image: {
          full: 'ViktorDeathRay.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Chaos Storm',
        sanitizedDescription:
          'Viktor conjures a singularity on the field which deals magic damage and interrupts enemy channels. The singularity then periodically does magic damage to all nearby enemies. Viktor can redirect the singularity.Augment: The Chaos Storm moves faster.',
        image: {
          full: 'ViktorChaosStorm.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Viktor_Passive.png'
      },
      name: 'Glorious Evolution',
      sanitizedDescription:
        'Viktor starts with the Prototype Hex Core that can be upgraded three times in the store to augment his abilities.'
    },
    range: 'Ranged'
  },
  '113': {
    id: 113,
    key: 'Sejuani',
    name: 'Sejuani',
    title: 'Fury of the North',
    image: {
      full: 'Sejuani.png'
    },
    spells: [
      {
        name: 'Arctic Assault',
        sanitizedDescription:
          'Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.',
        image: {
          full: 'SejuaniQ.png'
        },
        cooldownBurn: '17/15.5/14/12.5/11'
      },
      {
        name: "Winter's Wrath",
        sanitizedDescription:
          'Sejuani swings her mace twice, dealing damage and applying Frost stacks.',
        image: {
          full: 'SejuaniW.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Permafrost',
        sanitizedDescription:
          'Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.',
        image: {
          full: 'SejuaniE.png'
        },
        cooldownBurn: '1.5'
      },
      {
        name: 'Glacial Prison',
        sanitizedDescription:
          'Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.',
        image: {
          full: 'SejuaniR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Sejuani_passive.png'
      },
      name: 'Fury of the North',
      sanitizedDescription:
        'After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage.  Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.'
    },
    range: 'Melee'
  },
  '114': {
    id: 114,
    key: 'Fiora',
    name: 'Fiora',
    title: 'the Grand Duelist',
    image: {
      full: 'Fiora.png'
    },
    spells: [
      {
        name: 'Lunge',
        sanitizedDescription:
          'Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.',
        image: {
          full: 'FioraQ.png'
        },
        cooldownBurn: '16/14/12/10/8'
      },
      {
        name: 'Riposte',
        sanitizedDescription:
          'Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.',
        image: {
          full: 'FioraW.png'
        },
        cooldownBurn: '24/22/20/18/16'
      },
      {
        name: 'Bladework',
        sanitizedDescription:
          'Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.',
        image: {
          full: 'FioraE.png'
        },
        cooldownBurn: '13/11/9/7/5'
      },
      {
        name: 'Grand Challenge',
        sanitizedDescription:
          'Fiora reveals all four Vitals on an enemy champion and gains movement speed while near them. If Fiora hits all 4 Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.',
        image: {
          full: 'FioraR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'Fiora_P.png'
      },
      name: "Duelist's Dance",
      sanitizedDescription:
        'Fiora challenges nearby enemy Champions to dodge her. She calls out a direction from which she will try to strike. If she can complete her own challenge, she receives a small bonus and calls out a new direction.'
    },
    range: 'Melee'
  },
  '115': {
    id: 115,
    key: 'Ziggs',
    name: 'Ziggs',
    title: 'the Hexplosives Expert',
    image: {
      full: 'Ziggs.png'
    },
    spells: [
      {
        name: 'Bouncing Bomb',
        sanitizedDescription: 'Ziggs throws a bouncing bomb that deals magic damage.',
        image: {
          full: 'ZiggsQ.png'
        },
        cooldownBurn: '6/5.5/5/4.5/4'
      },
      {
        name: 'Satchel Charge',
        sanitizedDescription:
          'Ziggs flings an explosive charge that detonates after 4 seconds, or when this ability is activated again. The explosion deals magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage. Ziggs can use the Satchel to hexplode vulnerable enemy turrets.',
        image: {
          full: 'ZiggsW.png'
        },
        cooldownBurn: '24/21/18/15/12'
      },
      {
        name: 'Hexplosive Minefield',
        sanitizedDescription:
          'Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and slowing. Successive mine detonations on the same target deal reduced damage.',
        image: {
          full: 'ZiggsE.png'
        },
        cooldownBurn: '16'
      },
      {
        name: 'Mega Inferno Bomb',
        sanitizedDescription:
          'Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take more damage than those farther away. ',
        image: {
          full: 'ZiggsR.png'
        },
        cooldownBurn: '120/105/90'
      }
    ],
    passive: {
      image: {
        full: 'ZiggsPassiveReady.png'
      },
      name: 'Short Fuse',
      sanitizedDescription:
        "Every 12 seconds, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability."
    },
    range: 'Ranged'
  },
  '117': {
    id: 117,
    key: 'Lulu',
    name: 'Lulu',
    title: 'the Fae Sorceress',
    image: {
      full: 'Lulu.png'
    },
    spells: [
      {
        name: 'Glitterlance',
        sanitizedDescription:
          'Pix and Lulu each fire a bolt of magical energy that heavily slows all enemies it hits. An enemy can only be damaged by one bolt.',
        image: {
          full: 'LuluQ.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Whimsy',
        sanitizedDescription:
          "If cast on an ally, grants them Attack Speed and Movement Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells.",
        image: {
          full: 'LuluW.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Help, Pix!',
        sanitizedDescription:
          'If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy.',
        image: {
          full: 'LuluE.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Wild Growth',
        sanitizedDescription:
          'Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies.',
        image: {
          full: 'LuluR.png'
        },
        cooldownBurn: '110/95/80'
      }
    ],
    passive: {
      image: {
        full: 'Lulu_PixFaerieCompanion.png'
      },
      name: 'Pix, Faerie Companion',
      sanitizedDescription:
        'Pix is a wild Faerie that accompanies Lulu. Pix will fire a barrage of magical energy at targets that Lulu attacks.'
    },
    range: 'Ranged'
  },
  '119': {
    id: 119,
    key: 'Draven',
    name: 'Draven',
    title: 'the Glorious Executioner',
    image: {
      full: 'Draven.png'
    },
    spells: [
      {
        name: 'Spinning Axe',
        sanitizedDescription:
          "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
        image: {
          full: 'DravenSpinning.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Blood Rush',
        sanitizedDescription:
          'Draven gains increased Movement Speed and Attack Speed. The Movement Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.',
        image: {
          full: 'DravenFury.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Stand Aside',
        sanitizedDescription:
          'Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.',
        image: {
          full: 'DravenDoubleShot.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Whirling Death',
        sanitizedDescription:
          'Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction.',
        image: {
          full: 'DravenRCast.png'
        },
        cooldownBurn: '100/90/80'
      }
    ],
    passive: {
      image: {
        full: 'Draven_passive.png'
      },
      name: '',
      sanitizedDescription: ''
    },
    range: 'Ranged'
  },
  '120': {
    id: 120,
    key: 'Hecarim',
    name: 'Hecarim',
    title: 'the Shadow of War',
    image: {
      full: 'Hecarim.png'
    },
    spells: [
      {
        name: 'Rampage',
        sanitizedDescription: 'Hecarim cleaves nearby enemies dealing physical damage.',
        image: {
          full: 'HecarimRapidSlash.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Spirit of Dread',
        sanitizedDescription:
          'Hecarim deals magic damage to nearby enemies for a short duration. Hecarim gains Health equal to a percentage of any damage those enemies suffer.',
        image: {
          full: 'HecarimW.png'
        },
        cooldownBurn: '22/21/20/19/18'
      },
      {
        name: 'Devastating Charge',
        sanitizedDescription:
          'Hecarim gains increasing Movement Speed and can move through units for a short duration. His next attack knocks the target back and deals additional physical damage based on the distance he has traveled since activating the ability.',
        image: {
          full: 'HecarimRamp.png'
        },
        cooldownBurn: '20/19/18/17/16'
      },
      {
        name: 'Onslaught of Shadows',
        sanitizedDescription:
          'Hecarim summons spectral riders and charges forward, dealing magic damage in a line. Hecarim creates a shockwave when he finishes his charge, causing nearby enemies to flee in terror.',
        image: {
          full: 'HecarimUlt.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'Hecarim_Passive.png'
      },
      name: 'Warpath',
      sanitizedDescription:
        'Hecarim gains Attack Damage equal to a percentage of his bonus Movement Speed.'
    },
    range: 'Melee'
  },
  '121': {
    id: 121,
    key: 'Khazix',
    name: "Kha'Zix",
    title: 'the Voidreaver',
    image: {
      full: 'Khazix.png'
    },
    spells: [
      {
        name: 'Taste Their Fear',
        sanitizedDescription:
          "Deals physical damage to the target. Damage increased on Isolated targets. If he chooses to Evolve Reaper Claws, this refunds a percent of it's cooldown against Isolated targets. Kha'Zix also gains increased range on his basic attacks and Taste Their Fear.",
        image: {
          full: 'KhazixQ.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Void Spike',
        sanitizedDescription:
          "Kha'Zix fires exploding spikes that deal physical damage to enemies hit. Kha'Zix is healed if he is also within the explosion radius. If he chooses to Evolve Spike Racks, Void Spike now fires three spikes in a cone, slow enemies hit, and reveals enemy champions hit for 2 seconds. Isolated targets are slowed for extra.",
        image: {
          full: 'KhazixW.png'
        },
        cooldownBurn: '9'
      },
      {
        name: 'Leap',
        sanitizedDescription:
          "Kha'Zix leaps to an area, dealing physical damage upon landing. If he chooses to Evolve Wings, Leap's range increases by 200 and the cooldown resets on champion kill or assist.",
        image: {
          full: 'KhazixE.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Void Assault',
        sanitizedDescription:
          "Each rank allows Kha'Zix to evolve one of his abilities, giving it a unique additional effect. When activated, Kha'Zix becomes Invisible, triggering Unseen Threat and increasing Movement Speed. If he chooses to Evolve Adaptive Cloaking, Void Assault gains increased Invisibility duration, and an additional use.",
        image: {
          full: 'KhazixR.png'
        },
        cooldownBurn: '100/85/70'
      }
    ],
    passive: {
      image: {
        full: 'Khazix_P.png'
      },
      name: 'Unseen Threat',
      sanitizedDescription:
        "When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy Champion to deal bonus magic damage and slow."
    },
    range: 'Melee'
  },
  '122': {
    id: 122,
    key: 'Darius',
    name: 'Darius',
    title: 'the Hand of Noxus',
    image: {
      full: 'Darius.png'
    },
    spells: [
      {
        name: 'Decimate',
        sanitizedDescription:
          'Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions hit by the blade.',
        image: {
          full: 'DariusCleave.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Crippling Strike',
        sanitizedDescription:
          "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Movement Speed is slowed.",
        image: {
          full: 'DariusNoxianTacticsONH.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Apprehend',
        sanitizedDescription:
          "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
        image: {
          full: 'DariusAxeGrabCone.png'
        },
        cooldownBurn: '24/21/18/15/12'
      },
      {
        name: 'Noxian Guillotine',
        sanitizedDescription:
          'Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.',
        image: {
          full: 'DariusExecute.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Darius_PassiveBuff.png'
      },
      name: 'Hemorrhage',
      sanitizedDescription:
        'Darius aims his attacks strategically, causing his target to bleed. This effect stacks up to five times. Enemies that reach max Hemorrhage cause Darius to gain Noxian Might, greatly increasing his damage.'
    },
    range: 'Melee'
  },
  '126': {
    id: 126,
    key: 'Jayce',
    name: 'Jayce',
    title: 'the Defender of Tomorrow',
    image: {
      full: 'Jayce.png'
    },
    spells: [
      {
        name: 'To the Skies! / Shock Blast',
        sanitizedDescription:
          'Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies.Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.',
        image: {
          full: 'JayceToTheSkies.png'
        },
        cooldownBurn: '16/14/12/10/8/6'
      },
      {
        name: 'Lightning Field / Hyper Charge',
        sanitizedDescription:
          'Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds.Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.',
        image: {
          full: 'JayceStaticField.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Thundering Blow / Acceleration Gate',
        sanitizedDescription:
          'Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance.Cannon Stance: Deploys an Acceleration Gate increasing the Movement Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.',
        image: {
          full: 'JayceThunderingBlow.png'
        },
        cooldownBurn: '20/18/16/14/12/10'
      },
      {
        name: 'Mercury Cannon / Mercury Hammer',
        sanitizedDescription:
          "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist.Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
        image: {
          full: 'JayceStanceHtG.png'
        },
        cooldownBurn: '6'
      }
    ],
    passive: {
      image: {
        full: 'Jayce_Passive.png'
      },
      name: 'Hextech Capacitor',
      sanitizedDescription:
        'After casting Transform Jayce gains 40 Movement Speed and can move through units for the next 1.25 seconds.'
    },
    range: 'Melee'
  },
  '127': {
    id: 127,
    key: 'Lissandra',
    name: 'Lissandra',
    title: 'the Ice Witch',
    image: {
      full: 'Lissandra.png'
    },
    spells: [
      {
        name: 'Ice Shard',
        sanitizedDescription:
          'Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Movement Speed. Shards pass through the target, dealing the same damage to other enemies hit.',
        image: {
          full: 'LissandraQ.png'
        },
        cooldownBurn: '6/5.25/4.5/3.75/3'
      },
      {
        name: 'Ring of Frost',
        sanitizedDescription:
          'Freezes nearby enemies in ice, dealing magic damage and rooting them.',
        image: {
          full: 'LissandraW.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Glacial Path',
        sanitizedDescription:
          "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
        image: {
          full: 'LissandraE.png'
        },
        cooldownBurn: '24/21/18/15/12'
      },
      {
        name: 'Frozen Tomb',
        sanitizedDescription:
          'If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Movement Speed.',
        image: {
          full: 'LissandraR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Lissandra_Passive.png'
      },
      name: 'Iceborn Subjugation',
      sanitizedDescription:
        'When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after 4 seconds, shatter from the intense cold, dealing magic damage to nearby targets.'
    },
    range: 'Ranged'
  },
  '131': {
    id: 131,
    key: 'Diana',
    name: 'Diana',
    title: 'Scorn of the Moon',
    image: {
      full: 'Diana.png'
    },
    spells: [
      {
        name: 'Crescent Strike',
        sanitizedDescription:
          'Diana swings her blade to unleash a bolt of lunar energy that deals damage in an arc before exploding. Afflicts enemies struck with the Moonlight debuff, revealing them if they are not stealthed. ',
        image: {
          full: 'DianaArc.png'
        },
        cooldownBurn: '8/7.5/7/6.5/6'
      },
      {
        name: 'Pale Cascade',
        sanitizedDescription:
          'Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.',
        image: {
          full: 'DianaOrbs.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Moonfall',
        sanitizedDescription:
          'Diana draws in and slows all nearby enemies. Passively grants Diana attack speed after spell casts.',
        image: {
          full: 'DianaVortex.png'
        },
        cooldownBurn: '26/24/22/20/18'
      },
      {
        name: 'Lunar Rush',
        sanitizedDescription:
          'Diana dashes to an enemy and deals magic damage. Lunar Rush has no cooldown when used to teleport to a target afflicted with Moonlight.',
        image: {
          full: 'DianaTeleport.png'
        },
        cooldownBurn: '25/20/15'
      }
    ],
    passive: {
      image: {
        full: 'Diana_Passive_LunarBlade.png'
      },
      name: 'Moonsilver Blade',
      sanitizedDescription:
        'Every third strike restores mana and cleaves nearby enemies for additional magic damage. Every spell cast grants attack speed for the next 3 attacks.'
    },
    range: 'Melee'
  },
  '133': {
    id: 133,
    key: 'Quinn',
    name: 'Quinn',
    title: "Demacia's Wings",
    image: {
      full: 'Quinn.png'
    },
    spells: [
      {
        name: 'Blinding Assault',
        sanitizedDescription:
          'Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.',
        image: {
          full: 'QuinnQ.png'
        },
        cooldownBurn: '11/10.5/10/9.5/9'
      },
      {
        name: 'Heightened Senses',
        sanitizedDescription:
          'Passively grants Quinn Attack Speed and Movement Speed after she attacks a Vulnerable target. Activate to have Valor reveal a large area nearby.',
        image: {
          full: 'QuinnW.png'
        },
        cooldownBurn: '50/45/40/35/30'
      },
      {
        name: 'Vault',
        sanitizedDescription:
          "Quinn dashes to an enemy, dealing physical damage and slowing the target's Movement Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.",
        image: {
          full: 'QuinnE.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Behind Enemy Lines',
        sanitizedDescription:
          'Quinn and Valor team up to fly around at great speed.  Ending the ability casts Skystrike, which deals damage to nearby enemies and marks champions as Vulnerable.',
        image: {
          full: 'QuinnR.png'
        },
        cooldownBurn: '3'
      }
    ],
    passive: {
      image: {
        full: 'Quinn_Passive.png'
      },
      name: 'Harrier',
      sanitizedDescription:
        "Valor periodically marks enemies as Vulnerable. Quinn's first basic attack against Vulnerable targets will deal bonus physical damage."
    },
    range: 'Ranged'
  },
  '134': {
    id: 134,
    key: 'Syndra',
    name: 'Syndra',
    title: 'the Dark Sovereign',
    image: {
      full: 'Syndra.png'
    },
    spells: [
      {
        name: 'Dark Sphere',
        sanitizedDescription:
          'Syndra conjures a Dark Sphere dealing magic damage. The sphere remains and can be manipulated by her other powers.',
        image: {
          full: 'SyndraQ.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Force of Will',
        sanitizedDescription:
          'Syndra picks up and throws a Dark Sphere or enemy minion dealing magic damage and slowing the Movement Speed of enemies.',
        image: {
          full: 'SyndraW.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Scatter the Weak',
        sanitizedDescription:
          'Syndra knocks enemies and Dark Spheres back dealing magic damage. Enemies hit by Dark Spheres become stunned.',
        image: {
          full: 'SyndraE.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Unleashed Power',
        sanitizedDescription: 'Syndra bombards an enemy Champion with all of her Dark Spheres.',
        image: {
          full: 'SyndraR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'SyndraPassive.png'
      },
      name: 'Transcendent',
      sanitizedDescription:
        'Spells gain extra effects at max rank.Dark Sphere: Deals 15% more damage against champions.Force of Will: Deals 20% bonus true damage.Scatter the Weak: Spell width increased by 50%.Unleashed Power: Range increased by 75.'
    },
    range: 'Ranged'
  },
  '136': {
    id: 136,
    key: 'AurelionSol',
    name: 'Aurelion Sol',
    title: 'The Star Forger',
    image: {
      full: 'AurelionSol.png'
    },
    spells: [
      {
        name: 'Starsurge',
        sanitizedDescription:
          'Aurelion Sol creates an expanding disk, which explodes to stun and damage enemies when it moves too far away from him.',
        image: {
          full: 'AurelionSolQ.png'
        },
        cooldownBurn: '10'
      },
      {
        name: 'Celestial Expansion',
        sanitizedDescription: 'Aurelion Sol pushes his stars farther out, magnifying their damage.',
        image: {
          full: 'AurelionSolW.png'
        },
        cooldownBurn: '6/5.5/5/4.5/4'
      },
      {
        name: 'Comet of Legend',
        sanitizedDescription:
          'Aurelion Sol gains speed while moving in one continuous direction, and can take off flying for a long distance.',
        image: {
          full: 'AurelionSolE.png'
        },
        cooldownBurn: '60/55/50/45/40'
      },
      {
        name: 'Voice of Light',
        sanitizedDescription:
          'Aurelion Sol projects a blast of pure starfire, damaging and slowing all enemies caught in it and knocking nearby enemies back to a safer distance.',
        image: {
          full: 'AurelionSolR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'AurelionSol_Passive.png'
      },
      name: 'Center of the Universe',
      sanitizedDescription: 'Stars orbit Aurelion Sol, dealing magic damage when they hit an enemy.'
    },
    range: 'Ranged'
  },
  '141': {
    id: 141,
    key: 'Kayn',
    name: 'Kayn',
    title: 'the Shadow Reaper',
    image: {
      full: 'Kayn.png'
    },
    spells: [
      {
        name: 'Reaping Slash',
        sanitizedDescription: 'Kayn dashes, then slashes. Both deal damage.',
        image: {
          full: 'KaynQ.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: "Blade's Reach",
        sanitizedDescription: 'Kayn damages and slows targets in a line.',
        image: {
          full: 'KaynW.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Shadow Step',
        sanitizedDescription: 'Kayn can walk through terrain.',
        image: {
          full: 'KaynE.png'
        },
        cooldownBurn: '21/19/17/15/13'
      },
      {
        name: 'Umbral Trespass',
        sanitizedDescription:
          "Kayn hides in an enemy's body, dealing massive damage when he bursts out.",
        image: {
          full: 'KaynR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Kayn_Passive_Primary.png'
      },
      name: 'The Darkin Scythe',
      sanitizedDescription:
        'At one point in the game, Kayn will permanently transform into either a Shadow Assassin or a Darkin.'
    },
    range: 'Melee'
  },
  '142': {
    id: 142,
    key: 'Zoe',
    name: 'Zoe',
    title: 'the Aspect of Twilight',
    image: {
      full: 'Zoe.png'
    },
    spells: [
      {
        name: 'Paddle Star!',
        sanitizedDescription:
          'Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.',
        image: {
          full: 'ZoeQ.png'
        },
        cooldownBurn: '8.5/8/7.5/7/6.5'
      },
      {
        name: 'Spell Thief',
        sanitizedDescription:
          'Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.',
        image: {
          full: 'ZoeW.png'
        },
        cooldownBurn: '0.25'
      },
      {
        name: 'Sleepy Trouble Bubble',
        sanitizedDescription:
          'Causes the target to become drowsy, then fall asleep. The first source of damage that breaks the sleep is doubled, up to a cap.',
        image: {
          full: 'ZoeE.png'
        },
        cooldownBurn: '20/18.5/17/15.5/14'
      },
      {
        name: 'Portal Jump',
        sanitizedDescription: 'Blink to a nearby position for 1 second. Then blink back.',
        image: {
          full: 'ZoeR.png'
        },
        cooldownBurn: '11/8/5'
      }
    ],
    passive: {
      image: {
        full: 'Zoe_P.png'
      },
      name: 'More Sparkles!',
      sanitizedDescription:
        "Zoe's next basic attack after casting a spell deals bonus magic damage."
    },
    range: 'Ranged'
  },
  '143': {
    id: 143,
    key: 'Zyra',
    name: 'Zyra',
    title: 'Rise of the Thorns',
    image: {
      full: 'Zyra.png'
    },
    spells: [
      {
        name: 'Deadly Spines',
        sanitizedDescription:
          'Thick vines spread through the ground and explode into spines, dealing magic damage to enemies within the area. If cast near a seed, Deadly Spines grows a Thorn Spitter plant, which fires at enemies from afar.',
        image: {
          full: 'ZyraQ.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Rampant Growth',
        sanitizedDescription:
          "Zyra plants a seed, lasting up to 60 seconds. Deadly Spines and Grasping Roots cast near seeds will turn them into plants who fight for Zyra. Zyra can store multiple seeds at once, and killing enemies reduces Rampant Growth's recharge time.",
        image: {
          full: 'ZyraW.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Grasping Roots',
        sanitizedDescription:
          'Zyra sends forth vines through the ground to ensnare her target, dealing damage and rooting enemies they come across. If cast near a seed, Grasping Roots grows a Vine Lasher, whose short range attacks reduce enemy Movement Speed.',
        image: {
          full: 'ZyraE.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Stranglethorns',
        sanitizedDescription:
          'Zyra summons a twisted thicket at her target location, dealing damage to enemies as it expands and knocking them airborne as it contracts.',
        image: {
          full: 'ZyraR.png'
        },
        cooldownBurn: '130/120/110'
      }
    ],
    passive: {
      image: {
        full: 'ZyraP.png'
      },
      name: 'Garden of Thorns',
      sanitizedDescription:
        'Seeds spawn around Zyra periodically, becoming faster with level and lasting 30 seconds. If an enemy Champion steps on a seed, it dies. Zyra can cast spells near seeds to grow plants. Extra plants striking the same target deal reduced damage.'
    },
    range: 'Ranged'
  },
  '145': {
    id: 145,
    key: 'Kaisa',
    name: "Kai'Sa",
    title: 'Daughter of the Void',
    image: {
      full: 'Kaisa.png'
    },
    spells: [
      {
        name: 'Icathian Rain',
        sanitizedDescription:
          "Kai'Sa shoots a swarm of missiles that seek out nearby targets.Living Weapon: Icathian Rain is upgraded to shoot more missiles.",
        image: {
          full: 'KaisaQ.png'
        },
        cooldownBurn: '8/7.5/7/6.5/6'
      },
      {
        name: 'Void Seeker',
        sanitizedDescription:
          "Kai'Sa shoots a long range missile, marking enemies with her passive.Living Weapon: Void Seeker is upgraded to apply more passive marks and reduce cooldown on champion hit.",
        image: {
          full: 'KaisaW.png'
        },
        cooldownBurn: '22/20/18/16/14'
      },
      {
        name: 'Supercharge',
        sanitizedDescription:
          "Kai'Sa briefly increases her movement speed, then increases her attack speed.Living Weapon: Supercharge is upgraded to briefly grant Invisibility.",
        image: {
          full: 'KaisaE.png'
        },
        cooldownBurn: '16/15.5/15/14.5/14'
      },
      {
        name: 'Killer Instinct',
        sanitizedDescription: "Kai'Sa dashes near an enemy champion.",
        image: {
          full: 'KaisaR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'Kaisa_Passive.png'
      },
      name: 'Second Skin',
      sanitizedDescription:
        "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties."
    },
    range: 'Ranged'
  },
  '150': {
    id: 150,
    key: 'Gnar',
    name: 'Gnar',
    title: 'the Missing Link',
    image: {
      full: 'Gnar.png'
    },
    spells: [
      {
        name: 'Boomerang Throw / Boulder Toss',
        sanitizedDescription:
          'Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced.Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.',
        image: {
          full: 'GnarQ.png'
        },
        cooldownBurn: '20/17.5/15/12.5/10'
      },
      {
        name: 'Hyper / Wallop',
        sanitizedDescription:
          "Gnar's attacks and spells hype him up, dealing bonus damage and granting him Movement Speed.Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",
        image: {
          full: 'GnarW.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Hop / Crunch',
        sanitizedDescription:
          'Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further.Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.',
        image: {
          full: 'GnarE.png'
        },
        cooldownBurn: '22/19.5/17/14.5/12'
      },
      {
        name: 'GNAR!',
        sanitizedDescription:
          'Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them.  Any enemy that hits a wall is stunned and takes bonus damage.',
        image: {
          full: 'GnarR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'Gnar_Passive.png'
      },
      name: 'Rage Gene',
      sanitizedDescription:
        'While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.'
    },
    range: 'ShapeShifter'
  },
  '154': {
    id: 154,
    key: 'Zac',
    name: 'Zac',
    title: 'the Secret Weapon',
    image: {
      full: 'Zac.png'
    },
    spells: [
      {
        name: 'Stretching Strikes',
        sanitizedDescription:
          'Zac stretches an arm, grabbing an enemy. Attacking a different enemy will cause him to throw both targets towards each other.',
        image: {
          full: 'ZacQ.png'
        },
        cooldownBurn: '13/12/11/10/9'
      },
      {
        name: 'Unstable Matter',
        sanitizedDescription: "Zac's body erupts, damaging nearby enemies.",
        image: {
          full: 'ZacW.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Elastic Slingshot',
        sanitizedDescription:
          'Zac attaches his arms to the ground and stretches back, launching himself forward.',
        image: {
          full: 'ZacE.png'
        },
        cooldownBurn: '24/21/18/15/12'
      },
      {
        name: "Let's Bounce!",
        sanitizedDescription:
          'Zac flattens himself, making him immune to crowd control while slowing enemies standing on top of him. When he decides to bounce away, he will suck up any enemies standing on top of him, taking them for a ride.',
        image: {
          full: 'ZacR.png'
        },
        cooldownBurn: '130/115/100'
      }
    ],
    passive: {
      image: {
        full: 'ZacPassive.png'
      },
      name: 'Cell Division',
      sanitizedDescription:
        "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown."
    },
    range: 'Melee'
  },
  '157': {
    id: 157,
    key: 'Yasuo',
    name: 'Yasuo',
    title: 'the Unforgiven',
    image: {
      full: 'Yasuo.png'
    },
    spells: [
      {
        name: 'Steel Tempest',
        sanitizedDescription:
          'Thrusts forward, damaging all enemies in a line.On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks Airborne.Steel Tempest is treated as a basic attack and scales with all the same things.',
        image: {
          full: 'YasuoQ1Wrapper.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Wind Wall',
        sanitizedDescription:
          'Creates a moving wall that blocks all enemy projectiles for 4 seconds.',
        image: {
          full: 'YasuoW.png'
        },
        cooldownBurn: '26/24/22/20/18'
      },
      {
        name: 'Sweeping Blade',
        sanitizedDescription:
          "Dashes through target enemy, dealing magic damage. Each cast increases your next dash's base Damage, up to a max amount.Cannot be re-cast on the same enemy for a few seconds.If Steel Tempest is cast while dashing, it will strike as a circle.",
        image: {
          full: 'YasuoE.png'
        },
        cooldownBurn: '0.5/0.4/0.3/0.2/0.1'
      },
      {
        name: 'Last Breath',
        sanitizedDescription:
          "Blinks to an Airborne enemy champion, dealing physical damage and holding all Airborne enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm.For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",
        image: {
          full: 'YasuoR.png'
        },
        cooldownBurn: '80/55/30'
      }
    ],
    passive: {
      image: {
        full: 'Yasuo_Passive.png'
      },
      name: 'Way of the Wanderer',
      sanitizedDescription:
        "Yasuo's Critical Strike Chance is doubled. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster."
    },
    range: 'Melee'
  },
  '161': {
    id: 161,
    key: 'Velkoz',
    name: "Vel'Koz",
    title: 'the Eye of the Void',
    image: {
      full: 'Velkoz.png'
    },
    spells: [
      {
        name: 'Plasma Fission',
        sanitizedDescription:
          "Vel'Koz shoots a bolt of plasma that splits in two on reactivation or upon hitting an enemy. The bolt slows and damages on hit.",
        image: {
          full: 'VelkozQ.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Void Rift',
        sanitizedDescription:
          "Vel'Koz opens a rift to the void that deals an initial burst of damage, then explodes for a second burst of damage after a delay.",
        image: {
          full: 'VelkozW.png'
        },
        cooldownBurn: '1.5'
      },
      {
        name: 'Tectonic Disruption',
        sanitizedDescription:
          "Vel'Koz causes an area to explode, knocking up enemies, and knocking close enemies slightly away.",
        image: {
          full: 'VelkozE.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Life Form Disintegration Ray',
        sanitizedDescription:
          "Vel'Koz unleashes a channelled beam that follows the cursor for 2.5 seconds that deals magic damage. Organic Deconstruction Researches enemy champions causing them to take true damage instead.",
        image: {
          full: 'VelkozR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'VelKoz_Passive.png'
      },
      name: 'Organic Deconstruction',
      sanitizedDescription:
        "Vel'Koz's abilities apply Organic Deconstruction to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage."
    },
    range: 'Ranged'
  },
  '163': {
    id: 163,
    key: 'Taliyah',
    name: 'Taliyah',
    title: 'the Stoneweaver',
    image: {
      full: 'Taliyah.png'
    },
    spells: [
      {
        name: 'Threaded Volley',
        sanitizedDescription:
          'Taliyah throws a volley of missiles in a target direction, moving freely as she does. This works the ground below her. If Taliyah casts Threaded Volley on worked ground, she only throws one missile.',
        image: {
          full: 'TaliyahQ.png'
        },
        cooldownBurn: '7/6/5/4/3'
      },
      {
        name: 'Seismic Shove',
        sanitizedDescription:
          'Taliyah causes an area of ground to erupt and throws enemies within in a direction of her choosing.',
        image: {
          full: 'TaliyahWVC.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Unraveled Earth',
        sanitizedDescription:
          'Taliyah creates a slowing minefield that explodes if enemies dash through it or are pushed/pulled through it.',
        image: {
          full: 'TaliyahE.png'
        },
        cooldownBurn: '16/14/12/10/8'
      },
      {
        name: "Weaver's Wall",
        sanitizedDescription: 'Taliyah creates a very long wall and then surfs it.',
        image: {
          full: 'TaliyahR.png'
        },
        cooldownBurn: '180/150/120'
      }
    ],
    passive: {
      image: {
        full: 'Taliyah_Passive.png'
      },
      name: 'Rock Surfing',
      sanitizedDescription: 'Taliyah gains movement speed near walls.'
    },
    range: 'Ranged'
  },
  '164': {
    id: 164,
    key: 'Camille',
    name: 'Camille',
    title: 'the Steel Shadow',
    image: {
      full: 'Camille.png'
    },
    spells: [
      {
        name: 'Precision Protocol',
        sanitizedDescription:
          "Camille's next attack deals bonus damage and grants bonus movement speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
        image: {
          full: 'CamilleQ.png'
        },
        cooldownBurn: '9/8.25/7.5/6.75/6'
      },
      {
        name: 'Tactical Sweep',
        sanitizedDescription:
          'Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.',
        image: {
          full: 'CamilleW.png'
        },
        cooldownBurn: '15/13.5/12/10.5/9'
      },
      {
        name: 'Hookshot',
        sanitizedDescription:
          'Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.',
        image: {
          full: 'CamilleE.png'
        },
        cooldownBurn: '16/14.5/13/11.5/10'
      },
      {
        name: 'The Hextech Ultimatum',
        sanitizedDescription:
          'Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.',
        image: {
          full: 'CamilleR.png'
        },
        cooldownBurn: '140/115/90'
      }
    ],
    passive: {
      image: {
        full: 'Camille_Passive.png'
      },
      name: 'Adaptive Defenses',
      sanitizedDescription:
        "Basic attacks on champions grant a shield equal to 20% of Camille's maximum health against their damage type (Physical or Magic) for a brief duration."
    },
    range: 'Melee'
  },
  '201': {
    id: 201,
    key: 'Braum',
    name: 'Braum',
    title: 'the Heart of the Freljord',
    image: {
      full: 'Braum.png'
    },
    spells: [
      {
        name: "Winter's Bite",
        sanitizedDescription:
          'Braum propels freezing ice from his shield, slowing and dealing magic damage.Applies a stack of Concussive Blows.',
        image: {
          full: 'BraumQ.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Stand Behind Me',
        sanitizedDescription:
          'Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.',
        image: {
          full: 'BraumW.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Unbreakable',
        sanitizedDescription:
          'Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.',
        image: {
          full: 'BraumE.png'
        },
        cooldownBurn: '18/16/14/12/10'
      },
      {
        name: 'Glacial Fissure',
        sanitizedDescription:
          'Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.',
        image: {
          full: 'BraumRWrapper.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'Braum_Passive.png'
      },
      name: 'Concussive Blows',
      sanitizedDescription:
        "Braum adds stacks of Concussive Blows to enemies with basic attacks or Winter's Bite. He and his allies continue to add stacks with basic attacks, at 4 stacks their target will be stunned."
    },
    range: 'Melee'
  },
  '202': {
    id: 202,
    key: 'Jhin',
    name: 'Jhin',
    title: 'the Virtuoso',
    image: {
      full: 'Jhin.png'
    },
    spells: [
      {
        name: 'Dancing Grenade',
        sanitizedDescription:
          'Jhin launches a magical cartridge at an enemy. It can hit up to four targets and gains damage each time it kills.',
        image: {
          full: 'JhinQ.png'
        },
        cooldownBurn: '7/6.5/6/5.5/5'
      },
      {
        name: 'Deadly Flourish',
        sanitizedDescription:
          "Jhin brandishes his cane, firing a single shot with incredible range. It pierces through minions and monsters, but stops on the first champion hit. If the target was recently struck by Jhin's allies, lotus traps, or damaged by Jhin, they are rooted.",
        image: {
          full: 'JhinW.png'
        },
        cooldownBurn: '14'
      },
      {
        name: 'Captive Audience',
        sanitizedDescription:
          'Jhin places an invisible lotus trap that blooms when walked over. It slows nearby enemies before dealing damage with an explosion of serrated petals. Beauty in Death - When Jhin kills an enemy champion, a lotus trap will bloom near their corpse.',
        image: {
          full: 'JhinE.png'
        },
        cooldownBurn: '2'
      },
      {
        name: 'Curtain Call',
        sanitizedDescription:
          'Jhin channels, transforming Whisper into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. Whisper cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike.',
        image: {
          full: 'JhinR.png'
        },
        cooldownBurn: '120/105/90'
      }
    ],
    passive: {
      image: {
        full: 'Jhin_P.png'
      },
      name: 'Whisper',
      sanitizedDescription:
        "Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of movement speed."
    },
    range: 'Ranged'
  },
  '203': {
    id: 203,
    key: 'Kindred',
    name: 'Kindred',
    title: 'The Eternal Hunters',
    image: {
      full: 'Kindred.png'
    },
    spells: [
      {
        name: 'Dance of Arrows',
        sanitizedDescription: 'Kindred tumbles and shoots up to three arrows at nearby targets.',
        image: {
          full: 'KindredQ.png'
        },
        cooldownBurn: '9'
      },
      {
        name: "Wolf's Frenzy",
        sanitizedDescription:
          "Wolf enrages and attacks enemies around him.  Lamb passively gains stacks by moving and attacking. When fully charged, Lamb's next attack restores health.",
        image: {
          full: 'KindredW.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Mounting Dread',
        sanitizedDescription:
          'Lamb fires a carefully placed shot, slowing the target. If Lamb attacks the target two more times, her third attack instead directs Wolf to pounce on the enemy, savaging them for massive damage.',
        image: {
          full: 'KindredEWrapper.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: "Lamb's Respite",
        sanitizedDescription:
          'Lamb grants all living things inside a zone a respite from death. Until the effect ends, nothing can die. At the end, units are healed.',
        image: {
          full: 'KindredR.png'
        },
        cooldownBurn: '180/150/120'
      }
    ],
    passive: {
      image: {
        full: 'Kindred_Passive.png'
      },
      name: 'Mark of the Kindred',
      sanitizedDescription:
        "Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range."
    },
    range: 'Ranged'
  },
  '222': {
    id: 222,
    key: 'Jinx',
    name: 'Jinx',
    title: 'the Loose Cannon',
    image: {
      full: 'Jinx.png'
    },
    spells: [
      {
        name: 'Switcheroo!',
        sanitizedDescription:
          'Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, and drain Mana.',
        image: {
          full: 'JinxQ.png'
        },
        cooldownBurn: '1'
      },
      {
        name: 'Zap!',
        sanitizedDescription:
          'Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.',
        image: {
          full: 'JinxW.png'
        },
        cooldownBurn: '8/7/6/5/4'
      },
      {
        name: 'Flame Chompers!',
        sanitizedDescription:
          'Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.',
        image: {
          full: 'JinxE.png'
        },
        cooldownBurn: '24/20.5/17/13.5/10'
      },
      {
        name: 'Super Mega Death Rocket!',
        sanitizedDescription:
          'Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.',
        image: {
          full: 'JinxR.png'
        },
        cooldownBurn: '90/75/60'
      }
    ],
    passive: {
      image: {
        full: 'Jinx_Passive.png'
      },
      name: 'Get Excited!',
      sanitizedDescription:
        'Jinx receives massively increased Movement Speed and stacking Attack Speed whenever she damages an enemy champion, tower, or inhibitor that is then killed or destroyed within 3 seconds.'
    },
    range: 'Ranged'
  },
  '223': {
    id: 223,
    key: 'TahmKench',
    name: 'Tahm Kench',
    title: 'the River King',
    image: {
      full: 'TahmKench.png'
    },
    spells: [
      {
        name: 'Tongue Lash',
        sanitizedDescription:
          'Tahm Kench lashes out with his tongue, damaging and slowing the first unit hit. This ability gains a stun after three stacks of An Acquired Taste.',
        image: {
          full: 'TahmKenchQ.png'
        },
        cooldownBurn: '5'
      },
      {
        name: 'Devour',
        sanitizedDescription:
          'Tahm Kench devours a target, dealing a percentage of their maximum health as magic damage. He can spit devoured minions and monsters out as a skillshot that deals magic damage in an area upon impact.',
        image: {
          full: 'TahmKenchW.png'
        },
        cooldownBurn: '28/25/22/19/16'
      },
      {
        name: 'Thick Skin',
        sanitizedDescription:
          'Tahm Kench turns incoming damage into gray health. As gray health decays, Tahm Kench is healed for a percentage of the gray health amount. When activated, this ability turns all gray health into a shield.',
        image: {
          full: 'TahmKenchE.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Abyssal Voyage',
        sanitizedDescription:
          'Tahm Kench teleports across the map, and he may bring one ally champion with him.',
        image: {
          full: 'TahmKenchNewR.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'TahmKench_P.png'
      },
      name: 'An Acquired Taste',
      sanitizedDescription:
        'Tahm Kench puts the heft of his immense body behind his attacks and abilities, gaining extra damage based on his total health. Damaging enemy champions builds stacks of An Acquired Taste. At three stacks, he can use Devour on an enemy champion.'
    },
    range: 'Melee'
  },
  '236': {
    id: 236,
    key: 'Lucian',
    name: 'Lucian',
    title: 'the Purifier',
    image: {
      full: 'Lucian.png'
    },
    spells: [
      {
        name: 'Piercing Light',
        sanitizedDescription: 'Lucian shoots a bolt of piercing light through a target.',
        image: {
          full: 'LucianQ.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Ardent Blaze',
        sanitizedDescription:
          'Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Movement Speed for attacking marked enemies.',
        image: {
          full: 'LucianW.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Relentless Pursuit',
        sanitizedDescription:
          "Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown.",
        image: {
          full: 'LucianE.png'
        },
        cooldownBurn: '22/20/18/16/14'
      },
      {
        name: 'The Culling',
        sanitizedDescription: 'Lucian unleashes a torrent of shots from his weapons.',
        image: {
          full: 'LucianR.png'
        },
        cooldownBurn: '110/100/90'
      }
    ],
    passive: {
      image: {
        full: 'Lucian_Passive.png'
      },
      name: 'Lightslinger',
      sanitizedDescription:
        'Whenever Lucian uses an ability, his next attack becomes a double-shot.'
    },
    range: 'Ranged'
  },
  '238': {
    id: 238,
    key: 'Zed',
    name: 'Zed',
    title: 'the Master of Shadows',
    image: {
      full: 'Zed.png'
    },
    spells: [
      {
        name: 'Razor Shuriken',
        sanitizedDescription:
          'Zed and his shadows throw their shurikens.Each shuriken deals damage to every enemy hit.',
        image: {
          full: 'ZedQ.png'
        },
        cooldownBurn: '6'
      },
      {
        name: 'Living Shadow',
        sanitizedDescription:
          "Passive: Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability.Active: Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
        image: {
          full: 'ZedW.png'
        },
        cooldownBurn: '20/18.5/17/15.5/14'
      },
      {
        name: 'Shadow Slash',
        sanitizedDescription: 'Zed and his shadows slash, dealing damage to nearby enemies.',
        image: {
          full: 'ZedE.png'
        },
        cooldownBurn: '5/4.5/4/3.5/3'
      },
      {
        name: 'Death Mark',
        sanitizedDescription:
          'Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.',
        image: {
          full: 'ZedR.png'
        },
        cooldownBurn: '120/90/60'
      }
    ],
    passive: {
      image: {
        full: 'shadowninja_P.png'
      },
      name: 'Contempt for the Weak',
      sanitizedDescription:
        "Zed's basic attacks against targets below 50% Health deal 6-10% of the target's maximum Health as bonus Magic Damage. This effect can only occur once every 10 seconds on the same target."
    },
    range: 'Melee'
  },
  '240': {
    id: 240,
    key: 'Kled',
    name: 'Kled',
    title: 'the Cantankerous Cavalier',
    image: {
      full: 'Kled.png'
    },
    spells: [
      {
        name: 'Bear Trap on a Rope',
        sanitizedDescription:
          'Kled throws a bear trap that damages and hooks an enemy champion. If shackled for a short duration, the target takes additional physical damage and is yanked toward Kled.When dismounted, this ability is replaced by Pocket Pistol, a ranged gun blast that knocks back Kled and restores courage.',
        image: {
          full: 'KledQ.png'
        },
        cooldownBurn: '9/8.5/8/7.5/7'
      },
      {
        name: 'Violent Tendencies',
        sanitizedDescription:
          'Kled gains massive attack speed for four attacks. The fourth attack deals more damage.',
        image: {
          full: 'KledW.png'
        },
        cooldownBurn: '14/12.5/11/9.5/8'
      },
      {
        name: 'Jousting',
        sanitizedDescription:
          'Kled dashes, dealing physical damage and gaining a short burst of speed. Kled can cast this ability again to dash back through his initial target, dealing the same damage.',
        image: {
          full: 'KledE.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Chaaaaaaaarge!!!',
        sanitizedDescription:
          'Kled and Skaarl charge to a location, leaving a speed-granting trail behind them and gaining a shield. Skaarl locks onto and rams the first enemy champion encountered.',
        image: {
          full: 'KledR.png'
        },
        cooldownBurn: '160/140/120'
      }
    ],
    passive: {
      image: {
        full: 'Kled_P.png'
      },
      name: 'Skaarl, the Cowardly Lizard',
      sanitizedDescription:
        "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts.While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health."
    },
    range: 'Melee'
  },
  '245': {
    id: 245,
    key: 'Ekko',
    name: 'Ekko',
    title: 'the Boy Who Shattered Time',
    image: {
      full: 'Ekko.png'
    },
    spells: [
      {
        name: 'Timewinder',
        sanitizedDescription:
          'Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.',
        image: {
          full: 'EkkoQ.png'
        },
        cooldownBurn: '9/8.5/8/7.5/7'
      },
      {
        name: 'Parallel Convergence',
        sanitizedDescription:
          'Ekko splits the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and triggers a detonation, stunning enemies by suspending them in time.',
        image: {
          full: 'EkkoW.png'
        },
        cooldownBurn: '22/20/18/16/14'
      },
      {
        name: 'Phase Dive',
        sanitizedDescription:
          'Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.',
        image: {
          full: 'EkkoE.png'
        },
        cooldownBurn: '9/8.5/8/7.5/7'
      },
      {
        name: 'Chronobreak',
        sanitizedDescription:
          'Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.',
        image: {
          full: 'EkkoR.png'
        },
        cooldownBurn: '110/90/70'
      }
    ],
    passive: {
      image: {
        full: 'Ekko_P.png'
      },
      name: 'Z-Drive Resonance',
      sanitizedDescription:
        "Ekko's Zero-Drive charges his spells and attacks with temporal energy. The third hit deals bonus damage and, if the target is a champion, Ekko gains accelerated movement speed."
    },
    range: 'Melee'
  },
  '254': {
    id: 254,
    key: 'Vi',
    name: 'Vi',
    title: 'the Piltover Enforcer',
    image: {
      full: 'Vi.png'
    },
    spells: [
      {
        name: 'Vault Breaker',
        sanitizedDescription:
          'Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.',
        image: {
          full: 'ViQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Denting Blows',
        sanitizedDescription:
          "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
        image: {
          full: 'ViW.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Excessive Force',
        sanitizedDescription:
          "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
        image: {
          full: 'ViE.png'
        },
        cooldownBurn: '1'
      },
      {
        name: 'Assault and Battery',
        sanitizedDescription:
          'Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.',
        image: {
          full: 'ViR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'ViPassive.png'
      },
      name: 'Blast Shield',
      sanitizedDescription:
        'Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.'
    },
    range: 'Melee'
  },
  '266': {
    id: 266,
    key: 'Aatrox',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    image: {
      full: 'Aatrox.png'
    },
    spells: [
      {
        name: 'The Darkin Blade',
        sanitizedDescription:
          'Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.',
        image: {
          full: 'AatroxQ.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Infernal Chains',
        sanitizedDescription:
          'Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.',
        image: {
          full: 'AatroxW.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Umbral Dash',
        sanitizedDescription: 'Aatrox lunges, gaining attack damage.',
        image: {
          full: 'AatroxE.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'World Ender',
        sanitizedDescription:
          'Aatrox unleashes his demonic form, gaining attack damage and movement speed. Upon taking lethal damage, Aatrox will revive instead of dying, healing for a percentage of his maximum health.',
        image: {
          full: 'AatroxR.png'
        },
        cooldownBurn: '160/140/120'
      }
    ],
    passive: {
      image: {
        full: 'Aatrox_Passive.png'
      },
      name: 'Deathbringer Stance',
      sanitizedDescription:
        'Aatrox deals bonus damage on his next attack and reduces heals and shields on the target.'
    },
    range: 'Melee'
  },
  '267': {
    id: 267,
    key: 'Nami',
    name: 'Nami',
    title: 'the Tidecaller',
    image: {
      full: 'Nami.png'
    },
    spells: [
      {
        name: 'Aqua Prison',
        sanitizedDescription:
          'Sends a bubble to a target area, dealing damage and stunning all enemies on impact.',
        image: {
          full: 'NamiQ.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Ebb and Flow',
        sanitizedDescription:
          'Unleashes a stream of water that bounces back and forth between allied and enemy champions, healing allies and damaging enemies.',
        image: {
          full: 'NamiW.png'
        },
        cooldownBurn: '10'
      },
      {
        name: "Tidecaller's Blessing",
        sanitizedDescription:
          "Empowers an allied champion for a short duration. The ally's basic attacks deal bonus magic damage and slow the target.",
        image: {
          full: 'NamiE.png'
        },
        cooldownBurn: '11'
      },
      {
        name: 'Tidal Wave',
        sanitizedDescription:
          'Summons a massive Tidal Wave that knocks up, slows, and damages enemies. Allies hit gain double the effect of Surging Tides.',
        image: {
          full: 'NamiR.png'
        },
        cooldownBurn: '120/110/100'
      }
    ],
    passive: {
      image: {
        full: 'NamiPassive.png'
      },
      name: 'Surging Tides',
      sanitizedDescription:
        "When Nami's abilities hit allied champions they gain Movement Speed for a short duration."
    },
    range: 'Ranged'
  },
  '268': {
    id: 268,
    key: 'Azir',
    name: 'Azir',
    title: 'the Emperor of the Sands',
    image: {
      full: 'Azir.png'
    },
    spells: [
      {
        name: 'Conquering Sands',
        sanitizedDescription:
          'Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.',
        image: {
          full: 'AzirQWrapper.png'
        },
        cooldownBurn: '15/12.5/10/7.5/5'
      },
      {
        name: 'Arise!',
        sanitizedDescription:
          "Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line. Arise! also passively grants attack speed to Azir and his Sand Soldiers.",
        image: {
          full: 'AzirW.png'
        },
        cooldownBurn: '1.5'
      },
      {
        name: 'Shifting Sands',
        sanitizedDescription:
          'Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.',
        image: {
          full: 'AzirEWrapper.png'
        },
        cooldownBurn: '19/18/17/16/15'
      },
      {
        name: "Emperor's Divide",
        sanitizedDescription:
          'Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.',
        image: {
          full: 'AzirR.png'
        },
        cooldownBurn: '120/105/90'
      }
    ],
    passive: {
      image: {
        full: 'Azir_Passive.png'
      },
      name: "Shurima's Legacy",
      sanitizedDescription:
        'Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.'
    },
    range: 'Ranged'
  },
  '412': {
    id: 412,
    key: 'Thresh',
    name: 'Thresh',
    title: 'the Chain Warden',
    image: {
      full: 'Thresh.png'
    },
    spells: [
      {
        name: 'Death Sentence',
        sanitizedDescription:
          'Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.',
        image: {
          full: 'ThreshQ.png'
        },
        cooldownBurn: '20/18/16/14/12'
      },
      {
        name: 'Dark Passage',
        sanitizedDescription:
          'Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.',
        image: {
          full: 'ThreshW.png'
        },
        cooldownBurn: '22/19.5/17/14.5/12'
      },
      {
        name: 'Flay',
        sanitizedDescription:
          "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.",
        image: {
          full: 'ThreshE.png'
        },
        cooldownBurn: '9'
      },
      {
        name: 'The Box',
        sanitizedDescription: 'A prison of walls that slow and deal damage if broken.',
        image: {
          full: 'ThreshRPenta.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'Thresh_Passive.png'
      },
      name: 'Damnation',
      sanitizedDescription:
        'Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.'
    },
    range: 'Ranged'
  },
  '420': {
    id: 420,
    key: 'Illaoi',
    name: 'Illaoi',
    title: 'the Kraken Priestess',
    image: {
      full: 'Illaoi.png'
    },
    spells: [
      {
        name: 'Tentacle Smash',
        sanitizedDescription:
          'Increases the damage dealt by Tentacles. When activated, Illaoi smashes down a Tentacle that deals physical damage.',
        image: {
          full: 'IllaoiQ.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Harsh Lesson',
        sanitizedDescription:
          'Illaoi leaps to her target, dealing physical damage and causing nearby Tentacles to also swing at the target.',
        image: {
          full: 'IllaoiW.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Test of Spirit',
        sanitizedDescription:
          "Illaoi rips the spirit from a foe's body, forcing it to stand before her. Spirits echo a percentage of the damage they take to the original target. If killed, or if the target gets too far from the spirit, the target will become a Vessel and begin spawning Tentacles.",
        image: {
          full: 'IllaoiE.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Leap of Faith',
        sanitizedDescription:
          'Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies. A Tentacle spawns for each enemy champion hit.',
        image: {
          full: 'IllaoiR.png'
        },
        cooldownBurn: '120/95/70'
      }
    ],
    passive: {
      image: {
        full: 'Illaoi_P.png'
      },
      name: 'Prophet of an Elder God',
      sanitizedDescription:
        "Illaoi and the Vessels she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, Vessels, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion."
    },
    range: 'Melee'
  },
  '421': {
    id: 421,
    key: 'RekSai',
    name: "Rek'Sai",
    title: 'the Void Burrower',
    image: {
      full: 'RekSai.png'
    },
    spells: [
      {
        name: "Queen's Wrath / Prey Seeker",
        sanitizedDescription:
          "Rek'Sai's next 3 basic attacks deal bonus Physical Damage to nearby enemies.While Burrowed, Rek'Sai launches a burst of void-charged earth that deals Physical Damage and reveals enemies hit.",
        image: {
          full: 'RekSaiQ.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Burrow / Un-burrow',
        sanitizedDescription:
          "Rek'Sai burrows into the ground, gaining new abilities and increased Movement Speed. Her vision range is reduced and she cannot use basic attacks.While Burrowed, Rek'Sai may cast Un-burrow to knock up and damage nearby enemies.",
        image: {
          full: 'RekSaiW.png'
        },
        cooldownBurn: '4'
      },
      {
        name: 'Furious Bite / Tunnel',
        sanitizedDescription:
          "Rek'Sai bites her target, dealing double and True Damage if she has max Fury.While Burrowed, Rek'Sai creates a re-usable, long lasting tunnel. Enemies can destroy it by standing on top of either entrance.",
        image: {
          full: 'RekSaiE.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Void Rush',
        sanitizedDescription: '',
        image: {
          full: 'RekSaiRWrapper.png'
        },
        cooldownBurn: '100/90/80'
      }
    ],
    passive: {
      image: {
        full: 'RekSai_Passive.png'
      },
      name: "Fury of the Xer'Sai",
      sanitizedDescription:
        "While unburrowed Rek'Sai generates Fury with her basic attacks and spells. When burrowed Rek'Sai consumes Fury to heal herself."
    },
    range: 'Melee'
  },
  '427': {
    id: 427,
    key: 'Ivern',
    name: 'Ivern',
    title: 'the Green Father',
    image: {
      full: 'Ivern.png'
    },
    spells: [
      {
        name: 'Rootcaller',
        sanitizedDescription:
          "Ivern conjures a vine, dealing damage and rooting enemy targets hit. Ivern's allies can dash to the rooted target.",
        image: {
          full: 'IvernQ.png'
        },
        cooldownBurn: '14/13/12/11/10'
      },
      {
        name: 'Brushmaker',
        sanitizedDescription:
          "In brush, Ivern's attacks are ranged and deal bonus magic damage. Ivern can activate this ability to create a patch of brush.",
        image: {
          full: 'IvernW.png'
        },
        cooldownBurn: '0.5'
      },
      {
        name: 'Triggerseed',
        sanitizedDescription:
          'Ivern places a shield on an ally which explodes after a short duration slowing and damaging enemies.',
        image: {
          full: 'IvernE.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Daisy!',
        sanitizedDescription:
          'Ivern summons his Sentinel friend Daisy to fight with him. Daisy will send out a shockwave if she attacks the same champion three times in a row.',
        image: {
          full: 'IvernR.png'
        },
        cooldownBurn: '160/140/120'
      }
    ],
    passive: {
      image: {
        full: 'IvernP.png'
      },
      name: 'Friend of the Forest',
      sanitizedDescription:
        'Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience. After level 5 Ivern can share jungle buffs with allies.'
    },
    range: 'Melee'
  },
  '429': {
    id: 429,
    key: 'Kalista',
    name: 'Kalista',
    title: 'the Spear of Vengeance',
    image: {
      full: 'Kalista.png'
    },
    spells: [
      {
        name: 'Pierce',
        sanitizedDescription: 'Throw a fast moving spear that passes through enemies it kills.',
        image: {
          full: 'KalistaMysticShot.png'
        },
        cooldownBurn: '8'
      },
      {
        name: 'Sentinel',
        sanitizedDescription:
          'Gain bonus damage when Kalista and her Oathsworn strike the same target. Activate to send a soul to scout out the path, revealing the area in front of it.',
        image: {
          full: 'KalistaW.png'
        },
        cooldownBurn: '30'
      },
      {
        name: 'Rend',
        sanitizedDescription:
          'Attacks impale their targets with spears. Activate to rip the spears out, slowing and dealing escalating damage.',
        image: {
          full: 'KalistaExpungeWrapper.png'
        },
        cooldownBurn: '0'
      },
      {
        name: "Fate's Call",
        sanitizedDescription:
          'Kalista teleports the Oathsworn ally to herself. They gain the ability to dash toward a position, knocking enemy champions back.',
        image: {
          full: 'KalistaRx.png'
        },
        cooldownBurn: '150/120/90'
      }
    ],
    passive: {
      image: {
        full: 'Kalista_Passive.png'
      },
      name: 'Martial Poise',
      sanitizedDescription:
        "Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack."
    },
    range: 'Ranged'
  },
  '432': {
    id: 432,
    key: 'Bard',
    name: 'Bard',
    title: 'the Wandering Caretaker',
    image: {
      full: 'Bard.png'
    },
    spells: [
      {
        name: 'Cosmic Binding',
        sanitizedDescription:
          'Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.',
        image: {
          full: 'BardQ.png'
        },
        cooldownBurn: '11/10/9/8/7'
      },
      {
        name: "Caretaker's Shrine",
        sanitizedDescription:
          'Reveals a healing shrine which powers up over a short time, disappearing after healing the first ally that touches it.',
        image: {
          full: 'BardW.png'
        },
        cooldownBurn: '12'
      },
      {
        name: 'Magical Journey',
        sanitizedDescription:
          'Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.',
        image: {
          full: 'BardE.png'
        },
        cooldownBurn: '18/17/16/15/14'
      },
      {
        name: 'Tempered Fate',
        sanitizedDescription:
          'Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.',
        image: {
          full: 'BardR.png'
        },
        cooldownBurn: '110/95/80'
      }
    ],
    passive: {
      image: {
        full: 'Bard_Passive.png'
      },
      name: "Traveler's Call",
      sanitizedDescription:
        "Bard's presence causes magical chimes to appear, which grant Bard experience, mana, and a burst of speed. Additionally, lesser spirits follow Bard and aid in his attacks - collecting chimes causes these meeps to gain power over the course of the game."
    },
    range: 'Ranged'
  },
  '497': {
    id: 497,
    key: 'Rakan',
    name: 'Rakan',
    title: 'The Charmer',
    image: {
      full: 'Rakan.png'
    },
    spells: [
      {
        name: 'Gleaming Quill',
        sanitizedDescription:
          'Flings a magical feather that deals magic damage. Striking a champion or epic monster enables Rakan to heal his allies.',
        image: {
          full: 'RakanQ.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'Grand Entrance',
        sanitizedDescription: 'Dashes to a location, knocking up nearby enemies on arrival.',
        image: {
          full: 'RakanW.png'
        },
        cooldownBurn: '18/16.5/15/13.5/12'
      },
      {
        name: 'Battle Dance',
        sanitizedDescription:
          'Flies to an allied champion granting them a shield. Can be re-cast for free for a short duration.',
        image: {
          full: 'RakanE.png'
        },
        cooldownBurn: '0'
      },
      {
        name: 'The Quickness',
        sanitizedDescription:
          'Gains movement speed, charming and dealing magic damage to enemies touched.',
        image: {
          full: 'RakanR.png'
        },
        cooldownBurn: '130/110/90'
      }
    ],
    passive: {
      image: {
        full: 'Rakan_P.png'
      },
      name: 'Fey Feathers',
      sanitizedDescription: 'Rakan periodically gains a shield.'
    },
    range: 'Ranged'
  },
  '498': {
    id: 498,
    key: 'Xayah',
    name: 'Xayah',
    title: 'the Rebel',
    image: {
      full: 'Xayah.png'
    },
    spells: [
      {
        name: 'Double Daggers',
        sanitizedDescription:
          'Xayah throws two damaging daggers that also drop Feathers she can recall.',
        image: {
          full: 'XayahQ.png'
        },
        cooldownBurn: '10/9/8/7/6'
      },
      {
        name: 'Deadly Plumage',
        sanitizedDescription:
          'Xayah creates a storm of blades that increase her basic attack speed and damage while granting her movement speed if she attacks a champion.',
        image: {
          full: 'XayahW.png'
        },
        cooldownBurn: '20/19/18/17/16'
      },
      {
        name: 'Bladecaller',
        sanitizedDescription:
          'Xayah calls back all her dropped Feathers dealing damage and rooting enemies.',
        image: {
          full: 'XayahE.png'
        },
        cooldownBurn: '12/11/10/9/8'
      },
      {
        name: 'Featherstorm',
        sanitizedDescription:
          'Xayah leaps into the air becoming untargetable and throwing out a fan of daggers, dropping Feathers she can recall.',
        image: {
          full: 'XayahR.png'
        },
        cooldownBurn: '140/125/110'
      }
    ],
    passive: {
      image: {
        full: 'XayahPassive.png'
      },
      name: 'Clean Cuts',
      sanitizedDescription:
        "After using an ability, Xayah's next few basic attacks will hit all enemies along their path and dropping Feathers she can recall."
    },
    range: 'Ranged'
  },
  '516': {
    id: 516,
    key: 'Ornn',
    name: 'Ornn',
    title: 'The Fire below the Mountain',
    image: {
      full: 'Ornn.png'
    },
    spells: [
      {
        name: 'Volcanic Rupture',
        sanitizedDescription:
          'Ornn slams the ground, sending out a fissure dealing damage and slowing enemies hit. After a small delay, a magma pillar forms at the end location.',
        image: {
          full: 'OrnnQ.png'
        },
        cooldownBurn: '9/8.5/8/7.5/7'
      },
      {
        name: 'Bellows Breath',
        sanitizedDescription:
          'Ornn advances, breathing fire. Enemies hit by the final gout of flame become Brittle.',
        image: {
          full: 'OrnnW.png'
        },
        cooldownBurn: '12/11.5/11/10.5/10'
      },
      {
        name: 'Searing Charge',
        sanitizedDescription:
          'Ornn charges, dealing damage to enemies he passes through. If Ornn collides with terrain while charging, the impact creates a shockwave around him which deals damage and knocks up enemies.',
        image: {
          full: 'OrnnE.png'
        },
        cooldownBurn: '16/15/14/13/12'
      },
      {
        name: 'Call of the Forge God',
        sanitizedDescription:
          'Ornn summons a massive elemental at a location which travels toward him with increasing speed. Enemies run over by the elemental take damage, are slowed and are made Brittle. Ornn can recast the ability to charge into the elemental, redirecting it in the direction he hits it, causing the elemental to affect any enemies it runs over to be knocked up, dealing the same damage and re-applying Brittle.',
        image: {
          full: 'OrnnR.png'
        },
        cooldownBurn: '140/120/100'
      }
    ],
    passive: {
      image: {
        full: 'OrnnP.png'
      },
      name: 'Living Forge',
      sanitizedDescription:
        'Ornn gains an additional 10% bonus Armor and Magic Resistance from all sources.Ornn can spend gold to forge non-consumable items anywhere.Additionally, when Ornn reaches level 13, he will upgrade any eligible items into masterwork items for himself, up to 2 max. For each level after 13, Ornn can upgrade an item for an ally by going near them and clicking on them, max 1 per ally.Ornn can smith items directly from his forge menu or the shop.'
    },
    range: 'Melee'
  },
  '517': {
    id: 517,
    key: 'Sylas',
    name: 'Sylas',
    title: 'the Unshackled',
    image: {
      full: 'Sylas.png'
    },
    spells: [
      {
        name: 'Chain Lash',
        sanitizedDescription:
          'Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. After a delay, magical energy explodes from the intersection point dealing damage and increasing the slow.',
        image: {
          full: 'SylasQ.png'
        },
        cooldownBurn: '9/8/7/6/5'
      },
      {
        name: 'Kingslayer',
        sanitizedDescription:
          'Sylas lunges at an enemy with magical force dealing execute based damage and healing himself against enemy champions.',
        image: {
          full: 'SylasW.png'
        },
        cooldownBurn: '14/13.5/13/12.5/12'
      },
      {
        name: 'Abscond / Abduct',
        sanitizedDescription:
          'Sylas dashes and gains a shield. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.',
        image: {
          full: 'SylasE.png'
        },
        cooldownBurn: '12/11.5/11/10.5/10'
      },
      {
        name: 'Hijack',
        sanitizedDescription: "Sylas steals the enemy's ultimate ability and can cast it freely.",
        image: {
          full: 'SylasR.png'
        },
        cooldownBurn: '85/50/15'
      }
    ],
    passive: {
      image: {
        full: 'SylasP.png'
      },
      name: 'Petricite Burst',
      sanitizedDescription:
        "After casting a spell, Sylas's next basic attack whirls his energized chains around him dealing bonus magic damage to enemies hit."
    },
    range: 'Melee'
  },
  '518': {
    id: 518,
    key: 'Neeko',
    name: 'Neeko',
    title: 'the Curious Chameleon',
    image: {
      full: 'Neeko.png'
    },
    spells: [
      {
        name: 'Blooming Burst',
        sanitizedDescription:
          'Neeko throws a seed dealing magic damage. The seed blooms again on hitting champions or killing units.',
        image: {
          full: 'NeekoQ.png'
        },
        cooldownBurn: '7'
      },
      {
        name: 'Shapesplitter',
        sanitizedDescription:
          'Neeko passively deals bonus magic damage every third attack. Neeko can activate to send a clone in a direction.',
        image: {
          full: 'NeekoW.png'
        },
        cooldownBurn: '20/19/18/17/16'
      },
      {
        name: 'Tangle-Barbs',
        sanitizedDescription:
          'Neeko slings a tangle that damage and root everything it passes through. If the tangle kills an enemy or passes through a champion, it becomes larger, faster, and roots for longer.',
        image: {
          full: 'NeekoE.png'
        },
        cooldownBurn: '12/11.5/11/10.5/10'
      },
      {
        name: 'Pop Blossom',
        sanitizedDescription:
          'After a short preparation, Neeko leaps into the air and gains a shield. Upon landing, nearby enemies are damaged and stunned. The preparation is hidden if Neeko is disguised.',
        image: {
          full: 'NeekoR.png'
        },
        cooldownBurn: '90'
      }
    ],
    passive: {
      image: {
        full: 'Neeko_Passive.png'
      },
      name: '',
      sanitizedDescription: ''
    },
    range: 'Ranged'
  },
  '555': {
    id: 555,
    key: 'Pyke',
    name: 'Pyke',
    title: 'the Bloodharbor Ripper',
    image: {
      full: 'Pyke.png'
    },
    spells: [
      {
        name: 'Bone Skewer',
        sanitizedDescription:
          'Pyke either stabs enemies in front of him or pulls an enemy towards him.',
        image: {
          full: 'PykeQ.png'
        },
        cooldownBurn: '16/14/12/10/8'
      },
      {
        name: 'Ghostwater Dive',
        sanitizedDescription:
          'Pyke enters Camouflage and gains significant movement speed that decays over time.',
        image: {
          full: 'PykeW.png'
        },
        cooldownBurn: '12/11.5/11/10.5/10'
      },
      {
        name: 'Phantom Undertow',
        sanitizedDescription:
          'Pyke dashes and leaves behind a phantom that will return to him, stunning enemies along its path.',
        image: {
          full: 'PykeE.png'
        },
        cooldownBurn: '15'
      },
      {
        name: 'Death From Below',
        sanitizedDescription:
          'Pyke blinks to and executes low health enemies, allowing him to cast this spell again and granting additional gold to an ally who assists.',
        image: {
          full: 'PykeR.png'
        },
        cooldownBurn: '120/100/80'
      }
    ],
    passive: {
      image: {
        full: 'PykePassive.png'
      },
      name: 'Gift of the Drowned Ones',
      sanitizedDescription:
        'When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD.'
    },
    range: 'Melee'
  }
};

export default champions;

export const unknownChamp = {
  key: 'unknown',
  name: 'Unknown',
  title: '',
  image: {},
  spells: [],
  passive: {
    image: {},
    name: 'Unknown',
    sanitizedDescription: ''
  }
};
