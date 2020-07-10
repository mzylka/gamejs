export default class MazePlayer{
    constructor(){
        this._cords = {
            x: 10,
            y: 0
        };
    }

    get cords(){
        return this._cords;
    }

    checkBorder(){
        if (this._cords.y === 0){
            return false;
        }
        else return true;
    }
    moveUp(){
        if (this.checkBorder() === true){
            this._cords.y -= 10;
        }
    }
    moveDown(){
        this._cords.y += 10;
    }
    moveRight(){
        this._cords.x += 10;
    }
    moveLeft(){
        this._cords.x -= 10;
    }

}