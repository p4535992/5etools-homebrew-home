module.exports = {
    name: 'Tusternoof, or The Twisted One',
    size: 'M',
    type: 'fiend',
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [
        12,
        {
            ac: 16,
            condition: 'with {@spell mage armor}',
            braces: true,
        },
    ],
    hp: {
        average: 36,
        formula: '8d8',
    },
    speed: {
        walk: 30,
        climb: 30,
    },
    str: 12,
    dex: 16,
    con: 10,
    int: 14,
    wis: 12,
    cha: 16,
    save: {
        int: '+4',
        cha: '+5',
    },
    skill: {
        arcana: '+4',
        history: '+4',
        athletics: '+5',
        nature: '+6',
        stealth: '+7',
        perception: '+3',
    },
    resist: [
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    immune: ['poison'],
    conditionImmune: ['exhaustion', 'poisoned'],
    senses: ['darkvision 60 ft.'],
    passive: 13,
    languages: ['Common', 'Underdark', 'Abyssal'],
    cr: '4',
    action: [
        {
            name: 'Horned Vine',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h} 6 ({@damage 1d6 + 2}) slashing plus 9 ({@damage 2d6 + 2}) necrotic damage.',
                "TODO: consider applying the cave fisher's grapple/attackable arms mechanism to this",
            ],
        },
    ],
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Tusternoof's innate spellcasting ability is Charisma (spell save {@dc 13}). It can innately cast the following spells, requiring no material components:",
            ],
            will: [
                '{@spell detect magic}',
                '{@spell disguise self}',
                '{@spell mage armor}',
            ],
            ability: 'cha',
        },
        {
            name: 'Spellcasting',
            headerEntries: [
                'Tusternoof is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell chill touch}',
                        '{@spell eldritch blast}',
                        '{@spell mage hand}',
                    ],
                },
                '3': {
                    spells: [
                        '{@spell arms of Hadar}',
                        '{@spell dispel magic}',
                        '{@spell hold person}',
                        '{@spell hunger of Hadar}',
                        '{@spell invisibility}',
                        '{@spell phantasmal force|PHB}',
                    ],
                    slots: 2,
                    lower: 1,
                },
            },
            ability: 'cha',
        },
    ],
    environment: ['urban'],

    senseTags: ['D'],
    spellcastingTags: ['I', 'CL'],
    damageTags: ['N'],
    miscTags: ['MW'],
    languageTags: ['C', 'AB'],
    fluff: {
        name: 'Tusternoof',
        source: 'zorq',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MTF/Deathlock.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                name: 'Created by Baphomet',
                entries: [
                    'Baphomet is able to create Tusternoof.',
                    "An extraordinarily powerful necromancer might also discover the dark methods of creating Tusternoof and then bind it to service, acting in this respect as Tusternoof's patron.",
                ],
            },
            {
                name: 'Obedient and Obsessed',
                type: 'entries',
                entries: [
                    "An overpowering urge to serve consumes the mind of Tusternoof. All goals and ambitions it had in life that don't please its patron fall away as its master's desires become the purpose that drives Tusternoof. The creature immediately resumes work on its patron's behalf. Accomplishing a difficult goal might mean Tusternoof is forced to serve another powerful creature or might entail in gathering servants of its own.",
                    "Whatever the goal, it always reflects the patron's interests, ranging from small-scale concerns to matters of cosmic scope. Tusternoof in the thrall of a fiend might work to destroy a specific temple dedicated to a good god, while one that serves a Great Old One could be charged with hunting for the materials needed to call forth a horrifying entity into the world.",
                ],
            },
            {
                name: 'Lord of the Maze',
                type: 'entries',
                entries: [
                    'Tusternoof creates and maintains a vegetal maze for its creator, Baphomet.',
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MTF/Deathlock.png?v=1.94.5',
    shortName: 'Tusternoof',
};
