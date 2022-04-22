function Mosquito(x, y) {

  this.maxX = x;
  this.maxY = y;

  this.x = Math.round((Math.random() * this.maxX));
  this.y = Math.round((Math.random() * this.maxY));
  var offSetX = Math.round((Math.random() * this.speed));
  var offSetX = Math.round((Math.random() * this.speed));
  this.speed = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  var arr = [];
  for (var j = 0; j < 3; j++) {
    arr[j] = getRandomIntInclusive(0, 255);
  }
  this.color = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

Mosquito.prototype = {
  x: 0,
  y: 0,
  maxX: 0,
  maxY: 0,
  radius: 10,
  speed: 0,
  color: "black",
  draw: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fill();
  },
  live: function() {
    var offSetX = Math.round((Math.random() * this.speed));
    var offSetY = Math.round((Math.random() * this.speed));
    var factorX = Math.random();
    var factorY = Math.random();
    if (factorX < 0.5) {
      offSetX *= -1;
    }
    if (factorY < 0.5) {
      offSetY *= -1;
    }
    this.x += offSetX;
    this.y += offSetY;
  },
}
