
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

    platformSpawn(position, width, velocity=[0, 0]){
        this.game.platforms.add(new Platform(this.game.gameContext, this.game, [...position], width, [...velocity]));
    }
    buildingSpawn(position, width, velocity=[0, 0]){
        this.game.platforms.add(new Building(this.game.gameContext, this.game, [...position], width, [...velocity]));
    }
}

export default PlatformController;