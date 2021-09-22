class bird {
    constructor(x,y) {
        var options = {
            restitution : 0.5, friction : 0.5, density : 0.8
        }
        this.bird = Bodies.circle(x,y,20)
        World.add(world,this.bird)
     }

    display() {
        this.bird.position.x = mouseX
        this.bird.position.y = mouseY
        push()
        translate(this.bird.position.x, this.bird.position.y)
        rotate(this.bird.angle)
        fill("red");
        ellipseMode(RADIUS)
        ellipse(0,0,20)
        pop()
    }
}