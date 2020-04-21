import Enemy from './Enemy';

export default class Fight{
    constructor(player){
        this.player = player;
        this.enemy = new Enemy(this.player.level);
        this.isPlayerRound = true;
        this.isFightEnd = false

        this.interface = `<div class="fight">
        <div class="fight__statistics">
            <h2>Name: ${this.player.id}</h2>

            <span>Health: ${this.player.health}</span>
            <span>Damage: ${this.player.stats.basicDmg}</span>

            <canvas class="fight__health-bar" id="${this.player.id + 'Health'}" width="100px" height="20px"></canvas>
        </div>
        <div class="fight__statistics">
            <h2>Name: ${this.enemy.name}</h2>

            <span>Health: ${this.enemy.health}</span>
            <span>Damage: ${this.enemy.stats.basicDmg}</span>
            <canvas class="fight__health-bar" id="${this.enemy.id + 'Health'}" width="100px" height="20px"></canvas>
        </div>
        <div id="returnToMenu">
        </div>
        <div>
            <fieldset>
                <legend>Fight history:</legend>
                <ul id="fightConsole">
                </ul>
            </fieldset>
        </div>
        </div>`
    }

    startFight(callback){
        this.drawHealth(this.player.id, this.player.health, this.player.stats.maxHealth);
        this.drawHealth(this.enemy.id, this.enemy.health, this.enemy.stats.maxHealth);

        const f = setInterval(() => {
            if(this.player.isAlive && this.enemy.isAlive){
                if(this.isPlayerRound === true){
                    const attack = this.player.Attack(this.enemy);
                    this.drawHealth(this.enemy.id, this.enemy.health, this.enemy.stats.maxHealth);
                    this.createLi(this.enemy.name + " lost " + attack + " healt points"); 
                    
                    if(this.enemy.isAlive === false){
                        this.createLi("Enemy is dead");
                        return;
                    }
                    this.isPlayerRound = !this.isPlayerRound;
                }
                else{
                    const attack = this.enemy.Attack(this.player);
                    this.drawHealth(this.player.id, this.player.health, this.player.stats.maxHealth);
                    this.createLi(this.player.id + " lost " + attack + " healt points");
                    
                    if(this.player.isAlive === false){
                        this.createLi("Player is dead");
                        return;
                    }
                    this.isPlayerRound = !this.isPlayerRound;
                }
            }
            else{
                clearInterval(f);
                if(this.enemy.isAlive === false){
                    const exp = this.player.gainExp(this.enemy.level);
                    const coins = this.player.gainCoins(this.enemy.coins);
                    this.createLi(`You gain ${exp}xp and ${coins}coins`);
                }
                callback();
            }
            console.log("tura");
        },1000);
    }

    createLi(info){
        let liNode = document.createElement("li");
        let textNode = document.createTextNode(info);
    
        liNode.appendChild(textNode);
        document.getElementById("fightConsole").appendChild(liNode);
    }

    drawHealth(unitID, unitHealth, unitMaxHealth){
        let x = Math.round((100 * unitHealth) / unitMaxHealth);
        
        const canvas = document.getElementById(unitID + "Health");
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 100, 20);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(0, 0, x, 20);
        }
    }
}