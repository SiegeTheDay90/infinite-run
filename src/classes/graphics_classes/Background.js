import Star from "./Star";

class Background{
    constructor(context, game){
        this.context = context;
        this.scale = game.scale;
        this.dimensions = game.dimensions;
        this.game = game;
        this.objects = new Set();
        this.spawnStar = this.spawnStar.bind(this);
        this.starSpawnInterval = setInterval(this.spawnStar, 500);
        for(let i = 0; i < 100; i++){
            let randX = Math.random()*this.dimensions[0];
            this.spawnStar(randX);
        }
    }

    spawnStar(x, y){
        x ||= this.dimensions[0]+10;
        y ||= Math.random()*this.dimensions[1]/1.5;
        const velocity = [Math.random()*-2, 0];
        this.objects.add( new Star(this.context, this, [x, y], velocity));
    }

    move(delta){
        this.objects.forEach(object => object.move(delta));
    }

    draw(){
        this.context.fillStyle = "#111133";
        this.context.fillRect(0, 0, ...this.dimensions);
        this.objects.forEach(object => object.draw());
    }
}

export default Background;