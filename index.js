const canvas = document.getElementById('canvas');

// retreives the 2d "drawing area of our html canvas tag"
const ctx = canvas.getContext('2d');

// start of line at 0, 0 coordinates
ctx.moveTo(0, 0);
// end line at 100, 100
ctx.lineTo(100, 1000);
// actually draws the line
ctx.stroke();
