module.exports = {
    name: 'Graal',
    size: 'L',
    type: {
        type: 'monstrosity',
        tags: ['Girallon', 'she, her'],
    },
    source: 'zorq',
    alignment: ['U'],
    ac: [13],
    hp: {
        average: 59,
        formula: '7d10 + 21',
    },
    speed: {
        walk: 40,
        climb: 40,
    },
    str: 18,
    dex: 16,
    con: 16,
    int: 5,
    wis: 12,
    cha: 7,
    skill: {
        perception: '+3',
        stealth: '+5',
    },
    senses: ['darkvision 60 ft.'],
    passive: 13,
    cr: '4',
    trait: [
        {
            name: 'Aggressive',
            entries: [
                'As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see.',
            ],
        },
        {
            name: 'Apperarance & Mannerisms',
            entries: [
                'Completely silver-white fur. Two smaller arms under pectorals. Created to serve as guardian for a previous (dwarf?) empire. ',
                'Suspicious but gracious?',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The girallon makes five attacks: one with its bite and four with its claws.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one creature. {@h}7 ({@damage 1d6 + 4}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 6} to hit. reach 10 ft., one target. {@h}7 ({@damage 1d6 + 4}) slashing damage.',
            ],
        },
    ],

    environment: ['forest'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/219/girallon.mp3',
    traitTags: ['Aggressive'],
    actionTags: ['Multiattack'],
    senseTags: ['D'],
    damageTags: ['P', 'S'],
    miscTags: ['MW', 'RCH'],
    fluff: {
        name: 'Girallon',
        source: 'VGM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/VGM/Girallon.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                entries: [
                    'A girallon looks like an oversized, four-armed ape with gray skin and white fur. Its fangs and claws set it apart from a normal ape, revealing it to be a monstrous predator.',
                    {
                        name: 'Forest Hunters',
                        entries: [
                            " Girallons are most common in temperate or warm forest environments abundant with life. They share the ape's adeptness at climbing, although these half-ton creatures shy away from scaling trees that can't support their bulk. Instead, they stalk the forest floor, lurk in narrow ravines or shallow caves, or hide in ruined sites while waiting for prey to come near. A girallon is surprisingly stealthy, considering its size and its lack of camouflage.",
                            'Girallons form loose bands of several individuals and their offspring, usually led by a dominant adult that also tends to be the oldest member of the group. When on the hunt away from their lair, girallons use roars and body language to communicate with one another over distance. Each individual typically hunts alone and widely separated from the others, to ensure that everyone gets adequate fodder. The leader might organize members to work together to make a big kill. If they succeed, everyone in the group shares the spoils, with the best parts going to mothers caring for their young.',
                            "In the time since then, numerous creatures have tried to tame, subjugate, or cooperate with the monsters. For instance, yuan-ti enslave girallons, turning them into border sentinels for their serpent kingdoms. Because girallons are known to be peaceful among their own kind, some humanoids have learned how to approach a group's leader, offering food and other gifts in hopes of establishing an alliance with the creatures.",
                            "Girallons that are well treated might be willing to serve as guards, though they lack the intelligence to take on tasks more complicated than attacking strangers that enter their domain. If one is taken young and properly trained, a girallon could end up in a seemingly unlikely place, such as guarding the entrance to a city's thieves' guild. Those who would keep a girallon as a pet must always be wary, because the creature could revert to its predatory nature at any time.",
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Wall Climbers',
                        entries: [
                            ' The ruins of humanoid habitations, especially those found in deep forests and jungles, seem to attract girallons. They move effortlessly along stairs and balconies, as well as on the sloped rooftops and buttresses of such formations. To a girallon, a city\'s buildings are just another sort of forest-and better yet, one whose uppermost "branches" can easily support the creatures. In such a setting, the girallons take full advantage of their skill in climbing. The creatures can easily scale walls and battlements, and they perch on tower tops and other high vantages to keep an eye on the surrounding area.',
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Magical Origin',
                        entries: [
                            " The social habits of wild girallons are unusual for apes, as is their instinctive attraction to humanoid structures. These facts, together with the girallon's appearance, lead sages to believe that girallons were created through magic to serve as guardians for some lost empire. When that empire fell ages ago, girallons turned feral and spread out across the world.",
                        ],
                        type: 'entries',
                    },
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/VGM/Girallon.png?v=1.94.4',
};
