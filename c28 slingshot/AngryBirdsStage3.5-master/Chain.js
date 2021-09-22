class Chain{
    constructor(bodyA, pt){
        var options = {
            bodyA: bodyA,
            pointB: pt,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pt = pt;
    }

    display(){
        if (this.chain.bodyA!=null) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pt;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
fly(){
    this.chain.bodyA = null;
}
    
}
