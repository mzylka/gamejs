import {createLi} from './functions';
import Unit from './Unit';

export default class Hero extends Unit {
    constructor(healthP, dmgP){
        super();
        this.stats = {
            maxHealth: healthP,
            basicDmg: dmgP
        },
        this.health = healthP;
        this.skillPoints = 0;
        this.exp = 0;
        this.maxExp = 50;
        this.healthPotions = 100;
        this.name = "Hero";
        this.coins = 10;
    }

    get Potions(){
        return this.healthPotions;
    }

    takePotion(){
        this.healthPotions += 1;
    }

    Attack(unit) {
        if(unit.returnStatus != false) {
            let mixDmg = this.stats.basicDmg;
            unit.takeDmg(mixDmg);  
        }
    }

    drawHealth() {
        let x = Math.round((100 * this.health) / this.stats.maxHealth);
        
        const canvas = document.getElementById("playerHealth");
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 100, 20);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(0, 0, x, 20);
        }
    }

    healHero(){
        let difference = this.stats.maxHealth - this.health;

        if(this.health < this.stats.maxHealth){
            if(difference >= 5){
                this.health += 5;
            }
            if(difference < 5){
                this.health += difference;
            }
            this.healthPotions -= 1;
        }
        else{
            console.log("Full Health");
            return false;
        }
    }

    reviveHero(){
        this.isAlive = true;
        this.health += Math.round(this.stats.maxHealth / 2);
    }

    levelUp(){
        this.level += 1;
        this.maxExp += this.maxExp + Math.round(this.maxExp * 0.2);
        
        this.stats.maxHealth += 3;
        this.health = this.stats.maxHealth;

        this.stats.basicDmg += 2;

        this.skillPoints =+1;
    }

    gainExp(enemylvl){
        let experience = enemylvl * 10;
        let difference = this.maxExp - this.exp;
        
        createLi("You gain: " + experience + " exp");
        if(experience >= difference){
            this.exp = experience - difference;
            this.levelUp();
            createLi("Hero level up");
        }
        else{
            this.exp += experience;
        }

    }

    gainCoins(n){
        this.coins += n;
        createLi("You gain: " + n + " coins");
    }
}
