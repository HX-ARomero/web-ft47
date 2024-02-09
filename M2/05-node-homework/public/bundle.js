/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cardGenerator.js":
/*!**************************!*\
  !*** ./cardGenerator.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const characters = __webpack_require__(/*! ./characters.js */ \"./characters.js\");\r\n\r\nconst cards = document.createElement(\"div\");\r\n\r\ncharacters.map((character) => {\r\n  cards.innerHTML += `\r\n    <div style=\"border:1px solid black; border-radius:15px; text-align:center; margin:50px 150px 20px 150px;\">\r\n      <h2>${character.firstName} ${character.lastName}</h2>\r\n      <img style=\"width: 100px\" src=\"${character.image}\" alt=\"${character.firstName}\">\r\n    </div>\r\n  `;\r\n});\r\n\r\nmodule.exports = cards;\n\n//# sourceURL=webpack://05-node-homework/./cardGenerator.js?");

/***/ }),

/***/ "./characters.js":
/*!***********************!*\
  !*** ./characters.js ***!
  \***********************/
/***/ ((module) => {

eval("const characters = [\r\n  {\r\n    firstName: \"Lisa\",\r\n    lastName: \"Simpson\",\r\n    image:\r\n      \"https://easydrawingguides.com/wp-content/uploads/2022/09/Easy-Lisa-Simpson.png\",\r\n  },\r\n  {\r\n    firstName: \"Bart\",\r\n    lastName: \"Simpson\",\r\n    image:\r\n      \"https://i.pinimg.com/736x/31/fb/09/31fb09e9fc2d68dc15ad8adb73cba747.jpg\",\r\n  },\r\n];\r\n\r\nmodule.exports = characters;\n\n//# sourceURL=webpack://05-node-homework/./characters.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const cards = __webpack_require__(/*! ./cardGenerator */ \"./cardGenerator.js\")\r\n\r\nconst container = document.getElementById(\"container\");\r\n\r\ncontainer.appendChild(cards);\r\n\r\nconsole.log(\"Cambios en el código!!!\");\n\n//# sourceURL=webpack://05-node-homework/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;