export default class Unit {
    constructor() {
        this._id;
        this._health = {
            basic: null,
            current: null
        }
        this._experience = {
            basic: null,
            current: null
        }
        this._basicDmg;
        this._isAlive = true;
        this._level = 1;
        this._coins = 0;
    }

    get id(){
        return this._id;
    }

    get health(){
        return this._health;
    }

    get experience(){
        return this._experience;
    }

    get basicDmg(){
        return this._basicDmg;
    }

    get isAlive(){
        return this._isAlive;
    }

    set isAlive(b){
        this._isAlive = b; 
    }

    get level(){
        return this._level;
    }

    get coins(){
        return this._coins;
    }

    set coins(n){
        this._coins = n;
    }

    Attack(unit) {
        if(unit.isAlive !== false) {
            let mixDmg = this._basicDmg;
            unit.takeDmg(mixDmg);
            return mixDmg;  
        }
    }

    takeDmg(dmg) {
        if(this._health.current > dmg) {
            this._health.current = this._health.current - dmg;
        }
        else {
            this._health.current = 0;
            this._isAlive = false;
        }
    }

    updateHealth(){
        this._health.basic += 1;
        this._health.current += 1;
    }

}