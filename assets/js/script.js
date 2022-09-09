const max_wins = 2;

var scores = {
    computer: 0,
    player: 0
};

var wins = {
    computer: 0,
    player: 0
};

// Edit player's name function
function editName() {
    var newName = prompt("Enter Your Name");
    document.querySelector('#player-name').innerHTML = newName;
}

function startOver() {
    resetScores();
    resetWins();
    redrawScore('player');
    redrawScore('computer');
    redrawWin('player');
    redrawWin('computer');
}

function resetScores() {
    scores.player = 0;
    scores.computer = 0;
}

function resetWins() {
    wins.player = 0;
    wins.computer = 0;
}

function assignScore(playerName, number) {
    if (number <= 6) {
        scores[playerName] += number;
        redrawScore(playerName);
    } else if (number === 8){
        scores[playerName] = 0;
        redrawScore(playerName);
    } else {
        scores[playerName] = scores[playerName] *= 2;
        redrawScore(playerName);
    }
}

function redrawScore(playerName) {
    let DOMElement = document.getElementById('score-'+playerName);
    DOMElement.innerHTML = scores[playerName];
}

function redrawWin(playerName) {
    let DOMElement = document.getElementById('win-'+playerName);
    DOMElement.innerHTML = wins[playerName];
}

function generateNumbers() {
    let num1 = Math.floor(Math.random() * 8) + 1;
    let num2 = Math.floor(Math.random() * 8) + 1;

    // Add correspondent to a number generated image
    document.querySelector(".img1").setAttribute("src",
    "assets/images/dice" + num1 + ".png");

    document.querySelector(".img2").setAttribute("src",
       "assets/images/dice" + num2 + ".png");

    //Accumulate scores for a Player (max 20)
    assignScore('player', num1);
    
    //Accumulate scores for the Computer (max 20)
    assignScore('computer', num2);

    // Pass each score '20' to Wins '+1' for Player
    if (scores.player >= 20) {
        wins.player++;
        // document.getElementById('win').innerHTML = wins.player;
        redrawWin('player');
        resetScores();
    }

    // Pass each score '20' to Wins '+1' for the Computer
    if (scores.computer >= 20) {
        wins.computer++;
        // document.getElementById('loose').innerHTML = wins.computer;
        redrawWin('computer');
        resetScores();
    }

    if (wins.player==max_wins || wins.computer==max_wins) {
        if (wins.player == max_wins) {
            alert('Congratulations, You Win!');
        } else {
            alert('Bad Luck! Try Again.');
        }

        startOver();
    }
}

// Roll the dice
function rollTheDice() {
    // Generate random numbers
    setTimeout(generateNumbers, 500);
}