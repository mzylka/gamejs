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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ \"./src/Unit.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\r\n\r\nclass Enemy extends _Unit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    Attack(unit) {\r\n        if(unit.returnStatus != false) {\r\n            let mixDmg = this.stats.basicDmg * (Math.floor(Math.random() * 3) + 1);\r\n            unit.getDmg(mixDmg);\r\n            Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"createLi\"])(\"Hero lost \" + mixDmg + \" healt points\");   \r\n        }\r\n    }\r\n    drawHealth() {\r\n        let x = Math.round((100 * this.health) / this.stats.maxHealth);\r\n        const elem = () => {\r\n            return \"enemyHealth\";  \r\n        };\r\n        const canvas = document.getElementById(elem());\r\n        if(canvas.getContext) {\r\n            let ctx = canvas.getContext('2d');\r\n            ctx.clearRect(0, 0, 100, 20);\r\n            ctx.fillStyle = 'rgb(200, 0, 0)';\r\n            ctx.fillRect(0, 0, x, 20);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Enemy.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ \"./src/Hero.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\r\n\r\n\r\n\r\nclass Game{\r\n    constructor(stats){\r\n        this.player = new _Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stats.health, stats.dmg);\r\n        this.mainMenu = document.getElementById(\"main\");\r\n    }\r\n\r\n    createMenu(){\r\n        creator.innerHTML =\r\n        `<h1>Your Champion:</h1>\r\n        <h3 id=\"points\">Stats:</h3>\r\n        <div class=\"stats\">\r\n            <div class=\"health\">\r\n                <h4>MaxHealth: ${this.player.stats.maxHealth}</h4>\r\n                <h5 id=\"heroHealth\">Health: ${this.player.health}</h5>\r\n            </div>\r\n            <div class=\"damage\">\r\n                <h4>Damage: ${this.player.stats.basicDmg}</h4>\r\n            </div>\r\n        </div>`;\r\n\r\n        this.mainMenu.innerHTML = \r\n        `<div class=\"Buttons\">\r\n        <button id=\"fightButton\" type=\"button\">Fight</button>\r\n        <button id=\"healButton\" type=\"button\">Drink Healing Potion</button>\r\n        <button id=\"reviveButton\" type=\"button\">Revive Hero</button>\r\n        </div>\r\n        `;\r\n\r\n        document.querySelector(\"#fightButton\").addEventListener(\"click\", () => {this.Fight()});\r\n        document.querySelector(\"#healButton\").addEventListener(\"click\", () => {this.Heal()});\r\n        document.querySelector(\"#reviveButton\").addEventListener(\"click\", () => {this.Revive()});\r\n        this.checkPlayerStatus();\r\n    }\r\n\r\n    checkPlayerStatus(){\r\n        if(this.player.returnStatus() === false){\r\n            document.getElementById(\"fightButton\").disabled = true;\r\n            document.getElementById(\"healButton\").disabled = true;\r\n            //document.getElementById(\"reviveButton\").disabled = false;\r\n        }\r\n        else{\r\n            document.getElementById(\"fightButton\").disabled = false;\r\n            document.getElementById(\"healButton\").disabled = false;\r\n            //document.getElementById(\"reviveButton\").disabled = true;\r\n        }\r\n    }\r\n\r\n    Fight(){\r\n        let enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100,1);\r\n        let isPlayerRound = true;\r\n        this.mainMenu.innerHTML = `\r\n        <div class=\"fight\">\r\n            <div class=\"playerDiv\">\r\n                <div class=\"player\">\r\n                    <table>\r\n                        <tr>\r\n                            <th>Health</th>\r\n                            <th>Damage</th> \r\n                        </tr>\r\n                        <tr>\r\n                            <td>${this.player.health}</td>\r\n                            <td>${this.player.stats.basicDmg}</td>\r\n                        </tr>\r\n                    </table>\r\n                    <canvas id=\"playerHealth\" width=\"100px\" height=\"20px\"></canvas>\r\n                </div>\r\n            </div>\r\n            <div class=\"enemyDiv\">\r\n                <div class=\"enemy\">\r\n                    <table>\r\n                        <tr>\r\n                            <th>Health</th>\r\n                            <th>Damage</th> \r\n                        </tr>\r\n                        <tr>\r\n                            <td>${enemy.health}</td>\r\n                            <td>${enemy.stats.basicDmg}</td>\r\n                        </tr>\r\n                    </table>\r\n                    <canvas id=\"enemyHealth\" width=\"100px\" height=\"20px\"></canvas>\r\n                </div>\r\n            </div>\r\n            <div id=\"returnToMenu\">\r\n            </div>\r\n            <div>\r\n                <fieldset>\r\n                    <legend>Fight history:</legend>\r\n                    <ul id=\"console\">\r\n                    </ul>\r\n                </fieldset>\r\n            </div>\r\n        </div>`;\r\n\r\n        this.player.drawHealth();\r\n        enemy.drawHealth();\r\n\r\n        const f = setInterval(() => {\r\n            if(this.player.isAlive && enemy.isAlive){\r\n                if(isPlayerRound === true){\r\n                    this.player.Attack(enemy);\r\n                    enemy.drawHealth();\r\n                    if(enemy.isAlive == false){\r\n                        Object(_functions__WEBPACK_IMPORTED_MODULE_2__[\"createLi\"])(\"Enemy is dead\");\r\n                        return;\r\n                    }\r\n                    isPlayerRound = !isPlayerRound;\r\n                }\r\n                else{\r\n                    enemy.Attack(this.player);\r\n                    this.player.drawHealth();\r\n                    if(this.player.isAlive == false){\r\n                        Object(_functions__WEBPACK_IMPORTED_MODULE_2__[\"createLi\"])(\"Player is dead\");\r\n                        return;\r\n                    }\r\n                    isPlayerRound = !isPlayerRound;\r\n                }\r\n            }\r\n            else{\r\n                clearInterval(f);\r\n\r\n                let butt = document.createElement(\"button\");\r\n                let text = document.createTextNode(\"Back to Menu\");    \r\n\r\n                butt.setAttribute(\"type\",\"button\");\r\n                butt.addEventListener(\"click\", this.createMenu.bind(this));\r\n                document.getElementById(\"returnToMenu\").appendChild(butt);\r\n                butt.appendChild(text);\r\n            }\r\n        },1000);\r\n    }\r\n\r\n    Heal(){\r\n        this.player.healHero();\r\n        document.getElementById(\"heroHealth\").textContent = `Health: ${this.player.health}`;\r\n    }\r\n\r\n    Revive(){\r\n        const reviveGame = `\r\n        <div class=\"reviveGame\">\r\n        <canvas width=\"800\" height=\"400px\" id=\"revgame\"></canvas>\r\n        </div>`;\r\n        this.mainMenu.innerHTML = reviveGame;\r\n\r\n        const x = () =>{\r\n            return Math.random() * (780 - 20) + 20;\r\n        }\r\n\r\n        const canvas = document.getElementById(\"revgame\");\r\n        if(canvas.getContext){\r\n\r\n            let ctx = canvas.getContext('2d');\r\n            const plus = new Image();\r\n            plus.src = \"img/plus.png\";\r\n            \r\n            ctx.fillStyle = \"#4d8fab\";\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n            plus.addEventListener('load', () => {\r\n                ctx.drawImage(plus, x(), 0);\r\n            });\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Hero.js":
/*!*********************!*\
  !*** ./src/Hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unit */ \"./src/Unit.js\");\n\r\n\r\n\r\nclass Hero extends _Unit__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(healthP, dmgP){\r\n        super(healthP, dmgP);\r\n        this.healthPotions = 5;\r\n    }\r\n    get Potions(){\r\n        return this.healthPotions;\r\n    }\r\n    getPotion(){\r\n        this.healthPotions += 1;\r\n    }\r\n    Attack(unit) {\r\n        if(unit.returnStatus != false) {\r\n            let mixDmg = this.stats.basicDmg * (Math.floor(Math.random() * 3) + 1);\r\n            unit.getDmg(mixDmg);\r\n            Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"createLi\"])(\"Enemy lost \" + mixDmg + \" healt points\");   \r\n        }\r\n    }\r\n    drawHealth() {\r\n        let x = Math.round((100 * this.health) / this.stats.maxHealth);\r\n        const elem = () => {\r\n                return \"playerHealth\";\r\n        };\r\n        const canvas = document.getElementById(elem());\r\n        if(canvas.getContext) {\r\n            let ctx = canvas.getContext('2d');\r\n            ctx.clearRect(0, 0, 100, 20);\r\n            ctx.fillStyle = 'rgb(200, 0, 0)';\r\n            ctx.fillRect(0, 0, x, 20);\r\n        }\r\n    }\r\n    healHero(){\r\n        const max = this.stats.maxHealth;\r\n        let health = this.health;\r\n        let difference = max - health;\r\n\r\n        if(health < max){\r\n            if(difference >= 5){\r\n                this.health += 5;\r\n            }\r\n            if(difference < 5){\r\n                this.health += difference;\r\n            }\r\n            this.healthPotions -= 1;\r\n        }\r\n        else{\r\n            return false;\r\n        }\r\n    }\r\n    reviveHero(){\r\n        this.isAlive = true;\r\n        this.health += Math.round(this.stats.maxHealth / 2);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Hero.js?");

