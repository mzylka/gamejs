import Unit from './Unit';

export default class Enemy extends Unit{
    constructor(heroLvl){
        super();
        this._id = "Enemy";

        let basicHealth = 10 * heroLvl;
        let generated = 0;

        for(let i = 1; i <= heroLvl; i++){
            generated += basicHealth + Math.floor(i * 0.1);
        }

        this._health = {
            basic: generated,
            current: generated
        };
        this._basicDmg = Math.floor(generated / 5)
        this._level = heroLvl;
        this._name = this.getRandomName();
        this._coins = Math.floor(
            (Math.random() * (10 * heroLvl)) + ((heroLvl * 10) - 9)
        );
    }

    get name(){
        return this._name;
    }
    
    getRandomName(){
        let names = ["Rat", "Wolf", "Scarecrow", "Bandit", "Werewolf", "Vampir", "Gnome"];
        let random = Math.floor(Math.random() * 7);
        return names[random];
    }
}
