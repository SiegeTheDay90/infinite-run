class SolidObject {
    constructor(context, game, position = [0, 0], velocity = [0, 0], dimensions = [10, 10]){
        this.position = [position[0]*game.scale, position[1]*game.scale];
        this.dimensions = [dimensions[0]*game.scale, dimensions[1]*game.scale];
        this.velocity = velocity;
        this.context = context;
        this.game = game;
        this.facingRight = true;
    }

    move(delta){
        this.position = [
            this.position[0] + this.velocity[0]*delta*this.game.scale, 
            this.position[1] + this.velocity[1]*delta*this.game.scale
        ]
    }

    draw(color="red"){
        this.context.fillStyle = color;
        this.context.fillRect(...this.position, ...this.dimensions);
    }

    destroy(){
        this.game.objects.delete(this);
    }

    collisionBox(){
        return [
            this.position, 
            [this.position[0]+this.dimensions[0], this.position[1]], 
            [this.position[0]+this.dimensions[0], this.position[1]+this.dimensions[1]], 
            [this.position[0], this.position[1]+this.dimensions[1]]
        ]
    }


    collides(otherObject){
        let thisBox = this.collisionBox();
        let otherBox = otherObject.collisionBox();

        return inside(thisBox, otherBox) || inside(otherBox, thisBox);
    }    
}

function inside(thisBox, otherBox){
    let bounds = {"xBounds": [otherBox[0][0], otherBox[1][0]], "yBounds": [otherBox[0][1], otherBox[3][1]]};

    return thisBox.some((corner)=>{
        let [x, y] = corner;

        return bounds["xBounds"][0] <= x && x <= bounds["xBounds"][1]
            && bounds["yBounds"][0] <= y && y <= bounds["yBounds"][1];
    })
}

export default SolidObject;