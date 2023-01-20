/**
Life: A User's Manual
Pippin Barr

A game about the meaning of life, based on Passage. But less interactive. But better.
*/

"use strict";


let circle = {
    x: 0,
    y: 0,
    vx: 5,
    radius: 50,
    color: `#ff0000`
};

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(640, 640);

    circle.x = -circle.radius;
    circle.y = height / 2;
}


/**
Description of draw()
*/
function draw() {
    background(0);

    circle.x += circle.vx;

    push();
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.radius);
    pop();
}