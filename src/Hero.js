import {createLi} from './functions';
import Unit from './Unit';

export default class Hero extends Unit {
    constructor(healthP, dmgP){
        super(healthP, dmgP);
        this.healthPotions = 5;
    }
    get Potions(){
        return this.healthPotions;
    }
    getPotion(){
        this.healthPotions += 1;
    }
    Attack(unit) {
        if(unit.returnStatus != false) {
            let mixDmg = this.stats.basicDmg * (Math.floor(Math.random() * 3) + 1);
            unit.getDmg(mixDmg);
            createLi("Enemy lost " + mixDmg + " healt points");   
        }
    }
    drawHealth() {
        let x = Math.round((100 * this.health) / this.stats.maxHealth);
        const elem = () => {
                return "playerHealth";
        };
        const canvas = document.getElementById(elem());
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 100, 20);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(0, 0, x, 20);
        }
    }
    healHero(){
        const max = this.stats.maxHealth;
        let health = this.health;
        let difference = max - health;

        if(health < max){
            if(difference >= 5){
                this.health += 5;
            }
            if(difference < 5){
                this.health += difference;
            }
            this.healthPotions -= 1;
        }
        else{
            return false;
        }
    }
    reviveHero(){
        this.isAlive = true;
        this.health += Math.round(this.stats.maxHealth / 2);
    }
}
