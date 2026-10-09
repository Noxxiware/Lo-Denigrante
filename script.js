const tierPoints = {
    T1: 60,
    T2: 30,
    T3: 10
};

function getPlayerPoints(playerName) {

    let totalPoints = 0;

    Object.keys(kitPlayers).forEach(function(kit) {

        let currentTier = null;

        Object.keys(kitPlayers[kit]).forEach(function(tier) {

            if (kitPlayers[kit][tier].includes(playerName)) {
                currentTier = tier;
            }

        });

        if (!currentTier) {
            return;
        }

        const status = playerStatus[playerName]?.[kit];

        const tierValue = {
            T1: 1,
            T2: 2,
            T3: 3
        };

        let pointsTier = currentTier;

        if (
            status?.peak &&
            tierValue[status.peak] <= tierValue[currentTier]
        ) {
            pointsTier = status.peak;
        }

        totalPoints += tierPoints[pointsTier];

    });

    return totalPoints;
}

function getPlayerTitle(points) {

    if (points === 0) {
        return "Unranked";
    }

    if (points >= 400) {
        return "Combat Grandmaster";
    }

    if (points >= 250) {
        return "Combat Master";
    }

    if (points >= 100) {
        return "Combat Ace";
    }

    if (points >= 50) {
        return "Combat Specialist";
    }

    return "Combat Novice";
}

function openPlayerModal(playerName) {

    const player = players.find(function(player) {
        return player.name === playerName;
    });

    if (!player) {
        return;
    }

    const points = getPlayerPoints(playerName);
    const titleIcons = {
        "Combat Grandmaster": "grandmaster.webp",
        "Combat Master": "master.webp",
        "Combat Ace": "ace.svg",
        "Combat Specialist": "specialist.svg",
        "Combat Novice": "novice.svg"
    };

    const titleColors = {
        "Combat Grandmaster": "rgb(253, 224, 71)",
        "Combat Master": "rgb(253, 224, 71)",
        "Combat Ace": "rgb(253, 164, 175)",
        "Combat Specialist": "rgb(216, 180, 254)",
        "Combat Novice": "rgb(196, 181, 253)",
        "Unranked": "rgb(209, 213, 219)"
    };
    const title = getPlayerTitle(points);

    const ranking = [...players].sort(function(a, b) {
        return getPlayerPoints(b.name) - getPlayerPoints(a.name);
    });

    const position = ranking.findIndex(function(player) {
        return player.name === playerName;
    }) + 1;

    modalPlayerName.textContent = player.name;
    modalPlayerSkin.src =
        `https://skinrender.dev/render/${player.name}/bust?size=256`;

    modalPlayerSkin.alt = "Skin de " + player.name;
    modalPlayerSkin.style.display = "block";

    if (title === "Unranked") {

        modalPlayerTitle.innerHTML = `
            <span>${title}</span>
        `;

    } else {

        modalPlayerTitle.innerHTML = `
            <img src="icons/${titleIcons[title]}" class="modal-title-icon" alt="">
            <span>${title}</span>
        `;

    }

    modalPlayerTitle.style.color = titleColors[title];
    modalPlayerRegion.textContent = player.region;

    modalPlayerOverall.querySelector(".overall-position").textContent =
        position + ".";

    modalPlayerOverall.querySelector(".overall-text").textContent =
        "Overall (" + points + " points)";

    modalTiers.innerHTML = "";

    const kits = [
        "Vanilla",
        "UHC",
        "Pot",
        "NethOP",
        "SMP",
        "Sword",
        "Axe",
        "Mace"
    ];

    kits.forEach(function(kit) {

        let playerTier = "—";

        Object.keys(kitPlayers[kit]).forEach(function(tier) {

            if (kitPlayers[kit][tier].includes(playerName)) {
                playerTier = tier;
            }

        });

        const status = playerStatus[playerName]?.[kit];
        const tierValue = {
            T1: 1,
            T2: 2,
            T3: 3
        };

        let validPeak = status?.peak;

        if (
            status?.peak &&
            playerTier !== "—" &&
            tierValue[status.peak] > tierValue[playerTier]
        ) {
            validPeak = null;
        }

        const tierElement = document.createElement("div");
        tierElement.classList.add("modal-tier");

        if (playerTier !== "—") {
            tierElement.classList.add("modal-" + playerTier.toLowerCase());
        }

        if (status?.retired) {
            tierElement.classList.add("modal-retired");
        }

        let displayedTier = playerTier;

        if (status?.retired && validPeak) {
            displayedTier = "R" + validPeak;
        }

        tierElement.innerHTML = `
            <div class="tier-hover">
                <img src="icons/${kit.toLowerCase()}.svg" alt="">
                <span>${displayedTier}</span>
                <div class="tier-tooltip"></div>
            </div>
        `;

        const tooltip = tierElement.querySelector(".tier-tooltip");

        if (status?.retired && validPeak) {

            tooltip.textContent = "Retired " + validPeak;

        } else if (validPeak) {

            tooltip.textContent = "Peak " + validPeak;

        } else {

            tooltip.textContent = playerTier;

        }

        modalTiers.appendChild(tierElement);

    });

    playerModal.style.display = "flex";
}

