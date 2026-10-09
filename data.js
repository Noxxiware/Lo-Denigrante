// ========================================
// DATOS DE LOS JUGADORES
// ========================================

const players = [
    {
        name: "walaten",
        region: "Argentina"
    },
    {
        name: "Nubsudo",
        region: "Argentina"
    },
    {
        name: "Noxxiware",
        region: "Chile"
    },
    {
        name: "Emmaniel",
        region: "Colombia"
    },
    {
        name: "Macuin_K95",
        region: "Chile"
    },
    {
        name: "benj1_2",
        region: "México"
    }
];

// ========================================
// TIERS
// ========================================

const kitPlayers = {

    Vanilla: {
        T1: ["walaten", "Nubsudo"],
        T2: [],
        T3: ["Emmaniel", "Noxxiware"]
    },

    UHC: {
        T1: ["Nubsudo"],
        T2: ["walaten", "Emmaniel"],
        T3: ["Macuin_K95"]
    },

    Pot: {
        T1: ["walaten"],
        T2: ["Nubsudo"],
        T3: ["Noxxiware", "Emmaniel"]
    },

    NethOP: {
        T1: ["Emmaniel"],
        T2: ["walaten"],
        T3: ["Nubsudo", "Noxxiware"]
    },

    SMP: {
        T1: [],
        T2: ["Nubsudo", "walaten", "Noxxiware"],
        T3: ["Emmaniel", "Macuin_K95"]
    },

    Sword: {
        T1: ["walaten"],
        T2: ["Nubsudo"],
        T3: ["Emmaniel"]
    },

    Axe: {
        T1: ["Nubsudo", "walaten"],
        T2: ["Emmaniel"],
        T3: ["Macuin_K95"]
    },

    Mace: {
        T1: ["walaten", "Emmaniel"],
        T2: ["Nubsudo"],
        T3: ["Macuin_K95"]
    }

};

// ========================================
// RETIREMENT Y PEAK TIER
// ========================================

const playerStatus = {

    walaten: {
        Vanilla: {peak:"T1", retired: true},
        UHC: {peak:"T1", retired: true},
        Pot: {peak:"T1", retired: true}
    },

    Noxxiware: {
        Vanilla: {peak:"T3", retired: true},
        SMP: {peak:"T1", retired: true}

    }

};