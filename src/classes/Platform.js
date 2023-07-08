import SolidObject from "./SolidObject";


class Platform extends SolidObject {
    constructor(context, game, [x, y] = position, width=2, velocity=[0, 0]){
        super(context, game, [x, y], velocity, [width, 10]);
    }

    move(delta){
        super.move(delta);
        if(this.position[0] < 0-this.dimensions[0]-50){
            this.destroy();
        }
    }

    draw(color="red"){
        this.context.fillStyle = color;
        this.context.fillRect(...this.position, this.dimensions[0], this.dimensions[1]);
    }
}

export default Platform;