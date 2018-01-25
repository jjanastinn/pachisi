'use strict';

var ROLL_DICE_COUNT = 1;
var ROLL_DICE_MS = 50;
var ROLL_DICE_DELAY = 50;

function Game(parentElement, numberOfPlayers) {
    var self = this;
    
    self.gameElement = document.createElement('div');
    parentElement.appendChild(self.gameElement);
    
    self.players = [];
    self.track = new Array(56);
    self.turnElements = {};
    self.diceElement = null;

    self.possiblePlayers = ['red', 'blue', 'green', 'yellow'];
    self.currentPlayerNumber = -1;
    self.currentPlayerColor = null;

    self.createPlayers(numberOfPlayers);
    self.createBoard();
    self.createDice();

    // @todo loop all players and call player[ix].init()
    for (var ix = 0; ix < self.players.length; ix++) {
        self.players[ix].init();
    }

    self.nextTurn();
}

Game.prototype.createPlayers = function(numberOfPlayers) {
    var self = this;

    var turnsElement = document.createElement('div');
    turnsElement.setAttribute('id', 'player');
    self.gameElement.appendChild(turnsElement);

    for (var ix = 0; ix < numberOfPlayers; ix++) {
        var color = self.possiblePlayers[ix];
        var turnElement = document.createElement('div');
        turnElement.classList.add('player');
        turnElement.classList.add(color);
        turnElement.innerText = "player " + ix;
        turnsElement.appendChild(turnElement);
        self.turnElements[color] = turnElement;
        self.players.push(new Player(color));
    }
};

Game.prototype.createBoard = function() {
    var self = this;

    var boardElement = document.createElement('div');
    boardElement.setAttribute('id', 'board');
    self.gameElement.appendChild(boardElement);

    var boardSize = data.length;
    for (var rowIx = 0; rowIx < boardSize; rowIx++) {
        var rowElement = document.createElement('div');
        rowElement.classList.add('row');
        boardElement.appendChild(rowElement);
        for (var columnIx = 0; columnIx < boardSize; columnIx++) {
            var cellData = data[rowIx][columnIx];
            var cellElement = document.createElement('div');
            cellElement.classList.add('column');
            rowElement.appendChild(cellElement);
            if (cellData.type) {
                cellElement.classList.add('field');
                cellElement.classList.add(cellData.type);
            }
            if (cellData.color) {
                cellElement.classList.add(cellData.color);
            }
            if (cellData.index) {
                self.track[cellData.index] = cellElement;
            }
            if (cellData.type === 'ss') {
                // @todo push th ss dom elements to the instance of player
                var playerIndex = self.possiblePlayers.indexOf(cellData.color);
                var player = self.players[playerIndex];
                if (player) {
                    player.startingSquares.push(cellElement);
                }
            }
        }
    }
};

Game.prototype.createDice = function() {
    var self = this;

    var diceBox = document.createElement('div');
    diceBox.setAttribute('class', 'dice-box');
    self.gameElement.appendChild(diceBox);
    
    self.diceElement = document.createElement('img');
    self.diceElement.setAttribute('src', './img/dice1.jpg');
    self.diceElement.classList.add('dice');
    diceBox.appendChild(self.diceElement);
};


// @todo nextTurn
Game.prototype.nextTurn = function() {
    var self = this;

    // @todo check if move possible

    self.currentPlayerNumber++;

    if (self.currentPlayerNumber === self.players.length) {
        self.currentPlayerNumber = 0;
    }
    self.currentPlayerColor = self.possiblePlayers[self.currentPlayerNumber];

    for (var color in self.turnElements) {
        self.turnElements[color].classList.remove('active'); 
    };
    self.turnElements[self.currentPlayerColor].classList.add('active'); 


    // @todo click to roll
    // add a class to the dice that csss animates
    // add eventListener
    // on that event listener you
    // - remove the event listener
    // - remove the css clas that animates
    // - self.rollDice

    self.rollDiceTimeout = window.setTimeout(function () {
        self.rollDice();
    }, ROLL_DICE_DELAY);
};

Game.prototype.rollDice = function () {
    var self = this;

    var counter = 0;
    self.diceInterval = window.setInterval(function () {
        var randomNumber = (Math.floor(Math.random() * 6)) + 1;
        self.diceElement.setAttribute('src', './img/dice' + randomNumber + '.jpg');    
        counter++;
        if (counter === ROLL_DICE_COUNT) {
            window.clearInterval(self.diceInterval);
            //randomNumber = 1; // @temp
            self.enableCones(randomNumber);
        }
    }, ROLL_DICE_MS);
};

Game.prototype.enableCones = function (randomNumber) {
    var self = this;

    var currentPlayer = self.players[self.currentPlayerNumber];
    var movableCones = currentPlayer.getMovableCones(randomNumber); 


    function handleConeClick (evt) {
        var index = evt.target.getAttribute('data-index');
        var cone = currentPlayer.cones[index];
        console.log("move cone", index);
        currentPlayer.moveCone(index, randomNumber);

        // for (var i = 0; i < self.players.length; i++) {
        //    if (currentPlayer.cones[i].trackPosition === self.players[i].cones[i].trackPosition) {
        //        return self.players[i].cones[i].trackPosition = self.players[i].cones[i].trackPosition;
        //    }
        // } why not working??
        
        if (cone.trackPosition === null) {
            cone.element.remove();
        }
        else {
            self.track[cone.trackPosition].appendChild(cone.element);
        }
        
        movableCones.forEach(function(item, index) {
            item.element.removeEventListener('click', handleConeClick);
            item.element.classList.remove('enabled');
        });
        
        if (randomNumber !== 6) {
            self.nextTurn();
        } else {
            self.currentPlayerNumber--;
            self.nextTurn();
        }

    } 
    
    // @temp
    movableCones.forEach(function(item, index) {
        item.element.addEventListener('click', handleConeClick);
        item.element.classList.add('enabled');
    })

    if (movableCones.length === 0) {
        return self.nextTurn();
    }
    
    // @temp
    // window.setTimeout(function () {
    //     handleConeClick();
    // }, 0);

    console.log(movableCones);
};


Game.prototype.endGame = function () {
    var self = this;

    // show something in the screen
    // setTimeout(function () {
    //    self.onEndedCallback();
    //})

    self.onEndedCallback();
};

// store the callback for us to call them back when the game ends
Game.prototype.onGameOver = function(callback) {
    var self = this;
    self.onEndedCallback = callback;
}


Game.prototype.destroy = function() {
    var self = this;

    self.finished = true;
    self.gameElement.remove();

    window.clearTimeout(self.rollDiceTimeout);
    window.clearInterval(self.diceInterval);
};
  

