import SolidObject from "./SolidObject";


class Platform extends SolidObject {
    constructor(context, game, [x, y] = position, width=2, velocity=[0, 0]){
        super(context, game, [x, y], velocity, [width*game.dimensions[0]/10, 10]);
    }

    move(){
        super.move();
        if(this.position[0] < 0-this.dimensions[0]){
            this.destroy();
        }
    }
}

export default Platform;