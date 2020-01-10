module.exports = {
    _meta: {
        sources: [
            {
                json: 'Limitless Adventures',
                abbreviation: 'LAS',
                full: 'Limitless Adventures',
                authors: ['Limitless Adventures'],
                convertedBy: ['FrankD'],
                version: '1.0',
                url: 'https://limitless-adventures.com/',
                targetSchema: '1.0.0',
            },
        ],
        dateAdded: 0,
    },
    adventure: [
        {
            name: 'Limitless Adventures',
            id: 'Limitless-1',
            source: 'Limitless Adventures',
            contents: [
                {
                    name: 'Urban Encounters',
                    headers: [
                        'Introduction',
                        'Watcher in the Well',
                        'Starved Dragon',
                        'The Shakedown',
                    ],
                },
            ],
            level: {
                start: 1,
                end: 4,
            },
            published: '2016',
            storyline: 'Varies',
        },
    ],
    adventureData: [
        {
            id: 'Limitless-1',
            source: 'Limitless Adventures',
            data: [
                {
                    type: 'section',
                    name: 'Urban Encounters',
                    entries: [
                        /**
                         * INTRODUC
                         */
                        {
                            type: 'entries',
                            name: 'Introduction',
                            entries: [
                                '{@b A Note on Our Limitless Encounters}',
                                'The purpose of this product is to make your life as DM easier. The following ten encounters, while linked by environment, are random. These encounters were purposefully not designed for a certain level range. Some encounters may require players to come up with solutions other than combat. The world is a scary place and sometimes you may have to run for your life.',
                                'These modules can be used to craft a random encounter table for travel and exploration, to fill in the hexes of a sandbox, or whenever your players wander to a location for which you had not yet prepared. Feel free to change the names, treasures, and the number of creatures as you see fit.',
                                {
                                    type: 'entries',
                                    name: 'Further Adventure',
                                    entries: [
                                        "Each Limitless Encounter will have a Further Adventure section to give the DM three ideas for additional quests that could spring from a seemingly random encounter. These hooks are merely suggestions for continuing a plot and should be used or ignored at your discretion. For example, if a hook suggests that the Duchess was the murderer, that is a just a possible twist you could build from and needn't be acted upon if it would disrupt your campaign.",
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'entries',
                            name: 'Watcher in the Well',
                            entries: [
                                {
                                    type: 'entries',
                                    name: 'Xp: 1800 Difficulty: 1800 Level: 4',
                                    entries: [
                                        '',
                                        {
                                            type: 'inset',
                                            name: 'Read this to the players:',
                                            entries: [
                                                "{@italic As you meander the streets, your quiet reverie is shattered by a woman screaming. You look towards the noise to see a young woman, her dark hair held back by a white handkerchief, drawing water from a stone well. The source of her terror, a monstrous creature made purely from brackish water, is climbing from the well's opening onto the street.}",
                                            ],
                                        },
                                    ],
                                },
                                '',
                                '{@creature Water Elemental|mm|Water Elemental (CR 5)}',
                                '{@b Enraged} The elemental fights until destroyed or until ten rounds have passed, after which he retreats back down the well',
                                {
                                    type: 'inset',
                                    name: 'Read this to the players:',
                                    entries: [
                                        '{@b Sophia; {@creature Commoner|mm|Commoner}}',
                                        '{@italic Medium Human; Neutral Good}',
                                        '{@b Traits:} beautiful, wild black hair',
                                        '{@bConditions:} Sophia has the {@condition stunned|phb|stunned condition}, and is knocked {@condition prone|phb|prone} by the {@creature Water Elemental|mm|elemental}',
                                    ],
                                },
                                "Left unchecked, the {@creature Water Elemental|mm|elemental} will begin to rampage the area for ten rounds before climbing back into the well. Too terrified to move out of the way, Sofia the washerwoman will be the monster's first victim.",
                                {
                                    type: 'entries',
                                    name: 'Treasure',
                                    entries: [
                                        '',
                                        'If defeated, the elemental leaves behind a small lapis lazuli statute of Dagon worth 50gp.',
                                    ],
                                },
                                {
                                    type: 'entries',
                                    name: 'Further Adventure',
                                    entries: [
                                        '',
                                        'The water from the well is unfit to drink; people are beginning to get sick...',
                                        'A rumor reaches the PCs of a similar attack, when two mephits ({@creature Steam Mephit|mm|Steam Mephit}, or  {@creature Mud Mephit|mm|Mud Mephit}) crawled out of a well on the other side of town...',
                                        'A cleric appears in town, selling jars of clean water for an exorbitant price...',
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'entries',
                            name: 'Starved Dragon',
                            entries: [
                                {
                                    type: 'entries',
                                    name: 'Xp: 50 Difficulty: 125 Level: 1',
                                    entries: [
                                        '',
                                        {
                                            type: 'inset',
                                            name: 'Read this to the players:',
                                            entries: [
                                                '{@italic As you pass a darkened alley, you hear sounds of struggle: guttural growls and high-pitched yelps. A closer look reveals two rats the size of an average dog tearing at a tiny purple-colored dragon the size of a house cat. The little dragon seems to be on the losing side of the battle, with one rat gripping his left wing in its jaws and preventing it from flying away.}',
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'entries',
                                    name: 'Skills Challenge',
                                    entries: [''],
                                },
                                '',
                                {
                                    type: 'inset',
                                    name: '8 successes before 3 failures',
                                    entries: [
                                        '',
                                        'If uninterrupted, the two rats will kill the wounded dragon and drag it off into the sewers. If the players aid the tiny dragon by killing or driving off the rats, a skills challenge will open. Do not tell the PCs which skills to roll, let them approach the challenge in their own way. The skills below are just suggestions of the most common approaches; if your players come up with solutions not listed below, reward their creativity.',
                                        '{@b After 3 Failures:} After rolling three failures, the dragon flies away bored.',
                                        '',
                                        'Suggested Skills',
                                        '{@b Handle Animal:} DC 15- Allow unlimited usage of this skill',
                                        '{@b Nature:} DC 15',
                                        '{@b Insight:} DC 5- the animal seems wounded and very hungry, maximum of one success using this skill',
                                        '{@b Medicine:} DC 12- maximum of one success through the use of this skill',
                                        '{@b Arcana:} DC 15- maximum of one success through the use of this skill',
                                        '{@b Performance:} DC 15- DC 12- maximum of two successes through the use of this skill',
                                        "{@b Speaking in Draconic:} grants speaker advantage on rolls, but doesn't net a success by itself",
                                        '{@b Dragonborn Characters:} This character rolls with advantage',
                                        '{@b Food:} Offering the Pseudodragon meat grants that player advantage on his next roll in the challenge, this tactic is usable a maximum of two times',
                                        '{@b Intimidation:} This tactics ends the challenge, and the frightened dragon flies away clumsily on its wounded wings',
                                        "{@b Persuasion:} You're trying to persuade an animal (albeit a smart one) to do something, that's Handle Animal",
                                    ],
                                },
                                '',
                                {
                                    type: 'entries',
                                    name: 'Creatures',
                                    entries: [
                                        '',
                                        '{@creature Giant Rat|mm|Giant Rats}',
                                        '{@creature Pseudodragon|mm|Pseudodragon}',
                                    ],
                                },
                                {
                                    type: 'entries',
                                    name: 'Treasure',
                                    entries: [
                                        '',
                                        'Success means that the dragon will accompany the party for a short time, perhaps a few days or on their next adventure, before growing bored and flying off. Partial success could mean that the dragon􂀙s curiosity has been piqued and it will stay near the party for a short time and afford a second chance to befriend it.',
                                    ],
                                },
                                {
                                    type: 'entries',
                                    name: 'Further Adventure',
                                    entries: [
                                        '',
                                        'The dragon leads the PCs to the body of a dead adventurer, whose purse contains 112 gp in foreign coins...',
                                        'The {@creature Archmage|mm|archmage} owner of the dragon comes looking for it, is he a powerful foe or a kindly benefactor...',
                                        'The dragon keeps leading to the PCs to the sewer where his mate is trapped...',
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'entries',
                            name: 'The Shakedown',
                            entries: [
                                {
                                    type: 'entries',
                                    name: 'Xp: 400 Difficulty: 800 Level: 3',
                                    entries: [
                                        '',
                                        {
                                            type: 'inset',
                                            name: 'Read this to the players:',
                                            entries: [
                                                '{@italic You find yourselves surrounded by four menacing-looking individuals, intent on lightening you of your burdensome purse. Not skillful enough to lift your coins, these brutes simply demand all of your money or else.}',
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'entries',
                                    name: 'Creatures',
                                    entries: [
                                        '',
                                        '{@creature Thug|mm|Thugs}',
                                        'The thugs - Chance, Brek, Stone, and Brom - cannot be reasoned with, and bribes only drive them to greater greed. A DC 20 Intimidation check could scare the brutes away (roll for each), but combat is most likely the outcome. The thugs fight until they are brought to a quarter of their maximum hit points before fleeing.',
                                    ],
                                },
                                '',
                                {
                                    type: 'entries',
                                    name: 'Treasure',
                                    entries: [
                                        '',
                                        'Each thug carries {@dice 1d12} gp worth of assorted coinage.',
                                    ],
                                },
                                {
                                    type: 'entries',
                                    name: 'Further Adventure',
                                    entries: [
                                        '',
                                        'The thugs are trying to extort enough money to cure their friend, Kendall, of Mummy Rot...',
                                        'The thugs are being extorted by a new and violent thieves guild...',
                                        'One of the thugs appears to be an NPC that died some time ago...',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
