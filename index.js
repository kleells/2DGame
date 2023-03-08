const canvas = document.getElementById('canvas');

// retreives the 2d "drawing area of our html canvas tag"
const ctx = canvas.getContext('2d');

var player = new Image();

player.src = "assets/images/cat.png";

var x = 0;
var y = 0;
var key = 0;
var keyState = 0;

player.onload = function () {
    ctx.drawImage(player, x, y);
};

document.onkeydown = function(e) {
    keyState = 'keydown';
    key = e.key;
};

document.onkeyup = function(e) {
    keyState = 'keyup';
};

setInterval(function() {
    if (keyState === 'keyup'){
        return;
    }
    // w key moves character up
    if (key === 'w') {
        y -= 1;
    }
    // s key moves characer down
    if (key === 's') {
        y += 1;
    }
    // a key moves character left
    if (key === 'a') {
        x -= 1;
    }
    // d key moves character right
    if (key === 'd') {
        x += 1;
    };

    ctx.clearRect(0, 0, 2000, 2000);
    ctx.drawImage(player, x, y);
}, 5);
