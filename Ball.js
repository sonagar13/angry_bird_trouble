class Ball {

    constructor(){

        var options = {

                restitution: 1 

        }
        this.body = Bodies.circle(200,200,20, options);

        World.add(world,this.body);





    }

    display(){


        var pos = this.body.position ;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 20);


    }











}