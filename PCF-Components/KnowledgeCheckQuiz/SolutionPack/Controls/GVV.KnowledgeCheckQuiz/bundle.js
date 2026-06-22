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

/***/ "./KnowledgeCheckQuiz/index.ts"
/*!*************************************!*\
  !*** ./KnowledgeCheckQuiz/index.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KnowledgeCheckQuiz: () => (/* binding */ KnowledgeCheckQuiz)\n/* harmony export */ });\nclass KnowledgeCheckQuiz {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._selectedOption = null;\n    this._isSubmitted = false;\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    this._question = context.parameters.question.raw || \"What is a PCF?\";\n    this._options = [context.parameters.option1.raw || \"Option 1\", context.parameters.option2.raw || \"Option 2\", context.parameters.option3.raw || \"Option 3\", context.parameters.option4.raw || \"Option 4\"];\n    this._correctOption = context.parameters.correctOption.raw || 1;\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.padding = \"20px\";\n    wrapper.style.border = \"1px solid #e2e8f0\";\n    wrapper.style.borderRadius = \"12px\";\n    wrapper.style.backgroundColor = \"#ffffff\";\n    wrapper.style.boxShadow = \"0 1px 3px 0 rgba(0, 0, 0, 0.1)\";\n    var title = document.createElement(\"h3\");\n    title.innerText = \"Knowledge Check\";\n    title.style.margin = \"0 0 12px 0\";\n    title.style.color = \"#4f46e5\";\n    var questionText = document.createElement(\"p\");\n    questionText.innerText = this._question;\n    questionText.style.fontSize = \"16px\";\n    questionText.style.fontWeight = \"600\";\n    questionText.style.marginBottom = \"16px\";\n    wrapper.appendChild(title);\n    wrapper.appendChild(questionText);\n    var optionsContainer = document.createElement(\"div\");\n    optionsContainer.style.display = \"flex\";\n    optionsContainer.style.flexDirection = \"column\";\n    optionsContainer.style.gap = \"8px\";\n    this._options.forEach((optText, index) => {\n      var optionNum = index + 1;\n      var btn = document.createElement(\"button\");\n      btn.innerText = optText;\n      btn.style.padding = \"10px 16px\";\n      btn.style.borderRadius = \"8px\";\n      btn.style.border = \"1px solid #cbd5e1\";\n      btn.style.backgroundColor = \"#f8fafc\";\n      btn.style.textAlign = \"left\";\n      btn.style.cursor = \"pointer\";\n      btn.style.transition = \"all 0.2s\";\n      if (this._isSubmitted) {\n        btn.disabled = true;\n        if (optionNum === this._correctOption) {\n          btn.style.backgroundColor = \"#dcfce7\";\n          btn.style.borderColor = \"#22c55e\";\n          btn.style.color = \"#166534\";\n        } else if (this._selectedOption === optionNum) {\n          btn.style.backgroundColor = \"#fee2e2\";\n          btn.style.borderColor = \"#ef4444\";\n          btn.style.color = \"#991b1b\";\n        }\n      } else {\n        if (this._selectedOption === optionNum) {\n          btn.style.backgroundColor = \"#e0e7ff\";\n          btn.style.borderColor = \"#4f46e5\";\n        }\n        btn.addEventListener(\"click\", () => {\n          this._selectedOption = optionNum;\n          this.renderControl();\n        });\n        btn.addEventListener(\"mouseover\", () => {\n          if (this._selectedOption !== optionNum) btn.style.backgroundColor = \"#f1f5f9\";\n        });\n        btn.addEventListener(\"mouseout\", () => {\n          if (this._selectedOption !== optionNum) btn.style.backgroundColor = \"#f8fafc\";\n        });\n      }\n      optionsContainer.appendChild(btn);\n    });\n    wrapper.appendChild(optionsContainer);\n    if (!this._isSubmitted) {\n      var submitBtn = document.createElement(\"button\");\n      submitBtn.innerText = \"Check Answer\";\n      submitBtn.style.marginTop = \"16px\";\n      submitBtn.style.padding = \"10px 20px\";\n      submitBtn.style.backgroundColor = \"#4f46e5\";\n      submitBtn.style.color = \"white\";\n      submitBtn.style.border = \"none\";\n      submitBtn.style.borderRadius = \"8px\";\n      submitBtn.style.cursor = \"pointer\";\n      submitBtn.style.fontWeight = \"600\";\n      submitBtn.disabled = this._selectedOption === null;\n      if (submitBtn.disabled) {\n        submitBtn.style.opacity = \"0.5\";\n        submitBtn.style.cursor = \"not-allowed\";\n      }\n      submitBtn.addEventListener(\"click\", () => {\n        if (this._selectedOption !== null) {\n          this._isSubmitted = true;\n          this.renderControl();\n        }\n      });\n      wrapper.appendChild(submitBtn);\n    } else {\n      var feedback = document.createElement(\"p\");\n      feedback.style.marginTop = \"16px\";\n      feedback.style.fontWeight = \"bold\";\n      feedback.innerText = this._selectedOption === this._correctOption ? \"🎉 Correct!\" : \"❌ Incorrect. Keep studying!\";\n      feedback.style.color = this._selectedOption === this._correctOption ? \"#166534\" : \"#991b1b\";\n      wrapper.appendChild(feedback);\n    }\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./KnowledgeCheckQuiz/index.ts?\n}");

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
/******/ 	__webpack_modules__["./KnowledgeCheckQuiz/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.KnowledgeCheckQuiz', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.KnowledgeCheckQuiz);
} else {
	var GVV = GVV || {};
	GVV.KnowledgeCheckQuiz = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.KnowledgeCheckQuiz;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}