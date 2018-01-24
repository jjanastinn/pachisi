'use strict';

function Player(color) {
    var self = this;
    self.color = color;
    self.cones = [];
    self.startingSquares = [];

    for (var i = 0; i < 4; i++) {
        self.cones.push({
            position: 0,
            trackPosition: 0,
            element: null
        });
    }
}

Player.prototype.init = function() {
    var self = this;
    
    for (var i = 0; i < 4; i++) {
        var coneElement = document.createElement('div');
        coneElement.classList.add('cone');
        coneElement.classList.add(self.color);
        self.cones[i].element = coneElement;
        self.startingSquares[i].appendChild(coneElement);
    }
}


Player.prototype.getMovableCones = function (number) {
    var self = this; 
    
    // find out which cones can move
    return self.cones.filter(function (cone) {
        // if number < 6 && cone.position === 0 return false
        // else if some other cone is "number" away from us return false
        // else...
        return true;
    });
};

