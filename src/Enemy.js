import Unit from './Unit';
import {createLi} from './functions';
export default class Enemy extends Unit{
    Attack(unit) {
        if(unit.returnStatus != false) {
            let mixDmg = this.stats.basicDmg * (Math.floor(Math.random() * 3) + 1);
            unit.getDmg(mixDmg);
            createLi("Hero lost " + mixDmg + " healt points");   
        }
    }
    drawHealth() {
        let x = Math.round((100 * this.health) / this.stats.maxHealth);
        const elem = () => {
            return "enemyHealth";  
        };
        const canvas = document.getElementById(elem());
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 100, 20);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(0, 0, x, 20);
        }
    }
}
