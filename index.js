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

function chooseRandom(min, max) {
    return Math.random() * (max - min) + min;
};

// for multiple obstacles
var obstacles = [
    {
    x: chooseRandom(500, 1500),
    y: chooseRandom(0, 500),
    width: 50,
    height: 200
    },
    {
    x: chooseRandom(500, 1500),
    y: chooseRandom(0, 300),
    width: 50,
    height: 300
    },
    {
    x: chooseRandom(500, 1500),
    y: chooseRandom(0, 300),
    width: 50,
    height: 200
    },
    {
    x: chooseRandom(500, 1500),
    y: chooseRandom(0, 300),
    width: 50,
    height: 200
    }
]

setInterval(function() {
    
    // w key moves character up
    if (key === 'w') {
        y -= 1;
    }
    // s key moves characer down
    if (key === 's') {
        y += 1;
    };

    ctx.clearRect(0, 0, 2000, 2000);
    ctx.drawImage(player, x, y);

    ctx.fillStyle = '#006B6A';

    for (var i=0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        obstacle.x -= 1;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

}, 5);
