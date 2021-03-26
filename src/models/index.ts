export interface HeroModel {
    id: number;
    name: string;
    shortName: string;
    urlIcon: string;
    urlLg: string;
    urlFull: string;
    urlVert: string;
    talents?: TalentModel[];
    abilities?: AbilityModel[];
    // attr: 'str' | 'agi' | 'int';
    attr: string;
}

export interface ItemModel {
    id: number;
    name: string;
    shortName: string;
    url: string;
    isBoots: boolean;
    cost: number;
}

export interface ResultModel {
    hero: HeroModel | undefined;
    boot: ItemModel | undefined;
    items: ItemModel[];
}

export interface AbilityModel {
    id: number;
    shortName: string;
    name?: string;
    description?: string;
    cooldown?: string;
    manacost?: string;
}

export interface TalentModel {
    id: number;
    name?: string;
    shortName: string;
}

export interface HeroFromApi {
    id: number;
    name: string;
    displayName: string;
    shortName: string;
    abilities: [
        {
            slot: number;
            abilityId: number
        }
    ];
    roles: [
        {
            roleId: number;
            level: number
        }
    ];
    stat:  {
        gameVersionId: number;
        enabled: boolean;
        heroUnlockOrder: number;
        team: boolean;
        cmEnabled: boolean;
        newPlayerEnabled: boolean;
        attackType: 'Melee' | 'Ranged';
        startingArmor: number;
        startingMagicArmor: number;
        startingDamageMin: number;
        startingDamageMax: number;
        attackRate: number;
        attackAnimationPoint: number;
        attackAcquisitionRange: number;
        attackRange: number;
        primaryAttribute: 'str' | 'agi' | 'int';
        heroPrimaryAttribute: number;
        strengthBase: number;
        strengthGain: number;
        intelligenceBase: number;
        intelligenceGain: number;
        agilityBase: number;
        agilityGain: number;
        hpRegen: number;
        mpRegen: number;
        moveSpeed: number;
        moveTurnRate: number;
        hpBarOffset: number;
        visionDaytimeRange: number;
        visionNighttimeRange: number;
        complexity: number;
    };
    talents: [
        {
            slot: number;
            abilityId: number;
            gameVersionId: number
        },
    ];
    language: {
      heroId: number,
      gameVersionId: number,
      languageId: number,
      displayName: string;
      bio: string;
      hype: string;
    };
    aliases: [
      string
    ]
}

export interface AbilityFromApi {
    id: number;
    name: string;
    uri: string;
    attributes: [
      {
        abilityId: number;
        gameVersionId: number;
        name: string;
        value: string;
        linkedSpecialBonusAbilityId: number;
        requiresScepter: boolean
      }
    ];
    language: {
      abilityId: number;
      gameVersionId: number;
      languageId: number;
      displayName: string;
      description: string;
      descriptionArray: [
        string
      ];
      attributes: string;
      attributesArray: [
        string
      ];
      lore: string;
      aghanimDescription: string;
      notes: string;
      notesArray: [
        string
      ];
      shardDescription: string
    };
    stat: {
      abilityId: number;
      gameVersionId: number;
      type: number;
      behavior: number;
      unitTargetType: number;
      unitTargetTeam: number;
      unitTargetFlags: number;
      unitDamageType: number;
      spellImmunity: number;
      modifierSupportValue: number;
      modifierSupportBonus: number;
      isOnCastbar: boolean;
      isOnLearnbar: boolean;
      fightRecapLevel: number;
      isGrantedByScepter: boolean;
      hasScepterUpgrade: boolean;
      maxLevel: number;
      levelsBetweenUpgrades: number;
      requiredLevel: number;
      hotKeyOverride: string;
      displayAdditionalHeroes: boolean;
      castRange: string;
      castRangeArray: [ number ];
      castRangeBuffer: string;
      castRangeArrayBuffer: [ number ];
      castPoint: string;
      castPointArray: [ number ];
      channelTime: string;
      channelTimeArray: [ number ];
      cooldown: [ number ];
      cooldownArray: [ number ];
      damage: string;
      hasDamage: boolean;
      damageArray: [ number ];
      manaCost: [ number ];
      manaCostArray: [ number ];
      isUltimate: boolean;
      duration: string;
      charges: string;
      chargeRestoreTime: string;
      isGrantedByShard: boolean
    };
    drawMatchPage: boolean;
    languages: [
      {
        abilityId: number;
        gameVersionId: number;
        languageId: number;
        displayName: string;
        description: string;
        descriptionArray: [
          string
        ];
        attributes: string;
        attributesArray: [
          string
        ];
        lore: string;
        aghanimDescription: string;
        notes: string;
        notesArray: [
          string
        ];
        shardDescription: string
      }
    ];
    isTalent: boolean;
    isTalentGoldIncome: boolean;
    talentGoldIncomeValue: number;
}
