class log {
    constructor(x,y,height,angle) {
        var options = {
            restitution : 0.5, friction : 2.0, density : 0.8
        }
        this.log = Bodies.rectangle(x,y,20,height, options)
        World.add(world,this.log)
        Matter.Body.setAngle(this.log, angle)
        this.h = height
    }

    display() {
        push()
        translate(this.log.position.x, this.log.position.y)
        rotate(this.log.angle)
        fill("brown");
        rectMode(CENTER)
        rect(0,0,20,this.h)
        pop()
    }
}