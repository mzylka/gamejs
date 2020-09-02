import Enemy from './Enemy';
import GameInterface from './GameInterface';

export default class Fight{
    constructor(player){
        this._player = player;
        this._enemy = new Enemy(this._player.level);
        this._isPlayerRound = true;      
    }


    startFight(callback){
        GameInterface.createFightMenu(this._player.basicDmg, this._enemy.name, this._enemy.basicDmg);
        GameInterface.drawBar(this._player, "health", "HeroHealth", 100, 20);
        GameInterface.drawBar(this._enemy, "health", "EnemyHealth", 100, 20);

        const f = setInterval(() => {
            if(this._player.isAlive && this._enemy.isAlive){
                if(this._isPlayerRound === true){
                    const attack = this._player.Attack(this._enemy);
                    GameInterface.drawBar(this._enemy, "health", "EnemyHealth", 100, 20);
                    this.createLi(this._enemy.name + " lost " + attack + " healt points"); 
                    
                    if(this._enemy.isAlive === false){
                        this.createLi("Enemy is dead");
                        return;
                    }
                    this._isPlayerRound = !this._isPlayerRound;
                }
                else{
                    const attack = this._enemy.Attack(this._player);
                    GameInterface.drawBar(this._player, "health", "HeroHealth", 100, 20);
                    this.createLi(this._player.id + " lost " + attack + " healt points");
                    
                    if(this._player.isAlive === false){
                        this.createLi("Player is dead, you LOSE!");
                        return;
                    }
                    this._isPlayerRound = !this._isPlayerRound;
                }
            }
            else{
                clearInterval(f);
                if(this._enemy.isAlive === false){
                    const exp = this._player.gainExp(this._enemy.level);
                    this._player.coins += this._enemy.coins;
                    this.createLi(`You WIN and gain ${exp}xp and ${this._enemy.coins} coins`);
                }
                const backButton = GameInterface.createBackToMenuButt();
                backButton.addEventListener("click", () => {callback(this._player)});
            }
        },1000);
    }

    createLi(info){
        const liNode = document.createElement("li");
        const textNode = document.createTextNode(info);
    
        liNode.appendChild(textNode);
        document.getElementById("fightConsole").appendChild(liNode);
    }
}