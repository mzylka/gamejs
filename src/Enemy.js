import Unit from './Unit';
export default class Enemy extends Unit{
    constructor(heroLvl){
        super();

        let basicHealth = 10 * heroLvl;
        let generated;
        for(let i = 1; i <= heroLvl; i++){
            generated = basicHealth + (basicHealth * 0.10);
        }

        this.stats = {
            maxHealth: generated,
            basicDmg: generated / 4
        };
        this.health = generated;
        this.level = heroLvl;
        this.name = this.getRandomName();
        this.coins = Math.floor(
            (Math.random() * (10 * heroLvl)) + ((heroLvl * 10) - 9)
        );

    }

    Attack(unit) {
        if(unit.returnStatus != false) {
            let mixDmg = this.stats.basicDmg;
            unit.takeDmg(mixDmg);  
        }
    }

    drawHealth() {
        let x = Math.round((100 * this.health) / this.stats.maxHealth);
        
        const canvas = document.getElementById("enemyHealth");
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 100, 20);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(0, 0, x, 20);
        }
    }
    
    getRandomName(){
        let names = ["Rat", "Wolf", "Scarecrow", "Bandit", "Werewolf", "Vampir", "Gnome"];
        let random = Math.floor(Math.random() * 7);
        return names[random];
    }
}
