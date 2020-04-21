export default class Unit {
    constructor() {
        this.stats = {
            maxHealth: undefined,
            basicDmg: undefined
        },
        this.isAlive = true;
        this.health;
        this.level = 1;
        this.id;
    }

    Attack(unit) {
        if(unit.returnStatus !== false) {
            let mixDmg = this.stats.basicDmg;
            unit.takeDmg(mixDmg);
            return mixDmg;  
        }
    }

    takeDmg(dmg) {
        if(this.health > dmg) {
            this.health = this.health - dmg;
        }
        else {
            this.health = 0;
            this.isAlive = false;
        }
    }

    updateHealth(){
        this.maxHealth += 1;
        this.health += 1;
    }

}