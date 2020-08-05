export default class Store{
    constructor(player){
        this._player = player;

        this.interface = `
            <div class="store">
                <div class="store__offers">
                    <div class="store__healthPoints">
                    <div class="store__info">Health Potions:</div>
                        <div class="store__buttons">
                            <button id="buyHP1" type="button">Buy 1 for 5 coins</button>
                            <button id="buyHP5" type="button">Buy 5 for 25 coins</button>
                            <button id="buyHP10" type="button">Buy 10 for 50 coins</button>
                        </div>
                    </div>
                </div>
                <div id="returnToMenu">
                </div>
            </div>`;
    }

    init(callback){
        document.getElementById("buyHP1").addEventListener("click", () => {this.buy("healthPotions", 1)});
        document.getElementById("buyHP5").addEventListener("click", () => {this.buy("healthPotions", 5)});
        document.getElementById("buyHP10").addEventListener("click", () => {this.buy("healthPotions", 10)});

        callback();
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