/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Enemy.js":
/*!**********************!*\
  !*** ./src/Enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./src/Unit.js\");\n\r\n\r\nclass Enemy extends _Unit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(heroLvl){\r\n        super();\r\n\r\n        let basicHealth = 10 * heroLvl;\r\n        let generated;\r\n        for(let i = 1; i <= heroLvl; i++){\r\n            generated = basicHealth + (basicHealth * 0.10);\r\n        }\r\n\r\n        this.stats = {\r\n            maxHealth: generated,\r\n            basicDmg: generated / 4\r\n        };\r\n        this.id = \"Enemy\";\r\n        this.health = generated;\r\n        this.level = heroLvl;\r\n        this.name = this.getRandomName();\r\n        this.coins = Math.floor(\r\n            (Math.random() * (10 * heroLvl)) + ((heroLvl * 10) - 9)\r\n        );\r\n\r\n    }\r\n    \r\n    getRandomName(){\r\n        let names = [\"Rat\", \"Wolf\", \"Scarecrow\", \"Bandit\", \"Werewolf\", \"Vampir\", \"Gnome\"];\r\n        let random = Math.floor(Math.random() * 7);\r\n        return names[random];\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Enemy.js?");

/***/ }),

/***/ "./src/Fight.js":
/*!**********************!*\
  !*** ./src/Fight.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fight; });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n\r\n\r\nclass Fight{\r\n    constructor(player){\r\n        this.player = player;\r\n        this.enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.player.level);\r\n        this.isPlayerRound = true;\r\n        this.isFightEnd = false\r\n\r\n        this.interface = `<div class=\"fight\">\r\n        <div class=\"fight__statistics\">\r\n            <h2>Name: ${this.player.id}</h2>\r\n\r\n            <span>Health: ${this.player.health}</span>\r\n            <span>Damage: ${this.player.stats.basicDmg}</span>\r\n\r\n            <canvas class=\"fight__health-bar\" id=\"${this.player.id + 'Health'}\" width=\"100px\" height=\"20px\"></canvas>\r\n        </div>\r\n        <div class=\"fight__statistics\">\r\n            <h2>Name: ${this.enemy.name}</h2>\r\n\r\n            <span>Health: ${this.enemy.health}</span>\r\n            <span>Damage: ${this.enemy.stats.basicDmg}</span>\r\n            <canvas class=\"fight__health-bar\" id=\"${this.enemy.id + 'Health'}\" width=\"100px\" height=\"20px\"></canvas>\r\n        </div>\r\n        <div id=\"returnToMenu\">\r\n        </div>\r\n        <div>\r\n            <fieldset>\r\n                <legend>Fight history:</legend>\r\n                <ul id=\"fightConsole\">\r\n                </ul>\r\n            </fieldset>\r\n        </div>\r\n        </div>`\r\n    }\r\n\r\n    startFight(callback){\r\n        this.drawHealth(this.player.id, this.player.health, this.player.stats.maxHealth);\r\n        this.drawHealth(this.enemy.id, this.enemy.health, this.enemy.stats.maxHealth);\r\n\r\n        const f = setInterval(() => {\r\n            if(this.player.isAlive && this.enemy.isAlive){\r\n                if(this.isPlayerRound === true){\r\n                    const attack = this.player.Attack(this.enemy);\r\n                    this.drawHealth(this.enemy.id, this.enemy.health, this.enemy.stats.maxHealth);\r\n                    this.createLi(this.enemy.name + \" lost \" + attack + \" healt points\"); \r\n                    \r\n                    if(this.enemy.isAlive === false){\r\n                        this.createLi(\"Enemy is dead\");\r\n                        return;\r\n                    }\r\n                    this.isPlayerRound = !this.isPlayerRound;\r\n                }\r\n                else{\r\n                    const attack = this.enemy.Attack(this.player);\r\n                    this.drawHealth(this.player.id, this.player.health, this.player.stats.maxHealth);\r\n                    this.createLi(this.player.id + \" lost \" + attack + \" healt points\");\r\n                    \r\n                    if(this.player.isAlive === false){\r\n                        this.createLi(\"Player is dead\");\r\n                        return;\r\n                    }\r\n                    this.isPlayerRound = !this.isPlayerRound;\r\n                }\r\n            }\r\n            else{\r\n                clearInterval(f);\r\n                if(this.enemy.isAlive === false){\r\n                    const exp = this.player.gainExp(this.enemy.level);\r\n                    const coins = this.player.gainCoins(this.enemy.coins);\r\n                    this.createLi(`You gain ${exp}xp and ${coins}coins`);\r\n                }\r\n                callback();\r\n            }\r\n            console.log(\"tura\");\r\n        },1000);\r\n    }\r\n\r\n    createLi(info){\r\n        let liNode = document.createElement(\"li\");\r\n        let textNode = document.createTextNode(info);\r\n    \r\n        liNode.appendChild(textNode);\r\n        document.getElementById(\"fightConsole\").appendChild(liNode);\r\n    }\r\n\r\n    drawHealth(unitID, unitHealth, unitMaxHealth){\r\n        let x = Math.round((100 * unitHealth) / unitMaxHealth);\r\n        \r\n        const canvas = document.getElementById(unitID + \"Health\");\r\n        if(canvas.getContext) {\r\n            let ctx = canvas.getContext('2d');\r\n            ctx.clearRect(0, 0, 100, 20);\r\n            ctx.fillStyle = 'rgb(200, 0, 0)';\r\n            ctx.fillRect(0, 0, x, 20);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Fight.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ \"./src/Hero.js\");\n/* harmony import */ var _Maze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maze */ \"./src/Maze.js\");\n/* harmony import */ var _Fight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fight */ \"./src/Fight.js\");\n\r\n\r\n\r\n\r\nclass Game{\r\n    constructor(stats){\r\n        this.player = new _Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stats.health, stats.dmg);\r\n        this.mainMenu = document.getElementById(\"main\");\r\n    }\r\n\r\n    createMenu(){\r\n        creator.innerHTML =\r\n        `<h1>Your Champion:</h1>\r\n        <h3 id=\"points\">Stats:</h3>\r\n        <div class=\"stats\">\r\n            <div class=\"health\">\r\n                <h4>MaxHealth: ${this.player.stats.maxHealth}</h4>\r\n                <h4 id=\"heroHealth\">Health: ${this.player.health}</h4>\r\n            </div>\r\n            <div class=\"damage\">\r\n                <h4>Damage: ${this.player.stats.basicDmg}</h4>\r\n            </div>\r\n            <div class=\"experience\">\r\n                <h5>Level: ${this.player.level}</h5>\r\n                <h5>Max Experience: ${this.player.maxExp}</h5>\r\n                <h5>Experience: ${this.player.exp}</h5>\r\n            </div>\r\n            <h5>Coins: ${this.player.coins}</h5>\r\n        </div>`;\r\n\r\n        this.mainMenu.innerHTML = \r\n        `<div class=\"Buttons\">\r\n        <button class=\"button\" id=\"fightButton\" type=\"button\">Fight</button>\r\n        <button class=\"button\" id=\"healButton\" type=\"button\">Drink Healing Potion</button>\r\n        <button class=\"button\" id=\"reviveButton\" type=\"button\">Revive Hero</button>\r\n        <button class=\"button\" id=\"buyPoints\" type=\"button\">Buy Points</button>\r\n        </div>\r\n        `;\r\n\r\n        document.querySelector(\"#fightButton\").addEventListener(\"click\", () => {this.Fight()});\r\n        document.querySelector(\"#healButton\").addEventListener(\"click\", () => {this.Heal()});\r\n        document.querySelector(\"#reviveButton\").addEventListener(\"click\", () => {this.Revive()});\r\n        document.querySelector(\"#buyPoints\").addEventListener(\"click\", () => {this.buyPoints()});\r\n        this.checkPlayerStatus();\r\n    }\r\n\r\n    checkPlayerStatus(){\r\n        if(this.player.isAlive === false){\r\n            document.getElementById(\"fightButton\").disabled = true;\r\n            document.getElementById(\"healButton\").disabled = true;\r\n            document.getElementById(\"reviveButton\").disabled = false;\r\n        }\r\n        else{\r\n            document.getElementById(\"fightButton\").disabled = false;\r\n            document.getElementById(\"healButton\").disabled = false;\r\n            document.getElementById(\"reviveButton\").disabled = true;\r\n        }\r\n    }\r\n\r\n    Fight(){\r\n        const fight = new _Fight__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.player);\r\n        this.mainMenu.innerHTML = fight.interface;\r\n\r\n        fight.startFight(this.createBackToMenuButt.bind(this));       \r\n    }\r\n\r\n    Heal(){\r\n        this.player.healHero();\r\n        document.getElementById(\"heroHealth\").textContent = `Health: ${this.player.health}`;\r\n    }\r\n\r\n    Revive(){\r\n        this.mainMenu.innerHTML = `\r\n            <canvas id=\"maze\" width=\"510\" height=\"510\"></canvas>\r\n            <div id=\"returnToMenu\"></div>\r\n        `;\r\n        const mazeGame = new _Maze__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        mazeGame.draw();\r\n\r\n        const playerControl = (e) =>{\r\n            switch(e.keyCode){\r\n                case 37:\r\n                    if(mazeGame.checkMove('left')){\r\n                        mazeGame.player.moveLeft();\r\n                    }\r\n                    mazeGame.draw();\r\n                    break;\r\n                case 38:\r\n                    if(mazeGame.checkMove('up')){\r\n                        mazeGame.player.moveUp();\r\n                    }\r\n                    mazeGame.draw();\r\n                    break;\r\n                case 39:\r\n                    if(mazeGame.checkMove('right')){\r\n                        mazeGame.player.moveRight();\r\n                    }\r\n                    mazeGame.draw();\r\n                    break;\r\n                case 40:\r\n                    if(mazeGame.checkMove('down')){\r\n                        mazeGame.player.moveDown();\r\n                    }\r\n                    mazeGame.draw();\r\n                    break;\r\n            }\r\n            if(mazeGame.checkWinner() === true){\r\n                document.removeEventListener('keydown', playerControl);\r\n                this.player.isAlive = true;\r\n                this.player.health = 5;\r\n                this.createBackToMenuButt();\r\n            }\r\n        }\r\n\r\n        document.addEventListener('keydown', playerControl);\r\n    }\r\n\r\n    createBackToMenuButt(){\r\n        const butt = document.createElement(\"button\");\r\n        const text = document.createTextNode(\"Back to Menu\");    \r\n\r\n        butt.setAttribute(\"type\",\"button\");\r\n        butt.addEventListener(\"click\", this.createMenu.bind(this));\r\n        document.getElementById(\"returnToMenu\").appendChild(butt);\r\n        butt.appendChild(text);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Hero.js":
