/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CooperLtBT-Bold.ttf */ \"./src/fonts/CooperLtBT-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'Cooper BT';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n  }\r\n\r\n  \r\n  /* CSS Variables */\r\n:root {\r\n    --primary-green: #097d4c;\r\n    --cream-bg: #f1ead1;\r\n    --dark-green: #065536;\r\n    --light-green: #3ca37d;\r\n    --dark-text: #333333;\r\n    --light-text: #f8f5ed;\r\n    --description-text: #555555;\r\n  }\r\n  \r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Cooper BT', serif;\r\n    background-color: var(--cream-bg);\r\n    color: var(--dark-text);\r\n    line-height: 1.6;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n  }\r\n  \r\n  /* Header & Navigation */\r\n  header {\r\n    padding: 20px 0;\r\n    background-color: var(--primary-green);\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n  }\r\n  \r\n  nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  nav button {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    font-family: 'Cooper BT', serif;\r\n  }\r\n  \r\n  .left button img {\r\n    width: 50px;\r\n    height: auto;\r\n    transition: transform 0.3s ease;\r\n  }\r\n  \r\n  .left button img:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n  .right button {\r\n    color: var(--cream-bg);\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    margin-left: 30px;\r\n    padding: 8px 16px;\r\n    position: relative;\r\n  }\r\n  \r\n  .right button::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 2px;\r\n    bottom: 0;\r\n    left: 50%;\r\n    background-color: var(--cream-bg);\r\n    transition: all 0.3s ease;\r\n  }\r\n  \r\n  .right button:hover {\r\n    color: var(--light-text);\r\n  }\r\n  \r\n  .right button:hover::after {\r\n    width: 80%;\r\n    left: 10%;\r\n  }\r\n  \r\n  /* Content Area */\r\n  #content {\r\n    padding: 40px 0;\r\n    min-height: calc(100vh - 100px);\r\n  }\r\n  \r\n  /* HOME PAGE STYLES */\r\n  .title {\r\n    font-family: 'Cooper BT', serif;\r\n    font-size: 3.5rem;\r\n    color: var(--primary-green);\r\n    margin-bottom: 20px;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  /* Home page container with description and burger image side by side */\r\n  .menucontainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    max-width: 1000px;\r\n    margin: 40px auto;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 40px;\r\n    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\r\n  }\r\n  \r\n  /* Left side content */\r\n  .menuitem {\r\n    flex: 1;\r\n    padding-right: 40px;\r\n  }\r\n  \r\n  /* Right side burger image container - assuming the last menuitem holds the image */\r\n  .menuitem:last-child {\r\n    flex: 0 0 40%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-right: 0;\r\n  }\r\n  \r\n  /* Styling for burger image */\r\n  .menuitem:last-child img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    filter: drop-shadow(0 8px 15px rgba(9, 125, 76, 0.2));\r\n    transition: transform 0.5s ease;\r\n  }\r\n  \r\n  .menuitem:last-child img:hover {\r\n    transform: scale(1.05) rotate(5deg);\r\n  }\r\n  \r\n  .menuitemtitle {\r\n    font-family: 'Cooper BT', serif;\r\n    color: var(--primary-green);\r\n    font-size: 1.6rem;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .menuitemdescription {\r\n    color: var(--description-text);\r\n    margin-bottom: 20px;\r\n    font-family: 'Georgia', serif;\r\n    font-style: italic;\r\n    line-height: 1.8;\r\n    font-size: 1.05rem;\r\n  }\r\n  \r\n  .menuitemprice {\r\n    font-weight: bold;\r\n    color: var(--primary-green);\r\n    font-size: 1.2rem;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  /* Button for home page */\r\n  .home-cta-button {\r\n    background-color: var(--primary-green);\r\n    color: var(--cream-bg);\r\n    font-family: 'Cooper BT', serif;\r\n    font-size: 1.1rem;\r\n    padding: 12px 28px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 4px 8px rgba(9, 125, 76, 0.2);\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .home-cta-button:hover {\r\n    background-color: var(--dark-green);\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 6px 12px rgba(9, 125, 76, 0.3);\r\n  }\r\n  \r\n  /* MENU PAGE STYLES */\r\n  .menu-logo-container {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .menu-logo {\r\n    width: 80px;\r\n    height: auto;\r\n  }\r\n  \r\n  .menu-head {\r\n    font-family: 'Cooper BT', serif;\r\n    font-size: 3rem;\r\n    color: var(--primary-green);\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .menu-head::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 120px;\r\n    height: 3px;\r\n    background-color: var(--primary-green);\r\n    bottom: -15px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n  \r\n  .menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    gap: 30px;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .menu-item {\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    padding: 25px;\r\n    transition: all 0.3s ease;\r\n    position: relative;\r\n    overflow: hidden;\r\n    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\r\n    border-left: 3px solid var(--primary-green);\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .menu-item:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  .item-name {\r\n    font-family: 'Cooper BT', serif;\r\n    color: var(--primary-green);\r\n    font-size: 1.5rem;\r\n    margin-bottom: 12px;\r\n    letter-spacing: 0.5px;\r\n  }\r\n  \r\n  .item-description {\r\n    color: var(--description-text);\r\n    font-size: 0.95rem;\r\n    margin-bottom: 15px;\r\n    font-family: 'Georgia', serif;\r\n    font-style: italic;\r\n    line-height: 1.6;\r\n  }\r\n  \r\n  .item-price {\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n    color: var(--primary-green);\r\n    align-self: flex-end;\r\n    font-family: 'Cooper BT', serif;\r\n    margin-top: auto;\r\n  }\r\n  \r\n  /* ABOUT PAGE STYLES */\r\n  .about-container {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    padding: 40px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\r\n  }\r\n  \r\n  .about-title {\r\n    font-family: 'Cooper BT', serif;\r\n    color: var(--primary-green);\r\n    font-size: 2.5rem;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n  \r\n  .about-title::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 80px;\r\n    height: 3px;\r\n    background-color: var(--primary-green);\r\n    bottom: -10px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n  \r\n  .about-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n  }\r\n  \r\n  .about-section {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .about-section h3 {\r\n    font-family: 'Cooper BT', serif;\r\n    color: var(--primary-green);\r\n    font-size: 1.4rem;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .about-section p {\r\n    color: var(--description-text);\r\n    font-family: 'Georgia', serif;\r\n    line-height: 1.8;\r\n    font-size: 1.05rem;\r\n  }\r\n  \r\n  /* Success message */\r\n  .success-message {\r\n    background-color: var(--light-green);\r\n    color: white;\r\n    padding: 15px;\r\n    border-radius: 5px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity 0.5s ease;\r\n  }\r\n  \r\n  .success-message.show {\r\n    opacity: 1;\r\n  }\r\n  \r\n  /* Decorative elements */\r\n  .divider {\r\n    width: 100%;\r\n    height: 2px;\r\n    background: linear-gradient(90deg, transparent, var(--primary-green), transparent);\r\n    margin: 30px 0;\r\n  }\r\n  \r\n  .accent-dot {\r\n    display: inline-block;\r\n    width: 8px;\r\n    height: 8px;\r\n    background-color: var(--primary-green);\r\n    border-radius: 50%;\r\n    margin: 0 8px;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  /* RESPONSIVE STYLES */\r\n  @media (max-width: 1024px) {\r\n    .menu-container {\r\n      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .right button {\r\n      margin-left: 15px;\r\n      padding: 6px 10px;\r\n      font-size: 16px;\r\n    }\r\n    \r\n    .title {\r\n      font-size: 2.5rem;\r\n      text-align: center;\r\n    }\r\n    \r\n    .menu-head {\r\n      font-size: 2.2rem;\r\n    }\r\n    \r\n    .about-title {\r\n      font-size: 2.2rem;\r\n    }\r\n    \r\n    .menu-container {\r\n      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n    }\r\n    \r\n    .menucontainer {\r\n      flex-direction: column;\r\n      padding: 30px;\r\n    }\r\n    \r\n    .menuitem {\r\n      padding-right: 0;\r\n      text-align: center;\r\n      margin-bottom: 30px;\r\n    }\r\n    \r\n    .menuitem:last-child {\r\n      flex: 0 0 auto;\r\n      margin-bottom: 0;\r\n    }\r\n    \r\n    .menuitem:last-child img {\r\n      max-width: 70%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 480px) {\r\n    .right button {\r\n      margin-left: 8px;\r\n      padding: 5px 8px;\r\n      font-size: 14px;\r\n    }\r\n    \r\n    .title {\r\n      font-size: 2rem;\r\n    }\r\n    \r\n    .menu-head {\r\n      font-size: 1.8rem;\r\n    }\r\n    \r\n    .menu-container {\r\n      grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .about-container {\r\n      padding: 25px;\r\n    }\r\n    \r\n    .about-title {\r\n      font-size: 1.8rem;\r\n    }\r\n    \r\n    .menucontainer {\r\n      padding: 20px;\r\n    }\r\n  }\r\n  \r\n  /* Animation classes */\r\n  .fade-in {\r\n    animation: fadeIn 0.8s ease-in-out forwards;\r\n  }\r\n  \r\n  .slide-in {\r\n    animation: slideIn 0.8s ease-in-out forwards;\r\n  }\r\n  \r\n  @keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n  }\r\n  \r\n  @keyframes slideIn {\r\n    from { \r\n      opacity: 0;\r\n      transform: translateY(30px);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: translateY(0);\r\n    }\r\n  }\r\n\r\n  /* Footer styling */\r\nfooter {\r\n    background-color: var(--primary-green);\r\n    color: var(--cream-bg);\r\n    text-align: center;\r\n    padding: 15px 0;\r\n    width: 100%;\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  footer a {\r\n    color: var(--cream-bg);\r\n    text-decoration: none;\r\n    font-size: 0.9rem;\r\n    transition: color 0.3s ease;\r\n  }\r\n  \r\n  footer a:hover {\r\n    color: white;\r\n    text-decoration: underline;\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage(){\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n    const about = document.createElement('div');\r\n    about.classList.add('about');\r\n    about.innerHTML = `\r\n        <h1>About Us</h1>\r\n        <p>Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible.</p>\r\n        <p>Our team is passionate about food and service, and we strive to make every visit memorable.</p>\r\n        <p>Thank you for choosing us!</p>\r\n    `;\r\n    return [about];\r\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/assets/burger.png":
/*!*******************************!*\
  !*** ./src/assets/burger.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d75cdfe6f95038142e0.png\";\n\n//# sourceURL=webpack:///./src/assets/burger.png?");

/***/ }),