// ========================================
// MOSTRAR JUGADORES
// ========================================

// ========================================
// RANKING
// ========================================

const rankingContainer = document.querySelector(".ranking-container");
const searchInput = document.querySelector(".search input");
const menuItems = document.querySelectorAll("#rankings-menu .menu-item");
const pageTitle = document.querySelector(".page-info h2");
const rankingsToggle = document.querySelector("#rankings-toggle");
const rankingsMenu = document.querySelector("#rankings-menu");
const playerModal = document.querySelector("#player-modal");
const modalClose = document.querySelector("#modal-close");
const modalPlayerName = document.querySelector("#modal-player-name");
const modalPlayerSkin = document.querySelector("#modal-player-skin");
const modalPlayerTitle = document.querySelector("#modal-player-title");
const modalPlayerRegion = document.querySelector("#modal-player-region");
const modalPlayerOverall = document.querySelector("#modal-player-overall");
const modalTiers = document.querySelector("#modal-tiers");
const filterButton = document.querySelector(".filter-button");
const infoButton = document.querySelector("#info-button");
const kitInfoPage = document.querySelector("#kit-info-page");
const toolbar = document.querySelector(".toolbar");
let infoMode = "titles";
let showRetired = false;
let currentMode = "Overall";
const infoPopup = document.createElement("div");

infoPopup.classList.add("info-popup");

infoPopup.innerHTML = `
    <div class="info-options">

        <button class="info-option active" data-info-mode="titles">
            Titles
        </button>

        <button class="info-option" data-info-mode="points">
            Points
        </button>

    </div>

    <div class="info-content"></div>
`;

document.querySelector(".toolbar-buttons").appendChild(infoPopup);

const infoOptions = infoPopup.querySelectorAll(".info-option");
const infoContent = infoPopup.querySelector(".info-content");

function updateInfoContent() {

    // ============================
    // OVERALL
    // ============================

    if (currentMode === "Overall") {

        if (infoMode === "points") {

            infoContent.innerHTML = `
                <div class="info-points">

                    <div class="info-tier info-tier1">
                        <img src="icons/overall.svg" alt="">
                        <span>Tier 1: 60</span>
                    </div>

                    <div class="info-tier info-tier2">
                        <img src="icons/tier2.svg" alt="">
                        <span>Tier 2: 30</span>
                    </div>

                    <div class="info-tier info-tier3">
                        <img src="icons/tier3.svg" alt="">
                        <span>Tier 3: 10</span>
                    </div>

                </div>
            `;

            return;
        }

        const titles = [
            {
                name: "Combat Grandmaster",
                icon: "grandmaster.webp",
                points: "400+"
            },
            {
                name: "Combat Master",
                icon: "master.webp",
                points: "250+"
            },
            {
                name: "Combat Ace",
                icon: "ace.svg",
                points: "100+"
            },
            {
                name: "Combat Specialist",
                icon: "specialist.svg",
                points: "50+"
            },
            {
                name: "Combat Novice",
                icon: "novice.svg",
                points: "1+"
            }
        ];

        infoContent.innerHTML = "";

        titles.forEach(function(title) {
            const element = document.createElement("div");
            element.classList.add("info-title");
            let titleClass = "";

            if (title.name === "Combat Grandmaster") {
                titleClass = "info-grandmaster";
            } else if (title.name === "Combat Master") {
                titleClass = "info-master";
            } else if (title.name === "Combat Ace") {
                titleClass = "info-ace";
            } else if (title.name === "Combat Specialist") {
                titleClass = "info-specialist";
            } else if (title.name === "Combat Novice") {
                titleClass = "info-novice";
            }

            element.innerHTML = `
                <div class="info-title-main ${titleClass}">
                    <img src="icons/${title.icon}" alt="">
                    <span>${title.name}</span>
                </div>

                <div class="info-title-points">
                    ${
                        title.name === "Combat Novice"
                            ? "Starting rank for players with less than 50 points."
                            : `Obtained ${title.points} total points.`
                    }
                </div>
            `;

            infoContent.appendChild(element);

        });

        return;
    }

    // ============================
    // KITS
    // ============================

    const kit = kitPlayers[currentMode];

    infoContent.innerHTML = `
        <div class="info-points">
            <div>Tier 1: ${kit.T1.length} player${kit.T1.length === 1 ? "" : "s"}</div>
            <div>Tier 2: ${kit.T2.length} player${kit.T2.length === 1 ? "" : "s"}</div>
            <div>Tier 3: ${kit.T3.length} player${kit.T3.length === 1 ? "" : "s"}</div>
        </div>
    `;

}