/*!*********************!*\
  !*** ./src/Hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unit */ \"./src/Unit.js\");\n\r\n\r\n\r\nclass Hero extends _Unit__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(healthP, dmgP){\r\n        super();\r\n        this.id = \"Hero\";\r\n        this.stats = {\r\n            maxHealth: healthP,\r\n            basicDmg: dmgP\r\n        },\r\n        this.health = healthP;\r\n        this.skillPoints = 0;\r\n        this.exp = 0;\r\n        this.maxExp = 50;\r\n        this.healthPotions = 100;\r\n        this.coins = 10;\r\n    }\r\n\r\n    get Potions(){\r\n        return this.healthPotions;\r\n    }\r\n\r\n    takePotion(){\r\n        this.healthPotions += 1;\r\n    }\r\n\r\n    healHero(){\r\n        let difference = this.stats.maxHealth - this.health;\r\n\r\n        if(this.health < this.stats.maxHealth){\r\n            if(difference >= 5){\r\n                this.health += 5;\r\n            }\r\n            if(difference < 5){\r\n                this.health += difference;\r\n            }\r\n            this.healthPotions -= 1;\r\n        }\r\n        else{\r\n            console.log(\"Full Health\");\r\n            return false;\r\n        }\r\n    }\r\n\r\n    reviveHero(){\r\n        this.isAlive = true;\r\n        this.health += Math.round(this.stats.maxHealth / 2);\r\n    }\r\n\r\n    levelUp(){\r\n        this.level += 1;\r\n        this.maxExp += this.maxExp + Math.round(this.maxExp * 0.2);\r\n        \r\n        this.stats.maxHealth += 3;\r\n        this.health = this.stats.maxHealth;\r\n\r\n        this.stats.basicDmg += 2;\r\n\r\n        this.skillPoints =+1;\r\n    }\r\n\r\n    gainExp(enemylvl){\r\n        let experience = enemylvl * 10;\r\n        let difference = this.maxExp - this.exp;\r\n        \r\n        if(experience >= difference){\r\n            this.exp = experience - difference;\r\n            this.levelUp();\r\n        }\r\n        else{\r\n            this.exp += experience;\r\n        }\r\n\r\n        return experience;\r\n\r\n    }\r\n\r\n    gainCoins(n){\r\n        this.coins += n;\r\n        return n;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Hero.js?");

