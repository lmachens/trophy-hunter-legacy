const items = {
  data: {
    '1001': {
      id: 1001,
      name: 'Boots of Speed',
      sanitizedDescription: 'Slightly increases Movement Speed',
      tags: ['Boots']
    },
    '1004': {
      id: 1004,
      name: 'Faerie Charm',
      sanitizedDescription: 'Slightly increases Mana Regen',
      tags: ['ManaRegen']
    },
    '1006': {
      id: 1006,
      name: 'Rejuvenation Bead',
      sanitizedDescription: 'Slightly increases Health Regen',
      tags: ['HealthRegen']
    },
    '1011': {
      id: 1011,
      name: "Giant's Belt",
      sanitizedDescription: 'Greatly increases Health',
      tags: ['Health']
    },
    '1026': {
      id: 1026,
      name: 'Blasting Wand',
      sanitizedDescription: 'Moderately increases Ability Power',
      tags: ['SpellDamage']
    },
    '1027': {
      id: 1027,
      name: 'Sapphire Crystal',
      sanitizedDescription: 'Increases Mana',
      tags: ['Mana']
    },
    '1028': {
      id: 1028,
      name: 'Ruby Crystal',
      sanitizedDescription: 'Increases Health',
      tags: ['Health']
    },
    '1029': {
      id: 1029,
      name: 'Cloth Armor',
      sanitizedDescription: 'Slightly increases Armor',
      tags: ['Armor']
    },
    '1031': {
      id: 1031,
      name: 'Chain Vest',
      sanitizedDescription: 'Greatly increases Armor',
      tags: ['Armor']
    },
    '1033': {
      id: 1033,
      name: 'Null-Magic Mantle',
      sanitizedDescription: 'Slightly increases Magic Resist',
      tags: ['SpellBlock']
    },
    '1036': {
      id: 1036,
      name: 'Long Sword',
      sanitizedDescription: 'Slightly increases Attack Damage',
      tags: ['Damage', 'Lane']
    },
    '1037': {
      id: 1037,
      name: 'Pickaxe',
      sanitizedDescription: 'Moderately increases Attack Damage',
      tags: ['Damage']
    },
    '1038': {
      id: 1038,
      name: 'B. F. Sword',
      sanitizedDescription: 'Greatly increases Attack Damage',
      tags: ['Damage']
    },
    '1039': {
      id: 1039,
      name: "Hunter's Talisman",
      sanitizedDescription: 'Provides damage against Monsters and Mana Regen in the Jungle',
      tags: ['LifeSteal', 'ManaRegen', 'OnHit', 'Jungle']
    },
    '1041': {
      id: 1041,
      name: "Hunter's Machete",
      sanitizedDescription: 'Provides damage and life steal versus Monsters',
      tags: ['LifeSteal', 'OnHit', 'Jungle']
    },
    '1042': {
      id: 1042,
      name: 'Dagger',
      sanitizedDescription: 'Slightly increases Attack Speed',
      tags: ['AttackSpeed']
    },
    '1043': {
      id: 1043,
      name: 'Recurve Bow',
      sanitizedDescription: 'Greatly increases Attack Speed',
      tags: ['AttackSpeed', 'OnHit']
    },
    '1051': {
      id: 1051,
      name: "Brawler's Gloves",
      sanitizedDescription: 'Slightly increases Critical Strike Chance',
      tags: ['CriticalStrike']
    },
    '1052': {
      id: 1052,
      name: 'Amplifying Tome',
      sanitizedDescription: 'Slightly increases Ability Power',
      tags: ['SpellDamage']
    },
    '1053': {
      id: 1053,
      name: 'Vampiric Scepter',
      sanitizedDescription: 'Basic attacks restore Health',
      tags: ['Damage', 'LifeSteal']
    },
    '1054': {
      id: 1054,
      name: "Doran's Shield",
      sanitizedDescription: 'Good defensive starting item',
      tags: ['Health', 'HealthRegen', 'Lane']
    },
    '1055': {
      id: 1055,
      name: "Doran's Blade",
      sanitizedDescription: 'Good starting item for attackers',
      tags: ['Damage', 'Health', 'Lane', 'LifeSteal']
    },
    '1056': {
      id: 1056,
      name: "Doran's Ring",
      sanitizedDescription: 'Good starting item for casters',
      tags: ['Health', 'Lane', 'ManaRegen', 'SpellDamage']
    },
    '1057': {
      id: 1057,
      name: 'Negatron Cloak',
      sanitizedDescription: 'Moderately increases Magic Resist',
      tags: ['SpellBlock']
    },
    '1058': {
      id: 1058,
      name: 'Needlessly Large Rod',
      sanitizedDescription: 'Greatly increases Ability Power',
      tags: ['SpellDamage']
    },
    '1059': {
      id: 1059,
      name: 'Space Vampiric Scepter',
      sanitizedDescription: 'Basic attacks restore Health',
      tags: ['Damage', 'LifeSteal']
    },
    '1082': {
      id: 1082,
      name: 'The Dark Seal',
      sanitizedDescription:
        'Provides Ability Power and Mana.  Increases in power as you kill enemies.',
      tags: ['HealthRegen', 'SpellDamage', 'Mana', 'Lane']
    },
    '1083': {
      id: 1083,
      name: 'Cull',
      sanitizedDescription:
        'Provides damage and Life Steal on hit - Killing minions grant bonus Gold',
      tags: ['Damage', 'LifeSteal', 'Lane']
    },
    '1400': {
      id: 1400,
      name: 'Enchantment: Warrior',
      sanitizedDescription: 'Grants Attack Damage and Cooldown Reduction',
      tags: []
    },
    '1401': {
      id: 1401,
      name: 'Enchantment: Cinderhulk',
      sanitizedDescription: 'Grants Health and Immolate Aura',
      tags: []
    },
    '1402': {
      id: 1402,
      name: 'Enchantment: Runic Echoes',
      sanitizedDescription: 'Grants Ability Power and periodically empowers your Spells',
      tags: []
    },
    '1412': {
      id: 1412,
      name: 'Enchantment: Warrior',
      sanitizedDescription: 'Grants Attack Damage and Cooldown Reduction',
      tags: []
    },
    '1413': {
      id: 1413,
      name: 'Enchantment: Cinderhulk',
      sanitizedDescription: 'Grants Health and Immolate Aura',
      tags: []
    },
    '1414': {
      id: 1414,
      name: 'Enchantment: Runic Echoes',
      sanitizedDescription: 'Grants Ability Power and periodically empowers your Spells',
      tags: []
    },
    '1416': {
      id: 1416,
      name: 'Enchantment: Bloodrazor',
      sanitizedDescription: "Increases Attack Speed and deals damage based on the target's Health",
      tags: []
    },
    '1419': {
      id: 1419,
      name: 'Enchantment: Bloodrazor',
      sanitizedDescription: "Increases Attack Speed and deals damage based on the target's Health",
      tags: []
    },
    '2003': {
      id: 2003,
      name: 'Health Potion',
      sanitizedDescription: 'Consume to restore Health over time',
      tags: ['Consumable', 'Jungle', 'Lane']
    },
    '2004': {
      id: 2004,
      name: 'Mana Potion',
      sanitizedDescription: 'Consume to restore Mana over time',
      tags: ['Consumable', 'Lane']
    },
    '2009': {
      id: 2009,
      name: 'Total Biscuit of Rejuvenation',
      sanitizedDescription: '',
      tags: []
    },
    '2010': {
      id: 2010,
      name: 'Total Biscuit of Everlasting Will',
      sanitizedDescription: '',
      tags: []
    },
    '2011': {
      id: 2011,
      name: 'Elixir Of Skill',
      sanitizedDescription: '',
      tags: ['Consumable', 'Lane', 'Jungle']
    },
    '2012': {
      id: 2012,
      name: 'Looted Biscuit of Rejuvenation',
      sanitizedDescription: '',
      tags: []
    },
    '2013': {
      id: 2013,
      name: "Looted Oracle's Extract",
      sanitizedDescription: 'Allows champion to see invisible or unseen enemy units',
      tags: ['Consumable', 'Stealth', 'Vision']
    },
    '2015': {
      id: 2015,
      name: 'Kircheis Shard',
      sanitizedDescription: 'Attack speed and a chargable magic hit',
      tags: ['AttackSpeed', 'OnHit']
    },
    '2031': {
      id: 2031,
      name: 'Refillable Potion',
      sanitizedDescription: 'Restores Health over time. Refills at shop.',
      tags: ['HealthRegen', 'Consumable', 'Active', 'Lane', 'Jungle']
    },
    '2032': {
      id: 2032,
      name: "Hunter's Potion",
      sanitizedDescription:
        'Restores Health and Mana over time - Refills at shop and has increased capacity',
      tags: ['HealthRegen', 'ManaRegen', 'Consumable', 'Active', 'Jungle']
    },
    '2033': {
      id: 2033,
      name: 'Corrupting Potion',
      sanitizedDescription:
        'Restores Health and Mana over time and boosts combat power - Refills at Shop',
      tags: ['Active', 'Consumable', 'HealthRegen', 'Lane', 'ManaRegen']
    },
    '2047': {
      id: 2047,
      name: "Oracle's Extract",
      sanitizedDescription: 'Allows champion to see invisible or unseen enemy units',
      tags: ['Consumable', 'Stealth', 'Vision']
    },
    '2050': {
      id: 2050,
      name: "Explorer's Ward",
      sanitizedDescription: '',
      tags: ['Consumable']
    },
    '2051': {
      id: 2051,
      name: "Guardian's Horn",
      sanitizedDescription: 'Good starting item for tanks',
      tags: ['Health', 'HealthRegen', 'Lane']
    },
    '2052': {
      id: 2052,
      name: 'Poro-Snax',
      sanitizedDescription: '',
      tags: []
    },
    '2053': {
      id: 2053,
      name: 'Raptor Cloak',
      sanitizedDescription: 'Enhances Movement Speed near turrets',
      tags: ['Armor', 'HealthRegen', 'NonbootsMovement']
    },
    '2054': {
      id: 2054,
      name: 'Diet Poro-Snax',
      sanitizedDescription: '',
      tags: []
    },
    '2055': {
      id: 2055,
      name: 'Control Ward',
      sanitizedDescription: 'Used to disable wards and invisible traps in an area.',
      tags: ['Consumable', 'Lane', 'Stealth', 'Vision']
    },
    '2056': {
      id: 2056,
      name: 'Pilfered Stealth Ward',
      sanitizedDescription: 'Use to temporarily provide vision in an area',
      tags: ['Consumable', 'Lane', 'Vision']
    },
    '2057': {
      id: 2057,
      name: 'Peering Farsight Ward',
      sanitizedDescription: 'Grants increased range and reveals the targetted area',
      tags: ['Vision', 'Active']
    },
    '2058': {
      id: 2058,
      name: 'Travel Size Elixir of Iron',
      sanitizedDescription: 'Temporarily increases defenses. Leaves a trail for allies to follow.',
      tags: ['Health', 'Consumable', 'NonbootsMovement', 'Tenacity']
    },
    '2059': {
      id: 2059,
      name: 'Travel Size Elixir of Sorcery',
      sanitizedDescription:
        'Temporarily grants Ability Power and Bonus Damage to champions and turrets.',
      tags: ['Consumable', 'ManaRegen', 'SpellDamage']
    },
    '2060': {
      id: 2060,
      name: 'Travel Size Elixir of Wrath',
      sanitizedDescription:
        'Temporarily grants Attack Damage and heals you when dealing physical damage to champions.',
      tags: ['Consumable', 'Damage', 'LifeSteal', 'SpellVamp']
    },
    '2061': {
      id: 2061,
      name: 'Pilfered Health Potion',
      sanitizedDescription: 'Consume to restore Health over time',
      tags: ['Consumable', 'Jungle', 'Lane']
    },
    '2062': {
      id: 2062,
      name: 'Pilfered Potion of Rouge',
      sanitizedDescription: 'Consume to gain a short window of power.',
      tags: ['Consumable', 'Jungle', 'Lane']
    },
    '2065': {
      id: 2065,
      name: "Shurelya's Reverie",
      sanitizedDescription:
        'Grants Health, Ability Power, Mana Regeneration, Cooldown Reduction, and Movement Speed. Activate to speed up nearby allies.',
      tags: [
        'Health',
        'SpellDamage',
        'ManaRegen',
        'Active',
        'CooldownReduction',
        'NonbootsMovement'
      ]
    },
    '2138': {
      id: 2138,
      name: 'Elixir of Iron',
      sanitizedDescription: 'Temporarily increases defenses. Leaves a trail for allies to follow.',
      tags: ['Health', 'Consumable', 'NonbootsMovement', 'Tenacity']
    },
    '2139': {
      id: 2139,
      name: 'Elixir of Sorcery',
      sanitizedDescription:
        'Temporarily grants Ability Power and Bonus Damage to champions and turrets.',
      tags: ['Consumable', 'ManaRegen', 'SpellDamage']
    },
    '2140': {
      id: 2140,
      name: 'Elixir of Wrath',
      sanitizedDescription:
        'Temporarily grants Attack Damage and heals you when dealing physical damage to champions.',
      tags: ['Consumable', 'Damage', 'LifeSteal', 'SpellVamp']
    },
    '2319': {
      id: 2319,
      name: 'Sly Sack of Gold',
      sanitizedDescription: 'Filled with gold',
      tags: ['Consumable', 'GoldPer']
    },
    '2403': {
      id: 2403,
      name: 'Minion Dematerializer',
      sanitizedDescription: '',
      tags: []
    },
    '2419': {
      id: 2419,
      name: 'Commencing Stopwatch',
      sanitizedDescription: '',
      tags: ['Active']
    },
    '2420': {
      id: 2420,
      name: 'Stopwatch',
      sanitizedDescription: 'Activate to become invincible but unable to take actions',
      tags: ['Active']
    },
    '2421': {
      id: 2421,
      name: 'Broken Stopwatch',
      sanitizedDescription: 'Upgrades to stopwatch',
      tags: []
    },
    '2422': {
      id: 2422,
      name: 'Slightly Magical Boots',
      sanitizedDescription: 'Slightly increases Movement Speed',
      tags: ['Boots']
    },
    '2423': {
      id: 2423,
      name: 'Stopwatch',
      sanitizedDescription: '',
      tags: ['Active']
    },
    '2424': {
      id: 2424,
      name: 'Broken Stopwatch',
      sanitizedDescription: '',
      tags: []
    },
    '3001': {
      id: 3001,
      name: 'Abyssal Mask',
      sanitizedDescription: 'Nearby enemies take more magic damage',
      tags: [
        'Health',
        'SpellBlock',
        'HealthRegen',
        'Mana',
        'ManaRegen',
        'Aura',
        'CooldownReduction',
        'MagicPenetration'
      ]
    },
    '3003': {
      id: 3003,
      name: "Archangel's Staff",
      sanitizedDescription: 'Increases Ability Power based on maximum Mana',
      tags: ['SpellDamage', 'Mana', 'ManaRegen', 'CooldownReduction']
    },
    '3004': {
      id: 3004,
      name: 'Manamune',
      sanitizedDescription: 'Increases Attack Damage based on maximum Mana',
      tags: ['Damage', 'Mana', 'ManaRegen', 'OnHit']
    },
    '3005': {
      id: 3005,
      name: "Atma's Reckoning",
      sanitizedDescription: 'Increases Attack Damage based on maximum Health',
      tags: ['SpellBlock', 'Armor', 'Damage']
    },
    '3006': {
      id: 3006,
      name: "Berserker's Greaves",
      sanitizedDescription: 'Enhances Movement Speed and Attack Speed',
      tags: ['AttackSpeed', 'Boots']
    },
    '3007': {
      id: 3007,
      name: "Archangel's Staff (Quick Charge)",
      sanitizedDescription: 'Increases Ability Power based on maximum Mana',
      tags: ['SpellDamage', 'Mana', 'ManaRegen', 'CooldownReduction']
    },
    '3008': {
      id: 3008,
      name: 'Manamune (Quick Charge)',
      sanitizedDescription: 'Increases Attack Damage based on maximum Mana',
      tags: ['Damage', 'Mana', 'ManaRegen', 'OnHit']
    },
    '3009': {
      id: 3009,
      name: 'Boots of Swiftness',
      sanitizedDescription: 'Enhances Movement Speed and reduces the effect of slows',
      tags: ['Boots']
    },
    '3010': {
      id: 3010,
      name: 'Catalyst of Aeons',
      sanitizedDescription: 'Spend Mana to recover Health',
      tags: ['Health', 'HealthRegen', 'Mana', 'ManaRegen']
    },
    '3020': {
      id: 3020,
      name: "Sorcerer's Shoes",
      sanitizedDescription: 'Enhances Movement Speed and magic damage',
      tags: ['Boots', 'MagicPenetration']
    },
    '3022': {
      id: 3022,
      name: 'Frozen Mallet',
      sanitizedDescription: 'Basic attacks slow enemies',
      tags: ['Damage', 'Health', 'OnHit', 'Slow']
    },
    '3024': {
      id: 3024,
      name: 'Glacial Shroud',
      sanitizedDescription: 'Increases Armor and Cooldown Reduction',
      tags: ['Armor', 'CooldownReduction', 'Mana']
    },
    '3025': {
      id: 3025,
      name: 'Iceborn Gauntlet',
      sanitizedDescription: 'Basic attacks create a slow field after spell cast',
      tags: ['Armor', 'Mana', 'CooldownReduction', 'Slow']
    },
    '3026': {
      id: 3026,
      name: 'Guardian Angel',
      sanitizedDescription: 'Periodically revives champion upon death',
      tags: ['Armor', 'Damage']
    },
    '3027': {
      id: 3027,
      name: 'Rod of Ages',
      sanitizedDescription: 'Greatly increases Health, Mana, and Ability Power',
      tags: ['Health', 'HealthRegen', 'Mana', 'ManaRegen', 'SpellDamage']
    },
    '3028': {
      id: 3028,
      name: 'Chalice of Harmony',
      sanitizedDescription: 'Increases Mana and Health Regeneration',
      tags: ['SpellBlock', 'HealthRegen', 'ManaRegen']
    },
    '3029': {
      id: 3029,
      name: 'Rod of Ages (Quick Charge)',
      sanitizedDescription: 'Greatly increases Health, Mana, and Ability Power',
      tags: ['Health', 'HealthRegen', 'Mana', 'ManaRegen', 'SpellDamage']
    },
    '3030': {
      id: 3030,
      name: 'Hextech GLP-800',
      sanitizedDescription: 'Activate to fire icy bolts to slow enemies',
      tags: ['SpellDamage', 'Mana', 'Active', 'CooldownReduction', 'Slow']
    },
    '3031': {
      id: 3031,
      name: 'Infinity Edge',
      sanitizedDescription: 'Massively enhances critical strikes',
      tags: ['CriticalStrike', 'Damage']
    },
    '3033': {
      id: 3033,
      name: 'Mortal Reminder',
      sanitizedDescription: 'Overcomes enemies with high Health recovery and Armor',
      tags: ['ArmorPenetration', 'Damage']
    },
    '3035': {
      id: 3035,
      name: 'Last Whisper',
      sanitizedDescription: 'Overcomes enemies with high Armor',
      tags: ['ArmorPenetration', 'Damage']
    },
    '3036': {
      id: 3036,
      name: "Lord Dominik's Regards",
      sanitizedDescription: 'Overcomes enemies with high health and armor',
      tags: ['Damage', 'ArmorPenetration']
    },
    '3040': {
      id: 3040,
      name: "Seraph's Embrace",
      sanitizedDescription: '',
      tags: ['Active']
    },
    '3041': {
      id: 3041,
      name: "Mejai's Soulstealer",
      sanitizedDescription: 'Grants Ability Power for kills and assists',
      tags: ['SpellDamage', 'Mana']
    },
    '3042': {
      id: 3042,
      name: 'Muramana',
      sanitizedDescription: '',
      tags: ['OnHit']
    },
    '3043': {
      id: 3043,
      name: 'Muramana',
      sanitizedDescription: '',
      tags: ['OnHit']
    },
    '3044': {
      id: 3044,
      name: 'Phage',
      sanitizedDescription: 'Attacks and kills give a small burst of speed',
      tags: ['Damage', 'Health', 'NonbootsMovement', 'OnHit']
    },
    '3046': {
      id: 3046,
      name: 'Phantom Dancer',
      sanitizedDescription: 'Move faster near enemies and reduce incoming damage',
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement']
    },
    '3047': {
      id: 3047,
      name: 'Ninja Tabi',
      sanitizedDescription: 'Enhances Movement Speed and reduces incoming basic attack damage',
      tags: ['Armor', 'Boots']
    },
    '3048': {
      id: 3048,
      name: "Seraph's Embrace",
      sanitizedDescription: '',
      tags: ['Active']
    },
    '3050': {
      id: 3050,
      name: "Zeke's Convergence",
      sanitizedDescription: 'Grants you and your ally bonuses when you cast your ultimate.',
      tags: ['SpellBlock', 'Armor', 'Mana', 'Aura', 'Active', 'CooldownReduction']
    },
    '3052': {
      id: 3052,
      name: "Jaurim's Fist",
      sanitizedDescription: 'Attack Damage and stacking Health on Unit Kill',
      tags: ['Health', 'Damage']
    },
    '3053': {
      id: 3053,
      name: "Sterak's Gage",
      sanitizedDescription: 'Shields against large bursts of damage',
      tags: ['Health', 'Damage']
    },
    '3056': {
      id: 3056,
      name: 'Ohmwrecker',
      sanitizedDescription: 'Temporarily disables enemy turrets',
      tags: ['Active', 'Armor', 'CooldownReduction', 'Health', 'HealthRegen', 'NonbootsMovement']
    },
    '3057': {
      id: 3057,
      name: 'Sheen',
      sanitizedDescription: 'Grants a bonus to next attack after spell cast',
      tags: ['Mana', 'CooldownReduction']
    },
    '3065': {
      id: 3065,
      name: 'Spirit Visage',
      sanitizedDescription: 'Increases Health and healing effects',
      tags: ['CooldownReduction', 'Health', 'HealthRegen', 'SpellBlock']
    },
    '3067': {
      id: 3067,
      name: 'Kindlegem',
      sanitizedDescription: 'Increases Health and Cooldown Reduction',
      tags: ['CooldownReduction', 'Health']
    },
    '3068': {
      id: 3068,
      name: 'Sunfire Cape',
      sanitizedDescription: 'Constantly deals damage to nearby enemies',
      tags: ['Armor', 'Health']
    },
    '3069': {
      id: 3069,
      name: 'Remnant of the Ascended',
      sanitizedDescription: 'Provides Gold, Mana, and Stealth Wards over time',
      tags: [
        'Health',
        'HealthRegen',
        'ManaRegen',
        'Active',
        'GoldPer',
        'CooldownReduction',
        'NonbootsMovement'
      ]
    },
    '3070': {
      id: 3070,
      name: 'Tear of the Goddess',
      sanitizedDescription: 'Increases maximum Mana as Mana is spent',
      tags: ['Mana', 'ManaRegen']
    },
    '3071': {
      id: 3071,
      name: 'The Black Cleaver',
      sanitizedDescription: 'Dealing physical damage to enemy champions reduces their Armor',
      tags: [
        'ArmorPenetration',
        'CooldownReduction',
        'Damage',
        'Health',
        'NonbootsMovement',
        'OnHit'
      ]
    },
    '3072': {
      id: 3072,
      name: 'The Bloodthirster',
      sanitizedDescription: 'Grants Attack Damage, Life Steal and Life Steal now overheals',
      tags: ['Damage', 'LifeSteal']
    },
    '3073': {
      id: 3073,
      name: 'Tear of the Goddess (Quick Charge)',
      sanitizedDescription: 'Increases maximum Mana as Mana is spent',
      tags: ['Mana', 'ManaRegen']
    },
    '3074': {
      id: 3074,
      name: 'Ravenous Hydra',
      sanitizedDescription: 'Melee attacks hit nearby enemies, dealing damage and restoring Health',
      tags: ['Active', 'Damage', 'HealthRegen', 'LifeSteal', 'OnHit']
    },
    '3075': {
      id: 3075,
      name: 'Thornmail',
      sanitizedDescription: 'Returns damage taken from basic attacks as magic damage',
      tags: ['Health', 'Armor', 'Slow']
    },
    '3076': {
      id: 3076,
      name: 'Bramble Vest',
      sanitizedDescription: 'Prevents enemies from using Life Steal against you.',
      tags: ['Armor']
    },
    '3077': {
      id: 3077,
      name: 'Tiamat',
      sanitizedDescription: 'Melee attacks hit nearby enemies',
      tags: ['HealthRegen', 'Damage', 'Active']
    },
    '3078': {
      id: 3078,
      name: 'Trinity Force',
      sanitizedDescription: 'Tons of Damage',
      tags: [
        'Health',
        'Damage',
        'AttackSpeed',
        'Mana',
        'CooldownReduction',
        'OnHit',
        'NonbootsMovement'
      ]
    },
    '3080': {
      id: 3080,
      name: 'Space Bloodthirster',
      sanitizedDescription: 'Grants Attack Damage, Life Steal and Life Steal now overheals',
      tags: ['Damage', 'LifeSteal']
    },
    '3082': {
      id: 3082,
      name: "Warden's Mail",
      sanitizedDescription: 'Slows Attack Speed of enemy champions when receiving basic attacks',
      tags: ['Armor', 'Slow']
    },
    '3083': {
      id: 3083,
      name: "Warmog's Armor",
      sanitizedDescription: 'Grants massive Health and Health Regen',
      tags: ['Health', 'HealthRegen', 'CooldownReduction']
    },
    '3084': {
      id: 3084,
      name: "Overlord's Bloodmail",
      sanitizedDescription: 'Restores Health on kill or assist',
      tags: ['Health', 'HealthRegen']
    },
    '3085': {
      id: 3085,
      name: "Runaan's Hurricane",
      sanitizedDescription: 'Ranged attacks fire two bolts at nearby enemies',
      tags: ['CriticalStrike', 'AttackSpeed', 'OnHit', 'NonbootsMovement']
    },
    '3086': {
      id: 3086,
      name: 'Zeal',
      sanitizedDescription:
        'Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed',
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement']
    },
    '3087': {
      id: 3087,
      name: 'Statikk Shiv',
      sanitizedDescription: 'Movement builds charges that release chain lightning on basic attack',
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement', 'OnHit']
    },
    '3089': {
      id: 3089,
      name: "Rabadon's Deathcap",
      sanitizedDescription: 'Massively increases Ability Power',
      tags: ['SpellDamage']
    },
    '3090': {
      id: 3090,
      name: "Wooglet's Witchcap",
      sanitizedDescription:
        'Massively increases Ability Power and can be activated to enter stasis',
      tags: ['Active', 'Armor', 'SpellDamage']
    },
    '3091': {
      id: 3091,
      name: "Wit's End",
      sanitizedDescription: 'Deals bonus magic damage on basic attacks',
      tags: ['AttackSpeed', 'OnHit', 'SpellBlock']
    },
    '3092': {
      id: 3092,
      name: 'Remnant of the Watchers',
      sanitizedDescription: 'Provides Ability Power and Stealth Wards over time',
      tags: ['Health', 'SpellDamage', 'ManaRegen', 'Active', 'GoldPer', 'CooldownReduction']
    },
    '3094': {
      id: 3094,
      name: 'Rapid Firecannon',
      sanitizedDescription: 'Movement builds charges that release a sieging fire attack on release',
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement', 'OnHit']
    },
    '3095': {
      id: 3095,
      name: 'Stormrazor',
      sanitizedDescription: 'Start fights with a flurry of critical strikes',
      tags: ['Damage', 'CriticalStrike', 'AttackSpeed', 'OnHit', 'NonbootsMovement']
    },
    '3096': {
      id: 3096,
      name: "Nomad's Medallion",
      sanitizedDescription: "Grants gold and mana when nearby minions die that you didn't kill",
      tags: [
        'HealthRegen',
        'ManaRegen',
        'Active',
        'GoldPer',
        'CooldownReduction',
        'NonbootsMovement'
      ]
    },
    '3097': {
      id: 3097,
      name: "Targon's Brace",
      sanitizedDescription:
        'Periodically kill enemy minions to heal and grant gold to a nearby ally',
      tags: ['Aura', 'GoldPer', 'Health', 'HealthRegen']
    },
    '3098': {
      id: 3098,
      name: 'Frostfang',
      sanitizedDescription: 'Grants gold when you damage an enemy',
      tags: ['SpellDamage', 'ManaRegen', 'Active', 'GoldPer', 'CooldownReduction']
    },
    '3100': {
      id: 3100,
      name: 'Lich Bane',
      sanitizedDescription: 'Grants a bonus to next attack after spell cast',
      tags: ['SpellDamage', 'Mana', 'CooldownReduction', 'NonbootsMovement']
    },
    '3101': {
      id: 3101,
      name: 'Stinger',
      sanitizedDescription: 'Increased Attack Speed and Cooldown Reduction',
      tags: ['AttackSpeed', 'CooldownReduction']
    },
    '3102': {
      id: 3102,
      name: "Banshee's Veil",
      sanitizedDescription: 'Periodically blocks enemy abilities',
      tags: ['SpellBlock', 'SpellDamage', 'CooldownReduction']
    },
    '3104': {
      id: 3104,
      name: "Lord Van Damm's Pillager",
      sanitizedDescription: 'Reduces Armor of nearby enemies',
      tags: ['Health', 'Damage', 'Aura', 'CooldownReduction', 'OnHit', 'ArmorPenetration']
    },
    '3105': {
      id: 3105,
      name: 'Aegis of the Legion',
      sanitizedDescription: 'Grants Armor and Magic Resistance',
      tags: ['SpellBlock', 'Armor']
    },
    '3107': {
      id: 3107,
      name: 'Redemption',
      sanitizedDescription: 'Activate to heal allies and damage enemies in an area',
      tags: ['Health', 'HealthRegen', 'ManaRegen', 'CooldownReduction']
    },
    '3108': {
      id: 3108,
      name: 'Fiendish Codex',
      sanitizedDescription: 'Increases Ability Power and Cooldown Reduction',
      tags: ['CooldownReduction', 'SpellDamage']
    },
    '3109': {
      id: 3109,
      name: "Knight's Vow",
      sanitizedDescription: 'Partner with an ally to protect each other',
      tags: ['Health', 'Armor', 'Aura', 'CooldownReduction', 'NonbootsMovement']
    },
    '3110': {
      id: 3110,
      name: 'Frozen Heart',
      sanitizedDescription: 'Massively increases Armor and slows enemy basic attacks',
      tags: ['Armor', 'Aura', 'CooldownReduction', 'Mana']
    },
    '3111': {
      id: 3111,
      name: "Mercury's Treads",
      sanitizedDescription: 'Increases Movement Speed and reduces duration of disabling effects',
      tags: ['Boots', 'SpellBlock', 'Tenacity']
    },
    '3112': {
      id: 3112,
      name: "Guardian's Orb",
      sanitizedDescription: 'Good starting item for mages',
      tags: ['Health', 'SpellDamage', 'ManaRegen', 'Lane']
    },
    '3113': {
      id: 3113,
      name: 'Aether Wisp',
      sanitizedDescription: 'Increases Ability Power and Movement Speed',
      tags: ['NonbootsMovement', 'SpellDamage']
    },
    '3114': {
      id: 3114,
      name: 'Forbidden Idol',
      sanitizedDescription:
        'Increases Heal and Shield Power, Mana Regeneration, and Cooldown Reduction',
      tags: ['CooldownReduction', 'ManaRegen']
    },
    '3115': {
      id: 3115,
      name: "Nashor's Tooth",
      sanitizedDescription: 'Increases Attack Speed, Ability Power, and Cooldown Reduction',
      tags: ['AttackSpeed', 'CooldownReduction', 'OnHit', 'SpellDamage']
    },
    '3116': {
      id: 3116,
      name: "Rylai's Crystal Scepter",
      sanitizedDescription: 'Abilities slow enemies',
      tags: ['Health', 'SpellDamage', 'Slow']
    },
    '3117': {
      id: 3117,
      name: 'Boots of Mobility',
      sanitizedDescription: 'Greatly enhances Movement Speed when out of combat',
      tags: ['Boots']
    },
    '3118': {
      id: 3118,
      name: "Space Knight's Vow",
      sanitizedDescription: 'Partner with an ally to protect each other',
      tags: ['Health', 'Armor', 'Aura', 'CooldownReduction', 'NonbootsMovement']
    },
    '3122': {
      id: 3122,
      name: 'Wicked Hatchet',
      sanitizedDescription: 'Critical Strikes cause your target to bleed',
      tags: ['CriticalStrike', 'Damage', 'OnHit']
    },
    '3123': {
      id: 3123,
      name: "Executioner's Calling",
      sanitizedDescription: 'Overcomes enemies with high health gain',
      tags: ['Damage']
    },
    '3124': {
      id: 3124,
      name: "Guinsoo's Rageblade",
      sanitizedDescription: 'Increases Attack Speed, Armor Penetration, and Magic Penetration',
      tags: [
        'Damage',
        'AttackSpeed',
        'SpellDamage',
        'OnHit',
        'MagicPenetration',
        'ArmorPenetration'
      ]
    },
    '3128': {
      id: 3128,
      name: 'Deathfire Grasp',
      sanitizedDescription: 'Activate to increase all magic damage dealt to an enemy champion',
      tags: ['Active', 'CooldownReduction', 'SpellDamage']
    },
    '3131': {
      id: 3131,
      name: 'Sword of the Divine',
      sanitizedDescription: 'Activate to gain 100% Critical Strike Chance for a short duration',
      tags: ['Damage', 'CriticalStrike', 'AttackSpeed', 'Active', 'ArmorPenetration']
    },
    '3133': {
      id: 3133,
      name: "Caulfield's Warhammer",
      sanitizedDescription: 'Attack Damage and Cooldown Reduction',
      tags: ['Damage', 'CooldownReduction']
    },
    '3134': {
      id: 3134,
      name: 'Serrated Dirk',
      sanitizedDescription: 'Increases Attack Damage and Lethality',
      tags: ['Damage', 'ArmorPenetration']
    },
    '3135': {
      id: 3135,
      name: 'Void Staff',
      sanitizedDescription: 'Increases magic damage',
      tags: ['MagicPenetration', 'SpellDamage']
    },
    '3136': {
      id: 3136,
      name: 'Haunting Guise',
      sanitizedDescription: 'Increases magic damage',
      tags: ['Health', 'SpellDamage']
    },
    '3137': {
      id: 3137,
      name: 'Dervish Blade',
      sanitizedDescription: 'Activate to remove all debuffs and grant massive Movement Speed',
      tags: ['Active', 'AttackSpeed', 'CooldownReduction', 'NonbootsMovement', 'SpellBlock']
    },
    '3139': {
      id: 3139,
      name: 'Mercurial Scimitar',
      sanitizedDescription:
        'Activate to remove all crowd control debuffs and grant massive Movement Speed',
      tags: ['SpellBlock', 'Damage', 'LifeSteal', 'Active', 'NonbootsMovement']
    },
    '3140': {
      id: 3140,
      name: 'Quicksilver Sash',
      sanitizedDescription: 'Activate to remove all crowd control debuffs',
      tags: ['Active', 'SpellBlock']
    },
    '3142': {
      id: 3142,
      name: "Youmuu's Ghostblade",
      sanitizedDescription: 'Activate to greatly increase Movement Speed',
      tags: ['Damage', 'Active', 'CooldownReduction', 'NonbootsMovement', 'ArmorPenetration']
    },
    '3143': {
      id: 3143,
      name: "Randuin's Omen",
      sanitizedDescription: 'Greatly increases defenses, activate to slow nearby enemies',
      tags: ['Active', 'Armor', 'Health', 'Slow']
    },
    '3144': {
      id: 3144,
      name: 'Bilgewater Cutlass',
      sanitizedDescription: 'Activate to deal magic damage and slow target champion',
      tags: ['Active', 'Damage', 'LifeSteal', 'Slow']
    },
    '3145': {
      id: 3145,
      name: 'Hextech Revolver',
      sanitizedDescription:
        'Increases Ability Power. Deal bonus magic damage on attack periodically.',
      tags: ['SpellDamage']
    },
    '3146': {
      id: 3146,
      name: 'Hextech Gunblade',
      sanitizedDescription: 'Increases Attack Damage and Ability Power, activate to slow a target',
      tags: ['Active', 'Damage', 'LifeSteal', 'Slow', 'SpellDamage', 'SpellVamp']
    },
    '3147': {
      id: 3147,
      name: 'Duskblade of Draktharr',
      sanitizedDescription:
        'Deals additional physical damage when ambushing enemies and provides trap and ward detection periodically',
      tags: ['Damage', 'Vision', 'CooldownReduction', 'OnHit', 'ArmorPenetration']
    },
    '3148': {
      id: 3148,
      name: 'Space Hextech Gunblade',
      sanitizedDescription: 'Increases Attack Damage and Ability Power, activate to slow a target',
      tags: ['Active', 'Damage', 'LifeSteal', 'Slow', 'SpellDamage', 'SpellVamp']
    },
    '3149': {
      id: 3149,
      name: 'Space Blade of the Ruined King',
      sanitizedDescription: "Deals damage based on target's Health, can steal Movement Speed",
      tags: ['Damage', 'AttackSpeed', 'LifeSteal', 'Active', 'Slow', 'OnHit', 'NonbootsMovement']
    },
    '3151': {
      id: 3151,
      name: "Liandry's Torment",
      sanitizedDescription: 'Spell damage burns enemies for a portion of their Health',
      tags: ['Health', 'SpellDamage']
    },
    '3152': {
      id: 3152,
      name: 'Hextech Protobelt-01',
      sanitizedDescription: 'Activate to dash forward and unleash a fiery explosion',
      tags: ['Health', 'SpellDamage', 'Active', 'CooldownReduction']
    },
    '3153': {
      id: 3153,
      name: 'Blade of the Ruined King',
      sanitizedDescription: "Deals damage based on target's Health, can steal Movement Speed",
      tags: ['Damage', 'AttackSpeed', 'LifeSteal', 'Active', 'Slow', 'OnHit', 'NonbootsMovement']
    },
    '3155': {
      id: 3155,
      name: 'Hexdrinker',
      sanitizedDescription: 'Increases Attack Damage and Magic Resist',
      tags: ['Damage', 'SpellBlock']
    },
    '3156': {
      id: 3156,
      name: 'Maw of Malmortius',
      sanitizedDescription: 'Grants bonus Attack Damage when Health is low',
      tags: ['SpellBlock', 'Damage', 'LifeSteal', 'CooldownReduction', 'SpellVamp']
    },
    '3157': {
      id: 3157,
      name: "Zhonya's Hourglass",
      sanitizedDescription: 'Activate to become invincible but unable to take actions',
      tags: ['Armor', 'SpellDamage', 'Active', 'CooldownReduction']
    },
    '3158': {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      sanitizedDescription: 'Increases Movement Speed and Cooldown Reduction',
      tags: ['Boots', 'CooldownReduction']
    },
    '3161': {
      id: 3161,
      name: 'Spear of Shojin',
      sanitizedDescription:
        'Reduce damage taken from champions by a flat amount. Attack while near multiple enemy champions to increase this amount for a short time.',
      tags: ['Health', 'Damage', 'CooldownReduction']
    },
    '3162': {
      id: 3162,
      name: 'Space Bilgewater Cutlass',
      sanitizedDescription: 'Activate to deal magic damage and slow target champion',
      tags: ['Active', 'Damage', 'LifeSteal', 'Slow']
    },
    '3163': {
      id: 3163,
      name: 'Space Maw of Malmortius',
      sanitizedDescription: 'Grants bonus Attack Damage when Health is low',
      tags: ['SpellBlock', 'Damage', 'LifeSteal', 'CooldownReduction', 'SpellVamp']
    },
    '3165': {
      id: 3165,
      name: 'Morellonomicon',
      sanitizedDescription: 'Increases magic damage',
      tags: ['Health', 'SpellDamage', 'MagicPenetration']
    },
    '3170': {
      id: 3170,
      name: 'Moonflair Spellblade',
      sanitizedDescription: 'Improves defense and reduces duration of disabling effects',
      tags: ['Armor', 'SpellBlock', 'SpellDamage', 'Tenacity']
    },
    '3172': {
      id: 3172,
      name: 'Zephyr',
      sanitizedDescription: 'Mobility and Tenacity',
      tags: ['Damage', 'AttackSpeed', 'NonbootsMovement', 'Tenacity']
    },
    '3173': {
      id: 3173,
      name: 'Space Boots of Lucidity',
      sanitizedDescription: 'Increases Movement Speed and Cooldown Reduction',
      tags: ['Boots', 'CooldownReduction']
    },
    '3174': {
      id: 3174,
      name: "Athene's Unholy Grail",
      sanitizedDescription: 'Deal damage to empower your heals and shields',
      tags: ['SpellBlock', 'HealthRegen', 'SpellDamage', 'ManaRegen', 'CooldownReduction']
    },
    '3175': {
      id: 3175,
      name: "Head of Kha'Zix",
      sanitizedDescription: '',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3181': {
      id: 3181,
      name: 'Sanguine Blade',
      sanitizedDescription: 'Greatly increases Attack Damage and Life Steal',
      tags: ['Damage', 'LifeSteal']
    },
    '3184': {
      id: 3184,
      name: "Guardian's Hammer",
      sanitizedDescription: 'Good starting item for attackers',
      tags: ['Health', 'Damage', 'LifeSteal', 'Lane']
    },
    '3187': {
      id: 3187,
      name: 'Arcane Sweeper',
      sanitizedDescription: 'Activate to reveal a nearby area of the map',
      tags: ['Active', 'Armor', 'CooldownReduction', 'Health', 'Mana', 'Stealth', 'Vision']
    },
    '3190': {
      id: 3190,
      name: 'Locket of the Iron Solari',
      sanitizedDescription: 'Activate to shield nearby allies from damage',
      tags: ['SpellBlock', 'Armor', 'Active']
    },
    '3191': {
      id: 3191,
      name: "Seeker's Armguard",
      sanitizedDescription: 'Increases Armor and Ability Power',
      tags: ['Armor', 'SpellDamage']
    },
    '3193': {
      id: 3193,
      name: 'Gargoyle Stoneplate',
      sanitizedDescription: 'Greatly increases defense near multiple enemies.',
      tags: ['Health', 'SpellBlock', 'Armor']
    },
    '3194': {
      id: 3194,
      name: 'Adaptive Helm',
      sanitizedDescription: 'Reduces damage from repeated spells and effects.',
      tags: ['Health', 'SpellBlock', 'HealthRegen', 'CooldownReduction']
    },
    '3196': {
      id: 3196,
      name: 'The Hex Core mk-1',
      sanitizedDescription: 'Allows Viktor to improve an ability of his choice',
      tags: ['Mana', 'SpellDamage']
    },
    '3197': {
      id: 3197,
      name: 'The Hex Core mk-2',
      sanitizedDescription: 'Allows Viktor to improve an ability of his choice',
      tags: ['Mana', 'SpellDamage']
    },
    '3198': {
      id: 3198,
      name: 'Perfect Hex Core',
      sanitizedDescription: 'Allows Viktor to improve an ability of his choice',
      tags: ['Mana', 'SpellDamage']
    },
    '3200': {
      id: 3200,
      name: 'Prototype Hex Core',
      sanitizedDescription:
        "Increases Ability Power and can be upgraded to improve Viktor's abilities",
      tags: []
    },
    '3211': {
      id: 3211,
      name: "Spectre's Cowl",
      sanitizedDescription: 'Improves defense and grants regeneration upon being damaged',
      tags: ['Health', 'HealthRegen', 'SpellBlock']
    },
    '3222': {
      id: 3222,
      name: "Mikael's Crucible",
      sanitizedDescription: 'Activate to remove all disabling effects from an allied champion',
      tags: ['SpellBlock', 'HealthRegen', 'ManaRegen', 'Active', 'CooldownReduction']
    },
    '3230': {
      id: 3230,
      name: 'Space Ravenous Hydra',
      sanitizedDescription: 'Melee attacks hit nearby enemies, dealing damage and restoring Health',
      tags: ['Active', 'Damage', 'HealthRegen', 'LifeSteal', 'OnHit']
    },
    '3231': {
      id: 3231,
      name: 'Space Mercurial Scimitar',
      sanitizedDescription:
        'Activate to remove all crowd control debuffs and grant massive Movement Speed',
      tags: ['SpellBlock', 'Damage', 'LifeSteal', 'Active', 'NonbootsMovement']
    },
    '3285': {
      id: 3285,
      name: "Luden's Echo",
      sanitizedDescription: 'Increases Ability Power, Mana, and Cooldown Reduction',
      tags: ['SpellDamage', 'Mana', 'CooldownReduction', 'OnHit']
    },
    '3301': {
      id: 3301,
      name: 'Ancient Coin',
      sanitizedDescription: "Grants gold and mana when nearby minions die that you didn't kill",
      tags: ['ManaRegen', 'GoldPer', 'CooldownReduction', 'NonbootsMovement', 'Lane']
    },
    '3302': {
      id: 3302,
      name: 'Relic Shield',
      sanitizedDescription: 'Kill minions periodically to heal and grant gold to a nearby ally',
      tags: ['Aura', 'GoldPer', 'Health', 'Lane']
    },
    '3303': {
      id: 3303,
      name: "Spellthief's Edge",
      sanitizedDescription: 'Grants gold when you damage enemies',
      tags: ['GoldPer', 'Lane', 'ManaRegen', 'SpellDamage']
    },
    '3304': {
      id: 3304,
      name: 'Timeworn Ancient Coin',
      sanitizedDescription: "Grants gold and mana when nearby minions die that you didn't kill",
      tags: ['ManaRegen', 'GoldPer', 'CooldownReduction', 'Lane']
    },
    '3305': {
      id: 3305,
      name: "Timeworn Nomad's Medallion",
      sanitizedDescription: "Grants gold and mana when nearby minions die that you didn't kill",
      tags: ['HealthRegen', 'ManaRegen', 'Active', 'GoldPer', 'CooldownReduction']
    },
    '3306': {
      id: 3306,
      name: 'Timeworn Talisman of Ascension',
      sanitizedDescription:
        'Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.',
      tags: [
        'HealthRegen',
        'Armor',
        'ManaRegen',
        'Active',
        'GoldPer',
        'CooldownReduction',
        'NonbootsMovement'
      ]
    },
    '3307': {
      id: 3307,
      name: 'Timeworn Relic Shield',
      sanitizedDescription: 'Kill minions periodically to heal and grant gold to a nearby ally',
      tags: ['Aura', 'GoldPer', 'Health', 'Lane']
    },
    '3308': {
      id: 3308,
      name: "Timeworn Targon's Brace",
      sanitizedDescription:
        'Periodically kill enemy minions to heal and grant gold to a nearby ally',
      tags: ['Aura', 'GoldPer', 'Health', 'HealthRegen']
    },
    '3309': {
      id: 3309,
      name: 'Timeworn Face of the Mountain',
      sanitizedDescription: 'Shield an ally from damage based on your Health',
      tags: ['Health', 'HealthRegen', 'Active', 'GoldPer', 'CooldownReduction', 'Slow']
    },
    '3310': {
      id: 3310,
      name: "Timeworn Spellthief's Edge",
      sanitizedDescription: 'Grants gold when you damage enemies',
      tags: ['GoldPer', 'Lane', 'ManaRegen', 'SpellDamage']
    },
    '3311': {
      id: 3311,
      name: 'Timeworn Frostfang',
      sanitizedDescription: 'Grants gold when you damage an enemy',
      tags: ['SpellDamage', 'ManaRegen', 'Active', 'GoldPer', 'CooldownReduction']
    },
    '3312': {
      id: 3312,
      name: "Timeworn Frost Queen's Claim",
      sanitizedDescription: 'Sends out seeking wraiths that track hidden enemies and slow them',
      tags: ['Active', 'CooldownReduction', 'GoldPer', 'ManaRegen', 'Slow', 'SpellDamage']
    },
    '3340': {
      id: 3340,
      name: 'Warding Totem (Trinket)',
      sanitizedDescription: 'Periodically place a Stealth Ward',
      tags: ['Active', 'Jungle', 'Lane', 'Trinket', 'Vision']
    },
    '3345': {
      id: 3345,
      name: 'Soul Anchor (Trinket)',
      sanitizedDescription: 'Consumes charge to revive champion.',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3348': {
      id: 3348,
      name: 'Arcane Sweeper',
      sanitizedDescription: 'Activate to reveal a nearby area of the map',
      tags: ['Vision', 'Trinket', 'Stealth', 'Active']
    },
    '3361': {
      id: 3361,
      name: 'Greater Stealth Totem (Trinket)',
      sanitizedDescription: 'Periodically place a Stealth Ward',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3362': {
      id: 3362,
      name: 'Greater Vision Totem (Trinket)',
      sanitizedDescription: 'Periodically place a Vision Ward',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3363': {
      id: 3363,
      name: 'Farsight Alteration',
      sanitizedDescription: 'Grants increased range and reveals the targetted area',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3364': {
      id: 3364,
      name: 'Oracle Lens',
      sanitizedDescription: 'Disables nearby invisible wards and traps for a duration',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3371': {
      id: 3371,
      name: 'Molten Edge',
      sanitizedDescription: 'Massively enhances critical strikes',
      tags: ['Damage', 'CriticalStrike']
    },
    '3373': {
      id: 3373,
      name: 'Forgefire Cape',
      sanitizedDescription: 'Constantly deals damage to nearby enemies',
      tags: ['Health', 'Armor']
    },
    '3374': {
      id: 3374,
      name: "Rabadon's Deathcrown",
      sanitizedDescription: 'Massively increases Ability Power',
      tags: ['SpellDamage']
    },
    '3379': {
      id: 3379,
      name: 'Infernal Mask',
      sanitizedDescription: 'Nearby enemies take more magic damage',
      tags: [
        'Health',
        'SpellBlock',
        'HealthRegen',
        'Mana',
        'ManaRegen',
        'Aura',
        'CooldownReduction',
        'MagicPenetration'
      ]
    },
    '3380': {
      id: 3380,
      name: 'The Obsidian Cleaver',
      sanitizedDescription: 'Dealing physical damage to enemy champions reduces their Armor',
      tags: [
        'ArmorPenetration',
        'CooldownReduction',
        'Damage',
        'Health',
        'NonbootsMovement',
        'OnHit'
      ]
    },
    '3382': {
      id: 3382,
      name: 'Salvation',
      sanitizedDescription: 'Activate to heal allies and damage enemies in an area',
      tags: ['Health', 'HealthRegen', 'ManaRegen', 'CooldownReduction']
    },
    '3383': {
      id: 3383,
      name: 'Circlet of the Iron Solari',
      sanitizedDescription: 'Activate to shield nearby allies from damage',
      tags: ['SpellBlock', 'Armor', 'Active']
    },
    '3384': {
      id: 3384,
      name: 'Trinity Fusion',
      sanitizedDescription: 'Tons of Damage',
      tags: [
        'Health',
        'Damage',
        'AttackSpeed',
        'Mana',
        'CooldownReduction',
        'OnHit',
        'NonbootsMovement'
      ]
    },
    '3385': {
      id: 3385,
      name: "Wooglet's Witchcrown",
      sanitizedDescription:
        'Massively increases Ability Power and can be activated to enter stasis',
      tags: ['Active', 'Armor', 'SpellDamage']
    },
    '3386': {
      id: 3386,
      name: "Zhonya's Paradox",
      sanitizedDescription: 'Activate to become invincible but unable to take actions',
      tags: ['Armor', 'SpellDamage', 'Active', 'CooldownReduction']
    },
    '3387': {
      id: 3387,
      name: 'Frozen Fist',
      sanitizedDescription: 'Basic attacks create a slow field after spell cast',
      tags: ['Armor', 'Mana', 'CooldownReduction', 'Slow']
    },
    '3388': {
      id: 3388,
      name: "Youmuu's Wraithblade",
      sanitizedDescription: 'Activate to greatly increase Movement Speed',
      tags: ['Damage', 'Active', 'CooldownReduction', 'NonbootsMovement', 'ArmorPenetration']
    },
    '3389': {
      id: 3389,
      name: 'Might of the Ruined King',
      sanitizedDescription: "Deals damage based on target's Health, can steal Movement Speed",
      tags: ['Damage', 'AttackSpeed', 'LifeSteal', 'Active', 'Slow', 'OnHit', 'NonbootsMovement']
    },
    '3390': {
      id: 3390,
      name: "Luden's Pulse",
      sanitizedDescription: 'Increases Ability Power, Mana, and Cooldown Reduction',
      tags: ['SpellDamage', 'Mana', 'CooldownReduction', 'OnHit']
    },
    '3400': {
      id: 3400,
      name: "'Your Cut'",
      sanitizedDescription: '',
      tags: ['Consumable', 'GoldPer']
    },
    '3401': {
      id: 3401,
      name: 'Remnant of the Aspect',
      sanitizedDescription: 'Provides Health and Stealth Wards over time',
      tags: ['Health', 'HealthRegen', 'Active', 'GoldPer', 'CooldownReduction']
    },
    '3410': {
      id: 3410,
      name: "Head of Kha'Zix",
      sanitizedDescription: '',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3416': {
      id: 3416,
      name: "Head of Kha'Zix",
      sanitizedDescription: '',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3422': {
      id: 3422,
      name: "Head of Kha'Zix",
      sanitizedDescription: '',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3455': {
      id: 3455,
      name: "Head of Kha'Zix",
      sanitizedDescription: '',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3460': {
      id: 3460,
      name: 'Golden Transcendence',
      sanitizedDescription: '',
      tags: ['Active', 'Trinket']
    },
    '3461': {
      id: 3461,
      name: 'Golden Transcendence (Disabled)',
      sanitizedDescription: '',
      tags: ['Active', 'Trinket']
    },
    '3462': {
      id: 3462,
      name: 'Seer Stone (Trinket)',
      sanitizedDescription: 'Briefly reveals a nearby targeted area',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3504': {
      id: 3504,
      name: 'Ardent Censer',
      sanitizedDescription:
        'Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.',
      tags: ['CooldownReduction', 'ManaRegen', 'NonbootsMovement', 'SpellDamage']
    },
    '3508': {
      id: 3508,
      name: 'Essence Reaver',
      sanitizedDescription: 'Attack and cast spells faster after your ultimate',
      tags: ['Damage', 'AttackSpeed', 'Mana', 'ManaRegen', 'CooldownReduction']
    },
    '3512': {
      id: 3512,
      name: "Zz'Rot Portal",
      sanitizedDescription: 'Makes a Voidspawn generating Void Gate to push a lane with.',
      tags: ['SpellBlock', 'HealthRegen', 'Armor', 'Active', 'NonbootsMovement']
    },
    '3513': {
      id: 3513,
      name: 'Eye of the Herald',
      sanitizedDescription: 'Eye of the Herald - a Gift of the Void.',
      tags: ['Trinket', 'Active']
    },
    '3514': {
      id: 3514,
      name: 'Eye of the Herald',
      sanitizedDescription: 'Eye of the Herald - a Gift of the Void.',
      tags: ['Trinket', 'Active']
    },
    '3520': {
      id: 3520,
      name: 'Ghost Poro',
      sanitizedDescription: '',
      tags: ['Vision', 'Trinket', 'Active']
    },
    '3599': {
      id: 3599,
      name: 'The Black Spear',
      sanitizedDescription: "Kalista's spear that binds an Oathsworn Ally.",
      tags: ['Active']
    },
    '3600': {
      id: 3600,
      name: 'The Black Spear',
      sanitizedDescription: "Kalista's spear that binds an Oathsworn Ally.",
      tags: ['Active']
    },
    '3630': {
      id: 3630,
      name: 'Siege Teleport',
      sanitizedDescription: '',
      tags: []
    },
    '3631': {
      id: 3631,
      name: 'Siege Ballista',
      sanitizedDescription: 'Place a long range anti-turret ballista',
      tags: []
    },
    '3633': {
      id: 3633,
      name: 'Siege Teleport',
      sanitizedDescription: '',
      tags: []
    },
    '3634': {
      id: 3634,
      name: 'Tower: Beam of Ruination',
      sanitizedDescription:
        'Attaches a three shot beam to a turret which can then be aimed and fired',
      tags: []
    },
    '3635': {
      id: 3635,
      name: 'Port Pad',
      sanitizedDescription: 'Creates another point for your team to Teleport to',
      tags: []
    },
    '3636': {
      id: 3636,
      name: 'Tower: Storm Bulwark',
      sanitizedDescription: 'Make a turret go invulnerable while charging a powerful barrage',
      tags: []
    },
    '3637': {
      id: 3637,
      name: 'Nexus Siege: Siege Weapon Slot',
      sanitizedDescription: '',
      tags: []
    },
    '3640': {
      id: 3640,
      name: 'Flash Zone',
      sanitizedDescription: 'Allows you and allies to repeatedly flash while in a zone',
      tags: []
    },
    '3641': {
      id: 3641,
      name: 'Vanguard Banner',
      sanitizedDescription: 'Strengthens nearby minions',
      tags: []
    },
    '3642': {
      id: 3642,
      name: 'Siege Refund',
      sanitizedDescription: 'Refunds all current Siege Weapons',
      tags: []
    },
    '3643': {
      id: 3643,
      name: 'Entropy Field',
      sanitizedDescription: 'Places a field that stuns enemy minions and slows champions',
      tags: []
    },
    '3645': {
      id: 3645,
      name: 'Seer Stone (Trinket)',
      sanitizedDescription: 'Briefly reveals a nearby targeted area',
      tags: ['Active', 'Trinket', 'Vision']
    },
    '3647': {
      id: 3647,
      name: 'Shield Totem',
      sanitizedDescription: 'Grants bonus health to nearby Siege Weapons',
      tags: []
    },
    '3648': {
      id: 3648,
      name: 'Siege Teleport (Inactive)',
      sanitizedDescription: '',
      tags: []
    },
    '3649': {
      id: 3649,
      name: 'Siege Sight Warder',
      sanitizedDescription: '',
      tags: []
    },
    '3671': {
      id: 3671,
      name: 'Enchantment: Warrior',
      sanitizedDescription: '',
      tags: []
    },
    '3672': {
      id: 3672,
      name: 'Enchantment: Cinderhulk',
      sanitizedDescription: '',
      tags: []
    },
    '3673': {
      id: 3673,
      name: 'Enchantment: Runic Echoes',
      sanitizedDescription: '',
      tags: []
    },
    '3675': {
      id: 3675,
      name: 'Enchantment: Bloodrazor',
      sanitizedDescription: '',
      tags: []
    },
    '3680': {
      id: 3680,
      name: 'Frosted Snax',
      sanitizedDescription: 'King: Fires a barrage of icy artillery',
      tags: ['Trinket', 'Lane']
    },
    '3681': {
      id: 3681,
      name: 'Super Spicy Snax',
      sanitizedDescription: 'King: Shoots flames that burn units and Turrets',
      tags: ['Trinket', 'Lane']
    },
    '3682': {
      id: 3682,
      name: 'Espresso Snax',
      sanitizedDescription: 'King: Knocks back and grants a large shield',
      tags: ['Trinket', 'Lane']
    },
    '3683': {
      id: 3683,
      name: 'Rainbow Snax Party Pack!',
      sanitizedDescription: 'King: Poros knock enemies towards him',
      tags: ['Trinket', 'Lane']
    },
    '3690': {
      id: 3690,
      name: 'Cosmic Shackle',
      sanitizedDescription: '',
      tags: []
    },
    '3691': {
      id: 3691,
      name: 'Singularity Lantern',
      sanitizedDescription: '',
      tags: []
    },
    '3692': {
      id: 3692,
      name: 'Dark Matter Scythe',
      sanitizedDescription: '',
      tags: []
    },
    '3693': {
      id: 3693,
      name: 'Gravity Boots',
      sanitizedDescription: '',
      tags: []
    },
    '3694': {
      id: 3694,
      name: 'Cloak of Stars',
      sanitizedDescription: '',
      tags: []
    },
    '3695': {
      id: 3695,
      name: 'Dark Star Sigil',
      sanitizedDescription: '',
      tags: []
    },
    '3706': {
      id: 3706,
      name: "Stalker's Blade",
      sanitizedDescription: 'Lets your Smite slow Champions',
      tags: ['LifeSteal', 'ManaRegen', 'Slow', 'OnHit', 'NonbootsMovement', 'Jungle']
    },
    '3715': {
      id: 3715,
      name: "Skirmisher's Sabre",
      sanitizedDescription: 'Lets your Smite mark Champions, giving you combat power against them.',
      tags: ['LifeSteal', 'ManaRegen', 'OnHit', 'Jungle']
    },
    '3742': {
      id: 3742,
      name: "Dead Man's Plate",
      sanitizedDescription: 'Build momentum as you move around then smash into enemies.',
      tags: ['Health', 'Armor', 'OnHit', 'NonbootsMovement', 'Bilgewater']
    },
    '3748': {
      id: 3748,
      name: 'Titanic Hydra',
      sanitizedDescription: "Deals area of effect damage based on owner's health",
      tags: ['Health', 'HealthRegen', 'Damage', 'Active', 'OnHit']
    },
    '3751': {
      id: 3751,
      name: "Bami's Cinder",
      sanitizedDescription: 'Grants Health and Immolate Aura',
      tags: ['Health']
    },
    '3800': {
      id: 3800,
      name: 'Righteous Glory',
      sanitizedDescription:
        'Grants Health, Mana, and Armor. Activate to speed towards enemies and slow them.',
      tags: [
        'Health',
        'HealthRegen',
        'Armor',
        'Mana',
        'Active',
        'CooldownReduction',
        'Slow',
        'NonbootsMovement'
      ]
    },
    '3801': {
      id: 3801,
      name: 'Crystalline Bracer',
      sanitizedDescription: 'Grants Health and Health Regen',
      tags: ['Health', 'HealthRegen']
    },
    '3802': {
      id: 3802,
      name: 'Lost Chapter',
      sanitizedDescription: 'Restores Mana upon levelling up.',
      tags: ['SpellDamage', 'Mana', 'ManaRegen', 'CooldownReduction']
    },
    '3812': {
      id: 3812,
      name: "Death's Dance",
      sanitizedDescription: 'Trades incoming damage now for incoming damage later',
      tags: ['Damage', 'LifeSteal', 'CooldownReduction']
    },
    '3813': {
      id: 3813,
      name: "Space Death's Dance",
      sanitizedDescription: 'Trades incoming damage now for incoming damage later',
      tags: ['Damage', 'LifeSteal', 'CooldownReduction']
    },
    '3814': {
      id: 3814,
      name: 'Edge of Night',
      sanitizedDescription: 'Blocks an incoming enemy spell.',
      tags: ['Health', 'Damage', 'Active', 'ArmorPenetration']
    },
    '3901': {
      id: 3901,
      name: 'Fire at Will',
      sanitizedDescription: 'Cannon Barrage gains extra waves',
      tags: []
    },
    '3902': {
      id: 3902,
      name: "Death's Daughter",
      sanitizedDescription: 'Cannon Barrage fires a mega-cannonball',
      tags: []
    },
    '3903': {
      id: 3903,
      name: 'Raise Morale',
      sanitizedDescription: 'Cannon Barrage hastes allies',
      tags: []
    },
    '3905': {
      id: 3905,
      name: 'Twin Shadows',
      sanitizedDescription: 'Increases Ability Power and Movement Speed',
      tags: ['SpellDamage', 'Active', 'CooldownReduction', 'Slow', 'NonbootsMovement']
    },
    '3907': {
      id: 3907,
      name: 'Spellbinder',
      sanitizedDescription:
        'Stores nearby spellcasts and can consume them to grant Movement Speed and Ability Power.',
      tags: ['SpellDamage', 'Active', 'NonbootsMovement']
    },
    '3916': {
      id: 3916,
      name: 'Oblivion Orb',
      sanitizedDescription: 'Increases magic damage',
      tags: ['Health', 'MagicPenetration', 'SpellDamage']
    },
    '4001': {
      id: 4001,
      name: 'Ghostwalkers (Melee Only)',
      sanitizedDescription: 'Enhances Movement Speed and grants temporary wall walking.',
      tags: ['Boots']
    },
    '4003': {
      id: 4003,
      name: 'Lifeline',
      sanitizedDescription: 'Marks the ground, and returns you there after a few moments',
      tags: ['Damage', 'NonbootsMovement', 'ArmorPenetration']
    },
    '4004': {
      id: 4004,
      name: 'Spectral Cutlass',
      sanitizedDescription: 'Marks the ground, and returns you there after a few moments',
      tags: ['Armor', 'Damage', 'NonbootsMovement', 'ArmorPenetration']
    },
    '4101': {
      id: 4101,
      name: "Pridestalker's Blade",
      sanitizedDescription: 'Kill monsters faster',
      tags: ['LifeSteal', 'ManaRegen', 'Slow', 'OnHit', 'NonbootsMovement', 'Jungle']
    },
    '4102': {
      id: 4102,
      name: 'Enchantment: Warrior',
      sanitizedDescription: 'Tons of Damage',
      tags: []
    },
    '4103': {
      id: 4103,
      name: 'Enchantment: Cinderhulk',
      sanitizedDescription: 'Increases bonus Health and burns nearby enemies',
      tags: []
    },
    '4104': {
      id: 4104,
      name: 'Enchantment: Runic Echoes',
      sanitizedDescription: 'Spells explode for bonus damage',
      tags: []
    },
    '4105': {
      id: 4105,
      name: 'Enchantment: Bloodrazor',
      sanitizedDescription: "Attacks deal bonus damage based on the target's maximum Health",
      tags: []
    },
    '4201': {
      id: 4201,
      name: "Doran's Lost Shield",
      sanitizedDescription: 'Good defensive starting item',
      tags: ['Health', 'HealthRegen', 'Lane']
    },
    '4202': {
      id: 4202,
      name: "Doran's Lost Blade",
      sanitizedDescription: 'Good starting item for attackers',
      tags: ['Damage', 'Health', 'Lane', 'LifeSteal']
    },
    '4203': {
      id: 4203,
      name: "Doran's Lost Ring",
      sanitizedDescription: 'Good starting item for casters',
      tags: ['Health', 'Lane', 'ManaRegen', 'SpellDamage']
    },
    '4204': {
      id: 4204,
      name: "Doran's Lost Idol",
      sanitizedDescription: 'Good starting item for Enchanters',
      tags: ['SpellDamage', 'ManaRegen', 'Lane']
    },
    '4301': {
      id: 4301,
      name: "Philosopher's Medallion",
      sanitizedDescription: "Grants gold and mana when nearby minions die that you didn't kill",
      tags: ['HealthRegen', 'ManaRegen', 'GoldPer', 'CooldownReduction', 'Lane']
    },
    '4302': {
      id: 4302,
      name: 'Heart of Targon',
      sanitizedDescription: 'Kill minions periodically to heal and grant gold to a nearby ally',
      tags: ['Health', 'HealthRegen', 'Aura', 'GoldPer', 'Lane']
    },
    '4401': {
      id: 4401,
      name: 'Force of Nature',
      sanitizedDescription: 'Movement Speed, Magic Resist, and max Health Regeneration',
      tags: ['SpellBlock', 'HealthRegen', 'NonbootsMovement']
    },
    '4402': {
      id: 4402,
      name: 'Innervating Locket',
      sanitizedDescription: 'Cast spells to heal',
      tags: ['Health', 'HealthRegen', 'Damage', 'Mana', 'ManaRegen', 'CooldownReduction']
    },
    '4403': {
      id: 4403,
      name: 'Stat-Stick of Stoicism',
      sanitizedDescription: 'Has ALL the stats',
      tags: [
        'Health',
        'SpellBlock',
        'HealthRegen',
        'Armor',
        'Damage',
        'CriticalStrike',
        'AttackSpeed',
        'LifeSteal',
        'SpellDamage',
        'Mana',
        'ManaRegen',
        'CooldownReduction',
        'NonbootsMovement'
      ]
    }
  },
  type: 'item',
  version: '9.2.1'
};

const itemValues = Object.values(items.data);
export const stackableItems = itemValues.filter(item => item.stacks).map(item => item.id);
export const additionalItems = itemValues
  .filter(item => item.tags && item.tags.includes('Trinket'))
  .map(item => item.id);
export const transformableItems = itemValues
  .filter(item => item.specialRecipe)
  .map(item => {
    return [item.specialRecipe, item.id];
  })
  .reduce((result, [key, val]) => Object.assign(result, { [key]: val }), {});

export default items;
