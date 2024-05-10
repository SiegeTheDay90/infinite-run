import SolidObject from "../abstract_classes/SolidObject";

class Player extends SolidObject{
    constructor(context, game){
        super(context, game, [game.dimensions[0]/5+10, -20], [6, 0], [45*game.scale, 45*game.scale]);
        this.addListeners();
        this.standing = false;
        this.jumping = false;
        this.footing = undefined;
        this.spriteSheetRight = new Image();
        this.spriteSheetRight.src = "./runnerRight.png";
        this.spriteSheetLeft = new Image();
        this.spriteSheetLeft.src = "./runnerLeft.png";
        this.spriteState = 0;
        this.relativeSpeed = 0;
        this.death = false;
        this.topSpeed = 20;
        this.keysDown = {};
        this.coolDown = {};
        this.distTraveled = 0;
    }

    move(delta){

        if(!this.jumping && !this.standing){                                            // Apply strong gravity if not jumping
            this.velocity = [this.velocity[0], Math.min(this.velocity[1] + 0.4, 16)]
        } else if(this.jumping){                                                        // Apply small gravity if jumping
            this.velocity = [this.velocity[0], Math.min(this.velocity[1] + 0.05, 16)]
        }else if(this.standing){                                                        // Apply slow down and match footing vertically
            this.velocity = [this.velocity[0]*0.995, this.footing.velocity[1]];
            if(this.rolling) this.velocity[0] *= 0.99;
        };


        // Landing conditions

        if( this.velocity[1] >= 0 && Array.from(this.game.platforms).some(platform => this.collides(platform) && (this.footing = platform))){
            
            if(!this.standing){ // land from air

                
                const impact = Math.floor((this.velocity[1]/16));

                // Decrease horizontal velocity based on impact
                // this.velocity[0] += this.footing.velocity[0] * 0.20 * impact;

                // Match vertical velocity of footing
                this.velocity[1] = this.footing.velocity[1];

                // Roll and set jump cooldown based on impact
                if(impact > 0.08){
                    this.rolling = true;
                    setTimeout(() => {
                        this.coolDown["jump"] = false;
                        this.rolling = false;
                    }, 800**(impact));
                } else {
                    setTimeout(() => {
                        this.coolDown["jump"] = false;
                    }, 250)
                }

                
                this.standing = true;
                this.position[1] = this.footing.position[1]-this.dimensions[0]+5*this.game.scale; // Snap to footing
            }

        } else {

            // If vertical velocity is < 0 OR not colliding with a platform
            this.footing = undefined;
            this.standing = false;
        }

        // Calculate next position
        const nextPosition = [
            this.position[0] + this.velocity[0]*delta*this.game.scale,
            this.position[1] + this.velocity[1]*delta*this.game.scale
        ];

        this.distTraveled += this.velocity[0]*delta;
        
        // Edge of Screen?
        if(nextPosition[0]/this.game.dimensions[0] > 0.35 || nextPosition[0]/this.game.dimensions[0] < 0.2 ){
            //  Call Game#scrollX instead of updating x-position.
            this.game.scrollX(-this.velocity[0]*delta*this.game.scale);
            this.position[1] = nextPosition[1];
        } else {
            // Update position normally
            this.position = nextPosition;
        }
    
    }
    
