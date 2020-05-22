var ball,position,database,beta;

function setup() {
  createCanvas(1200,800);
  background("white")
  ball = createSprite(250, 250, 10, 2);
position = [];
database = firebase.database();


}

function draw() {
beginShape();
  stroke("blue");
  strokeWeight(50);
 noFill();
ball.visible = false;
for(i = 0 ; i<position.length; i++ ){
vertex(position[0], position[1])
console.log(position)
endShape();
}
  
  


  drawSprites();
}
function mouseDragged(){
 
  ball.x = mouseX;
  ball.y = mouseY; 
  position = [ball.x,ball.y]
  

}