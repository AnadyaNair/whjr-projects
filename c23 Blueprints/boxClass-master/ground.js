class Ground {
constructor (x,y,width,height){

var options = {
    isStatic : true
}

this.Ground = Bodies.rectangle(x,y,width,height,options);
Matter.World.add(world,this.Ground);
this.a = width;
this.b = height;
}

display(){
rectMode(CENTER);
rect(this.Ground.position.x, this.Ground.position.y, this.a, this.b);
}

}