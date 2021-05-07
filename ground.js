class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,2,options);
      this.width = 900;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
