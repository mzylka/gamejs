import GameInterface from './GameInterface';

export default class InitGame {
    constructor(){
        this._avaliablePoints = 2;
        this._healthPoints = 10;
        this._dmgPoints = 2;
        this._stats;
    }

    get stats() {
        return this._stats;
    }

    get avaliablePoints() {
        return this._avaliablePoints;
    }

    get healthPoints() {
        return this._healthPoints;
    }
    
    get dmgPoints() {
        return this._dmgPoints;
    }

    addPoints(isHealth){
        if (this._avaliablePoints === 0) {
            console.log("0 avaliablePoints");
        }
        else {
            this._avaliablePoints -= 1;
            isHealth === true ? this._healthPoints += 1 : this._dmgPoints += 1;
        }
        GameInterface.updateStartMenu(this.avaliablePoints, this.healthPoints, this.dmgPoints);
    }

    removePoints(isHealth){
        if(isHealth === true){
            if (this._healthPoints > 10) {
                this._avaliablePoints += 1;
                this._healthPoints -= 1;
            }
            else {
                console.log("10 health points is minimum");
            }
        }
        else{
            if (this._dmgPoints > 2) {
                this._avaliablePoints += 1;
                this._dmgPoints -= 1;
            }
            else {
                console.log("Zero dmgPoints");
            }
        }
        GameInterface.updateStartMenu(this.avaliablePoints, this.healthPoints, this.dmgPoints);
    }

    updateStats() {
        this._stats = { health: this._healthPoints, dmg: this._dmgPoints };
    }

    updateMenu(){
        document.getElementById("skillPoints").textContent = `Avaliable points: ${this.avaliablePoints}`;
        document.getElementById("healthPoints").textContent = `Health: ${this.healthPoints}`;
        document.getElementById("dmgPoints").textContent = `Damage: ${this.dmgPoints}`;
    }

    events(){
        document.querySelector("#minusH").addEventListener('click', () => {this.removePoints(true)});
        document.querySelector("#plusH").addEventListener('click', () => {this.addPoints(true)});
        document.querySelector("#minusD").addEventListener('click', () => {this.removePoints(false)});
        document.querySelector("#plusD").addEventListener('click', () => {this.addPoints(false)});
    }
}
