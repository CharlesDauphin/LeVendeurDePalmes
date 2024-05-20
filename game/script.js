let money = 0;

let totalIncome = 0;

let bedouinLevel = 1;
let lightVehicleLevel = 1;
let heavyVehicleLevel = 1;

let bedouinUpgradeCost = 100;
let lightVehicleUpgradeCost = 1000;
let heavyVehicleUpgradeCost = 7000;

let incomeBedouin = 10;
let incomeLightVehicle = 0;
let incomeHeavyVehicle = 0;

let bedouinUpgradeIncome = 100;
let lightVehicleUpgradeIncome = 50;
let heavyVehicleUpgradeIncome = 200;

let gamblingValue = 0;

const extractButton = document.getElementById('extraction');
const gambleButton = document.getElementById('gamble');
const charityButton = document.getElementById('charity');

// Fonction pour mettre à jour l'affichage du revenu total
function updateTotalIncomeDisplay() {
    totalIncome = incomeBedouin + incomeLightVehicle + incomeHeavyVehicle
    document.getElementById('total-income').textContent = `${totalIncome.toFixed(0)}$ / 10 secondes`;
}

// Fonction pour ajouter de l'argent avec le bouton
function extract() {
    money += 5;
    updateMoneyDisplay();
}

// Fonction pour extraire les fruits
function extractFruits() {
    money += totalIncome;

    updateMoneyDisplay();

    updateTotalIncomeDisplay();
}

// Fonction pour améliorer le bédouin
function upgradeBedouin() {
    if (money >= bedouinUpgradeCost && bedouinLevel < 15) {
        money -= bedouinUpgradeCost;
        bedouinLevel+= 1;
        bedouinUpgradeCost += 100;
        updateBedouinUpgradeCostAndIncome();
        updateItemLevels();
        updateMoneyDisplay();
        updateUpgradeCostDisplay();
        updateTotalIncomeDisplay();
        updateItemAvailability();
    } else if (bedouinLevel == 15) {
        showMessage("Vous avez atteint le niveau maximal des bédouins !")
    } else {
        showMessage("Impossible d'améliorer le bédouin !");
    }
}

// Fonction pour améliorer l'engin léger
function upgradeLightVehicle() {
    if (money >= lightVehicleUpgradeCost && bedouinLevel >= 5 && lightVehicleLevel < 15) {
        money -= lightVehicleUpgradeCost;
        lightVehicleLevel+= 1;
        lightVehicleUpgradeCost += 500;
        updateLightVehicleUpgradeCostAndIncome();
        updateItemLevels();
        updateMoneyDisplay();
        updateUpgradeCostDisplay();
        updateTotalIncomeDisplay();
        updateItemAvailability();
    } else if (lightVehicleLevel == 15) {
        showMessage("Vous avez atteint le niveau maximal des véhicules légers !")
    } else {
        showMessage("Impossible d'améliorer l'engin léger !  Pensez à vérifier si vous avez assez d'argent ou si les bédouins sont au niveau 5 !");
    }
}

// Fonction pour améliorer l'engin lourd
function upgradeHeavyVehicle() {
    if (money >= heavyVehicleUpgradeCost && lightVehicleLevel >= 5 && heavyVehicleLevel < 15) {
        money -= heavyVehicleUpgradeCost;
        heavyVehicleLevel+= 1;
        heavyVehicleUpgradeCost += 1000;
        updateHeavyVehicleUpgradeCostAndIncome();
        updateItemLevels();
        updateMoneyDisplay();
        updateUpgradeCostDisplay();
        updateTotalIncomeDisplay();
        updateItemAvailability();
    } else if (heavyVehicleLevel == 15) {
        showMessage("Vous avez atteint le niveau maximal des véhicules lourds !")
    } else {
        showMessage("Impossible d'améliorer l'engin lourd ! Pensez à vérifier si vous avez assez d'argent ou si les engins légers sont au niveau 5 !");
    }
}

// Fonction pour mettre à jour le coût et le revenu de l'amélioration du bédouin
function updateBedouinUpgradeCostAndIncome() {
    bedouinUpgradeCost = bedouinLevel * 100;
    incomeBedouin += 10;
    updateTotalIncomeDisplay();
    console.log(incomeBedouin);
}

// Fonction pour mettre à jour le coût et le revenu de l'amélioration de l'engin léger
function updateLightVehicleUpgradeCostAndIncome() {
    lightVehicleUpgradeCost = 1000 + (lightVehicleLevel * 500);
    incomeLightVehicle = 200 + (lightVehicleLevel * 50);
    updateTotalIncomeDisplay();
    console.log(incomeLightVehicle);
}

// Fonction pour mettre à jour le coût et le revenu de l'amélioration de l'engin lourd
function updateHeavyVehicleUpgradeCostAndIncome() {
    heavyVehicleUpgradeCost = 10000 + (heavyVehicleLevel * 1000);
    incomeHeavyVehicle = 7000 + (heavyVehicleLevel * 200);
    updateTotalIncomeDisplay();
    console.log(incomeHeavyVehicle);
}

