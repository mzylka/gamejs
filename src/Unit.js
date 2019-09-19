import {createLi} from './functions';
export default class Unit {
    constructor() {
        this.stats = {
            maxHealth: undefined,
            basicDmg: undefined
        },
        this.isAlive = true;
        this.health;
        this.level = 1;
        this.name;
    }

    takeDmg(dmg) {
        if(this.health > dmg) {
            this.health = this.health - dmg;
        }
        else {
            this.health = 0;
            this.isAlive = false;
        }
        createLi(this.name + " lost " + dmg + " healt points"); 
    }

    updateHealth(){
        this.maxHealth += 1;
        this.health += 1;
    }

}