/***/ }),

/***/ "./src/InitGame.js":
/*!*************************!*\
  !*** ./src/InitGame.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InitGame; });\nclass InitGame {\r\n    constructor(){\r\n        this.avaliablePoints = 5;\r\n        this.healthPoints = 12;\r\n        this.dmgPoints = 2;\r\n        this.stats = undefined;\r\n    }\r\n    \r\n    removeHealthPoints() {\r\n        if (this.healthPoints >= 13) {\r\n            this.avaliablePoints += 1;\r\n            this.healthPoints -= 1;\r\n        }\r\n        else {\r\n            console.log(\"10 health points is minimum\");\r\n        }\r\n        document.getElementById(\"healthPoints\").innerHTML = \"Health: \" + this.healthPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n\r\n    addHealthPoints() {\r\n        if (this.avaliablePoints == 0) {\r\n            console.log(\"0 avaliablePoints\");\r\n        }\r\n        else {\r\n            this.avaliablePoints -= 1;\r\n            this.healthPoints += 1;\r\n        }\r\n        document.getElementById(\"healthPoints\").innerHTML = \"Health: \" + this.healthPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n\r\n    removeDmgPoints() {\r\n        if (this.dmgPoints >= 3) {\r\n            this.avaliablePoints += 1;\r\n            this.dmgPoints -= 1;\r\n        }\r\n        else {\r\n            console.log(\"Zero dmgPoints\");\r\n        }\r\n        document.getElementById(\"dmgPoints\").innerHTML = \"Damage: \" + this.dmgPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n\r\n    addDmgPoints() {\r\n        if (this.avaliablePoints == 0) {\r\n            console.log(\"Zero avaliablePoints\");\r\n        }\r\n        else {\r\n            this.avaliablePoints = this.avaliablePoints - 1;\r\n            this.dmgPoints = this.dmgPoints + 1;\r\n        }\r\n        document.getElementById(\"dmgPoints\").innerHTML = \"Damage: \" + this.dmgPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n\r\n    updateStats() {\r\n        this.stats = { health: this.healthPoints, dmg: this.dmgPoints };\r\n    }\r\n\r\n    getStats() {\r\n        return this.stats;\r\n    }\r\n\r\n    getAvaliablePoints() {\r\n        return this.avaliablePoints;\r\n    }\r\n\r\n    getHealthPoints() {\r\n        return this.healthPoints;\r\n    }\r\n    \r\n    getDmgPoints() {\r\n        return this.dmgPoints;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/InitGame.js?");

/***/ }),

