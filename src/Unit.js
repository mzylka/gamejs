export default class Unit {
    constructor() {
        this.stats = {
            maxHealth: undefined,
            basicDmg: undefined
        },
        this.isAlive = true;
        this.health = healthP;
        this.level = 1;
        this.exp = 0;
        this.maxExp = 50;
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