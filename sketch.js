var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  car.velocityx=speed
  car.shapecolor="green"
  wall = createSprite(1500,200,60,height/2)
  wall.shapecolor="grey"
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityx=0
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapecolor="blue"
    }
    if(deformation-180 && deformation>100){
      car.shapecolor="purple"
    }
    if(deformation-100){
      car,shapecolor="yellow"
    }
  }
  drawSprites();
}