class Paper
{
	constructor(x,y){
        
        var options ={
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2,
        }

        this.body = Bodies.circle(x,  y, radius/2.6, options);

        this.image = loadImage("paper.png");

        World.add(world, this.body);
	}
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}