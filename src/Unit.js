export default class Unit {
    constructor(healthP, dmgP) {
        this.stats = {
            maxHealth: healthP,
            basicDmg: dmgP
        },
        this.isAlive = true;
        this.health = healthP;
        this.level = 1;
    }


    getDmg(dmg) {
        if(this.health > dmg) {
            this.health = this.health - dmg;
        }
        else {
            this.health = 0;
            this.isAlive = false;
        }
    }
    /*Attack(unit) {
        if(unit.returnStatus != false) {
            let mixDmg = this.stats.basicDmg * (Math.floor(Math.random() * 3) + 1);
            unit.getDmg(mixDmg);
            if(this instanceof Hero){
                createLi("Enemy lost " + mixDmg + " healt points");
            }
            if(this instanceof Enemy){
                createLi("Player lost " + mixDmg + " healt points");
            }
        }
    }*/
    /*drawHealth() {
        let x = Math.round((100 * this.health) / this.stats.maxHealth);
        const elem = () => {
            if(this instanceof Hero){
                return "playerHealth";
            }
            if(this instanceof Enemy){
                return "enemyHealth";
            }
        };
        const canvas = document.getElementById(elem());
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 100, 20);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(0, 0, x, 20);
        }
    }*/
    returnStats() {
        return this.stats;
    }
    returnStatus() {
        return this.isAlive;
    }
    returnMaxHealth(){
        return this.stats.maxHealth;
    }
    returnHealth(){
        return this.health;
    }
    returnBasicDmg(){
        return this.stats.basicDmg;
    }
    updateHealth(){
        this.maxHealth += 1;
        this.health += 1;
    }
}