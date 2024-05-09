import SolidObject from "../abstract_classes/SolidObject";

class Barrier extends SolidObject{
    constructor(context, game){
        super(context, game, [-1050, 0], [3, 0], [1000, game.dimensions[1]*game.scale])
        this.sprite = new Image();
        this.sprite.src = "./fire.png";
        this.spriteState = 0;

        setInterval(() => {
            this.spriteState = (this.spriteState+1)%19;
        }, 100);
    }

    move(delta){
        if(this.velocity[0] < 13.5) this.velocity[0] *= 1.008;
        this.position = [
            this.position[0] + this.velocity[0]*delta*this.game.scale, 
            this.position[1] + this.velocity[1]*delta*this.game.scale
        ]
    }

    draw(color="green"){
        // this.context.fillStyle = color;
        // this.context.fillRect(...this.position, ...this.dimensions);
        const spriteRow = Math.floor(this.spriteState/4);
        const spriteCol = this.spriteState%4;
        const secondary = (this.spriteState+3)%19;
        const secondarySpriteRow = Math.floor(secondary/4);
        const secondarySpriteCol = secondary%4;
        const tertiary = (this.spriteState+7)%19;
        const tertiarySpriteRow = Math.floor(tertiary/4);
        const tertiarySpriteCol = tertiary%4;
        this.context.drawImage(
            this.sprite, 
            spriteCol*96, // sx
            spriteRow*96+30, // sy
            96, //sw
            66, //sh
            this.position[0]+865, //dx
            this.position[1]-180, //dy
            280, // dw
            this.game.dimensions[1]*1.5, //dh
        ); 
        this.context.drawImage(
            this.sprite, 
            secondarySpriteCol*96, // sx
            secondarySpriteRow*96+30, // sy
            96, //sw
            66, //sh
            this.position[0]+860, //dx
            this.position[1]-180-20, //dy
            250, // dw
            this.game.dimensions[1]*1.5, //dh
        ); 
        this.context.drawImage(
            this.sprite, 
            tertiarySpriteCol*96, // sx
            tertiarySpriteRow*96+30, // sy
            96, //sw
            66, //sh
            this.position[0]+820, //dx
            this.position[1]-180-10, //dy
            250, // dw
            this.game.dimensions[1]*1.5, //dh
        ); 
        this.context.drawImage(
            this.sprite, 
            spriteCol*96, // sx
            spriteRow*96+30, // sy
            96, //sw
            66, //sh
            this.position[0]+750, //dx
            this.position[1]-180, //dy
            300, // dw
            this.game.dimensions[1]*1.5, //dh
        ); 
        this.context.drawImage(
            this.sprite, 
            secondarySpriteCol*96, // sx
            secondarySpriteRow*96+30, // sy
            96, //sw
            66, //sh
            this.position[0]+625, //dx
            this.position[1]-180-20, //dy
            400, // dw
            this.game.dimensions[1]*1.5, //dh
        ); 
        this.context.drawImage(
            this.sprite, 
            tertiarySpriteCol*96, // sx
            tertiarySpriteRow*96+30, // sy
            96, //sw
            66, //sh
            this.position[0]+535, //dx
            this.position[1]-180-10, //dy
            400, // dw
            this.game.dimensions[1]*1.5, //dh
        ); 
    }
}

export default Barrier;