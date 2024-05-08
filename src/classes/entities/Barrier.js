import SolidObject from "../abstract_classes/SolidObject";

class Barrier extends SolidObject{
    constructor(context, game){
        super(context, game, [-500, 0], [10, 0], [100, game.dimensions[1]])
    }

    move(delta){
        if(this.velocity[0] < 16) this.velocity[0] *= 1.001;
        this.position = [
            this.position[0] + this.velocity[0]*delta*this.game.scale, 
            this.position[1] + this.velocity[1]*delta*this.game.scale
        ]
    }
}

export default Barrier;