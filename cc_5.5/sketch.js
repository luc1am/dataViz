/*
Lucia Mumma
creative coding with Melody Loveless
Arrays and Data Viz
instructions:
  -use Arrays
  -store user input with push()
  -data visualization
  -include an object
  - interactive component
  - functions for visual environment
*/
//object Wind has attributes speed and direction
let Wind = {
  speed: [],
  direction: [],
  date:[]
};

var data;
var maxRange = 360;
var size = 5;
var canvasWidth = size*278;
var isitLooping = true;

//soh, cah, toa
//
//var winder;

function preload(){
  //winder = loadImage("winder.png");
  data = loadTable("2742990.csv",
"csv", "header");

}

function setup() {
  // put setup code here
  createCanvas(500,500);
  rectMode(CENTER);
}

function draw() {
  //basics
  frameRate(8);
  background(100,200,245);
  fill(200);
  //noStroke();
  //bc document angle is given in degrees
  angleMode(DEGREES);
  //image(winder,mouseX,mouseY);
  //windspeed
  for (let i = 0; i<278; i++){
    let spd = data.getNum(i, "WSF5");
    //print(spd);
    Wind.speed.push(spd);
  }
  //direction of the wind angle
  for (let i = 0; i<278; i++){
    //like the last airbender
    //ang controls the wind (angle)
    let ang = data.getNum(i, "WDF5");
    //print(ang);
    Wind.direction.push(ang);
  }
  for (let i = 0; i<278; i++){
    let date = data.getString(i, "DATE");
    //print(spd);
    Wind.date.push(date);
  }
  //print(Wind.direction, Wind.speed); //test
  var index = frameCount%278;
  var currAngle = Wind.direction[frameCount%278];
  var currMag = Wind.speed[frameCount%278];
  print(currAngle);
  //rotate(currAngle);
  //ellipse(100,100,100,100);

  if (isitLooping == false){
      //print("HEY");
      fill(0);
      text("on "+ Wind.date[index]+ " the fastest wind was:\n"+
       currAngle+" degrees from North and\n"+ currMag+
       " tenths of meters per second fast", 20,20);
      //print(myText);
  }
  arrow(currAngle, currMag);
}

function arrow(currAngle, currMag){
  push();
  noStroke();
  translate(250,250);
  rotate(currAngle);
  scale(currMag/10);
  //translate(225, 225);
  //scale(3);
  rect(0,0,10,20);
  triangle(0,50,-15,0,15,0);
  pop();
}

function mouseClicked(){
  if (isitLooping == true){
    noLoop();
    isitLooping = false;
  }
  else{ loop();
  isitLooping = true;  }
}
