module.exports = {
    name: 'Spirit of the Twisted Maze',
    size: 'M',
    type: { type: 'fiend', tags: ['Skulk'] },
    source: 'zorq',
    alignment: ['C', 'N'],
    ac: [13],
    hp: {
        formula: '4d8 + 10',
        average: 28,
    },
    speed: {
        walk: 30,
    },
    str: 12,
    dex: 17,
    con: 12,
    int: 10,
    wis: 7,
    cha: 1,
    save: {
        con: '+3',
    },
    skill: {
        stealth: '+7',
        athletics: '+3',
        perception: '+0',
    },
    immune: [],
    conditionImmune: ['blinded'],
    senses: ['darkvision 120 ft.'],
    passive: 10,
    languages: ['Common'],
    cr: '1',
    trait: [
        {
            name: 'Trackless',
            entries: [
                "The spirit leaves no tracks to indicate where it has been or where it's headed.",
            ],
        },
    ],
    action: [
        {
            name: 'Claws',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d4 + 4}) slashing damage. If the spirit has advantage on the attack roll, the target also takes 10 ({@damage 3d6}) necrotic damage.',
            ],
        },
    ],
    environment: ['coastal', 'forest', 'swamp', 'underdark', 'urban'],
    languageTags: ['C'],
    senseTags: ['SD'],
    damageTags: ['S', 'N'],
    miscTags: ['MW'],
    fluff: {
        name: 'Skulk',
        source: 'MTF',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MTF/Skulk.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                name: 'Skulk',
                entries: [
                    'Skulks are the soulless shells of travelers who became lost in the Shadowfell, wandering its gray wastes until they lost all sense of self. They are so devoid of identity that they have become permanently invisible. Only children can see a skulk without the help of a mirror or a special candle. On the rare occasions when a skulk is visible, it appears as a drab, featureless, hairless humanoid.',
                ],
            },
            {
                name: 'Summoned Servants',
                type: 'entries',
                entries: [
                    "A skulk can be summoned from the Shadowfell by performing a ritual. If the creature is given a portion of the summoner's identity, the skulk is bound to obey the summoner's commands for 30 days. If a skulk is visible, an astute observer might deduce who summoned it, because a skulk assumes a vague likeness of its master.",
                    "Cruel and chaotic, skulks carry out their orders in the most violent manner possible. A summoned skulk can't return to the Shadowfell until it dies, so it has every motivation to throw itself into creating bloodshed and mayhem.",
                ],
            },
            {
                name: 'Hollow Lives',
                type: 'entries',
                entries: [
                    "After killing a person in the material world, a skulk sometimes takes up a silent imitation of that person's life. In extreme cases, skulks have invaded villages, killed all the occupants, and turned the places into seeming ghost towns, where flavorless food is prepared daily, colorless clothes are hung up to dry, and livestock is shifted from pen to pen until it starves.",
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MTF/Skulk.png?v=1.94.4',
    spellcasting: [
        {
            name: 'Spellcasting',
            spells: {
                '0': {
                    spells: [
                        '{@spell infestation|XGE}',
                        '{@spell mind sliver|UASorcererAndWarlock}',
                        '{@spell thorn whip|PHB}',
                    ],
                },
            },
            ability: 'int',
        },
    ],
};
