class Block2{
    constructor(x,y,width,height){
        var options= {
            'restitution':0.4,
            'friction':1
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
this.width= width;
this.height= height;
this.visibility= 255;
World.add(world, this.body)
    }
    display(){
        if (this.body.speed<3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            fill(252, 186, 3);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility= this.visibility-5;
            tint(255,this.visibility);
            rect(999,999,this.width,this.height);
            pop();
        }
    }
    score(){
        if(this.visibility<0 && this.visibility > -105){
            score++;
        }
    }
}
