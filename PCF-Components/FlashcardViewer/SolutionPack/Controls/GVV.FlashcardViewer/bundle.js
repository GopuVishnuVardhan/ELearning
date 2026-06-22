/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./FlashcardViewer/index.ts"
/*!**********************************!*\
  !*** ./FlashcardViewer/index.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FlashcardViewer: () => (/* binding */ FlashcardViewer)\n/* harmony export */ });\nclass FlashcardViewer {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._isFlipped = false;\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._frontText = context.parameters.frontText.raw || \"Front Text\";\n    this._backText = context.parameters.backText.raw || \"Back Text\";\n    this.renderControl();\n  }\n  updateView(context) {\n    this._frontText = context.parameters.frontText.raw || \"Front Text\";\n    this._backText = context.parameters.backText.raw || \"Back Text\";\n    this.renderControl();\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.width = \"100%\";\n    wrapper.style.height = \"200px\";\n    wrapper.style.perspective = \"1000px\";\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.cursor = \"pointer\";\n    var inner = document.createElement(\"div\");\n    inner.style.position = \"relative\";\n    inner.style.width = \"100%\";\n    inner.style.height = \"100%\";\n    inner.style.textAlign = \"center\";\n    inner.style.transition = \"transform 0.6s\";\n    inner.style.transformStyle = \"preserve-3d\";\n    if (this._isFlipped) {\n      inner.style.transform = \"rotateY(180deg)\";\n    }\n    var baseFaceStyle = \"\\n      position: absolute;\\n      width: 100%;\\n      height: 100%;\\n      -webkit-backface-visibility: hidden;\\n      backface-visibility: hidden;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      border-radius: 12px;\\n      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\\n      padding: 20px;\\n      box-sizing: border-box;\\n      font-size: 18px;\\n    \";\n    var front = document.createElement(\"div\");\n    front.style.cssText = baseFaceStyle;\n    front.style.backgroundColor = \"#ffffff\";\n    front.style.color = \"#1e293b\";\n    front.style.border = \"2px solid #e2e8f0\";\n    front.style.fontWeight = \"600\";\n    front.innerText = this._frontText;\n    var back = document.createElement(\"div\");\n    back.style.cssText = baseFaceStyle;\n    back.style.backgroundColor = \"#4f46e5\";\n    back.style.color = \"#ffffff\";\n    back.style.transform = \"rotateY(180deg)\";\n    back.innerText = this._backText;\n    inner.appendChild(front);\n    inner.appendChild(back);\n    wrapper.appendChild(inner);\n    wrapper.addEventListener(\"click\", () => {\n      this._isFlipped = !this._isFlipped;\n      inner.style.transform = this._isFlipped ? \"rotateY(180deg)\" : \"rotateY(0deg)\";\n    });\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./FlashcardViewer/index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./FlashcardViewer/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.FlashcardViewer', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.FlashcardViewer);
} else {
	var GVV = GVV || {};
	GVV.FlashcardViewer = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.FlashcardViewer;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}