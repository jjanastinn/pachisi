'use strict';

function Cone(id) {
    var self = this;

    self.id = id;
    self.position;
    self.gamePosition;
    self.startingSquare = true;
    self.startingCircle = false;
    self.homeColumn = false;

}


// not tested
Cone.prototype.enableCone = function() {
    var self = this;
    if (player.turn === true) {
        for (var i = 0; i < player.cones.length; i++) {
            self.gamePosition.addEventListener('click', makeMove)
        }
    }
}

// not tested
Cone.prototype.makeMove = function() {
    var self = this;
    self.position += randomNumber;
    self.drawCone();
    // player.switchTurns();
}

// not tested
Cone.prototype.calculateGamePosition = function() {
    var self = this;
    switch(player.id) {
        case 'red':
            self.gamePosition = self.position;
            break;
        case 'green':
            self.gamePosition = self.position + 10;
            break;
        case 'blue':
            self.gamePosition = self.position + 20;
            break;
        case 'yellow':
            self.gamePosition = self.position + 30;
            break;
    } 
}

// not tested
Cone.prototype.drawCone = function() {
    var self = this;

    gamePosition.removeAttribute('class', 'redCone');
    self.calculateGamePosition();
    gamePosition.setAttribute('class', 'redCone');
}

// setAttribute('class', id.split('').filter(function(letter){typeof(Number(letter)) === 'string'}))

// R, E, D, 1


