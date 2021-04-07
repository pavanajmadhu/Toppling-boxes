class Ground{
//properties
//start props- constructor
constructor(y){
    var ground_options ={
        isStatic: true
    }
    this.ground = Bodies.rectangle(400,y,800,20,ground_options);
    World.add(world,this.ground);

}
//functions
display(){
    var pos=this.ground.position;
    push();
    fill("brown");
    rectMode(CENTER);
    rect(pos.x,pos.y,800,20);
    pop();
}





}