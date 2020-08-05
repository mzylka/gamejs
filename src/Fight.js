import Enemy from './Enemy';

export default class Fight{
    constructor(player){
        this._player = player;
        this._enemy = new Enemy(this._player.level);
        this._isPlayerRound = true;

        this._interface = `<div class="fight">
            <div class="fight__main">
                <div class="fight__statistics">
                    <h2>Player</h2>
                    <canvas class="fight__health-bar" id="HeroHealth" width="100px" height="20px"></canvas>
                    <div>Basic damage: ${this._player.basicDmg}</div>
                </div>
                <div class="fight__statistics">
                    <h2>${this._enemy.name}</h2>
                    <canvas class="fight__health-bar" id="EnemyHealth" width="100px" height="20px"></canvas>
                    <div>Basic damage: ${this._enemy.basicDmg}</div>
                </div>
            </div>
        <div class="console">
            <fieldset>
                <legend>Fight history:</legend>
                <ul id="fightConsole">
                </ul>
            </fieldset>
        </div>
        <div id="returnToMenu">
        </div>
        </div>`
    }

    get interface(){
        return this._interface;
    }

    startFight(callback, drawBar){
        drawBar(this._player, "health", "HeroHealth", 100, 20);
        drawBar(this._enemy, "health", "EnemyHealth", 100, 20);

        const f = setInterval(() => {
            if(this._player.isAlive && this._enemy.isAlive){
                if(this._isPlayerRound === true){
                    const attack = this._player.Attack(this._enemy);
                    drawBar(this._enemy, "health", "EnemyHealth", 100, 20);
                    this.createLi(this._enemy.name + " lost " + attack + " healt points"); 
                    
                    if(this._enemy.isAlive === false){
                        this.createLi("Enemy is dead");
                        return;
                    }
                    this._isPlayerRound = !this._isPlayerRound;
                }
                else{
                    const attack = this._enemy.Attack(this._player);
                    drawBar(this._player, "health", "HeroHealth", 100, 20);
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
                callback();
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