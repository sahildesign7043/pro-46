class Weapons{

    constructor(x,y,w,h){
        var Options={
            density:1.0

        }
    
        this.body=Bodies.rectangle(x,y,w,h,Options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        
    }
    
    
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        
    }
    }