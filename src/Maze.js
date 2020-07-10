import MazePlayer from './MazePlayer';

export default class Maze{
    constructor(){
        this._canvas = document.getElementById('maze');
        this._ctx = this._canvas.getContext('2d');
        this._player = new MazePlayer();
        this._maze = this.displayMaze(this.generateMaze(25,25));
    }

    get player(){
        return this._player;
    }

    start(){
        this.draw();
        this.playerControls();
    }

    draw(){
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.drawGrid();
        this.drawMaze();
        this.drawEndPoint();
        this.drawPlayer();
    }

    drawGrid(){
        const ctx = this._ctx;
        ctx.fillStyle = 'rgb(192, 192, 192)';
        ctx.fillRect(0,0,510,510);
    
        for(let x = 0; x < 510; x += 10){
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 510);
        }
        for(let y = 0; y < 510; y += 10){
            ctx.moveTo(0, y);
            ctx.lineTo(510, y);
        }
        ctx.strokeStyle = '#ddd';
        ctx.stroke();
    }

    drawMaze(){
        const ctx = this._ctx;
        let CordY = 0;
    
        this._maze.forEach(element => {
            let CordX = 0;
    
            element.forEach(item =>{
                if(item === true){
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.fillRect(CordX, CordY, 10, 10);
                }
                CordX += 10;
            });
            CordY += 10;
        });
    
    }

    drawPlayer(){
        const ctx = this._ctx;
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(this._player.cords.x, this._player.cords.y, 10, 10);
    }

    drawEndPoint(){
        const ctx = this._ctx;
        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.fillRect(500, 490, 10, 10);
    }

    playerControls(){
        document.addEventListener('keydown', (e) =>{
            if(this.checkWinner() !== true){
                switch(e.keyCode){
                    case 37:
                        if(this.checkMove('left')){
                            this._player.moveLeft();
                        }
                        this.draw();
                        break;
                    case 38:
                        if(this.checkMove('up')){
                            this._player.moveUp();
                        }
                        this.draw();
                        break;
                    case 39:
                        if(this.checkMove('right')){
                            this._player.moveRight();
                        }
                        this.draw();
                        break;
                    case 40:
                        if(this.checkMove('down')){
                            this._player.moveDown();
                        }
                        this.draw();
                        break;
                }
            }
            else{
                return true;
            }
        });
    }

    checkMove(direction){
        let x = (this._player.cords.x / 10);
        let y = (this._player.cords.y / 10);
    
        switch(direction){
            case "left":
                let left = x - 1;
    
                if(this._maze[y][left] === true){
                    return false;
                }
                else return true;
    
            case "right":
                let right = x + 1;
    
                if(this._maze[y][right] === true){
                    return false;
                }
                else return true;
                
            case "up":
                let up = y - 1;
    
                if(this._maze[up][x] === true){
                    return false;
                }
                else return true;
    
            case "down":
                let down = y + 1;
    
                if(this._maze[down][x] === true){
                    return false;
                }
                else return true;
        }
    }

    checkWinner(){
        if(this._player.cords.x === 500 && this._player.cords.y === 490){
            return true;
        }
        else return false;
    }

    generateMaze(x,y) { // Maze generation algorith from http://rosettacode.org/wiki/Maze_generation#JavaScript
        let n=x*y-1;
        if (n<0) {alert('illegal maze dimensions');return;}
        let horiz =[]; 
            for (let j= 0; j<x+1; j++) horiz[j]= [];
        let verti =[]; 
            for (let j= 0; j<x+1; j++) verti[j]= [];
            
        let here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)];
        let path = [here];
        let unvisited = [];
        for (let j = 0; j<x+2; j++) {
            unvisited[j] = [];
            for (let k= 0; k<y+1; k++)
                unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
        }
        while (0<n) {
            let potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
                [here[0]-1, here[1]], [here[0],here[1]-1]];
            let neighbors = [];
            for (let j = 0; j < 4; j++)
                if (unvisited[potential[j][0]+1][potential[j][1]+1])
                    neighbors.push(potential[j]);
            if (neighbors.length) {
                n = n-1;
                let next = neighbors[Math.floor(Math.random()*neighbors.length)];
                unvisited[next[0]+1][next[1]+1]= false;
                if (next[0] == here[0])
                    horiz[next[0]][(next[1]+here[1]-1)/2]= true;
                else 
                    verti[(next[0]+here[0]-1)/2][next[1]]= true;
                path.push(here = next);
            } else 
                here = path.pop();
        }
        return {x: x, y: y, horiz: horiz, verti: verti};
    }

    displayMaze(m) {
        let text= [];
    
        for (let j= 0; j<m.x*2+1; j++) {
            let line= [];
            if (0 == j%2)
                for (let k=0; k<m.y*2+1; k++)
                    if (0 == k%2) 
                        line[k]= true;
                    else
                        if (j>0 && m.verti[j/2-1][Math.floor(k/2)])
                            line[k]= false;
                        else
                            line[k]= true;
            else
                for (let k=0; k<m.y*2+1; k++)
                    if (0 == k%2)
                        if (k>0 && m.horiz[(j-1)/2][k/2-1])
                            line[k]= false;
                        else
                            line[k]= true;
                    else
                        line[k]= false;
            if (0 == j) line[1]= false;
            if (m.x*2-1 == j) line[2*m.y]= false;
    
            text.push(line);
        }
        return text;
    }
}