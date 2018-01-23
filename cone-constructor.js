'use strict';

function Cone() {
    var self = this;

    self.id;
    self.position;
    self.gamePosition;
    self.startingSquare = true;
    self.startingCircle = false;
    self.homeColumn = false;

}



Cone.prototype.enableCone = function() {
    var self = this;
    if (player.turn === true) {
        for (var i = 0; i < player.cones.length; i++) {
            self.gamePosition.addEventListener('click', makeMove)
        }
    }
}


Cone.prototype.makeMove = function() {
    var self = this;
    self.position += randomNumber;
    calculateGamePosition();
}


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







