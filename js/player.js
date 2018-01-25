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
        coneElement.setAttribute('data-index', i);
        self.cones[i].element = coneElement;
        self.startingSquares[i].appendChild(coneElement);
    }
}

Player.prototype.hasConeAtPosition = function(position) {
    var self = this;

    for (var i = 0; i < self.cones.length; i++) {
        if (self.cones[i].position === position) {
            return true;
        }
    }
}


Player.prototype.getMovableCones = function (number) {
    var self = this; 

    // find out which cones can move
    return self.cones.filter(function (cone) {
        if (number < 6 && cone.position === 0) {
            return false;
        }
        else if (number === 6 && cone.position === 0 && self.hasConeAtPosition(1)) {
            return false;
        }
        else {
            return true;
        }
        // if number < 6 && cone.position === 0 return false
        // if number === 6 && cone.position === 0 && self.hasConeAtPosition(1)return false
        // else if some other cone is "number" away from us return false
        // else...
    });
};

Player.prototype.calculateTrackPosition = function (position) {
    var self = this; 

    if (position === 45) {
        position = null;
    }
    else if (self.color === 'blue') {
        if (position < 21) {
            position += 20;
        }
        else if (position > 20 && position < 41) {
            position -= 20;
        }
        else if (position > 40) {
            position += 8;
        }
    }
    else if (self.color === 'green') {
        if (position < 31) {
            position += 10;
        }
        else if (position > 30 && position < 41) {
            position -= 30;
        }
        else if (position > 40) {
            position += 4;
        }
    }
    else if (self.color === 'yellow') {
        if (position < 11) {
            position += 30;
        }
        else if (position > 10 && position < 41) {
            position -= 10;
        }
        else if (position > 40) {
            position += 12;
        }
    }

    return position;
}

Player.prototype.moveCone = function (index, number) {
    var self = this;

    if (self.cones[index].position === 0) {
        self.cones[index].position = 1;
    }
    else {
        self.cones[index].position += number;
    }

    if (self.cones[index].position > 45) {
        self.cones[index].position = 45;
    }

    self.cones[index].trackPosition = self.calculateTrackPosition(self.cones[index].position);
}

