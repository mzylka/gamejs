import Hero from './Hero';
import Maze from './Maze';
import Fight from './Fight';

export default class Game{
    constructor(stats){
        this.player = new Hero(stats.health, stats.dmg);
        this.mainMenu = document.getElementById("main");
    }

    createMenu(){
        creator.innerHTML =
        `<h1>Your Champion:</h1>
        <h3 id="points">Stats:</h3>
        <div class="stats">
            <div class="health">
                <h4>MaxHealth: ${this.player.stats.maxHealth}</h4>
                <h4 id="heroHealth">Health: ${this.player.health}</h4>
            </div>
            <div class="damage">
                <h4>Damage: ${this.player.stats.basicDmg}</h4>
            </div>
            <div class="experience">
                <h5>Level: ${this.player.level}</h5>
                <h5>Max Experience: ${this.player.maxExp}</h5>
                <h5>Experience: ${this.player.exp}</h5>
            </div>
            <h5>Coins: ${this.player.coins}</h5>
        </div>`;

        this.mainMenu.innerHTML = 
        `<div class="Buttons">
        <button class="button" id="fightButton" type="button">Fight</button>
        <button class="button" id="healButton" type="button">Drink Healing Potion</button>
        <button class="button" id="reviveButton" type="button">Revive Hero</button>
        <button class="button" id="buyPoints" type="button">Buy Points</button>
        </div>
        `;

        document.querySelector("#fightButton").addEventListener("click", () => {this.Fight()});
        document.querySelector("#healButton").addEventListener("click", () => {this.Heal()});
        document.querySelector("#reviveButton").addEventListener("click", () => {this.Revive()});
        document.querySelector("#buyPoints").addEventListener("click", () => {this.buyPoints()});
        this.checkPlayerStatus();
    }

    checkPlayerStatus(){
        if(this.player.isAlive === false){
            document.getElementById("fightButton").disabled = true;
            document.getElementById("healButton").disabled = true;
            document.getElementById("reviveButton").disabled = false;
        }
        else{
            document.getElementById("fightButton").disabled = false;
            document.getElementById("healButton").disabled = false;
            document.getElementById("reviveButton").disabled = true;
        }
    }

    Fight(){
        const fight = new Fight(this.player);
        this.mainMenu.innerHTML = fight.interface;

        fight.startFight(this.createBackToMenuButt.bind(this));       
    }

    Heal(){
        this.player.healHero();
        document.getElementById("heroHealth").textContent = `Health: ${this.player.health}`;
    }

    Revive(){
        this.mainMenu.innerHTML = `
            <canvas id="maze" width="510" height="510"></canvas>
            <div id="returnToMenu"></div>
        `;
        const mazeGame = new Maze();
        mazeGame.draw();

        const playerControl = (e) =>{
            switch(e.keyCode){
                case 37:
                    if(mazeGame.checkMove('left')){
                        mazeGame.player.moveLeft();
                    }
                    mazeGame.draw();
                    break;
                case 38:
                    if(mazeGame.checkMove('up')){
                        mazeGame.player.moveUp();
                    }
                    mazeGame.draw();
                    break;
                case 39:
                    if(mazeGame.checkMove('right')){
                        mazeGame.player.moveRight();
                    }
                    mazeGame.draw();
                    break;
                case 40:
                    if(mazeGame.checkMove('down')){
                        mazeGame.player.moveDown();
                    }
                    mazeGame.draw();
                    break;
            }
            if(mazeGame.checkWinner() === true){
                document.removeEventListener('keydown', playerControl);
                this.player.isAlive = true;
                this.player.health = 5;
                this.createBackToMenuButt();
            }
        }

        document.addEventListener('keydown', playerControl);
    }

    createBackToMenuButt(){
        const butt = document.createElement("button");
        const text = document.createTextNode("Back to Menu");    

        butt.setAttribute("type","button");
        butt.addEventListener("click", this.createMenu.bind(this));
        document.getElementById("returnToMenu").appendChild(butt);
        butt.appendChild(text);
    }
}