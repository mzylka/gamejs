export default class MazePlayer{
    constructor(){
        this.cords = {
            x: 490,
            y: 490
        };
    }

    checkBorder(){
        if (this.cords.y === 0){
            return false;
        }
        else return true;
    }
    moveUp(){
        if (this.checkBorder() === true){
            this.cords.y -= 10;
        }
    }
    moveDown(){
        this.cords.y += 10;
    }
    moveRight(){
        this.cords.x += 10;
    }
    moveLeft(){
        this.cords.x -= 10;
    }

}