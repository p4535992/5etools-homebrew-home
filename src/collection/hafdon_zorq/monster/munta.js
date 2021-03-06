module.exports = {
    name: 'Munta',
    size: 'L',
    isNpc: true,
    type: { type: 'monstrosity', tags: ['minotaur'] },
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [
        {
            ac: 14,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 76,
        formula: '9d10 + 27',
    },
    speed: {
        walk: 40,
    },
    str: 18,
    dex: 11,
    con: 16,
    int: 6,
    wis: 16,
    cha: 9,
    skill: {
        perception: '+7',
    },
    senses: ['darkvision 60 ft.'],
    passive: 17,
    languages: ['Abyssal'],
    cr: '3',
    trait: [
        {
            name: 'Charge',
            entries: [
                'If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 ({@damage 2d8}) piercing damage. If the target is a creature, it must succeed on a {@dc 14} Strength saving throw or be pushed up to 10 ft. away and knocked {@condition prone}.',
            ],
        },
        '{@$trait labyrinthine recall|zorq}',
        '{@$trait reckless|zorq}',
    ],
    action: [
        {
            name: 'Greataxe',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}17 ({@damage 2d12 + 4}) slashing damage.',
            ],
        },
        {
            name: 'Gore',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) piercing damage.',
            ],
        },
    ],

    environment: ['underdark'],

    traitTags: ['Charge', 'Reckless'],
    languageTags: ['AB'],
    senseTags: ['D'],
    damageTags: ['S', 'P'],
    miscTags: ['MW'],
    srd: true,
    fluff: {
        name: 'Minotaur',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Minotaur.jpg',
                },
            },
        ],
        entries: [
            "A minotaur's roar is a savage battle cry that most civilized creatures fear. Born into the mortal realm by demonic rites, minotaurs are savage conquerors and carnivores that live for the hunt. Their brown or black fur is stained with the blood of fallen foes, and they carry the stench of death.",
            {
                name: 'The Beast Within',
                type: 'entries',
                entries: [
                    'Most minotaurs are solitary carnivores that roam labyrinthine dungeons, twisting caves, primeval woods, and the maze-like streets and passages of desolate ruins. A minotaur can visualize every route it might take to close the distance to its prey.',
                    "The scent of blood, the tearing of flesh, and the cracking of bones spur a minotaur's lust for carnage, overwhelming all thought and reason. In a blood rage, a minotaur charges anything it sees, butting and goring like a battering ram, then chopping the fallen in twain.",
                    "Apart from ambushing creatures that wander into its labyrinth, a minotaur cares little for strategy or tactics. Minotaurs seldom organize, they don't respect authority or hierarchy, and they are notoriously difficult to enslave, let alone control.",
                ],
            },
            {
                name: 'Cults of the Horned King',
                type: 'entries',
                entries: [
                    'Minotaurs are the dark descendants of humanoids transformed by the rituals of cults that reject the oppression of authority by returning to nature. Inductees often mistake these cults for druidic circles or totemic religions whose ceremonies involve entering a labyrinth while wearing a ceremonial animal mask.',
                    "Within these bounded environments, cultists hunt, kill, and eat wild beasts, indulging their basest primal urges. In the end, however, sacrificial animals are exchanged for humanoid sacrifice-sometimes an inductee that tried to escape the cult after learning its secrets. These labyrinths become blood-soaked halls of slaughter, echoing to the cultists' savagery.",
                    "Unknown to all but their highest-ranking leaders, these mystery cults are creations of the demon lord Baphomet, the Horned King, whose layer of the Abyss is a gigantic labyrinth. Some of his followers are fervent supplicants that plead for strength and power. Others come to the cult seeking a life free from authority's chains-and are liberated of their humanity instead as Baphomet transforms them into the minotaurs that echo his own savage form.",
                    "Although they begin as creations of the Horned King, minotaurs can breed true with one another, giving rise to an independent race of Baphomet's savage children in the world.",
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Minotaur.png?v=1.94.4',
};
