class Bob {
    constructor(x, y,radius) {
      var options = {
          'isStatic':false,
        'density':0.8,
        'friction': 0,
        'restitution':1,
      }
      this.x=x
      this.y=y
      this.radius=radius
      this.body = Bodies.circle(this.x,this. y,this.radius/2,options);
        
        
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("pink");
     ellipse(0,0,this.radius,this.radius);
     pop();
  }


}