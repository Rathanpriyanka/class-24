class Log {

constructor () {
var options = {

    isStatic : true
}
this.log1 = Bodies.rectangle(50,50,200,20,options);
this.log2 = Bodies.rectangle(150,50,200,20,options);
this.log3 = Bodies.rectangle(50,200,200,20,options);
this.log4 = Bodies.rectangle(50,300,200,20,options);
Matter.Body.setAngle(this.log1,PI/4);
Matter.Body.setAngle(this.log2,3*(PI/4));
World.add(world,this.log1);
World.add(world,this.log2);
World.add(world,this.log3);
World.add(world,this.log4);
}
display (){
    push();
    fill("yellow");
    strokeWeight(3);
    stroke("orange");
    var pos1 = this.log1.position;
    translate(pos1.x,pos1.y);
    var pos2 = this.log2.position;
    translate(pos2.x,pos2.y);
    var pos3 = this.log3.position;
    translate(pos3.x,pos3.y);
    var pos4 = this.log4.position;
    translate(pos4.x,pos4.y);
    rotate(this.log1.angle);
    rotate(this.log2.angle);
    rect(0,0,200,20);
    rect(0,0,200,20);
    rect(0,0,200,20);
    rect(0,0,200,20);
   pop();
}





}