/***/ "./src/Maze.js":
/*!*********************!*\
  !*** ./src/Maze.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Maze; });\n/* harmony import */ var _MazePlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MazePlayer */ \"./src/MazePlayer.js\");\n\r\n\r\nclass Maze{\r\n    constructor(){\r\n        this.canvas = document.getElementById('maze');\r\n        this.ctx = this.canvas.getContext('2d');\r\n        this.player = new _MazePlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.maze = this.displayMaze(this.generateMaze(25,25));\r\n    }\r\n\r\n    start(){\r\n        this.draw();\r\n        this.playerControls();\r\n    }\r\n\r\n    draw(){\r\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            this.drawGrid();\r\n            this.drawMaze();\r\n            this.drawEndPoint();\r\n            this.drawPlayer();\r\n    }\r\n\r\n    drawGrid(){\r\n        const ctx = this.ctx;\r\n        ctx.fillStyle = 'rgb(192, 192, 192)';\r\n        ctx.fillRect(0,0,510,510);\r\n    \r\n        for(let x = 0; x < 510; x += 10){\r\n            ctx.moveTo(x, 0);\r\n            ctx.lineTo(x, 510);\r\n        }\r\n        for(let y = 0; y < 510; y += 10){\r\n            ctx.moveTo(0, y);\r\n            ctx.lineTo(510, y);\r\n        }\r\n        ctx.strokeStyle = '#ddd';\r\n        ctx.stroke();\r\n    }\r\n\r\n    drawMaze(){\r\n        const ctx = this.ctx;\r\n        let CordY = 0;\r\n    \r\n        this.maze.forEach(element => {\r\n            let CordX = 0;\r\n    \r\n            element.forEach(item =>{\r\n                if(item === true){\r\n                    ctx.fillStyle = 'rgb(0, 0, 0)';\r\n                    ctx.fillRect(CordX, CordY, 10, 10);\r\n                }\r\n                CordX += 10;\r\n            });\r\n            CordY += 10;\r\n        });\r\n    \r\n    }\r\n\r\n    drawPlayer(){\r\n        const ctx = this.ctx;\r\n        ctx.fillStyle = 'rgb(255, 0, 0)';\r\n        ctx.fillRect(this.player.cords.x, this.player.cords.y, 10, 10);\r\n    }\r\n\r\n    drawEndPoint(){\r\n        const ctx = this.ctx;\r\n        ctx.fillStyle = 'rgb(0, 200, 0)';\r\n        ctx.fillRect(500, 490, 10, 10);\r\n    }\r\n\r\n    playerControls(){\r\n        document.addEventListener('keydown', (e) =>{\r\n            if(this.checkWinner() !== true){\r\n                switch(e.keyCode){\r\n                    case 37:\r\n                        if(this.checkMove('left')){\r\n                            this.player.moveLeft();\r\n                        }\r\n                        this.draw();\r\n                        break;\r\n                    case 38:\r\n                        if(this.checkMove('up')){\r\n                            this.player.moveUp();\r\n                        }\r\n                        this.draw();\r\n                        break;\r\n                    case 39:\r\n                        if(this.checkMove('right')){\r\n                            this.player.moveRight();\r\n                        }\r\n                        this.draw();\r\n                        break;\r\n                    case 40:\r\n                        if(this.checkMove('down')){\r\n                            this.player.moveDown();\r\n                        }\r\n                        this.draw();\r\n                        break;\r\n                }\r\n            }\r\n            else{\r\n                return true;\r\n            }\r\n        });\r\n    }\r\n\r\n    checkMove(direction){\r\n        let x = (this.player.cords.x / 10);\r\n        let y = (this.player.cords.y / 10);\r\n    \r\n        switch(direction){\r\n            case \"left\":\r\n                let left = x - 1;\r\n    \r\n                if(this.maze[y][left] === true){\r\n                    return false;\r\n                }\r\n                else return true;\r\n    \r\n            case \"right\":\r\n                let right = x + 1;\r\n    \r\n                if(this.maze[y][right] === true){\r\n                    return false;\r\n                }\r\n                else return true;\r\n                \r\n            case \"up\":\r\n                let up = y - 1;\r\n    \r\n                if(this.maze[up][x] === true){\r\n                    return false;\r\n                }\r\n                else return true;\r\n    \r\n            case \"down\":\r\n                let down = y + 1;\r\n    \r\n                if(this.maze[down][x] === true){\r\n                    return false;\r\n                }\r\n                else return true;\r\n        }\r\n    }\r\n\r\n    checkWinner(){\r\n        if(this.player.cords.x === 500 && this.player.cords.y === 490){\r\n            return true;\r\n        }\r\n        else return false;\r\n    }\r\n\r\n    generateMaze(x,y) { // Maze generation algorith from http://rosettacode.org/wiki/Maze_generation#JavaScript\r\n        let n=x*y-1;\r\n        if (n<0) {alert('illegal maze dimensions');return;}\r\n        let horiz =[]; \r\n            for (let j= 0; j<x+1; j++) horiz[j]= [];\r\n        let verti =[]; \r\n            for (let j= 0; j<x+1; j++) verti[j]= [];\r\n            \r\n        let here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)];\r\n        let path = [here];\r\n        let unvisited = [];\r\n        for (let j = 0; j<x+2; j++) {\r\n            unvisited[j] = [];\r\n            for (let k= 0; k<y+1; k++)\r\n                unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));\r\n        }\r\n        while (0<n) {\r\n            let potential = [[here[0]+1, here[1]], [here[0],here[1]+1],\r\n                [here[0]-1, here[1]], [here[0],here[1]-1]];\r\n            let neighbors = [];\r\n            for (let j = 0; j < 4; j++)\r\n                if (unvisited[potential[j][0]+1][potential[j][1]+1])\r\n                    neighbors.push(potential[j]);\r\n            if (neighbors.length) {\r\n                n = n-1;\r\n                let next = neighbors[Math.floor(Math.random()*neighbors.length)];\r\n                unvisited[next[0]+1][next[1]+1]= false;\r\n                if (next[0] == here[0])\r\n                    horiz[next[0]][(next[1]+here[1]-1)/2]= true;\r\n                else \r\n                    verti[(next[0]+here[0]-1)/2][next[1]]= true;\r\n                path.push(here = next);\r\n            } else \r\n                here = path.pop();\r\n        }\r\n        return {x: x, y: y, horiz: horiz, verti: verti};\r\n    }\r\n\r\n    displayMaze(m) {\r\n        let text= [];\r\n    \r\n        for (let j= 0; j<m.x*2+1; j++) {\r\n            let line= [];\r\n            if (0 == j%2)\r\n                for (let k=0; k<m.y*2+1; k++)\r\n                    if (0 == k%2) \r\n                        line[k]= true;\r\n                    else\r\n                        if (j>0 && m.verti[j/2-1][Math.floor(k/2)])\r\n                            line[k]= false;\r\n                        else\r\n                            line[k]= true;\r\n            else\r\n                for (let k=0; k<m.y*2+1; k++)\r\n                    if (0 == k%2)\r\n                        if (k>0 && m.horiz[(j-1)/2][k/2-1])\r\n                            line[k]= false;\r\n                        else\r\n                            line[k]= true;\r\n                    else\r\n                        line[k]= false;\r\n            if (0 == j) line[1]= false;\r\n            if (m.x*2-1 == j) line[2*m.y]= false;\r\n    \r\n            text.push(line);\r\n        }\r\n        console.log(text);\r\n        return text;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Maze.js?");

