/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdemo5"] = self["webpackChunkdemo5"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 569);\n\r\n\r\n\r\nfunction component() {\r\n    const element = document.createElement('div');\r\n\r\n    // lodash 是由当前 script 脚本 import 进来的\r\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');\r\n    element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__.default.bind(null, 'Hello webpack!');\r\n\r\n    return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://demo5/./src/index.js?");

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ print\n/* harmony export */ });\nfunction print(text) {\r\n    console.log(text);\r\n};\n\n//# sourceURL=webpack://demo5/./src/print.js?");

/***/ })

},
0,[[138,"runtime","vendors"]]]);