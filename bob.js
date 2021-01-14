class Bob
{ 
    constructor(x,y,d)
    {
      var options={
          isStatic:true,
          restitution:0.3,
          friction:0.2,
          gravity:1
      }
       this.body=Bodies.circle(this.x,this.y,this.d/2,options);
       this.d=d;
       this.x=x;
       this.y=y;
       World.add(world,this.body);
    }
    display()
    {
        var bob=this.body.position
        var angle=this.body.angle;
        push()
        translate(bob.x,bob.y)
        rotate(angle);
        strokeWeight(3);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,this.d,this.d);
        pop()
    }
}

function keyPressed()
{
    if(keyCode==="UP_ARROW")
    {
         Matter.body.applyForce(bob1.body,bob1.body.position,{x:100,y:100});
    }
}