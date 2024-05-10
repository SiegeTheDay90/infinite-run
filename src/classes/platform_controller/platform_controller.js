
import Platform from "./Platform";
import Building from "../platforms/Building";


class PlatformController {
    constructor(game){
        this.game = game;
        this.last_y = game.dimensions[1]*0.5;
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

    spawnNextSequence(numSections = 3){
        console.log("Sequence Spanwed")
        this.game.levelLength = 0;
        for(let i = 0; i < numSections; i++){
            const heightChange = (Math.random()*0.48 - 0.24)*this.game.dimensions[1];
            if(this.last_y + heightChange > this.game.dimensions[1]*.75){
                this.last_y = this.game.dimensions[1]*.75
            } else if(this.last_y + heightChange < this.game.dimensions[1]*.25){
                this.last_y = this.game.dimensions[1]*.25
            } else {
                this.last_y += heightChange;
            }
            const gapLength = heightChange > 0 ? Math.random()*125+125 : Math.random()*150+150;
            const platformLength = Math.random()*150 + (heightChange < 0 ? 200 : 400);
            const sectionLength = gapLength + platformLength;
            
            this.buildingSpawn(
                [
                    this.game.dimensions[0] + this.game.levelLength, // offset off screen
                    this.last_y // height change
                ],  
                platformLength,
                [0, 0]
            )

            this.game.levelLength += sectionLength;
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