'use strict';
import InitGame from './InitGame.js';
import Game from './Game.js';

const init = new InitGame();
let game;

const creator = document.getElementById("creator");
creator.innerHTML =
    `<h1>Create Character</h1>
    <h3 id="points">Avaliable points: ${init.avaliablePoints}</h3>
    <div class="stats">
        <div class="health">
            <button id="minusH" type="button">-</button>
            <span id="healthPoints">Health: ${init.healthPoints}</span>
            <button id="plusH" type="button">+</button>
        </div>
        <div class="damage">
            <button id="minusD" type="button">-</button>
            <span id="dmgPoints">Damage: ${init.dmgPoints}</span>
            <button id="plusD" type="button">+</button>
        </div>
        <div class="confirm">
            <button id="confirmButt" type="button">Confirm</button>
        </div>
        <div id="confirmAlert">
        </div>
    </div>`;
    
document.querySelector("#minusH").addEventListener('click', () => {init.removePoints(true)});
document.querySelector("#plusH").addEventListener('click', () => {init.addPoints(true)});
document.querySelector("#minusD").addEventListener('click', () => {init.removePoints(false)});
document.querySelector("#plusD").addEventListener('click', () => {init.addPoints(false)});
document.querySelector("#confirmButt").addEventListener('click', createGame);


function createGame(){
    if(init.avaliablePoints != 0){
        document.getElementById("confirmAlert").innerHTML = "Hand out all the points!";
    }
    else{
        init.updateStats();
        game = new Game(init.stats);
        game.createMenu();
    }
}

