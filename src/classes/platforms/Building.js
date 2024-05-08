import Platform from "../platform_controller/Platform";

class Building extends Platform{
    constructor(context, game, position, width = 2, velocity=[0,0]){
        super(context, game, position, width, velocity);
        this.sprite = new Image();
        this.sprite.src = "./building.png";
    }

    draw(){
        this.context.drawImage(this.sprite, this.position[0]-5, this.position[1]-5, this.dimensions[0]+10, this.game.dimensions[1]);
    }
}

export default Building;