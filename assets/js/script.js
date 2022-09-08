

// Edit player's name function
function editName() {
    var newName = prompt("Enter Your Name");
    document.querySelector('#player-name').innerHTML = newName;
}

function assignScore() 


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
   

// Roll the dice

// End game
function endGame()