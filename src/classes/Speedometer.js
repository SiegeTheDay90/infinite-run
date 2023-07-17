import StaticObject from "./StaticObject";

class Speedometer extends StaticObject{
    constructor(context, game){
        const position = [28, 28];
        const velocity = [0, 0];
        const dimensions = [120, 30];

        super(context, game, position, velocity, dimensions);
    }

    draw(){
        const relative_velocity = (this.game.player.velocity[0] - (this.game.player.footing?.velocity[0]||0))/(10-(this.game.player.footing?.velocity[0]||0));
        this.context.fillStyle = "white";
        this.context.font = "16px serif";
        this.context.fillText("Speed", this.position[0], this.position[1]+16, this.dimensions[0]);
        this.context.fillStyle = "red";
        this.context.fillRect(this.position[0], this.position[1]-20, relative_velocity*this.dimensions[0], 20);
        this.context.strokeStyle = "white";
        this.context.strokeRect(this.position[0], this.position[1]-20, this.dimensions[0], 20);
    }
}

export default Speedometer;