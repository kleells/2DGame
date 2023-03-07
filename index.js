const canvas = document.getElementById('canvas');

// retreives the 2d "drawing area of our html canvas tag"
const ctx = canvas.getContext('2d');

var player = new Image();

player.src = "assets/images/cat.png";

var x = 0;
var y = 0;
var key = 0;

player.onload = function () {
    ctx.drawImage(player, x, y);
};

document.onkeydown = function(e) {
    key = e.key;
}

setInterval(function() {
    if (key === 'w') {
        y -= 1;
    }
    ctx.clearRect(0, 0, 2000, 2000);
    ctx.drawImage(player, x, y);
}, 5);
