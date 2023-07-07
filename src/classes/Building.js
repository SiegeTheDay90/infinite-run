import Platform from "./Platform";

class Building extends Platform{
    constructor(context, game, [x, y] = position, width = 2, velocity=[0,0]){
        super(context, game, [x, y], width, velocity);
    }
}