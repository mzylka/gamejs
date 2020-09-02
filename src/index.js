'use strict';
import InitGame from './InitGame';
import Game from './Game';
import GameInterface from './GameInterface';

console.log("wtf");

//const ui = new Interface();
const init = new InitGame();

let game;

//Create interface
GameInterface.createStartMenu(init.avaliablePoints, init.healthPoints, init.dmgPoints);
init.events();

//Create game by click button
document.querySelector("#confirmButt").addEventListener('click', createGame);

function createGame(){
    if(init.avaliablePoints != 0){
        GameInterface.createStartMenuAlert();
    }
    else{
        init.updateStats();
        game = new Game(init.stats);
        game.createMenu();
    }
}

