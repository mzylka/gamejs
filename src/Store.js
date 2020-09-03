export default class Store{
    constructor(player){
        this._player = player;
    }

    init(){
        document.getElementById("buyHP1").addEventListener("click", () => {this.buy("healthPotions", 1)});
        document.getElementById("buyHP5").addEventListener("click", () => {this.buy("healthPotions", 5)});
        document.getElementById("buyHP10").addEventListener("click", () => {this.buy("healthPotions", 10)});
    }

    buy(productName, number){
        if (this._player.coins >= number * 5){
            const cost = number * 5;
            this._player.coins -= cost;
            this._player[productName] += number;
            document.querySelector(".store__info").innerHTML = `<span>You bought ${number} of ${productName} for ${cost} coins</span>`;
            document.getElementById("playerCoins").textContent = "Coins: " + this._player.coins;

            if(productName === "healthPotions"){
                document.getElementById("HP_text").textContent = "Health potions: " + this._player.healthPotions;
            }
        }
        else{
            document.querySelector(".store__info").innerHTML = "<span>Not enough coins</span>";
        }
    }
}