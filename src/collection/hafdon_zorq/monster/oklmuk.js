/**
 reskinned inkdevil
*/
module.exports = {
    name: 'Oklmuk',
    size: 'S',
    type: {
        type: 'fiend',
        tags: ['devil'],
    },
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [
        {
            ac: 14,
            from: ['unarmored defense'],
        },
    ],
    hp: {
        average: 54,
        formula: '12d6 + 12',
    },
    speed: {
        walk: 30,
        fly: {
            number: 5,
            condition: '(hover)',
        },
    },
    str: 12,
    dex: 18,
    con: 12,
    int: 20,
    wis: 8,
    cha: 18,
    save: {
        dex: '+6',
    },
    skill: {
        arcana: '+9',
        deception: '+8',
        history: '+9',
        stealth: '+8',
    },
    resist: [
        'cold',
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: "from nonmagical weapons that aren't silvered",
        },
    ],
    immune: ['fire', 'poison'],
    conditionImmune: ['poisoned'],
    senses: ['darkvision 120 ft.'],
    passive: 9,
    languages: [
        'Celestial',
        'Common',
        'Draconic',
        'Infernal; telepathy (120 ft.)',
    ],
    cr: '2',
    trait: [
        {
            name: "Devil's Sight",
            entries: [
                "Magical darkness doesn't impede the devil's darkvision.",
            ],
        },
        {
            name: 'Magic Resistance',
            entries: [
                'The devil has advantage on saving throws against spells and other magical effects.',
            ],
        },
    ],
    action: [
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., single target. {@h}11 ({@damage 2d6 + 4}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., single target. {@h}14 ({@damage 3d6 + 4}) slashing damage.',
            ],
        },
        {
            name: 'Disrupt Concentration',
            entries: [
                "Their sharp, shrill tongues and sharper claws make ink devils more distracting than their own combat prowess might indicate. As a bonus action, an ink devil can force a single foe within 30 feet of the ink devil to make a {@dc 13} Wisdom saving throw or lose concentration until the beginning of the target's next turn.",
            ],
        },
        {
            name: 'Corrupt Scroll',
            entries: [
                "An ink devil can corrupt the magic within any scroll by touch. Any such corrupted scroll requires a {@dc 13} Intelligence saving throw to use successfully. If the check fails, the scroll's spell affects the caster if it is an offensive spell, or it affects the nearest devil if it is a beneficial spell.",
            ],
        },
        {
            name: "Devil's Mark",
            entries: [
                "Ink devils can flick ink from their fingertips at a single target within 15 feet of the devil. The target must succeed on a Dexterity saving throw ({@dc 13}), or the affected creature gains a devil's mark—a black, red, or purple tattoo in the shape of an archduke's personal seal (most often Mammon or Totivillus but sometimes Arbeyach, Asmodeus, Beelzebub, Dispater, or others). Any devil's magic performed against the marked creature has advantage due to the mark, including touch spells, innate spell-like or supernatural abilities, and magic drawn from a scroll or other item by a devil. The mark can be removed only by a remove curse spell or comparable magic. In addition, the mark detects as faintly evil and often shifts its position on the body. Paladins, witchfinders, and some clerics may consider such a mark proof that a creature has made a pact with a devil.",
            ],
        },
    ],
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The ink devil's spellcasting ability is Charisma (spell save {@dc 14}). The ink devil can cast the following spells, requiring no material components:",
            ],
            will: [
                '{@spell detect magic}',
                '{@spell illusory script}',
                '{@spell invisibility}',
                '{@spell teleport} (self plus 50 lb. of objects only)',
            ],
            daily: {
                '1e': [
                    '{@spell glyph of warding}',
                    '{@spell planar ally} ({@dice 1d4}+1 {@creature lemure|mm|lemures} 40% or 1 ink devil 25%)',
                ],
            },
            ability: 'cha',
        },
    ],
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Ink%20Devil.png',
    traitTags: ["Devil's Sight", 'Magic Resistance'],
    senseTags: ['SD'],
    languageTags: ['CE', 'C', 'DR', 'I', 'TP'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],
    spellcastingTags: ['I'],
    isNamedCreature: true,
    isNpc: true,

    uniqueId: '31b1eeb958d90a87ece30f9b446d39d1',
};
