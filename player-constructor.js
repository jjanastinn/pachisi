'use strict';

function Player(id) {
    var self = this;
    self.id = id;
    self.startingCircle;
    self.cones = [];
    self.playerPosition;
    self.turn = true;
    self.startingSquare;
}


// Why doesnt work?
Player.prototype.createCones = function() {
    var self = this;
    for (var i = 0; i < game.players.length; i++) {
        self.cones.push(new Cone(self.id + [i])); 
    }
}


Player.prototype.enableMovement = function() {
    var self = this;
    if (self.turn === true) {
        
    }
} 


// Player.prototype.cones = function() {
//     var self = this;
//     self.id;
//     self.position;
//     self.gamePosition;
//     self.startingSquare = true;
// }