/***/ "./src/fonts/CooperLtBT-Bold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/CooperLtBT-Bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d666e24e4f6bb535c4a4.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/CooperLtBT-Bold.ttf?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomepage: () => (/* binding */ loadHomepage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/burger.png */ \"./src/assets/burger.png\");\n\r\n\r\n\r\nfunction loadHomepage(){\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'GRILLED ON COAL';\r\n    title.classList.add('title');\r\n\r\n    const mascot = document.createElement('img');\r\n    mascot.src = _assets_burger_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    mascot.alt = 'Grilled On Coal mascot';\r\n    mascot.style.width = '200px';\r\n    mascot.style.align = 'center';\r\n\r\n    const description = document.createElement('p');\r\n    description.textContent = 'Welcome to Grilled On Coal, where we serve the best grilled burgers in town! Our burgers are made with fresh ingredients and grilled to perfection. Come and taste the difference!';\r\n    description.classList.add('description');\r\n\r\n    return [title, mascot, description];\r\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nconst home = document.getElementById('homeButton');\r\nconst menu = document.getElementById('menuButton');\r\nconst about = document.getElementById('aboutButton');\r\nconst logo = document.getElementById('logoButton');\r\n\r\ncontent = document.getElementById('content');\r\ncontent.innerHTML = '';\r\n\r\nfunction loadPage(elements =[]) {\r\n    elements.forEach(element =>{\r\n        content.appendChild(element);\r\n    })\r\n}\r\n\r\nconst initialElements = (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\r\nloadPage(initialElements);\r\n\r\n\r\nlogo.addEventListener('click', () => {\r\n    loadPage((0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)());\r\n})\r\nhome.addEventListener('click', () => {\r\n    loadPage((0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)());\r\n});\r\n\r\nmenu.addEventListener('click', () => {\r\n    loadPage((0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)());\r\n});\r\n\r\nabout.addEventListener('click', () => {\r\n    loadPage((0,_about__WEBPACK_IMPORTED_MODULE_2__.loadAboutPage)());\r\n}\r\n);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n\r\n    const menuHead = document.createElement('h1');\r\n    menuHead.textContent = 'Our Premium Menu';\r\n    menuHead.classList.add('menu-head');\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('menu-container');\r\n\r\n    const menuItems = [\r\n        { name: 'Signature Burger', description: 'House-ground prime beef with aged cheddar, caramelized onions, and special sauce', price: 16.99 },\r\n        { name: 'Truffle Fries', description: 'Hand-cut potatoes, truffle oil, parmesan, and fresh herbs', price: 9.99 },\r\n        { name: 'BBQ Ribs', description: 'Slow-cooked pork ribs with our secret spice rub and tangy barbecue glaze', price: 24.99 },\r\n        { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon-dill butter and seasonal vegetables', price: 22.99 },\r\n        { name: 'Craft Mac & Cheese', description: 'Four-cheese blend with toasted breadcrumbs and black truffle', price: 14.99 },\r\n        { name: 'Garden Salad', description: 'Locally sourced greens, heirloom tomatoes, and house-made vinaigrette', price: 10.99 },\r\n        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center and vanilla bean ice cream', price: 8.99 },\r\n        { name: 'Craft Beer', description: 'Rotating selection of local draft beers', price: 6.50 }\r\n    ];\r\n\r\n    menuItems.forEach(item => {\r\n        const menuItem = document.createElement('div');\r\n        menuItem.classList.add('menu-item');\r\n\r\n        const itemName = document.createElement('h2');\r\n        itemName.textContent = item.name;\r\n        itemName.classList.add('item-name');\r\n\r\n        const itemDescription = document.createElement('p');\r\n        itemDescription.textContent = item.description;\r\n        itemDescription.classList.add('item-description');\r\n\r\n        const itemPrice = document.createElement('p');\r\n        itemPrice.textContent = `$${item.price.toFixed(2)}`;\r\n        itemPrice.classList.add('item-price');\r\n\r\n        menuItem.appendChild(itemName);\r\n        menuItem.appendChild(itemDescription);\r\n        menuItem.appendChild(itemPrice);\r\n\r\n        menuContainer.appendChild(menuItem);\r\n    });\r\n\r\n    content.appendChild(menuHead);\r\n    content.appendChild(menuContainer);\r\n\r\n    return [menuHead, menuContainer];\r\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;