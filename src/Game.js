import Hero from './Hero';
import Maze from './Maze';
import Fight from './Fight';
import Store from "./Store"
import GameInterface from './GameInterface';

export default class Game{
    constructor(stats){
        this._player = new Hero(stats.health, stats.dmg);
        this._mainMenu = document.getElementById("main");
    }

    createMenu(){
        GameInterface.createMainMenu(this._player.level, this._player.basicDmg, this._player.coins, this._player.healthPotions);

        document.getElementById("fightButton").addEventListener("click", () => {this.Fight()});
        document.getElementById("healButton").addEventListener("click", () => {this.drinkHP()});
        document.getElementById("reviveButton").addEventListener("click", () => {this.Revive()});
        document.getElementById("store").addEventListener("click", () => {this.Store()});
        this.checkPlayerStatus();
        GameInterface.drawBar(this._player, "health", "HB", 200, 32);
        GameInterface.drawBar(this._player, "experience", "EB", 200, 32);
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

        fight.startFight(this.createBackToMenuButt.bind(this));       
    }

    drinkHP(){
        this._player.healHero();
        GameInterface.drawBar(this._player, "health", "HB", 200, 32,);
        document.getElementById("HP_text").textContent = "Health Potions: " + this._player.healthPotions;
    }

    Revive(){
        GameInterface.createReviveMenu();

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
        GameInterface.createStoreMenu();
        store.init();
        this.createBackToMenuButt();
    }

    createBackToMenuButt(){
        const butt = GameInterface.createBackToMenuButt();
        butt.addEventListener("click", () => {this.createMenu()});
    }
}