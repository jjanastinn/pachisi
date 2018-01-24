'use strict';

function Player(id) {
    var self = this;
    self.id = id;
    self.startingCircle;
    self.cones = [];
    self.playerPosition;
    self.turn = true;
    self.startingSquare;

    for (var i = 0; i < 4; i++) {
        self.cones.push(new Cone(self.id + [i])); 
    }
}

// not tested
Player.prototype.enableMovement = function() {
    var self = this;

    if (self.turn === true) {
        for (var i = 0; i < cones.length; i++) {
            cone.gamePosition.addEventListener('click', cone.makeMove);
            cone.gamePosition.removeEventListener('click', cone.makeMove);
        }
    }
} 
