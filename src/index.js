'use strict';
import InitGame from './InitGame.js';
import Game from './Game.js';

let init = new InitGame();

const creator = document.getElementById("creator");
let game;

creator.innerHTML =
        `<h1>Create Character:</h1>
        <h3 id="points">Avaliable points: ${init.getAvaliablePoints()}</h3>
        <div class="stats">
            <div class="health">
                <button id="minusH" type="button">-</button>
                <span id="healthPoints">Health: ${init.getHealthPoints()}</span>
                <button id="plusH" type="button">+</button>
            </div>
            <div class="damage">
                <button id="minusD" type="button">-</button>
                <span id="dmgPoints">Damage: ${init.getDmgPoints()}</span>
                <button id="plusD" type="button">+</button>
            </div>
            <div class="confirm">
                <button id="confirmButt" type="button">Confirm</button>
            </div>
            <div id="confirmAlert">
            </div>
        </div>`;
    
        document.querySelector("#minusH").addEventListener('click', init.removeHealthPoints.bind(init));
        document.querySelector("#plusH").addEventListener('click', init.addHealthPoints.bind(init));
        document.querySelector("#minusD").addEventListener('click', init.removeDmgPoints.bind(init));
        document.querySelector("#plusD").addEventListener('click', init.addDmgPoints.bind(init));
        document.querySelector("#confirmButt").addEventListener('click', createGame);


function createGame(){
    if(init.getAvaliablePoints() != 0){
        document.getElementById("confirmAlert").innerHTML = "Przyznaj wszystkie punkty!";
    }
    else{
        document.getElementById("confirmAlert").innerHTML = "Jest OK!";
        init.updateStats();
        game = new Game(init.getStats());
        game.createMenu();
    }
}

