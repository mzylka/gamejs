export default class InitGame {
    constructor(){
        this.avaliablePoints = 10;
        this.healthPoints = 20;
        this.dmgPoints = 10;
        this.stats;
    }
    
    removeHealthPoints() {
        if (this.healthPoints >= 13) {
            this.avaliablePoints += 1;
            this.healthPoints -= 1;
        }
        else {
            console.log("10 health points is minimum");
        }
        document.getElementById("healthPoints").innerHTML = "Health: " + this.healthPoints;
        document.getElementById("points").innerHTML = "Avaliable points: " + this.avaliablePoints;
    }

    addHealthPoints() {
        if (this.avaliablePoints == 0) {
            console.log("0 avaliablePoints");
        }
        else {
            this.avaliablePoints -= 1;
            this.healthPoints += 1;
        }
        document.getElementById("healthPoints").innerHTML = "Health: " + this.healthPoints;
        document.getElementById("points").innerHTML = "Avaliable points: " + this.avaliablePoints;
    }

    removeDmgPoints() {
        if (this.dmgPoints >= 3) {
            this.avaliablePoints += 1;
            this.dmgPoints -= 1;
        }
        else {
            console.log("Zero dmgPoints");
        }
        document.getElementById("dmgPoints").innerHTML = "Damage: " + this.dmgPoints;
        document.getElementById("points").innerHTML = "Avaliable points: " + this.avaliablePoints;
    }

    addDmgPoints() {
        if (this.avaliablePoints == 0) {
            console.log("Zero avaliablePoints");
        }
        else {
            this.avaliablePoints = this.avaliablePoints - 1;
            this.dmgPoints = this.dmgPoints + 1;
        }
        document.getElementById("dmgPoints").innerHTML = "Damage: " + this.dmgPoints;
        document.getElementById("points").innerHTML = "Avaliable points: " + this.avaliablePoints;
    }

    updateStats() {
        this.stats = { health: this.healthPoints, dmg: this.dmgPoints };
    }

    getStats() {
        return this.stats;
    }

    getAvaliablePoints() {
        return this.avaliablePoints;
    }

    getHealthPoints() {
        return this.healthPoints;
    }
    
    getDmgPoints() {
        return this.dmgPoints;
    }
}
