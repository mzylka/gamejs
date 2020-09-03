export default class GameInterface{
    
    static createStartMenu(skillPoints, healPoints, dmgPoints){
        document.getElementById("creator").innerHTML = `<h1>Create Character</h1>
        <h3 id="skillPoints">Avaliable skill Points: ${skillPoints}</h3>
        <div class="stats">
            <div class="health">
                <button id="minusH" type="button">-</button>
                <span id="healthPoints">Health Points: ${healPoints}</span>
                <button id="plusH" type="button">+</button>
            </div>
            <div class="damage">
                <button id="minusD" type="button">-</button>
                <span id="dmgPoints">Damage Points: ${dmgPoints}</span>
                <button id="plusD" type="button">+</button>
            </div>
            <div class="confirm">
                <button id="confirmButt" type="button">Confirm</button>
            </div>
            <div id="confirmAlert">
            </div>
        </div>`;
    }

    static updateStartMenu(avaliablePoints, healthPoints, dmgPoints){
        document.getElementById("skillPoints").textContent = `Avaliable skill Points: ${avaliablePoints}`;
        document.getElementById("healthPoints").textContent = `Health Points: ${healthPoints}`;
        document.getElementById("dmgPoints").textContent = `Damage Points: ${dmgPoints}`;
    }

    static createStartMenuAlert(){
        document.getElementById("confirmAlert").textContent = "Hand out all the points!";
    }

    static createMainMenu(playerLevel, playerDamage, playerCoins, playerHP){
        document.getElementById("creator").innerHTML =
        `<h1>Your Champion:</h1>
        <h3 id="points">Stats:</h3>
        <div class="stats">
            <div class="bar healthBar">
                Health: <canvas class="healthBar__canv" id="HB" width="200px" height="32px"></canvas>
            </div>
            <div class="bar expBar">
                Experience: <canvas class="expBar__canv" id="EB" width="200px" height="32px"></canvas>
            </div>
            <div class="level">
                <span id="playerLevel">Level: ${playerLevel}</span>
            </div>
            <div class="damage">
                <span id="playerDamage">Damage: ${playerDamage}</span>
            </div>
                <p id="playerCoins">Coins: ${playerCoins}</p>
                <p id="HP_text">Health Potions: ${playerHP}</p>
        </div>`;

        document.getElementById("main").innerHTML = 
        `<div class="buttons">
            <button class="button" id="fightButton" type="button">Fight</button>
            <button class="button" id="healButton" type="button">Drink Healing Potion</button>
            <button class="button" id="reviveButton" type="button">Revive Hero</button>
            <button class="button" id="store" type="button">Store</button>
        </div>
        `;
    }

    static createReviveMenu(){
        document.getElementById("main").innerHTML = `
            <div class="maze-box">
                <canvas id="maze" width="510" height="510"></canvas>
            </div>
            <div id="returnToMenu"></div>
        `;
    }

    static createFightMenu(playerDmg, enemyName, enemyDmg){
        document.getElementById("main").innerHTML = `<div class="fight">
            <div class="fight__main">
                <div class="fight__statistics">
                    <h2>Player</h2>
                    <canvas class="fight__health-bar" id="HeroHealth" width="100px" height="20px"></canvas>
                    <div>Basic damage: ${playerDmg}</div>
                </div>
                <div class="fight__statistics">
                    <h2>${enemyName}</h2>
                    <canvas class="fight__health-bar" id="EnemyHealth" width="100px" height="20px"></canvas>
                    <div>Basic damage: ${enemyDmg}</div>
                </div>
            </div>
        <div class="console">
            <fieldset>
                <legend>Fight history:</legend>
                <ul id="fightConsole">
                </ul>
            </fieldset>
        </div>
        <div id="returnToMenu">
        </div>
        </div>`
    }

    static drawBar(unit, type, elementId, elementWidth, elementHeight){
        const current = unit[type].current;
        const basic = unit[type].basic;

        const x = Math.round((elementWidth * current) / basic);
        const canvas = document.getElementById(elementId);
        if(canvas.getContext) {
            //Bar
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, elementWidth, elementHeight);
            if(type === "health"){
                ctx.fillStyle = "rgb(200, 0, 0)";
            }
            if(type === "experience"){
                ctx.fillStyle = "rgb(240, 201, 48)";
            }
            ctx.fillRect(0, 0, x, elementHeight);

            //Text
            ctx.fillStyle = "white";
            ctx.font = canvas.height / 2 + "px Atma";
            ctx.textAlign = "center";
            ctx.fillText(current + "/" + basic, canvas.width / 2, (canvas.height / 2) + (canvas.height / 8));
        }
    }

    static createBackToMenuButt(){
        const butt = document.createElement("button");
        const text = document.createTextNode("Back to Main Menu");    

        butt.setAttribute("type","button");
        document.getElementById("returnToMenu").appendChild(butt);
        butt.appendChild(text);

        return butt;
    }

    static createStoreMenu(){
        document.getElementById("main").innerHTML = 
        `<div class="store">
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
}