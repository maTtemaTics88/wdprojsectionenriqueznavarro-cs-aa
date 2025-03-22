// Functions
// Function for regular polygon creation
function drawPolygon(ctx, centerX, centerY, sides, radius, rotation) {
    ctx.beginPath();

    for (let i = 0; i < sides; i++) {
        // Calculate the angle between each point
        const angle = (i * 2 * Math.PI / sides) + rotation;

        // Plot the point on our circle
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.lineWidth = 5;
    ctx.strokeStyle = r.getPropertyValue('--prim-col');
    ctx.fillStyle = r.getPropertyValue('--seco-col');

    ctx.closePath();

    ctx.fill();
    ctx.stroke();
}

// Canvas setups
const grid = document.querySelector("#grid_home");
const canvas = document.querySelector("#canvas_home");
const ctx = canvas.getContext("2d");
const r = getComputedStyle(document.querySelector(':root'))

// Parameters for the polygon
let sides = 5;
let centerX = 0;
let centerY = 0;
let radius = 50;
let rotation = 0;
let frame = 0;

const h = window.innerHeight;
const w = window.innerWidth;


// Drawing
drawPolygon(ctx, centerX + canvas.width / 2, centerY + canvas.height / 2, sides, radius, rotation);

function tr(x, y) {
    console.log('sucess')
    canvas.animate(
        {transform:[`translate(0px, 0px)`, `translate(${x}px, ${-y}px)`]},
        {duration:1000, iterations:1, easing:'ease-in-out', fill:'forwards'});
}

function ro(d) {
    canvas.animate(
        {transform:[`rotate(0deg)`, `rotate(${d}deg)`]},
        {duration:1000, iterations:1, easing:'ease-in-out', fill:'forwards'})
}

function di(f) {
    canvas.animate(
        {transform:[`scale(1)`, `scale(${f})`]},
        {duration:1000, iterations:1, easing:'ease-in-out', fill:'forwards'})
}

// prevent the pirates form doing alt inspect >:3
document.onkeydown = (e) => {
        if (e.key == 123) {
                e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key == 'I') {
                e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key == 'C') {
                e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key == 'J') {
                e.preventDefault();
        }
        if (e.ctrlKey && e.key == 'U') {
                e.preventDefault();
        }
};

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});