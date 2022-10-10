"use strict"

let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");

let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");

let diceEl = document.querySelector(".dice"); 

let rollDiceBtn = document.querySelector(".btn--roll");
let newBtn = document.querySelector(".btn--new"); 
let holdBtn = document.querySelector(".btn--hold");

let players = document.querySelectorAll(".player");

let currentScore = 0;

let activePlayer = 0;

let scores = [0,0];

diceEl.classList.add('hidden');

rollDiceBtn.addEventListener('click', function() {
    let changeNum = Math.trunc(Math.random() * 6) + 1;
    console.log(changeNum);
    diceEl.src = `images/dice-${changeNum}.png`;
    diceEl.classList.remove('hidden');
    if (changeNum != 1) {
        currentScore += changeNum;
        console.log(currentScore);
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0; 
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});
holdBtn.addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 30){
        diceEl.classList.add('hidden');

        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
        
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

        document.querySelector(`#current--${activePlayer}`).textContent = 0;
    } else{
        currentScore = 0; 
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});
        
newBtn.addEventListener('click', function() {
    diceEl.classList.add('hidden');
    document.getElementById("score--0").textContent = 0;
    document.getElementById("score--1").textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    player0El.classList.toggle('player--winner');
    player1El.classList.toggle('player--active');
    
});