infoButton.addEventListener("click", function(event) {
    event.stopPropagation();

    // ============================
    // INFORMATION DE LOS KITS
    // ============================

    if (currentMode !== "Overall") {
        const opening = !kitInfoPage.classList.contains("active");

        if (opening) {
            kitInfoPage.innerHTML = kitInfo[currentMode] || "";
            kitInfoPage.classList.add("active");
            rankingContainer.style.display = "none";

            // Ocultar barra de búsqueda y botones
            toolbar.style.display = "none";

            // Cambiar título
            pageTitle.textContent = currentMode + " Rubric";

        } else {
            kitInfoPage.classList.remove("active");
            rankingContainer.style.display = "";

            // Volver a mostrar barra de búsqueda y botones
            toolbar.style.display = "flex";

            // Volver al título normal
            pageTitle.textContent = currentMode + " Ranking";

        }

        return;
    }

    // ============================
    // INFORMATION DE OVERALL
    // ============================

    const opening = !infoPopup.classList.contains("active");
    infoPopup.classList.toggle("active");

    if (opening) {
        infoMode = "titles";
        infoOptions.forEach(function(option) {

            option.classList.toggle(
                "active",
                option.dataset.infoMode === "titles"
            );

        });

        updateInfoContent();

    }

});

infoOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        infoOptions.forEach(function(otherOption) {
            otherOption.classList.remove("active");
        });

        option.classList.add("active");

        infoMode = option.dataset.infoMode;

        updateInfoContent();

    });

});

document.addEventListener("click", function(event) {

    if (
        !infoPopup.contains(event.target) &&
        event.target !== infoButton
    ) {
        infoPopup.classList.remove("active");
    }

});

const filterPopup = document.createElement("div");

filterPopup.classList.add("filter-popup");

filterPopup.innerHTML = `
    <label class="filter-option">
        <input type="checkbox" id="retired-filter">
        <span>Retired</span>
    </label>
`;

document.querySelector(".toolbar-buttons").appendChild(filterPopup);

const retiredFilter = document.querySelector("#retired-filter");

filterButton.addEventListener("click", function(event) {

    event.stopPropagation();

    filterPopup.classList.toggle("active");

});

retiredFilter.addEventListener("change", function() {

    showRetired = retiredFilter.checked;

    showKit();

});

document.addEventListener("click", function(event) {

    if (
        !filterPopup.contains(event.target) &&
        event.target !== filterButton
    ) {
        filterPopup.classList.remove("active");
    }

});

// ========================================
// MOSTRAR OVERALL
// ========================================

function showOverall() {

    const searchText = searchInput.value.toLowerCase();

    const filteredPlayers = players
        .filter(function(player) {
            return player.name.toLowerCase().startsWith(searchText);
        })
        .sort(function(a, b) {
            return getPlayerPoints(b.name) - getPlayerPoints(a.name);
        });

    rankingContainer.innerHTML = `

        <div class="ranking-header overall-header">

            <div>#</div>

            <div>Player</div>

            <div>Region</div>

            <div>Points</div>

        </div>

    `;
    
    const fullRanking = [...players].sort(function(a, b) {
        return getPlayerPoints(b.name) - getPlayerPoints(a.name);
    });

    filteredPlayers.forEach(function(player, index) {

        const row = document.createElement("div");
        row.classList.add("player-row", "overall-row");
        const rank = fullRanking.findIndex(function(p) {
            return p.name === player.name;
        }) + 1;

        if (rank <= 3) {
            row.classList.add("top-" + rank);
        }
        row.addEventListener("click", function() {
            openPlayerModal(player.name);
        });

        
        row.innerHTML = `
            
            <div class="rank-skin">
                <div class="rank">${fullRanking.findIndex(function(p) {
                    return p.name === player.name;
                }) + 1}</div>

                <div class="player-avatar">
                    <img
                        src="https://skinrender.dev/render/${player.name}/bust?size=128"
                        alt="Skin de ${player.name}"
                        loading="lazy"
                    >
                </div>
            </div>

            <div class="player">
                <div class="player-info">
                    <strong>${player.name}</strong>
                </div>
            </div>

            <div class="region-column">
                ${player.region}
            </div>

            <div class="points">
                ${getPlayerPoints(player.name)}
            </div>
        `;

        rankingContainer.appendChild(row);

    });

}

