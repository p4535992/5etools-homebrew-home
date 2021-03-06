module.exports = {
    name: 'Sigmurch',
    size: 'S',
    type: {
        type: 'humanoid',
        tags: ['xvart'],
    },
    source: 'zorq',
    alignment: ['E'],
    ac: [
        12,
        {
            ac: 15,
            condition: 'with {@spell mage armor}',
            braces: true,
        },
    ],
    hp: {
        average: 22,
        formula: '5d6 + 5',
    },
    speed: {
        walk: 30,
    },
    str: 6,
    dex: 14,
    con: 12,
    int: 10,
    wis: 12,
    cha: 14,
    skill: {
        history: '+4',
        insight: '+5',
        persuasion: '+6',
        religion: '+4',
    },
    senses: ['darkvision 30 ft.'],
    passive: 11,
    languages: ['Abyssal', 'Common'],
    cr: '1',
    trait: [
        {
            name: 'Low Cunning',
            entries: [
                'The xvart can take the Disengage action as a bonus action on each of its turns.',
            ],
        },
        {
            name: 'Overbearing Pack',
            entries: [
                "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't {@condition incapacitated}.",
            ],
        },
        {
            name: "Raxivort's Tongue",
            entries: [
                'The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats.',
            ],
        },
    ],
    action: [
        {
            name: 'Scimitar',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) slashing damage.',
            ],
        },
    ],
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The xvart's innate spellcasting ability is Charisma. it can innately cast the following spells, requiring no material components:",
            ],
            will: ['{@spell detect magic}', '{@spell mage armor} (self only)'],
            ability: 'cha',
        },
        {
            name: 'Spellcasting',
            headerEntries: [
                'The xvart is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell eldritch blast}',
                        '{@spell mage hand}',
                        '{@spell minor illusion}',
                        '{@spell poison spray}',
                        '{@spell prestidigitation}',
                    ],
                },
                '2': {
                    spells: [
                        '{@spell burning hands}',
                        '{@spell expeditious retreat}',
                        '{@spell invisibility}',
                        '{@spell scorching ray}',
                    ],
                    slots: 2,
                    lower: 1,
                },
            },
            ability: 'cha',
        },
    ],
    environment: ['hill', 'underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/545/xvart-warlock-of-raxivort.mp3',
    languageTags: ['AB', 'C'],
    senseTags: ['D'],
    spellcastingTags: ['I', 'CL'],
    damageTags: ['S'],
    miscTags: ['MW'],
    fluff: {
        name: 'Xvart Warlock of Raxivort',
        source: 'VGM',
        entries: [
            {
                type: 'entries',
                entries: [
                    "Xvarts are cruel, cowardly humanoids spawned by a cowardly, renegade demigod. They have blue skin, vivid orange eyes, and receding hairlines, mirroring their creator's appearance. They stand about 3 feet tall.",
                    "Xvarts live in remote hills, forests, and caves. Each tribe is led by a speaker, who is usually the brightest one among them. The speaker serves as the tribe's ambassador, and often dons short wooden stilts and heavy robes to look taller and more imperious. The rest of the tribe hunts for food, plundering crops and livestock from nearby farms if the hunt goes poorly. Xvarts aren't much of a threat to civilized locations because they are somewhat fearful of humans, dwarves, and elves.",
                    {
                        name: "Raxivort's Betrayal",
                        entries: [
                            " All xvarts are the degenerate offspring of an entity named Raxivort, who once served Graz'zt the Dark Prince as treasurer. Raxivort spent long centuries watching over the treasury, and in time he grew to lust after his master's riches. In one bold move, he plundered a treasure vault and fled to the Material Plane. One of the treasures he stole was the Infinity Spindle, a crystalline shard from the early days of the multiverse that could transform even a creature as low as Raxivort into a demigod.",
                            "After he ascended to godhood, Raxivort forged a realm called the Black Sewers, within Pandesmos, the topmost layer of Pandemonium. He enjoyed his divine ascension only briefly, though, before Graz'zt unleashed his vengeance. The demon prince had no need to regain the Infinity Spindle, since he already possessed power greater than what it could grant. Instead, he dispatched agents far and wide to spread news of what the spindle could do and the puny, pathetic creature that claimed its ownership. Soon enough, Raxivort was pursued by a variety of enemies, all eager to claim the Spindle as their own.",
                            "In the face of his imminent destruction, Raxivort hatched a plan. Fleeing to the Material Plane, he wandered across a variety of worlds and spawned creatures that were his exact duplicate. These are the xvarts, creatures that not only look identical to Raxivort in appearance but also foil any magic used to track him down. Spells, rituals, and other effects that could reveal Raxivort's location instead point to the nearest xvart.",
                            'Although the initial rush of enemies against him has subsided, Raxivort knows that the planar powers are patient. He remains in hiding, a wretch of a demigod who does little more than wander the planes, spawning ever more xvarts to ensure his continued safety.',
                            "When things go badly for them, they kidnap whoever's handy and sacrifice them to their craven god. Hmm. I guess they're not so different from a lot of humans, after all.",
                            '-Volo',
                            "Despite their muddled nature, all xvarts have an unshakable devotion to Raxivort. The desire to please Raxivort weighs heavily on all their decisions. When things aren't going well for them, xvarts naturally assume that Raxivort is angry. To appease their troubled lord, they stage kidnappings. They fashion nets to capture their enemies, which are dragged back to the lair and sacrificed on a makeshift altar. Raxivort can hear their supplications, but he's too afraid to come out of hiding most of the time. Occasionally, he does appear before a tribe of worshipers as a 9-foot-tall xvart carrying an empty sack. In every such instance, Raxivort takes all of the treasure that the tribe has accumulated, stuffs it in his sack, and disappears, leaving nothing behind as compensation.",
                            'Xvart Speakers',
                            'A xvart tribe has one speaker that serves as its leader. The speaker has the statistics of a normal xvart, except that it has an Intelligence of 13 (+1) and knows one additional language (usually Common or Goblin).',
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Greedy Thugs',
                        entries: [
                            " Xvarts have all of their creator's flaws and few redeeming qualities. They lack the physical equipment to reproduce, as well as the inclination to do so. They are greedy, conniving, and obsessed with the acquisition of valuables-the more ornate or bizarre, the better. They know they are flawed, and this minor amount of self-awareness only magnifies their other deficiencies . They hate almost any creature they perceive as better than they are, which includes almost anyone, but they lack the courage or wherewithal to act on their hatred most of the time. Their fear has led them to dwell either in gloomy places on the far fringes of civilized lands or in areas neglected or forgotten by mightier creatures. In other words, xvarts usually live in places where normal vermin might flourish.",
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Vermin Masters',
                        entries: [
                            " Rats and bats (including giant-sized specimens) are naturally attracted to xvarts, and xvarts domesticate such beasts for food and battle. Xvarts also form alliances with wererats, although the lycanthropes are dominant in any such arrangement. This relationship traces back to Raxivort's divine nature. Even though the xvarts inherited Raxivort's greed and cowardice, they also gained his ability to form bonds with such creatures.",
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Xvart Warlocks',
                        entries: [
                            " A xvart can forge a pact with Raxivort by stealing an item of such great value that the demigod himself appears before the xvart to claim it. After surrendering the item to Raxivort, the xvart asks for magical power so that it can find and deliver more great treasures into Raxivort's custody. If the demigod feels so inclined, he imbues the xvart with greater wisdom and charisma and grants it the spellcasting abilities of a warlock before returning to the howling chaos of",
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Pandemonium',
                        entries: [
                            " Raxivort's warlocks are respected and feared in xvart society, but they have little interest in political power. They scour the wilderness, old ruins, and dungeons for treasures, often with a handful of xvart sycophants and giant rat bodyguards in tow.",
                        ],
                        type: 'entries',
                    },
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/VGM/Xvart Warlock of Raxivort.png?v=1.94.8',
};
