'use strict';

function Game(mainElement) {
  var self = this;

  self.mainElement = mainElement;

  self.finished = false;
  self.score = 0;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  // create dom elements'
  self.canvasElement = document.createElement('canvas');
  self.canvasElement.width = self.width;
  self.canvasElement.height = self.height;
  mainElement.appendChild(self.canvasElement);

  self.ctx = self.canvasElement.getContext('2d');

  self.player = new Player(self.ctx, self.width, self.height);
  // create array of enemies

  self.handleKeyDown = function (event) {
    var key = event.key.toLowerCase();
    switch (key) {
      case 'a':
        self.player.setDirection('W');
        break;
      case 'd':
        self.player.setDirection('E');
        break;
      case 's':
        self.player.setDirection('S');
        break;
      case 'w':
        self.player.setDirection('N');
        break;
    }

  };

  document.addEventListener('keydown', self.handleKeyDown);

  function doFrame() {

    // logic
    self.score++;
    self.player.update();

    // drwaing

    self.ctx.clearRect(0, 0, self.width, self.height);
    self.player.draw();
    self.ctx.font = '20px Arial, sans-serif';
    self.ctx.fillStyle = 'black';
    self.ctx.fillText('SCORE:' + self.score,  10, 50);

    if (!self.finished) {
      window.requestAnimationFrame(doFrame);
    }
  }

  window.requestAnimationFrame(doFrame);
}

Game.prototype.destroy = function () {
  var self = this;

  self.finished = true;

  self.canvasElement.remove();

  document.removeEventListener('keydown', self.handleKeyDown);
};
