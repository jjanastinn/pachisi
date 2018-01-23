'use strict';

function Game(mainElement) {
    var self = this;
    self.mainElement = mainElement;
    self.players = [];
    self.turn;
    self.fields;
}


Game.prototype.getPlayerNumber = function(input) {
    var self = this;
    var possiblePlayers = ['red', 'blue', 'green', 'yellow']; //@ should be global
    for (var i = 0; i < input.value; i++) {
        self.players.push(new Player (possiblePlayers[i]));
    }
}

Game.prototype.getFields = function() {
    var self = this;
    var fieldNodeList = document.querySelectorAll('.square');
    self.fields = Array.from(fieldNodeList);
}


Game.prototype.firstTurn = function() {
    var self = this;
    var chooseFirst = (Math.floor(Math.random() * self.players.length));
    self.turn = self.players[chooseFirst];
}


Game.prototype.switchTurns = function() {
    var self = this;
    if (self.players[i] = 4) {
        switch(self.turn) {
            case red:
                self.turn = green;
                break;
            case green:
                self.turn = blue;
                break;
            case blue:
                self.turn = yellow;
                break;
            case yellow:
                self.turn = red;
                break;
        }
    }
    else if (self.players[i] = 3) {
        switch(self.turn) {
            case red:
                self.turn = green;
                break;
            case green:
                self.turn = blue;
                break;
            case blue:
                self.turn = red;
                break;
        }
    }
    else if (self.players[i] = 2) {
        switch(self.turn) {
            case red:
                self.turn = blue;
                break;
            case blue:
                self.turn = red;
                break;
        }
    }
}


// destroy game
Game.prototype.destroy = function() {
    var self = this;
    self.finished = true;
    // self.gameElement.remove();
};
  

