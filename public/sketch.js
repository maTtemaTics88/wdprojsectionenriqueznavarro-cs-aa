// the perlin noise code was created by eoviya in 2022-01-24 using the site "Shadertoy"
// the code was modified to become a better background for the site
// Original Code from "eoviya:" https://www.shadertoy.com/view/wsX3D7

// P5 Template made by:
// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/

let theShader;
let shaderTexture;

let theta = 0;

function preload(){
    // load the shader
    theShader = loadShader('texture.vert','texture.frag');
}

function setup() {
    //disables scaling for retina screens which can create inconsistent scaling between displays
    pixelDensity(1);
    // shaders require WEBGL mode to work
    createCanvas(width, height, WEBGL);
    noStroke();

    // initialize the createGraphics layers
    shaderTexture = createGraphics(710, 400, WEBGL);

    // turn off the createGraphics layers stroke
    shaderTexture.noStroke();
    
    resizeCanvas(windowWidth, windowHeight + 20);
}
;
function draw() {
    // instead of just setting the active shader we are passing it to the createGraphics layer
    shaderTexture.shader(theShader);

    // here we're using setUniform() to send our uniform values to the shader
    theShader.setUniform("u_resolution", [width, height]);
    theShader.setUniform("u_time", millis() / 1000.0);
    theShader.setUniform("u_mouse", [mouseX / width, map(mouseY, 0, height, height, 0) / height]);

    // passing the shaderTexture layer geometry to render on
    shaderTexture.rect(0,0,width,height);

    background(255);
    
    //pass the shader as a texture
    texture(shaderTexture);
    rect(-width/2-10,-height/2-20,width+20,height+20)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight + 20);
}