    spriteArgs(){
        this.spriteState = (this.spriteState+1)%48;

        let spritePosition = [40*Math.floor(this.spriteState/6), 1];
        const relative_velocity = this.velocity[0] - (this.footing?.velocity[0] || 0);
        
        if(this.rolling){
            spritePosition = [200 + 40*Math.floor(this.spriteState/16), 80]
        } else if(!this.standing && this.velocity[1] < -4){ // jumping fast
            spritePosition = [2, 80];
        } else if(!this.standing && this.velocity[1] < -1){ // jumping slow
            spritePosition = [42, 80];
        } else if(!this.standing && this.velocity[1] <= 1){ // in-air
            spritePosition = [82, 80];
        } else if(!this.standing && this.velocity[1] > 5){ // falling fast
            spritePosition = [162, 80];        
        } else if(!this.standing && this.velocity[1] > 1){ // falling slow
            spritePosition = [122, 80];
        } else if(this.standing && Math.abs(relative_velocity) < 1 && this.position[0] > 0){ // standing, not running
            spritePosition = [202, 80];
            this.velocity[0] = this.footing.velocity[0];
        } else if(this.standing){ // running
            spritePosition[1] = 41;
            this.facingRight = relative_velocity > 0;
        }

        return [...spritePosition, 39, 39, this.position[0], this.position[1]-4, this.dimensions[0], this.dimensions[1]];
    }

    draw(){
        if(this.facingRight === false){
            this.context.drawImage(this.spriteSheetLeft, ...this.spriteArgs());
        } else {
            this.context.drawImage(this.spriteSheetRight, ...this.spriteArgs());
        }
    }

    addListeners(){
        document.addEventListener('keydown', function(e){
            if(e.key == " " && this.standing){
                e.preventDefault();
                this.jump();
                this.keysDown[e.key] ||= setInterval(this.jump.bind(this), 300);
                
            } else if(e.key == "ArrowRight" || e.key =="d"){ //} && this.standing){
                if(this.started && !this.gameOver) e.preventDefault();
                
                this.keysDown[e.key] ||= setInterval(function(){
                    if(this.standing && !this.rolling){
                        if(this.velocity[0] > 0){
                            // While moving right or standing still
                            this.velocity = [
                                Math.min(
                                    this.velocity[0] + (this.topSpeed - this.velocity[0])*2/(this.topSpeed),
                                    this.topSpeed
                                ),
                                this.velocity[1]
                            ]
                            this.facingRight = true;
                        } else if(this.velocity[0] === 0){
                            this.facingRight = true;
                            this.velocity[0] += 2;
                        } else {
                            this.velocity = [
                                Math.ceil(this.velocity[0]*0.8),
                                this.velocity[1]
                            ]                        
                        }
                    }
                }.bind(this), 100);
                
            } else if(e.key == "ArrowLeft" || e.key == "a"){ //&& this.standing){
                if(this.started && !this.gameOver) e.preventDefault();
               
                this.keysDown[e.key] ||= setInterval(function(){
                    if(this.standing && !this.rolling){
                        if(this.velocity[0] < 0){
                            // While moving left or standing still
                            this.velocity = [
                                Math.max(this.velocity[0]*1.1, -this.topSpeed),
                                this.velocity[1]
                            ]
                        } else if(this.velocity[0] === 0){
                            this.velocity[0] -= 2;
                            this.facingRight = false;
                        } else {
                            this.facingRight = false;
                            this.velocity = [
                                Math.floor(this.velocity[0]*0.8),
                                this.velocity[1]
                            ]                        
                        }
                    }
                }.bind(this), 100);
            
            }
        }.bind(this));
        
        document.addEventListener('keyup', function(e){
            clearInterval(this.keysDown[e.key]);
            delete this.keysDown[e.key];
        }.bind(this));
    }

    jump(){
        if(!this.coolDown["jump"]){
            this.position = [this.position[0], this.position[1]-7];
            this.velocity = [this.velocity[0], -10];
            this.jumping = true;
            setTimeout(() => this.jumping = false, 500);
            setInterval(() => { if(!this.keysDown[" "]) this.jumping = false })
            this.coolDown["jump"] = true;
            this.standing = false;
            this.footing = null;
        }
    }

    collisionBox(){
        return [
            [this.position[0], this.position[1]+this.dimensions[1]*0.9], 
            [this.position[0]+this.dimensions[0], this.position[1]+this.dimensions[1]*0.9], 
            [this.position[0]+this.dimensions[0], this.position[1]+this.dimensions[1]], 
            [this.position[0], this.position[1]+this.dimensions[1]]
        ]
    }

}


export default Player;