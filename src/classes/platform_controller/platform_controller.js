
import Platform from "./Platform";
import Building from "../platforms/Building";


class PlatformController {
    constructor(game){
        this.game = game;
        this.buildingSpawn = this.buildingSpawn.bind(this);
        this.platformSpawn = this.platformSpawn.bind(this);
    }

    async platformSequence(sequenceObj){
        const sequence = sequenceObj.sequence
        
        for(let i = 0; i < sequence.length; i++){
            if(!this.started){
                break;
            }

            const platform = sequence[i];
            const {y, width, timing, velocity} = platform;

            this.buildingSpawn([800, y+this.last_y], width*this.scale, velocity);

            await sleep(timing*this.scale);

            if(i === sequence.length-1 && this.started){
                const nextSequenceObj = randomEl(sequences.easy);
                this.platformSequence(nextSequenceObj);
            }
        }

    }

    endless(){
        this.buildingSpawn([this.game.dimensions[0]+10, this.game.dimensions[1]*(Math.random()*0.5+0.25)], (Math.random()*400+400), [0, 0]);
        this.buildingSpawn([this.game.dimensions[0]+1100, this.game.dimensions[1]*(Math.random()*0.5+0.25)], (Math.random()*400+500), [0, 0]);
        if(!this.game.gameOver){
            setTimeout(() => {
                this.endless();
            }, 6000);
        }
    }

    platformSpawn(position, width, velocity=[0, 0]){
        this.game.platforms.add(new Platform(this.game.gameContext, this.game, [...position], width, [...velocity]));
    }
    buildingSpawn(position, width, velocity=[0, 0]){
        this.game.platforms.add(new Building(this.game.gameContext, this.game, [...position], width, [...velocity]));
    }
}

export default PlatformController;