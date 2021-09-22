class pig {
    constructor(x,y,width,height) {
        var options = {
            restitution : 0.5, friction : 0.5, density : 0.8
        }
        this.pig = Bodies.rectangle(x,y,width,height, options)
        World.add(world,this.pig)
        this.w = width
        this.h = height
    }

    display() {
        push()
        translate(this.pig.position.x, this.pig.position.y)
        rotate(this.pig.angle)
        fill("green");
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}