/***/ }),

/***/ "./src/InitGame.js":
/*!*************************!*\
  !*** ./src/InitGame.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InitGame; });\nclass InitGame {\r\n    constructor(){\r\n        this.avaliablePoints = 5;\r\n        this.healthPoints = 10;\r\n        this.dmgPoints = 10;\r\n        this.stats = undefined;\r\n    }\r\n    /*Start(){\r\n        this.avaliablePoints = 5;\r\n        this.healthPoints = 10;\r\n        this.dmgPoints = 10;\r\n        this.stats = undefined;\r\n    } */\r\n    removeHealthPoints() {\r\n        if (this.healthPoints >= 11) {\r\n            this.avaliablePoints += 1;\r\n            this.healthPoints -= 1;\r\n        }\r\n        else {\r\n            console.log(\"10 health points is minimum\");\r\n        }\r\n        document.getElementById(\"healthPoints\").innerHTML = \"Health: \" + this.healthPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n    addHealthPoints() {\r\n        if (this.avaliablePoints == 0) {\r\n            console.log(\"0 avaliablePoints\");\r\n        }\r\n        else {\r\n            this.avaliablePoints -= 1;\r\n            this.healthPoints += 1;\r\n        }\r\n        document.getElementById(\"healthPoints\").innerHTML = \"Health: \" + this.healthPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n    removeDmgPoints() {\r\n        if (this.dmgPoints >= 11) {\r\n            this.avaliablePoints = this.avaliablePoints + 1;\r\n            this.dmgPoints = this.dmgPoints - 1;\r\n        }\r\n        else {\r\n            console.log(\"Zero dmgPoints\");\r\n        }\r\n        document.getElementById(\"dmgPoints\").innerHTML = \"Damage: \" + this.dmgPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n    addDmgPoints() {\r\n        if (this.avaliablePoints == 0) {\r\n            console.log(\"Zero avaliablePoints\");\r\n        }\r\n        else {\r\n            this.avaliablePoints = this.avaliablePoints - 1;\r\n            this.dmgPoints = this.dmgPoints + 1;\r\n        }\r\n        document.getElementById(\"dmgPoints\").innerHTML = \"Damage: \" + this.dmgPoints;\r\n        document.getElementById(\"points\").innerHTML = \"Avaliable points: \" + this.avaliablePoints;\r\n    }\r\n    updateStats() {\r\n        this.stats = { health: this.healthPoints, dmg: this.dmgPoints };\r\n    }\r\n    getStats() {\r\n        return this.stats;\r\n    }\r\n    getAvaliablePoints() {\r\n        return this.avaliablePoints;\r\n    }\r\n    getHealthPoints() {\r\n        return this.healthPoints;\r\n    }\r\n    getDmgPoints() {\r\n        return this.dmgPoints;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/InitGame.js?");

/***/ }),