// Fonction pour mettre à jour le texte des divs "purchase-item-title" avec les prix d'amélioration actuels
function updateUpgradeCostDisplay() {
    document.getElementById('bedouin').querySelector('.purchase-item-title').textContent = `(${bedouinUpgradeCost}$)`;
    document.getElementById('light-vehicle').querySelector('.purchase-item-title').textContent = `(${lightVehicleUpgradeCost}$)`;
    document.getElementById('heavy-vehicle').querySelector('.purchase-item-title').textContent = `(${heavyVehicleUpgradeCost}$)`;
}

// Fonction pour mettre à jour l'affichage de l'argent
function updateMoneyDisplay() {
    document.getElementById('money').textContent = `Argent : $${money.toFixed(0)}`;
}

// Fonction pour mettre à jour le niveau de chaque item
function updateItemLevels() {
    document.getElementById('bedouin-level').textContent = bedouinLevel;
    document.getElementById('light-vehicle-level').textContent = lightVehicleLevel;
    document.getElementById('heavy-vehicle-level').textContent = heavyVehicleLevel;

    // Mise à jour de l'image du bédouin
    let bedouinImage = document.getElementById('bedouin').querySelector('img');
    if (bedouinLevel >= 5) {
        bedouinImage.src = `img/bedouins/bedouins1.png`;
    }
    if (bedouinLevel >= 10) {
        bedouinImage.src = `img/bedouins/bedouins2.png`;
    }
    if (bedouinLevel >= 15) {
        bedouinImage.src = `img/bedouins/bedouins3.png`;
    }

    // Mise à jour de l'image des véhicules légers
    let lightVehicleImage = document.getElementById('light-vehicle').querySelector('img');
    if (lightVehicleLevel >= 5) {
        lightVehicleImage.src = `img/light-vehicules/light-vehicules1.png`;
    }
    if (lightVehicleLevel >= 10) {
        lightVehicleImage.src = `img/light-vehicules/light-vehicules2.png`;
    }
    if (lightVehicleLevel >= 15) {
        lightVehicleImage.src = `img/light-vehicules/light-vehicules3.png`;
    }

    // Mise à jour de l'image des véhicules lourds
    let heavyVehicleImage = document.getElementById('heavy-vehicle').querySelector('img');
    if (heavyVehicleLevel >= 5) {
        heavyVehicleImage.src = `img/heavy-vehicules/heavy-vehicules1.png`;
    }
    if (heavyVehicleLevel >= 10) {
        heavyVehicleImage.src = `img/heavy-vehicules/heavy-vehicules2.png`;
    }
    if (heavyVehicleLevel >= 15) {
        heavyVehicleImage.src = `img/heavy-vehicules/heavy-vehicules3.png`;
    }
}





// Fonction pour afficher un message d'alerte
function showMessage(message) {
    alert(message);
}

// Événements de clic sur les images des items pour améliorer
document.getElementById('bedouin').addEventListener('click', upgradeBedouin);
document.getElementById('light-vehicle').addEventListener('click', upgradeLightVehicle);
document.getElementById('heavy-vehicle').addEventListener('click', upgradeHeavyVehicle);

function updateItemAvailability() {
    if (bedouinLevel >= 5) {
        document.getElementById('light-vehicle').querySelector('.lock-image').style.display = 'none'; // Masquer l'image du cadenas
    }
    if (lightVehicleLevel >= 5) {
        document.getElementById('heavy-vehicle').querySelector('.lock-image').style.display = 'none'; // Masquer l'image du cadenas
    }
}

function gamble() {
    let randomNumber = Math.random();
    let gamblingValue = prompt("Entrez le montant à parier :");
    gamblingValue = parseInt(gamblingValue, 10); // Convert the input to an integer

    if (isNaN(gamblingValue)) {
        showMessage("Veuillez entrer un nombre valide.");
        return;
    }

    if (money < gamblingValue) {
        showMessage("Vous n'avez pas assez d'argent pour parier !");
        return;
    } else {
        money -= gamblingValue;
    }

    if (randomNumber < 0.5) { // Assuming you want a 50/50 chance
        money -= gamblingValue; // Player loses the bet amount again
        if (money < 0) {
            money = 0;
        }
        updateMoneyDisplay();
        showMessage("Vous avez perdu " + gamblingValue * 2 + "$!");
    } else {
        money += gamblingValue * 2; // Player wins double the bet amount
        updateMoneyDisplay();
        showMessage("Vous avez gagné " + gamblingValue * 2 + "$!");
    }
}

function charity() {
    let charityValue = prompt("Entrez le montant à donner :");
    if (isNaN(charityValue)) {
        showMessage("Veuillez entrer un nombre valide.");
        return;
    } else if (money < charityValue) {
        showMessage("Vous n'avez pas assez d'argent pour donner!");
        return;
    } else {
        money -= charityValue;
    }
    updateMoneyDisplay();
}

setInterval(extractFruits, 10000); // toutes les 10 secondes
setInterval(function() {
    console.log(totalIncome);
}, 5000);

extractButton.addEventListener('click', extract);
gambleButton.addEventListener('click',gamble);
charityButton.addEventListener('click', charity);

// Appel de la fonction pour mettre à jour le texte des divs "purchase-item-title"
updateUpgradeCostDisplay();

// Appel de la fonction pour mettre à jour l'affichage initial du niveau de chaque item
updateItemLevels();
