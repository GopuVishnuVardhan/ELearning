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

/***/ "./CourseProgressBar/index.ts"
/*!************************************!*\
  !*** ./CourseProgressBar/index.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CourseProgressBar: () => (/* binding */ CourseProgressBar)\n/* harmony export */ });\nclass CourseProgressBar {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {}\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._value = context.parameters.progress.raw || 0;\n    this.renderControl();\n  }\n  updateView(context) {\n    this._value = context.parameters.progress.raw || 0;\n    this.renderControl();\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.width = \"100%\";\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    var labelContainer = document.createElement(\"div\");\n    labelContainer.style.display = \"flex\";\n    labelContainer.style.justifyContent = \"space-between\";\n    labelContainer.style.marginBottom = \"4px\";\n    labelContainer.style.fontSize = \"14px\";\n    labelContainer.style.fontWeight = \"600\";\n    labelContainer.style.color = \"#333\";\n    var title = document.createElement(\"span\");\n    title.innerText = \"Course Completion\";\n    var percent = document.createElement(\"span\");\n    percent.innerText = \"\".concat(this._value, \"%\");\n    percent.style.color = \"#4f46e5\"; // Indigo 600\n    labelContainer.appendChild(title);\n    labelContainer.appendChild(percent);\n    var track = document.createElement(\"div\");\n    track.style.width = \"100%\";\n    track.style.height = \"12px\";\n    track.style.backgroundColor = \"#e2e8f0\"; // Slate 200\n    track.style.borderRadius = \"6px\";\n    track.style.overflow = \"hidden\";\n    var bar = document.createElement(\"div\");\n    bar.style.height = \"100%\";\n    bar.style.width = \"\".concat(Math.min(Math.max(this._value, 0), 100), \"%\");\n    bar.style.backgroundColor = \"#4f46e5\"; // Indigo 600\n    bar.style.borderRadius = \"6px\";\n    bar.style.transition = \"width 0.4s ease-in-out\";\n    track.appendChild(bar);\n    wrapper.appendChild(labelContainer);\n    wrapper.appendChild(track);\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {\n      progress: this._value\n    };\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./CourseProgressBar/index.ts?\n}");

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
/******/ 	__webpack_modules__["./CourseProgressBar/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.CourseProgressBar', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CourseProgressBar);
} else {
	var GVV = GVV || {};
	GVV.CourseProgressBar = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CourseProgressBar;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}