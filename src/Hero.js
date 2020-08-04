import Unit from './Unit';

export default class Hero extends Unit {
    constructor(healthP, dmgP){
        super();
        this._id = "Hero";
        this._health = {
            basic: healthP,
            current: healthP
        }
        this._experience = {
            basic: 50,
            current: 0
        }
        this._basicDmg = dmgP;
        this._healthPotions = 6;
        this._coins = 10;
    }

    get healthPotions(){
        return this._healthPotions;
    }

    set healthPotions(n){
        this._healthPotions = n;
    }

    healHero(){
        let difference = this._health.basic - this._health.current;

        if(this._health.current < this._health.basic && this._healthPotions !== 0){
            if(difference >= 5){
                this._health.current += 5;
            }
            if(difference < 5){
                this._health.current += difference;
            }
            this._healthPotions -= 1;
        }
        else{
            return false;
        }
    }

    reviveHero(){
        this._isAlive = true;
        this._health.current += Math.round(this._health.basic / 2);
    }

    levelUp(){
        this._level += 1;
        this._experience.basic += this._experience.basic + Math.round(this._experience.basic * 0.1);
        
        this._health.basic += 5;
        this._health.current = this._health.basic;

        this._basicDmg += 3;
    }

    gainExp(enemylvl){
        const experience = enemylvl * 10;
        const difference = this._experience.basic - this._experience.current;
        
        if(experience >= difference){
            this._experience.current = experience - difference;
            this.levelUp();
        }
        else{
            this._experience.current += experience;
        }

        return experience;
    }
}
