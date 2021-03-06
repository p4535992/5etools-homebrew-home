module.exports = {
    name: 'Three School Mask',
    wondrous: true,
    weight: 1,
    rarity: 'Rare',
    source: 'zorq',

    entries: [
        {
            name: 'Donning the mask',
            entries: [
                'The mask is nigh indestructible. When the creature creature wearing the mask is destroyed, the mask usually survives and breaks free. On its own, the object detects as magical with mixed enchantment and necromantic auras. It is a tempting souvenir, but anyone foolish enough to don the mask is immediately wracked by pain and takes 7 ({@dice 2d6}) necrotic damage. The character must make a successful DC 15 Wisdom saving throw or become dominated by the mask. The domination arrives slowly. The character acts normally for a day or two, but then the character notices periods of time that cannot be accounted for. During these times, the character [...]. This process takes a week, after which the character is freed from domination as the undead creature is reborn.',
            ],
        },
    ],
    attachedSpells: ['animal friendship'],
    recharge: 'dawn',
};
