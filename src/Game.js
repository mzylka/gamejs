import Hero from './Hero';
import Enemy from './Enemy';
import { createLi } from './functions';

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
        <button id="fightButton" type="button">Fight</button>
        <button id="healButton" type="button">Drink Healing Potion</button>
        <button id="reviveButton" type="button">Revive Hero</button>
        <button id="buyPoints" type="button">Buy Points</button>
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
            //document.getElementById("reviveButton").disabled = false;
        }
        else{
            document.getElementById("fightButton").disabled = false;
            document.getElementById("healButton").disabled = false;
            //document.getElementById("reviveButton").disabled = true;
        }
    }

    Fight(){
        let enemy = new Enemy(this.player.level);
        let isPlayerRound = true;
        this.mainMenu.innerHTML = `
        <div class="fight">
            <div class="playerDiv">
                <div class="player">
                    <table>
                        <tr>
                            <th>Name: ${this.player.name}</th>
                        </tr>
                        <tr>
                            <th>Health</th>
                            <th>Damage</th> 
                        </tr>
                        <tr>
                            <td>${this.player.health}</td>
                            <td>${this.player.stats.basicDmg}</td>
                        </tr>
                    </table>
                    <canvas id="playerHealth" width="100px" height="20px"></canvas>
                </div>
            </div>
            <div class="enemyDiv">
                <div class="enemy">
                    <table>
                        <tr>
                            <th>Name: ${enemy.name}</th>
                        </tr>
                        <tr>
                            <th>Health</th>
                            <th>Damage</th> 
                        </tr>
                        <tr>
                            <td>${enemy.health}</td>
                            <td>${enemy.stats.basicDmg}</td>
                        </tr>
                    </table>
                    <canvas id="enemyHealth" width="100px" height="20px"></canvas>
                </div>
            </div>
            <div id="returnToMenu">
            </div>
            <div>
                <fieldset>
                    <legend>Fight history:</legend>
                    <ul id="console">
                    </ul>
                </fieldset>
            </div>
        </div>`;

        this.player.drawHealth();
        enemy.drawHealth();

        const f = setInterval(() => {   //start fight function
            if(this.player.isAlive && enemy.isAlive){
                if(isPlayerRound === true){
                    this.player.Attack(enemy);
                    enemy.drawHealth();
                    if(enemy.isAlive == false){
                        createLi("Enemy is dead");
                        return;
                    }
                    isPlayerRound = !isPlayerRound;
                }
                else{
                    enemy.Attack(this.player);
                    this.player.drawHealth();
                    if(this.player.isAlive == false){
                        createLi("Player is dead");
                        return;
                    }
                    isPlayerRound = !isPlayerRound;
                }
            }
            else{
                clearInterval(f);
                if(enemy.isAlive === false){
                    this.player.gainExp(enemy.level);
                    this.player.gainCoins(enemy.coins);
                }
                let butt = document.createElement("button");
                let text = document.createTextNode("Back to Menu");    

                butt.setAttribute("type","button");
                butt.addEventListener("click", this.createMenu.bind(this));
                document.getElementById("returnToMenu").appendChild(butt);
                butt.appendChild(text);
            }
        },1000); //end fight function
    }

    Heal(){
        this.player.healHero();
        document.getElementById("heroHealth").textContent = `Health: ${this.player.health}`;
    }

    Revive(){
        const reviveGame = `
        <div class="reviveGame">
        <canvas width="800" height="400px" id="revgame"></canvas>
        </div>`;

        this.mainMenu.innerHTML = reviveGame;

        const x = () =>{
            return Math.random() * (780 - 20) + 20;
        }

        const canvas = document.getElementById("revgame");
        if(canvas.getContext){

            let ctx = canvas.getContext('2d');
            const plus = new Image();
            plus.src = "img/plus.png";
            
            ctx.fillStyle = "#4d8fab";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            plus.addEventListener('load', () => {
                ctx.drawImage(plus, x(), 0);
            });
        }
    }

    Shop(){
        const shop = `
        <div class="shop">
        <div>`;
    }
}