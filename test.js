'use strict';

var mainElement = document.querySelector('#site-main');

var title = document.createElement('h1');
title.setAttribute('class', 'title');
title.innerText = 'PACHISI';
mainElement.appendChild(title);

var gameElement = document.createElement('div');
gameElement.setAttribute('id', 'board');
mainElement.appendChild(gameElement);

//board
var row;
function addRows() {
    for (var i = 1; i < 12; i++) {
        row = document.createElement('div');
        row.setAttribute('class', 'row' + [i]);
        gameElement.appendChild(row);
    }
}
addRows();

//row1
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row1').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row1').appendChild(column);
//row2
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row2').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row2').appendChild(column);
//row3
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row3').appendChild(column);
//row4
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row4').appendChild(column);
//row5
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field blue');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row5').appendChild(column);
//row6
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field green');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row6').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row6').appendChild(column);
//row7
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row7').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row7').appendChild(column);
//row8
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row8').appendChild(column);
//row9
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row9').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');0
document.querySelector('.row9').appendChild(column);
//row10
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row10').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row10').appendChild(column);
//row11
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field red');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row11').appendChild(column);
var column = document.createElement('div');
column.setAttribute('class', 'column field yellow');
document.querySelector('.row11').appendChild(column);


//buttons
var buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');
mainElement.appendChild(buttons);

var button = document.createElement('button');
button.innerText = 'START NEW GAME';
buttons.appendChild(button);

var button = document.createElement('button');
button.innerText = 'QUIT';
buttons.appendChild(button);


//dice
var diceBox = document.createElement('div');
diceBox.setAttribute('class', 'dice-box');
mainElement.appendChild(diceBox);

var dice = document.createElement('img');
dice.setAttribute('src', './img/dice1.jpg');
dice.setAttribute('class', 'dice');
diceBox.appendChild(dice);





// var randomNumber;
// var dice = document.getElementById('dice');
// var fields = document.getElementsByClassName('square');
// var cone = document.querySelector('.starting-square');
// var position = fields[0];


// dice.addEventListener('click', rollDice);
// function rollDice(){
//     randomNumber = (Math.floor(Math.random() * 6)) + 1;
//     dice.innerText = randomNumber;
//     dice.removeEventListener('click', rollDice);
// }

// cone.addEventListener('click', moveCone);
// function moveCone(){
//     cone.style['background-color'] = 'rgba(0,0,0,0)';
//     position.style['background-color'] = 'rgb(255,0,0)';
// }




// Player fields match
// array.map(fields + 10)




// (square[0] + randomNumber).style.color = 'red';

// Constructor: Player, Cones, Game
// // VARIABLES
// var player = {
//     id="red"
//     cones : [r1, r2];
// }
// function Cone ()
// {   
//     id : r1,r2, g1,g2;
//     playerPosition: 0-44;
//     gamePosition: 0-44, r1,...;
//     base: true;
//     calculateMove: (movepossible)
// },

// var game = {
//     turns= ["green", "red", ....]
//     dice=
//     cones = [{cone1; player,coneID,positions}]
//     positions = [0-39, r1-5, g1-5]
// }


// // BUILD SPLASH
// function buildSplash() {
//     DOM-Input > get number of players > safe > enable start game button
//     Start game Button > function startGame() 
// }

// // START GAME
// function startGame() {
//     create players
//     loop through players > function rollDice() > safe as array
//         return sort array > player with highest number gets selected > safe in game.turn
// }

// function rollDice() {
//     DOM-Input > detect click
//     dice = select random number 1-6
//     DOM-Output > dice image with number
// }

// function checkMoves() {
//     loop through every position of players pawns to calculate the final position for each pawn

//         if dice = 6
//             if starting circle isnot clear, only enable pawn in starting circle to move
//                 if starting square isnot clear, only enable pawn in starting square to move
//             dont pass along play to next player 
//         else if dice = 1-5
//             starting circle isnot clear, only enable pawn in starting circle to move
//         calculatePositions() > push to array possibleMoves
        
//         if final position is occupied by your pawn > do not safe as possible move
//         else function displayMoves()

//         check array possibleMoves..
//         if final position for any pawn blue === 41 > go xxx 
//         if final position for any pawn red === 41 > go xxx
//         if final position for any pawn green === 41 > go xxx
//         if final position for any pawn yellow === 41 > go xxx
// }

// function displayMoves() {
//     grey out/ disable pawns you cannot move
// }

// function moveForward() {
//     DOM-Output > add event listener
//     DOM-Input > pawn clicked
//     if final position is occupied by another players pawn > function kickPawn()
//     DOM-Output > move pawn to new position
//     DOM-Output > remove event listener
// }

// function kickPawn() {
//     if pawn got kicked, move pawn back in starting square position
// }

// function checkIfWinner() {
//     if 4 in home > winner
//     else move on to next player
// }


// // QUIT GAME
// function newGame() {
//     reload game
// }

// function quitGame() {
//     go back to homepage
// }




