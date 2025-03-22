// the perlin noise code was created by eoviya in 2022-01-24 using the site "Shadertoy"
// the code was modified to become a better background for the site
// Original Code from "eoviya:" https://www.shadertoy.com/view/wsX3D7

// P5 Template made by:
// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif

// These are our passed in information from the sketch.js
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float modValue = 512.0;

// The algorithm combines two random number generation algorithms.
// Permute generates large numbers while shift puts them in the desired range by getting decimal points.

float permuteX(float x)
{
    float t = ((x * 67.0) + 71.0) * x;
    return mod(t, modValue);
}

float permuteY(float x)
{
    float t = ((x * 73.0) + 83.0) * x;
    return mod(t, modValue);
}

float permuteZ(float x)
{
    float t = ((x * 103.0) + 109.0) * x;
    return mod(t, modValue);
}

float shiftX(float value)
{
    return fract(value * (1.0 / 73.0)) * 2.0 - 1.0;
}

float shiftY(float value)
{
    return fract(value * (1.0 / 69.0)) * 2.0 - 1.0;
}

float shiftZ(float value)
{
    return fract(value * (1.0 / 89.0)) * 2.0 - 1.0;
}

float taylorInvSqrt(float r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}

float smoothmix(float x, float y, float t)
{
    t = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
    return y * t + x * (1.0 - t);
}

