'use strict';

var game; //just to test.
var player;
var cone;

function main() {

  var mainElement = document.querySelector('#site-main');
  var stage;

  
  // -- SPLASH

  var splashElement;
  var startGameButton;
  var input;


  var handleStartClick = function () {
    if (input.value > 4 || input.value < 1) {
      alert ('Please choose a number between 1 and 4!');
    } else {
      destroySplash();
      buildGame();
    }
  };


  buildSplash();

  function buildSplash() {
    stage = 'splash';

    // create dom elements
    splashElement = document.createElement('div');
    splashElement.setAttribute('id', 'splash');

    var title = document.createElement('h1');
    title.innerText = 'PACHISI';
    splashElement.appendChild(title);

    input = document.createElement('input');
    input.setAttribute("type", "number");
    input.setAttribute("name", "playerNumber");
    input.setAttribute("value", "0");
    splashElement.appendChild(input);

    startGameButton = document.createElement('button');
    startGameButton.innerText = 'start';
    splashElement.appendChild(startGameButton);

    // apppend to site-main
    mainElement.appendChild(splashElement);

    // bind click on start play button
    startGameButton.addEventListener('click', handleStartClick);
  }

  function destroySplash() {
    // unbind click on start play button
    startGameButton.removeEventListener('click', handleStartClick);
    // remove splash from dom
    splashElement.remove();
  }








  // -- GAME

  var randomNumber;
  var buttonStart;
  var handleRestartClick;
  var buttonQuit;
  var handleGameOverClick;
  var gameElement;


  handleRestartClick = function () {
    destroyGame();
    buildGame();
  };

  handleGameOverClick = function () {
    destroyGame();
    buildGameOver();
  };


  function buildGame() {
    stage = 'game';
    game = new Game(mainElement);
    game.getPlayerNumber(input);
    game.firstTurn();
    game.getFields();
    
    // create dom elements

    createBoard();

    function createBoard() {

      var title = document.createElement('h1');
      title.setAttribute('class', 'title');
      title.innerText = 'PACHISI';
      mainElement.appendChild(title);
      
      gameElement = document.createElement('div');
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
      
      buttonStart = document.createElement('button');
      buttonStart.innerText = 'START NEW GAME';
      buttons.appendChild(buttonStart);
      buttonStart.addEventListener('click', handleRestartClick);
      
      buttonQuit = document.createElement('button');
      buttonQuit.innerText = 'QUIT';
      buttons.appendChild(buttonQuit);
      buttonQuit.addEventListener('click', handleGameOverClick);
      
      //dice
      var diceBox = document.createElement('div');
      diceBox.setAttribute('class', 'dice-box');
      mainElement.appendChild(diceBox);
      
      var dice = document.createElement('img');
      dice.setAttribute('src', './img/dice1.jpg');
      dice.setAttribute('class', 'dice');
      diceBox.appendChild(dice);
    }
    

    
    //functions
    dice.addEventListener('click', rollDice);
    function rollDice(){
        randomNumber = (Math.floor(Math.random() * 6)) + 1;
        switch(randomNumber) {
          case 1:
              dice.setAttribute('src', './img/dice1.jpg');
              break;
          case 2:
              dice.setAttribute('src', './img/dice2.jpg');
              break;
          case 3:
              dice.setAttribute('src', './img/dice3.jpg');
              break;
          case 4:
              dice.setAttribute('src', './img/dice4.jpg');
              break;
          case 5:
              dice.setAttribute('src', './img/dice5.jpg');
              break;
          case 6:
              dice.setAttribute('src', './img/dice6.jpg');
              break;
        }   
    }



  }


  function destroyGame() {
    // unbind click on quit game button
    buttonQuit.removeEventListener('click', handleGameOverClick);
    // remove splash from dom
    gameElement.remove();
  }









 
  
  // -- GAME OVER

  var gameOverElement;
  var playAgainButton;
  var handlePlayAgainClick = function () {
    destroyGameOver();
    buildGame();
  };

  function buildGameOver() {
    stage = 'gameOver';

    // create dom elements
    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id', 'game-over');

    var title = document.createElement('h1');
    title.innerText = 'game over';
    gameOverElement.appendChild(title);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'your score: ' + game.score;
    gameOverElement.appendChild(yourScore);

    playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'play again';
    gameOverElement.appendChild(playAgainButton);

    // apppend to site-main
    mainElement.appendChild(gameOverElement);

    // bind click on start play button
    playAgainButton.addEventListener('click', handlePlayAgainClick);
  }

  function destroyGameOver() {
    // unbind click on start play button
    playAgainButton.removeEventListener('click', handlePlayAgainClick);
    // remove gameOver from dom
    gameOverElement.remove();
  }

  // buildSplash();

}


window.onload = main;