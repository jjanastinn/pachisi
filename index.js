'use strict';

function main() {

  var mainElement = document.querySelector('#site-main');
  var stage;

  
  // -- SPLASH

  var splashElement;
  var startGameButton;
  var input;
  var game;

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

    var title = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.innerText = 'PACHISI';
    splashElement.appendChild(title);

    var label = document.createElement('label');
    label.setAttribute("class", "label");
    label.innerText = 'PLAYER  NUMBER:';
    splashElement.appendChild(label);

    input = document.createElement('input');
    // input.value = 2; // @temp
    input.setAttribute("type", "number");
    input.setAttribute("class", "input");
    splashElement.appendChild(input);

    startGameButton = document.createElement('button');
    startGameButton.setAttribute("class", "start-end");
    startGameButton.innerText = 'START';
    splashElement.appendChild(startGameButton);

    // apppend to site-main
    mainElement.appendChild(splashElement);

    // bind click on start play button
    startGameButton.addEventListener('click', handleStartClick);

    //handleStartClick();    // @temp
  }

  function destroySplash() {
    // unbind click on start play button
    startGameButton.removeEventListener('click', handleStartClick);
    // remove splash from dom
    splashElement.remove();
  }


  // -- GAME

  var gameElement;
  var buttonStart;
  var buttonQuit;

  var handleRestartClick = function () {
    destroyGame();
    buildGame();
  };

  var handleGameOverClick = function () {
    destroyGame();
    buildGameOver();
  };


  function buildGame() {
    stage = 'game'; 

    gameElement = document.createElement('div');
    mainElement.appendChild(gameElement);

    var title = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.innerText = 'PACHISI';
    gameElement.appendChild(title);

    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    gameElement.appendChild(wrapper);

    var buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');
    gameElement.appendChild(buttons);
    
    buttonStart = document.createElement('button');
    buttonStart.innerText = 'START NEW GAME';
    buttons.appendChild(buttonStart);
    buttonStart.addEventListener('click', handleRestartClick);
    
    buttonQuit = document.createElement('button');
    buttonQuit.innerText = 'QUIT';
    buttons.appendChild(buttonQuit);
    buttonQuit.addEventListener('click', handleGameOverClick);

    game = new Game(wrapper, Number(input.value));
    game.onGameOver(handleGameOverClick);
  }

  function destroyGame() {
    game.destroy();
    // unbind click on quit game button
    buttonStart.removeEventListener('click', handleRestartClick);
    buttonQuit.removeEventListener('click', handleGameOverClick);
    // remove splash from dom
    gameElement.remove();
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
    playAgainButton.setAttribute("class", "start-end");
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