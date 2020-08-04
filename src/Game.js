import Hero from './Hero';
import Maze from './Maze';
import Fight from './Fight';
import Store from "./Store"

export default class Game{
    constructor(stats){
        this._player = new Hero(stats.health, stats.dmg);
        this._mainMenu = document.getElementById("main");
    }

    createMenu(){
        creator.innerHTML =
        `<h1>Your Champion:</h1>
        <h3 id="points">Stats:</h3>
        <div class="stats">
            <div class="bar healthBar">
                Health: <canvas class="healthBar__canv" id="HB" width="200px" height="32px"></canvas>
            </div>
            <div class="bar expBar">
                Experience: <canvas class="expBar__canv" id="EB" width="200px" height="32px"></canvas>
            </div>
            <div class="level">
                Level: ${this._player.level}
            </div>
            <div class="damage">
                Damage: ${this._player.basicDmg}
            </div>
                <p>Coins: ${this._player.coins}</p>
                <p id="HP_text">Health Potions: ${this._player.healthPotions}</p>
        </div>`;

        this._mainMenu.innerHTML = 
        `<div class="buttons">
            <button class="button" id="fightButton" type="button">Fight</button>
            <button class="button" id="healButton" type="button">Drink Healing Potion</button>
            <button class="button" id="reviveButton" type="button">Revive Hero</button>
            <button class="button" id="store" type="button">Store</button>
        </div>
        `;

        document.getElementById("fightButton").addEventListener("click", () => {this.Fight()});
        document.getElementById("healButton").addEventListener("click", () => {this.drinkHP()});
        document.getElementById("reviveButton").addEventListener("click", () => {this.Revive()});
        document.getElementById("store").addEventListener("click", () => {this.Store()});
        this.checkPlayerStatus();
        this.drawBar(this._player, "health", "HB", 200, 32);
        this.drawBar(this._player, "experience", "EB", 200, 32);
    }

    checkPlayerStatus(){
        if(this._player.isAlive === false){
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
        const fight = new Fight(this._player);
        this._mainMenu.innerHTML = fight.interface;

        fight.startFight(this.createBackToMenuButt.bind(this), this.drawBar);       
    }

    drinkHP(){
        this._player.healHero();
        this.drawBar(this._player, "health", "HB", 200, 32,);
        document.getElementById("HP_text").textContent = "Health Potions: " + this._player.healthPotions;
    }

    Revive(){
        this._mainMenu.innerHTML = `
            <div class="maze-box">
                <canvas id="maze" width="510" height="510"></canvas>
            </div>
            <div id="returnToMenu"></div>
        `;

        const mazeGame = new Maze();
        mazeGame.draw();

        const playerControl = (e) =>{
            e.preventDefault();
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
                this._player.isAlive = true;
                this._player.health.current = 5;
                this.createBackToMenuButt();
            }
        }

        document.addEventListener('keydown', playerControl);
    }

    Store(){
        const store = new Store(this._player);
        this._mainMenu.innerHTML = store.interface;
        store.init(this.createBackToMenuButt.bind(this));
    }

    createBackToMenuButt(){
        const butt = document.createElement("button");
        const text = document.createTextNode("Back to Main Menu");    

        butt.setAttribute("type","button");
        butt.addEventListener("click", this.createMenu.bind(this));
        document.getElementById("returnToMenu").appendChild(butt);
        butt.appendChild(text);
    }

    drawBar(unit, type, elementId, elementWidth, elementHeight){
        const current = unit[type].current;
        const basic = unit[type].basic;

        const x = Math.round((elementWidth * current) / basic);
        const canvas = document.getElementById(elementId);
        if(canvas.getContext) {
            //Bar
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, elementWidth, elementHeight);
            if(type === "health"){
                ctx.fillStyle = "rgb(200, 0, 0)";
            }
            if(type === "experience"){
                ctx.fillStyle = "rgb(240, 201, 48)";
            }
            ctx.fillRect(0, 0, x, elementHeight);

            //Text
            ctx.fillStyle = "white";
            ctx.font = canvas.height / 2 + "px Atma";
            ctx.textAlign = "center";
            ctx.fillText(current + "/" + basic, canvas.width / 2, (canvas.height / 2) + (canvas.height / 8));
        }
        
    }
}