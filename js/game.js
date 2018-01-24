'use strict';

function Game(mainElement, numberOfPlayers) {
    var self = this;
    self.mainElement = mainElement;
    self.players = [];
    self.turn;
    self.fields;
    
    var possiblePlayers = ['RED', 'BLUE', 'GREEN', 'YELLOW']; //@ should be global
    for (var i = 0; i < numberOfPlayers; i++) {
        self.players.push(new Player (possiblePlayers[i]));
    }
}

Game.prototype.getFields = function() {
    var self = this;
    
    var track;
    var allFields;
    var fieldNodeList = document.querySelectorAll('.column');
    allFields = Array.from(fieldNodeList);
    track = allFields.filter(field => field.classList.contains('track') === true);
}


// Why does not work?? Where is every cone starting
// Game.prototype.getStartingSquare = function() {
//     var self = this;

//     var redStartingSquare;
//     var blueStartingSquare;
//     var greenStartingSquare;
//     var yellowStartingSquare;

//     switch(self.players[i]) {
//         case 'red':
//             redStartingSquare = allFields.filter(field => field.classList.contains('ss') && field.classList.contains('red') === true);
//             break;
//         case 'blue':
//             blueStartingSquare = allFields.filter(field => field.classList.contains('ss') && field.classList.contains('blue') === true);
//             break;
//         case 'green':
//             greenStartingSquare = allFields.filter(field => field.classList.contains('ss') && field.classList.contains('green') === true);
//             break;
//         case 'yellow':
//             yellowStartingSquare = allFields.filter(field => field.classList.contains('ss') && field.classList.contains('yellow') === true);
//             break;
//       }  
// }


Game.prototype.firstTurn = function() {
    var self = this;

    var chooseFirst = (Math.floor(Math.random() * self.players.length));
    self.turn = self.players[chooseFirst];
}


// Why does not work??
// Game.prototype.switchTurns = function() {
//     var self = this;
//     if (self.players[i] = 4) {
//         switch(self.turn) {
//             case red:
//                 self.turn = green;
//                 break;
//             case green:
//                 self.turn = blue;
//                 break;
//             case blue:
//                 self.turn = yellow;
//                 break;
//             case yellow:
//                 self.turn = red;
//                 break;
//         }
//     }
//     else if (self.players[i] = 3) {
//         switch(self.turn) {
//             case red:
//                 self.turn = green;
//                 break;
//             case green:
//                 self.turn = blue;
//                 break;
//             case blue:
//                 self.turn = red;
//                 break;
//         }
//     }
//     else if (self.players[i] = 2) {
//         switch(self.turn) {
//             case red:
//                 self.turn = blue;
//                 break;
//             case blue:
//                 self.turn = red;
//                 break;
//         }
//     }
// }


// destroy game
Game.prototype.destroy = function() {
    var self = this;

    self.finished = true;
    self.gameElement.remove();
};
  

