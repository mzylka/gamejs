import Unit from './Unit';

export default class Enemy extends Unit{
    constructor(heroLvl){
        super();
        this._id = "Enemy";

        const basicHealth = 10 + heroLvl;
        let generated = 0;

        for(let i = 1; i <= heroLvl; i++){
            generated += basicHealth + Math.floor(i * 0.1);
        }

        this._health = {
            basic: generated,
            current: generated
        };
        this._basicDmg = heroLvl + 1;
        this._level = heroLvl;
        this._name = this.getRandomName();
        this._coins = Math.floor(
            (Math.random() * (10 * heroLvl)) + heroLvl * 10
        );
    }

    get name(){
        return this._name;
    }
    
    getRandomName(){
        const names = ["Rat", "Wolf", "Scarecrow", "Bandit", "Werewolf", "Vampir", "Gnome"];
        const random = Math.floor(Math.random() * 7);
        return names[random];
    }
}
