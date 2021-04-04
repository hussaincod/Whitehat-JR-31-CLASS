class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectery=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]
    console.log(position)
    this.trajectery.push(position)
    console.log(this.trajectery)
    }
    for(var i =0;i<this.trajectery.length;i++)
    {
      image(this.smokeImage,this.trajectery[i][0],this.trajectery[i][1])
    }
  }
}