/***/ }),

/***/ "./src/MazePlayer.js":
/*!***************************!*\
  !*** ./src/MazePlayer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MazePlayer; });\nclass MazePlayer{\r\n    constructor(){\r\n        this.cords = {\r\n            x: 490,\r\n            y: 490\r\n        };\r\n    }\r\n\r\n    checkBorder(){\r\n        if (this.cords.y === 0){\r\n            return false;\r\n        }\r\n        else return true;\r\n    }\r\n    moveUp(){\r\n        if (this.checkBorder() === true){\r\n            this.cords.y -= 10;\r\n        }\r\n    }\r\n    moveDown(){\r\n        this.cords.y += 10;\r\n    }\r\n    moveRight(){\r\n        this.cords.x += 10;\r\n    }\r\n    moveLeft(){\r\n        this.cords.x -= 10;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/MazePlayer.js?");

/***/ }),

/***/ "./src/Unit.js":
/*!*********************!*\
  !*** ./src/Unit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Unit; });\nclass Unit {\r\n    constructor() {\r\n        this.stats = {\r\n            maxHealth: undefined,\r\n            basicDmg: undefined\r\n        },\r\n        this.isAlive = true;\r\n        this.health;\r\n        this.level = 1;\r\n        this.id;\r\n    }\r\n\r\n    Attack(unit) {\r\n        if(unit.returnStatus !== false) {\r\n            let mixDmg = this.stats.basicDmg;\r\n            unit.takeDmg(mixDmg);\r\n            return mixDmg;  \r\n        }\r\n    }\r\n\r\n    takeDmg(dmg) {\r\n        if(this.health > dmg) {\r\n            this.health = this.health - dmg;\r\n        }\r\n        else {\r\n            this.health = 0;\r\n            this.isAlive = false;\r\n        }\r\n    }\r\n\r\n    updateHealth(){\r\n        this.maxHealth += 1;\r\n        this.health += 1;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/Unit.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InitGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitGame.js */ \"./src/InitGame.js\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n\r\n\r\n\r\n\r\nconst init = new _InitGame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nlet game;\r\n\r\nconst creator = document.getElementById(\"creator\");\r\ncreator.innerHTML =\r\n        `<h1>Create Character</h1>\r\n        <h3 id=\"points\">Avaliable points: ${init.getAvaliablePoints()}</h3>\r\n        <div class=\"stats\">\r\n            <div class=\"health\">\r\n                <button id=\"minusH\" type=\"button\">-</button>\r\n                <span id=\"healthPoints\">Health: ${init.getHealthPoints()}</span>\r\n                <button id=\"plusH\" type=\"button\">+</button>\r\n            </div>\r\n            <div class=\"damage\">\r\n                <button id=\"minusD\" type=\"button\">-</button>\r\n                <span id=\"dmgPoints\">Damage: ${init.getDmgPoints()}</span>\r\n                <button id=\"plusD\" type=\"button\">+</button>\r\n            </div>\r\n            <div class=\"confirm\">\r\n                <button id=\"confirmButt\" type=\"button\">Confirm</button>\r\n            </div>\r\n            <div id=\"confirmAlert\">\r\n            </div>\r\n        </div>`;\r\n    \r\n        document.querySelector(\"#minusH\").addEventListener('click', init.removeHealthPoints.bind(init));\r\n        document.querySelector(\"#plusH\").addEventListener('click', init.addHealthPoints.bind(init));\r\n        document.querySelector(\"#minusD\").addEventListener('click', init.removeDmgPoints.bind(init));\r\n        document.querySelector(\"#plusD\").addEventListener('click', init.addDmgPoints.bind(init));\r\n        document.querySelector(\"#confirmButt\").addEventListener('click', createGame);\r\n\r\n\r\nfunction createGame(){\r\n    if(init.getAvaliablePoints() != 0){\r\n        document.getElementById(\"confirmAlert\").innerHTML = \"Hand out all the points!\";\r\n    }\r\n    else{\r\n        init.updateStats();\r\n        game = new _Game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](init.getStats());\r\n        game.createMenu();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });