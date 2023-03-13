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

/***/ "./source/assets/img/Logo.png":
/*!************************************!*\
  !*** ./source/assets/img/Logo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/c416770cde5cf6e436e23748a5989726.png\");\n\n//# sourceURL=webpack://ffk_logistic/./source/assets/img/Logo.png?");

/***/ }),

/***/ "./source/assets/sass/style.sass":
/*!***************************************!*\
  !*** ./source/assets/sass/style.sass ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ffk_logistic/./source/assets/sass/style.sass?");

/***/ }),

/***/ "./source/assets/icons/switcher.svg":
/*!******************************************!*\
  !*** ./source/assets/icons/switcher.svg ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = \"<svg viewBox=\\\"0 0 10 7\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g clip-path=\\\"url(#clip0_1909_14)\\\"><path d=\\\"M4.99984 5.9502C4.9165 5.9502 4.74984 5.85859 4.6665 5.76699L0.166504 0.820424C-0.000162762 0.637218 -0.000162762 0.270806 0.166504 0.0875999C0.333171 -0.0956062 0.666504 -0.0956062 0.833171 0.0875999L4.99984 4.75936L9.24984 0.0875999C9.4165 -0.0956062 9.74984 -0.0956062 9.9165 0.0875999C10.0832 0.270806 10.0832 0.637218 9.9165 0.820424L5.33317 5.85859C5.24984 5.9502 5.08317 5.9502 4.99984 5.9502Z\\\" fill=\\\"#227CE4\\\"></path></g><defs><clipPath id=\\\"clip0_1909_14\\\"><rect width=\\\"10\\\" height=\\\"6.5\\\" fill=\\\"white\\\"></rect></clipPath></defs></svg>\"\n\n//# sourceURL=webpack://ffk_logistic/./source/assets/icons/switcher.svg?");

/***/ }),

/***/ "./source/assets/scripts/components/logo.js":
/*!**************************************************!*\
  !*** ./source/assets/scripts/components/logo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet setLogo = (selector, img)=>{\r\n    return selector.src = img\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLogo);\n\n//# sourceURL=webpack://ffk_logistic/./source/assets/scripts/components/logo.js?");

/***/ }),

/***/ "./source/assets/scripts/components/svg.js":
/*!*************************************************!*\
  !*** ./source/assets/scripts/components/svg.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SvgSwitcher\": () => (/* binding */ SvgSwitcher)\n/* harmony export */ });\nfunction SvgSwitcher(selector, icon){\r\n    return selector.innerHTML = icon\r\n}\n\n//# sourceURL=webpack://ffk_logistic/./source/assets/scripts/components/svg.js?");

/***/ }),

/***/ "./source/assets/scripts/index.js":
/*!****************************************!*\
  !*** ./source/assets/scripts/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ \"./source/assets/sass/style.sass\");\n/* harmony import */ var _img_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Logo.png */ \"./source/assets/img/Logo.png\");\n/* harmony import */ var _icons_switcher_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/switcher.svg */ \"./source/assets/icons/switcher.svg\");\n/* harmony import */ var _icons_switcher_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_switcher_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logo */ \"./source/assets/scripts/components/logo.js\");\n/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/svg */ \"./source/assets/scripts/components/svg.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(document.querySelector('.header-logotype'), _img_Logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n;(0,_components_svg__WEBPACK_IMPORTED_MODULE_4__.SvgSwitcher)(document.querySelector('.lang__content_switcher'), (_icons_switcher_svg__WEBPACK_IMPORTED_MODULE_2___default()))\r\n\n\n//# sourceURL=webpack://ffk_logistic/./source/assets/scripts/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/assets/scripts/index.js");
/******/ 	
/******/ })()
;