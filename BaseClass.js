class BaseClass{


    constructor(x,y,width,height,angle){

        var option = {

            restitution: 1,
            
            friction: 1.5,
            density: 1.2

        }
        
        this.image = loadImage("image/base.png");
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){


        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();




    }

}