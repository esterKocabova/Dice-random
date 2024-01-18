

//dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceClass1 = "stage-" + randomNumber1;

var element = document.querySelector("#dice-1").classList.add(randomDiceClass1);

//dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceClass2 = "stage-" + randomNumber2;

var element = document.querySelector("#dice-2").classList.add(randomDiceClass2);

//Tittle

if (randomNumber1 > randomNumber2) {
    var player1 = "Player 1 wins!"
    document.querySelector("#tittle").innerHTML = player1;
}

else if (randomNumber2 > randomNumber1) {
    var player2 = "Player 2 wins!"
    document.querySelector("#tittle").innerHTML = player2;
}

else if (randomNumber1 === randomNumber2) {
    var draw = "It's draw!"
    document.querySelector("#tittle").innerHTML = draw;
}