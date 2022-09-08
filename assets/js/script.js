var scores = {
    computer: 0,
    player: 0
};

// Edit player's name function
function editName() {
    var newName = prompt("Enter Your Name");
    document.querySelector('#player-name').innerHTML = newName;
}

function assignScore(playerName, number) {
    let DOMElement = document.getElementById('score-'+playerName);

    if (number <= 6) {
        scores[playerName] += number;
        DOMElement.innerHTML = scores[playerName];
    } else if (number === 8){
        scores[playerName] = 0;
        DOMElement.innerHTML = scores[playerName];
    } else {
        scores[playerName] = scores[playerName] *= 2;
        DOMElement.innerHTML = scores[playerName];
    }
}

function generateNumbers() {
    let num1 = Math.floor(Math.random() * 8) + 1;
    let num2 = Math.floor(Math.random() * 8) + 1;

    // Add correspondent to a number generated image
    document.querySelector(".img1").setAttribute("src",
    "assets/images/dice" + num1 + ".png");

    document.querySelector(".img2").setAttribute("src",
       "assets/images/dice" + num2 + ".png");

    //Accumulate scores for a Player (max 100)
    assignScore('player', num1);
    
    //Accumulate scores for the Computer (max 100)
    assignScore('computer', num2);

    // Pass each score '100' to Wins '+1' for Player
    if (scores.player >= 20) {
        let winP = parseInt(document.getElementById('win').innerText)
        document.getElementById('win').innerHTML = ++winP;
        scores.player = 0;
        scores.computer = 0;
        document.querySelector('h1').innerHTML = ('You win!');
    } else {
        document.querySelector('h1').innerHTML = ('Keep Rolling!');
    }

    // Pass each score '100' to Wins '+1' for the Computer
    if (scores.computer >= 20) {
        let winC = parseInt(document.getElementById('loose').innerText)
        document.getElementById('loose').innerHTML = ++winC;
        scores.player = 0;
        scores.computer = 0;
        document.querySelector('h1').innerHTML = ('Computer Wins');
    }
}

// Roll the dice
function rollTheDice() 

// End game

function endGame()