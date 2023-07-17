class StaticObject {
    constructor(context, game, position = [0, 0], velocity = [0, 0], dimensions = [10, 10]){
        this.position = [position[0]*game.scale, position[1]*game.scale];
        this.dimensions = [dimensions[0]*game.scale, dimensions[1]*game.scale];
        this.velocity = velocity;
        this.context = context;
        this.game = game;
    }

    move(delta){
        this.position = [
            this.position[0] + this.velocity[0]*delta*this.game.scale, 
            this.position[1] + this.velocity[1]*delta*this.game.scale
        ]
    }

    draw(color="white"){
        this.context.fillStyle = color;
        this.context.fillRect(...this.position, ...this.dimensions);
    }

    destroy(){
        this.game.objects.delete(this);
    }

    collisionBox(){
        return null
    }

    collides(){
        return false;
    }    
}

export default StaticObject;