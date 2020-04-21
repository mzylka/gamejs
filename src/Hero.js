import Unit from './Unit';

export default class Hero extends Unit {
    constructor(healthP, dmgP){
        super();
        this.id = "Hero";
        this.stats = {
            maxHealth: healthP,
            basicDmg: dmgP
        },
        this.health = healthP;
        this.skillPoints = 0;
        this.exp = 0;
        this.maxExp = 50;
        this.healthPotions = 100;
        this.coins = 10;
    }

    get Potions(){
        return this.healthPotions;
    }

    takePotion(){
        this.healthPotions += 1;
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
        const experience = enemylvl * 10;
        const difference = this.maxExp - this.exp;
        
        if(experience >= difference){
            this.exp = experience - difference;
            this.levelUp();
        }
        else{
            this.exp += experience;
        }

        return experience;

    }

    gainCoins(n){
        this.coins += n;
        return n;
    }
}