/***/ "./src/Unit.js":
/*!*********************!*\
  !*** ./src/Unit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Unit; });\nclass Unit {\r\n    constructor(healthP, dmgP) {\r\n        this.stats = {\r\n            maxHealth: healthP,\r\n            basicDmg: dmgP\r\n        },\r\n        this.isAlive = true;\r\n        this.health = healthP;\r\n        this.level = 1;\r\n    }\r\n\r\n\r\n    getDmg(dmg) {\r\n        if(this.health > dmg) {\r\n            this.health = this.health - dmg;\r\n        }\r\n        else {\r\n            this.health = 0;\r\n            this.isAlive = false;\r\n        }\r\n    }\r\n    /*Attack(unit) {\r\n        if(unit.returnStatus != false) {\r\n            let mixDmg = this.stats.basicDmg * (Math.floor(Math.random() * 3) + 1);\r\n            unit.getDmg(mixDmg);\r\n            if(this instanceof Hero){\r\n                createLi(\"Enemy lost \" + mixDmg + \" healt points\");\r\n            }\r\n            if(this instanceof Enemy){\r\n                createLi(\"Player lost \" + mixDmg + \" healt points\");\r\n            }\r\n        }\r\n    }*/\r\n    /*drawHealth() {\r\n        let x = Math.round((100 * this.health) / this.stats.maxHealth);\r\n        const elem = () => {\r\n            if(this instanceof Hero){\r\n                return \"playerHealth\";\r\n            }\r\n            if(this instanceof Enemy){\r\n                return \"enemyHealth\";\r\n            }\r\n        };\r\n        const canvas = document.getElementById(elem());\r\n        if(canvas.getContext) {\r\n            let ctx = canvas.getContext('2d');\r\n            ctx.clearRect(0, 0, 100, 20);\r\n            ctx.fillStyle = 'rgb(200, 0, 0)';\r\n            ctx.fillRect(0, 0, x, 20);\r\n        }\r\n    }*/\r\n    returnStats() {\r\n        return this.stats;\r\n    }\r\n    returnStatus() {\r\n        return this.isAlive;\r\n    }\r\n    returnMaxHealth(){\r\n        return this.stats.maxHealth;\r\n    }\r\n    returnHealth(){\r\n        return this.health;\r\n    }\r\n    returnBasicDmg(){\r\n        return this.stats.basicDmg;\r\n    }\r\n    updateHealth(){\r\n        this.maxHealth += 1;\r\n        this.health += 1;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Unit.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: createLi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLi\", function() { return createLi; });\nfunction createLi(info){\r\n    let liNode = document.createElement(\"li\");\r\n    let textNode = document.createTextNode(info);\r\n\r\n    liNode.appendChild(textNode);\r\n    document.getElementById(\"console\").appendChild(liNode);\r\n}\r\nfunction createBackToMenuButt(game){\r\n    let butt = document.createElement(\"button\");           \r\n    butt.setAttribute(\"type\",\"button\");\r\n    butt.addEventListener(\"click\", game.createMenu);\r\n    //butt.setAttribute(\"onclick\",\"game.createMenu()\");\r\n    document.getElementById(\"returnToMenu\").appendChild(butt);\r\n    let text = document.createTextNode(\"Back to Menu\");\r\n    butt.appendChild(text);\r\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InitGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitGame.js */ \"./src/InitGame.js\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n\r\n\r\n\r\n\r\nlet init = new _InitGame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst creator = document.getElementById(\"creator\");\r\nlet game;\r\n\r\ncreator.innerHTML =\r\n        `<h1>Create Character:</h1>\r\n        <h3 id=\"points\">Avaliable points: ${init.getAvaliablePoints()}</h3>\r\n        <div class=\"stats\">\r\n            <div class=\"health\">\r\n                <button id=\"minusH\" type=\"button\">-</button>\r\n                <span id=\"healthPoints\">Health: ${init.getHealthPoints()}</span>\r\n                <button id=\"plusH\" type=\"button\">+</button>\r\n            </div>\r\n            <div class=\"damage\">\r\n                <button id=\"minusD\" type=\"button\">-</button>\r\n                <span id=\"dmgPoints\">Damage: ${init.getDmgPoints()}</span>\r\n                <button id=\"plusD\" type=\"button\">+</button>\r\n            </div>\r\n            <div class=\"confirm\">\r\n                <button id=\"confirmButt\" type=\"button\">Confirm</button>\r\n            </div>\r\n            <div id=\"confirmAlert\">\r\n            </div>\r\n        </div>`;\r\n    \r\n        document.querySelector(\"#minusH\").addEventListener('click', init.removeHealthPoints.bind(init));\r\n        document.querySelector(\"#plusH\").addEventListener('click', init.addHealthPoints.bind(init));\r\n        document.querySelector(\"#minusD\").addEventListener('click', init.removeDmgPoints.bind(init));\r\n        document.querySelector(\"#plusD\").addEventListener('click', init.addDmgPoints.bind(init));\r\n        document.querySelector(\"#confirmButt\").addEventListener('click', createGame);\r\n\r\n\r\nfunction createGame(){\r\n    if(init.getAvaliablePoints() != 0){\r\n        document.getElementById(\"confirmAlert\").innerHTML = \"Przyznaj wszystkie punkty!\";\r\n    }\r\n    else{\r\n        document.getElementById(\"confirmAlert\").innerHTML = \"Jest OK!\";\r\n        init.updateStats();\r\n        game = new _Game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](init.getStats());\r\n        game.createMenu();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });