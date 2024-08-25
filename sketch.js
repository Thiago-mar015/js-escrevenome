let xBolinha = 300;
let yBolinha = 200;
let diametro = 15

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0) 
  circle (xBolinha,yBolinha , diametro);
  xBolinha += velocidadeXBolinha;
  xBolinha += velocidadeYBolinha;
  
  if (xBolinha > width ||
    xBolinha <0){
    velocidadeXbolinha *= -1;
  }
  if (yBolinha > height){
    velocidadeYBolinha *= -1;
  }
}