float perlinNoise(vec3 c)
{
    // it's sad that I could have optimized this so much more but this verson of GLSL doens't allow arrays

    // ci gets the integer parts while cr gets the fractional component
    vec3 ci = floor(c.xyz);
    vec3 cr = fract(c.xyz);

    // first step of perlin's algoritm.
    // The algorithm basically generages a of points and attaches a random vector to each. Then, within each unit, the dot products between the point and the vectors are then computed. These are then combined to acheive the effect.

    // Step 1. gets the coordinates of a grid like structure around the point in 3D space
    vec3 i000 = ci;
    vec3 i001 = ci + vec3(0.0, 0.0, 1.0);
    vec3 i010 = ci + vec3(0.0, 1.0, 0.0);
    vec3 i011 = ci + vec3(0.0, 1.0, 1.0);
    vec3 i100 = ci + vec3(1.0, 0.0, 0.0);
    vec3 i101 = ci + vec3(1.0, 0.0, 1.0);
    vec3 i110 = ci + vec3(1.0, 1.0, 0.0);
    vec3 i111 = ci + vec3(1.0, 1.0, 1.0);

    // caps the values within "modValue"
    i000 = mod(i000, modValue);
    i001 = mod(i001, modValue);
    i010 = mod(i010, modValue);
    i011 = mod(i011, modValue);
    i100 = mod(i100, modValue);
    i101 = mod(i101, modValue);
    i110 = mod(i110, modValue);
    i111 = mod(i111, modValue);

    // Step 2. randomly generates the X, Y, and Z components of each vector
    float rX000 = permuteX(permuteX(permuteX(i000.x) + i000.y) + i000.z);
    float rX001 = permuteX(permuteX(permuteX(i001.x) + i001.y) + i001.z);
    float rX010 = permuteX(permuteX(permuteX(i010.x) + i010.y) + i010.z);
    float rX011 = permuteX(permuteX(permuteX(i011.x) + i011.y) + i011.z);
    float rX100 = permuteX(permuteX(permuteX(i100.x) + i100.y) + i100.z);
    float rX101 = permuteX(permuteX(permuteX(i101.x) + i101.y) + i101.z);
    float rX110 = permuteX(permuteX(permuteX(i110.x) + i110.y) + i110.z);
    float rX111 = permuteX(permuteX(permuteX(i111.x) + i111.y) + i111.z);

    float rY000 = permuteY(permuteY(permuteY(i000.x) + i000.y) + i000.z);
    float rY001 = permuteY(permuteY(permuteY(i001.x) + i001.y) + i001.z);
    float rY010 = permuteY(permuteY(permuteY(i010.x) + i010.y) + i010.z);
    float rY011 = permuteY(permuteY(permuteY(i011.x) + i011.y) + i011.z);
    float rY100 = permuteY(permuteY(permuteY(i100.x) + i100.y) + i100.z);
    float rY101 = permuteY(permuteY(permuteY(i101.x) + i101.y) + i101.z);
    float rY110 = permuteY(permuteY(permuteY(i110.x) + i110.y) + i110.z);
    float rY111 = permuteY(permuteY(permuteY(i111.x) + i111.y) + i111.z);

    float rZ000 = permuteZ(permuteZ(permuteZ(i000.x) + i000.y) + i000.z);
    float rZ001 = permuteZ(permuteZ(permuteZ(i001.x) + i001.y) + i001.z);
    float rZ010 = permuteZ(permuteZ(permuteZ(i010.x) + i010.y) + i010.z);
    float rZ011 = permuteZ(permuteZ(permuteZ(i011.x) + i011.y) + i011.z);
    float rZ100 = permuteZ(permuteZ(permuteZ(i100.x) + i100.y) + i100.z);
    float rZ101 = permuteZ(permuteZ(permuteZ(i101.x) + i101.y) + i101.z);
    float rZ110 = permuteZ(permuteZ(permuteZ(i110.x) + i110.y) + i110.z);
    float rZ111 = permuteZ(permuteZ(permuteZ(i111.x) + i111.y) + i111.z);


    // places the vector values within the desired ranges
    float x000 = shiftX(rX000);
    float x001 = shiftX(rX001);
    float x010 = shiftX(rX010);
    float x011 = shiftX(rX011);
    float x100 = shiftX(rX100);
    float x101 = shiftX(rX101);
    float x110 = shiftX(rX110);
    float x111 = shiftX(rX111);

    float y000 = shiftY(rY000);
    float y001 = shiftY(rY001);
    float y010 = shiftY(rY010);
    float y011 = shiftY(rY011);
    float y100 = shiftY(rY100);
    float y101 = shiftY(rY101);
    float y110 = shiftY(rY110);
    float y111 = shiftY(rY111);

    float z000 = shiftZ(rZ000);
    float z001 = shiftZ(rZ001);
    float z010 = shiftZ(rZ010);
    float z011 = shiftZ(rZ011);
    float z100 = shiftZ(rZ100);
    float z101 = shiftZ(rZ101);
    float z110 = shiftZ(rZ110);
    float z111 = shiftZ(rZ111);

    // generate all of the gradients within the lattice of the point
    vec3 g000 = vec3(x000, y000, z000);
    vec3 g001 = vec3(x001, y001, z001);
    vec3 g010 = vec3(x010, y010, z010);
    vec3 g011 = vec3(x011, y011, z011);
    vec3 g100 = vec3(x100, y100, z100);
    vec3 g101 = vec3(x101, y101, z101);
    vec3 g110 = vec3(x110, y110, z110);
    vec3 g111 = vec3(x111, y111, z111);

    // normalize gradients
    float n000 = taylorInvSqrt(dot(g000, g000));
    float n001 = taylorInvSqrt(dot(g001, g001));
    float n010 = taylorInvSqrt(dot(g010, g010));
    float n011 = taylorInvSqrt(dot(g011, g011));
    float n100 = taylorInvSqrt(dot(g100, g100));
    float n101 = taylorInvSqrt(dot(g101, g101));
    float n110 = taylorInvSqrt(dot(g110, g110));
    float n111 = taylorInvSqrt(dot(g111, g111));

    g000 *= n000;
    g001 *= n001;
    g010 *= n010;
    g011 *= n011;
    g100 *= n100;
    g101 *= n101;
    g110 *= n110;
    g111 *= n111;

    // Step 3. Perform the dot products between the vectors and the point vector
    float f000 = dot(g000, cr);
    float f001 = dot(g001, cr - vec3(0.0, 0.0, 1.0));
    float f010 = dot(g010, cr - vec3(0.0, 1.0, 0.0));
    float f011 = dot(g011, cr - vec3(0.0, 1.0, 1.0));
    float f100 = dot(g100, cr - vec3(1.0, 0.0, 0.0));
    float f101 = dot(g101, cr - vec3(1.0, 0.0, 1.0));
    float f110 = dot(g110, cr - vec3(1.0, 1.0, 0.0));
    float f111 = dot(g111, cr - vec3(1.0, 1.0, 1.0));

    // blend the values together to get the output
    float fadeX0 = smoothmix(f000, f100, cr.x);
    float fadeX1 = smoothmix(f010, f110, cr.x);
    float fadeX2 = smoothmix(f001, f101, cr.x);
    float fadeX3 = smoothmix(f011, f111, cr.x);
    float fadeY0 = smoothmix(fadeX0, fadeX1, cr.y);
    float fadeY1 = smoothmix(fadeX2, fadeX3, cr.y);
    float fadeZ0 = smoothmix(fadeY0, fadeY1, cr.z);

    // return value
    return fadeZ0 * 2.3;
}

void main()
{
    // normalize points
    float m = max(u_resolution.x, u_resolution.y);
	vec2 uv = gl_FragCoord.xy/(vec2(m, m)*5.0);
	uv.x *= u_resolution.x / u_resolution.y;
    float uvScale = 15.0;
    vec2 coord = uv * uvScale;

    // Generates perlin noise value for the point
    float val = perlinNoise(vec3(coord, u_time/10.0));
    // Round the value to a whole number (this makes the final product have solid stripes instead of smooth gradients)
    val = ceil(((val + 1.0) * 0.5) * 10.0);

    // Colors each of teh sectors alternately
    vec3 color = vec3(0,0,0);
    if (mod(val, 2.0) == 1.0) {
        color = vec3(0.1);
    } else {
        color = vec3(0.15);
    }
    
    // Colors the pixel
    gl_FragColor = vec4(color, 1.0);
}