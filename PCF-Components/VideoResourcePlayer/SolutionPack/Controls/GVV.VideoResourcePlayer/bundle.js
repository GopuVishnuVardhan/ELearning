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

/***/ "./VideoResourcePlayer/index.ts"
/*!**************************************!*\
  !*** ./VideoResourcePlayer/index.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VideoResourcePlayer: () => (/* binding */ VideoResourcePlayer)\n/* harmony export */ });\nclass VideoResourcePlayer {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {}\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._videoUrl = context.parameters.videoUrl.raw || \"https://www.youtube.com/embed/dQw4w9WgXcQ\";\n    this.renderControl();\n  }\n  updateView(context) {\n    var newUrl = context.parameters.videoUrl.raw || \"https://www.youtube.com/embed/dQw4w9WgXcQ\";\n    if (this._videoUrl !== newUrl) {\n      this._videoUrl = newUrl;\n      this.renderControl();\n    }\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.width = \"100%\";\n    wrapper.style.aspectRatio = \"16 / 9\";\n    wrapper.style.borderRadius = \"12px\";\n    wrapper.style.overflow = \"hidden\";\n    wrapper.style.boxShadow = \"0 4px 6px -1px rgba(0, 0, 0, 0.1)\";\n    wrapper.style.backgroundColor = \"#000\";\n    var iframe = document.createElement(\"iframe\");\n    iframe.src = this._videoUrl;\n    iframe.style.width = \"100%\";\n    iframe.style.height = \"100%\";\n    iframe.style.border = \"none\";\n    iframe.allowFullscreen = true;\n    iframe.allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\";\n    wrapper.appendChild(iframe);\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./VideoResourcePlayer/index.ts?\n}");

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
/******/ 	__webpack_modules__["./VideoResourcePlayer/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.VideoResourcePlayer', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.VideoResourcePlayer);
} else {
	var GVV = GVV || {};
	GVV.VideoResourcePlayer = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.VideoResourcePlayer;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}