// ========================================
// MOSTRAR KIT
// ========================================

function showKit() {

    const kit = kitPlayers[currentMode];
    rankingContainer.innerHTML = `

        <div class="kit-ranking">

            <div class="kit-column">

                <div class="kit-header">
                    <img src="icons/overall.svg" class="kit-header-icon" alt="">
                    <span>Tier 1</span>
                </div>

                <div class="kit-players" id="T1-players"></div>

            </div>

            <div class="kit-column">

                <div class="kit-header">
                    <img src="icons/tier2.svg" class="kit-header-icon" alt="">
                    <span>Tier 2</span>
                </div>

                <div class="kit-players" id="T2-players"></div>

            </div>

            <div class="kit-column">

                <div class="kit-header">
                    <img src="icons/tier3.svg" class="kit-header-icon" alt="">
                    <span>Tier 3</span>
                </div>

                <div class="kit-players" id="T3-players"></div>

            </div>

        </div>

    `;

    // Agregar jugadores a cada columna

    Object.keys(kit).forEach(function(tier) {
        const container = document.querySelector("#" + tier + "-players");
        kit[tier].forEach(function(playerName) {
            const status = playerStatus[playerName]?.[currentMode];

            if (status?.retired && !showRetired) {
                return;
            }

            const player = document.createElement("div");
            player.classList.add("kit-player");

            if (status?.retired) {
                player.classList.add("retired-player");
            }

            
            player.innerHTML = `
                <div class="kit-player-avatar">
                    <img
                        src="https://skinrender.dev/render/${playerName}/bust?size=128"
                        alt="Skin de ${playerName}"
                        loading="lazy"
                    >
                </div>
                <span>${playerName}</span>
            `;

            player.addEventListener("click", function() {
                openPlayerModal(playerName);
            });

            container.appendChild(player);

        });

    });

}

modalClose.addEventListener("click", function() {
    playerModal.style.display = "none";
});

playerModal.addEventListener("click", function(event) {

    if (event.target === playerModal) {
        playerModal.style.display = "none";
    }

});

// ========================================
// ACTUALIZAR PÁGINA
// ========================================

function updatePage() {
    infoPopup.classList.remove("active");
    kitInfoPage.classList.remove("active");
    rankingContainer.style.display = "";
    toolbar.style.display = "flex";

    if (currentMode === "Overall") {
        pageTitle.textContent = "Overall Ranking";
        filterButton.style.display = "none";
        infoButton.style.display = "block";
        showOverall();

    } else {
        pageTitle.textContent =
            currentMode + " Ranking";

        filterButton.style.display = "block";
        infoButton.style.display = "block";
        showKit();

    }

}

// ========================================
// MENU LATERAL
// ========================================

// ========================================
// DESPLEGAR RANKINGS
// ========================================

rankingsToggle.addEventListener("click", function() {

    if (rankingsMenu.style.display === "none") {
        rankingsMenu.style.display = "flex";
        rankingsToggle.querySelector("span").textContent = "▼";

    } else {
        rankingsMenu.style.display = "none";
        rankingsToggle.querySelector("span").textContent = "▶";

    }

});

// ========================================
// DESPLEGAR INFO
// ========================================

menuItems.forEach(function(item) {

    item.addEventListener("click", function(event) {
        event.preventDefault();

        // Obtener solamente el texto del botón
        const mode = item.lastChild.textContent.trim();

        // Settings todavía no lo hacemos
        if (mode === "Settings") {
            return;
        }

        // Cambiar botón activo
        menuItems.forEach(function(menuItem) {
            menuItem.classList.remove("active");

        });

        item.classList.add("active");

        // Cambiar modo
        currentMode = mode;

        // Actualizar contenido
        updatePage();

    });

});

// ========================================
// BUSCADOR
// ========================================

searchInput.addEventListener("input", function() {

    if (currentMode === "Overall") {

        showOverall();

    }

});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        const searchText = searchInput.value.trim().toLowerCase();

        const player = players.find(function(player) {
            return player.name.toLowerCase() === searchText;
        });

        if (player) {
            openPlayerModal(player.name);
        }
    }
});

// ========================================
// INICIAR PÁGINA
// ========================================

updatePage();