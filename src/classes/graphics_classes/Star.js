import SolidObject from "../abstract_classes/SolidObject";

class Star extends SolidObject {
    constructor(context, game, position, velocity=[-1, 0]){
        const size = (0.7*game.scale)/(Math.abs(1/velocity[0]));
        super(context, game, position, velocity, [size, size]);
    }
    
    move(delta){
        super.move(delta);
        if(this.position[0] < 0-this.dimensions[0]-50){
            this.destroy();
        }
    }

    draw(){
        super.draw("white");
    }

    destroy(){
        this.game.objects.delete(this);
    }
}

export default Star;