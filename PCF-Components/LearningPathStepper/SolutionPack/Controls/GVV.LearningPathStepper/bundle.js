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

/***/ "./LearningPathStepper/index.ts"
/*!**************************************!*\
  !*** ./LearningPathStepper/index.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LearningPathStepper: () => (/* binding */ LearningPathStepper)\n/* harmony export */ });\nclass LearningPathStepper {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {}\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    this._currentStage = context.parameters.currentStage.raw || 1;\n    var namesStr = context.parameters.stageNames.raw || \"Module 1,Module 2,Module 3\";\n    this._stageNames = namesStr.split(\",\").map(s => s.trim());\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.display = \"flex\";\n    wrapper.style.alignItems = \"center\";\n    wrapper.style.width = \"100%\";\n    wrapper.style.padding = \"20px 0\";\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    this._stageNames.forEach((name, index) => {\n      var stepNum = index + 1;\n      var isCompleted = stepNum < this._currentStage;\n      var isActive = stepNum === this._currentStage;\n      var stepContainer = document.createElement(\"div\");\n      stepContainer.style.display = \"flex\";\n      stepContainer.style.flexDirection = \"column\";\n      stepContainer.style.alignItems = \"center\";\n      stepContainer.style.flex = \"1\";\n      stepContainer.style.position = \"relative\";\n      stepContainer.style.cursor = \"pointer\";\n      var circle = document.createElement(\"div\");\n      circle.style.width = \"32px\";\n      circle.style.height = \"32px\";\n      circle.style.borderRadius = \"50%\";\n      circle.style.display = \"flex\";\n      circle.style.alignItems = \"center\";\n      circle.style.justifyContent = \"center\";\n      circle.style.fontWeight = \"bold\";\n      circle.style.zIndex = \"1\";\n      circle.style.transition = \"all 0.3s\";\n      circle.style.border = \"2px solid\";\n      if (isCompleted) {\n        circle.style.backgroundColor = \"#22c55e\"; // Green\n        circle.style.borderColor = \"#22c55e\";\n        circle.style.color = \"white\";\n        circle.innerHTML = \"✓\";\n      } else if (isActive) {\n        circle.style.backgroundColor = \"white\";\n        circle.style.borderColor = \"#4f46e5\"; // Indigo\n        circle.style.color = \"#4f46e5\";\n        circle.innerHTML = stepNum.toString();\n        circle.style.boxShadow = \"0 0 0 4px rgba(79, 70, 229, 0.2)\";\n      } else {\n        circle.style.backgroundColor = \"white\";\n        circle.style.borderColor = \"#cbd5e1\"; // Slate 300\n        circle.style.color = \"#94a3b8\"; // Slate 400\n        circle.innerHTML = stepNum.toString();\n      }\n      var label = document.createElement(\"div\");\n      label.innerText = name;\n      label.style.marginTop = \"8px\";\n      label.style.fontSize = \"12px\";\n      label.style.fontWeight = isActive || isCompleted ? \"600\" : \"400\";\n      label.style.color = isActive ? \"#4f46e5\" : isCompleted ? \"#334155\" : \"#94a3b8\";\n      label.style.textAlign = \"center\";\n      stepContainer.appendChild(circle);\n      stepContainer.appendChild(label);\n      stepContainer.addEventListener(\"click\", () => {\n        this._currentStage = stepNum;\n        this._notifyOutputChanged();\n      });\n      wrapper.appendChild(stepContainer);\n      if (index < this._stageNames.length - 1) {\n        var line = document.createElement(\"div\");\n        line.style.flex = \"1\";\n        line.style.height = \"2px\";\n        line.style.marginTop = \"-24px\"; // Align with circle center\n        line.style.backgroundColor = isCompleted ? \"#22c55e\" : \"#e2e8f0\";\n        line.style.transition = \"background-color 0.3s\";\n        wrapper.appendChild(line);\n      }\n    });\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {\n      currentStage: this._currentStage\n    };\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./LearningPathStepper/index.ts?\n}");

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
/******/ 	__webpack_modules__["./LearningPathStepper/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.LearningPathStepper', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LearningPathStepper);
} else {
	var GVV = GVV || {};
	GVV.LearningPathStepper = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LearningPathStepper;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}