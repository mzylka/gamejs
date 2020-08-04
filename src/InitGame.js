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
        isHealth === "health" ? document.getElementById("healthPoints").innerHTML = "Health: " + this._healthPoints : document.getElementById("dmgPoints").innerHTML = "Damage: " + this._dmgPoints;
        document.getElementById("points").innerHTML = "Avaliable points: " + this._avaliablePoints;
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
        isHealth === "health" ? document.getElementById("healthPoints").innerHTML = "Health: " + this._healthPoints : document.getElementById("dmgPoints").innerHTML = "Damage: " + this._dmgPoints;
        document.getElementById("points").innerHTML = "Avaliable points: " + this._avaliablePoints;
    }

    updateStats() {
        this._stats = { health: this._healthPoints, dmg: this._dmgPoints };
    }
}
