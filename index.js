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
  var title;
  var label;
  var input;


  var handleStartClick = function () {
    if (input.value > 4 || input.value < 2) {
      alert ('Please choose a number between 2 and 4!');
    } else {
      destroySplash();
      buildGame();
    }
  };


  //buildSplash();

  function buildSplash() {
    stage = 'splash';

    // create dom elements
    splashElement = document.createElement('div');
    splashElement.setAttribute('id', 'splash');

    title = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.innerText = 'PACHISI';
    splashElement.appendChild(title);

    label = document.createElement('label');
    label.setAttribute("class", "label");
    label.innerText = 'PLAYER  NUMBER:';
    splashElement.appendChild(label);

    input = document.createElement('input');
    input.setAttribute("type", "number");
    input.setAttribute("class", "input");
    splashElement.appendChild(input);

    startGameButton = document.createElement('button');
    startGameButton.innerText = 'START';
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

  var gameElement;
  var randomNumber;
  var title;
  var wrapper;
  var player;
  var playerTurn;
  var diceBox;
  var dice;
  var buttons;
  var buttonStart;
  var handleRestartClick;
  var buttonQuit;
  var handleGameOverClick;


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
    
    createBoard();
    game = new Game(mainElement);
    game.getPlayerNumber(input);
    game.getFields();
    //game.getStartingSquare();
    game.firstTurn();
    game.getTrack();
    //game.switchTurns();


    // create dom elements


    function createBoard() {

      title = document.createElement('h1');
      title.setAttribute('class', 'title');
      title.innerText = 'PACHISI';
      mainElement.appendChild(title);

      wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');
      mainElement.appendChild(wrapper);
      
      player = document.createElement('div');
      player.setAttribute('id', 'player');
      wrapper.appendChild(player);

      for (var i = 1; i <= input.value; i++) {
        playerTurn = document.createElement('div');
        playerTurn.setAttribute('class', 'player');
        playerTurn.innerText = "PLAYER " + i;
        player.appendChild(playerTurn);
      }

      gameElement = document.createElement('div');
      gameElement.setAttribute('id', 'board');
      wrapper.appendChild(gameElement);
      
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
      column.setAttribute('class', 'column field green ss1 ss');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green ss2 ss');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 19 track');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 20 track');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 21 blue track');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue ss1 ss');
      document.querySelector('.row1').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue ss2 ss');
      document.querySelector('.row1').appendChild(column);
      //row2
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green ss3 ss');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green ss4 ss');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 18 track');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue hc1');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 22 track');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue ss3 ss');
      document.querySelector('.row2').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue ss4 ss');
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
      column.setAttribute('class', 'column field 17 track');
      document.querySelector('.row3').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue hc2');
      document.querySelector('.row3').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 23 track');
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
      column.setAttribute('class', 'column field 16 track');
      document.querySelector('.row4').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue hc3');
      document.querySelector('.row4').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 24 track');
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
      column.setAttribute('class', 'column field green 11 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 12 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 13 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 14 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 15 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field blue');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 25 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 26 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 27 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 28 track');
      document.querySelector('.row5').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 29 track');
      document.querySelector('.row5').appendChild(column);
      //row6
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 10 track');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green hc1');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green hc2');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green hc3');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field green hc4');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow hc4');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow hc3');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow hc2');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow hc1');
      document.querySelector('.row6').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 30 track');
      document.querySelector('.row6').appendChild(column);
      //row7
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 9 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 8 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 7 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 6 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 5 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red hc4');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 35 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 34 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 33 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 32 track');
      document.querySelector('.row7').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow 31 track');
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
      column.setAttribute('class', 'column field 4 track');
      document.querySelector('.row8').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red hc3');
      document.querySelector('.row8').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 36 track');
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
      column.setAttribute('class', 'column field 3 track');
      document.querySelector('.row9').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red hc2');
      document.querySelector('.row9').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 37 track');
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
      column.setAttribute('class', 'column field red ss1 ss');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red ss2 ss');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 2 track');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red hc1');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 38 track');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow ss1 ss');
      document.querySelector('.row10').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow ss2 ss');
      document.querySelector('.row10').appendChild(column);
      //row11
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red ss3 ss');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red ss4 ss');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field red 1 track');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 39 track');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field 40 track');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow ss3 ss');
      document.querySelector('.row11').appendChild(column);
      var column = document.createElement('div');
      column.setAttribute('class', 'column field yellow ss4 ss');
      document.querySelector('.row11').appendChild(column);
      
      //dice
      diceBox = document.createElement('div');
      diceBox.setAttribute('class', 'dice-box');
      wrapper.appendChild(diceBox);
      
      dice = document.createElement('img');
      dice.setAttribute('src', './img/dice1.jpg');
      dice.setAttribute('class', 'dice');
      diceBox.appendChild(dice);

      //buttons
      buttons = document.createElement('div');
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
    buttonQuit.remove();
    buttonStart.remove();
    title.remove();
    diceBox.remove();
    buttons.remove();
    player.remove();
  }




 
  
  // -- GAME OVER

  var gameOverElement;
  var playAgainButton;
  var handlePlayAgainClick = function () {
    destroyGameOver();
    buildSplash();
  };

  function buildGameOver() {
    stage = 'gameOver';

    // create dom elements
    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id', 'game-over');

    var title = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.innerText = 'GAME OVER';
    gameOverElement.appendChild(title);

    playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'PLAY AGAIN';
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

  buildSplash();

}


window.onload = main;