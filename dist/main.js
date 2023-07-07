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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 0;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  width: 100%;\n}\n\n#main {\n  display: flex;\n  padding: 1px;\n  text-align: center;\n  border: 2px solid blue;\n}\n\n#left, #right {\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 50px;\n  border: 1px solid #008000;\n  margin: 1px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://infinite_run/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://infinite_run/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://infinite_run/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://infinite_run/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://infinite_run/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://infinite_run/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://infinite_run/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://infinite_run/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://infinite_run/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://infinite_run/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform */ \"./src/classes/Platform.js\");\n/* harmony import */ var _util_platformSequences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platformSequences */ \"./src/util/platformSequences.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/classes/Player.js\");\n\r\n\r\n\r\n\r\nclass Game{\r\n    constructor(context, dimensions){ // base width and height = 800 x 450\r\n        this.context = context;\r\n        this.dimensions = dimensions;\r\n        this.scale = dimensions[0]/800;\r\n        this.playing = false;\r\n        this.gameOver = false;\r\n        this.score = 0;\r\n        this.spawnIntervalId;\r\n        this.objects = new Set();\r\n        this.platforms = new Set();\r\n        this.last_y = this.dimensions[1]/1.75;\r\n        this.lastTime = 0;\r\n        this.animate = this.animate.bind(this);\r\n    }\r\n\r\n    resize(dimensions){\r\n        this.dimensions = dimensions;\r\n        this.scale = dimensions[0]/800;\r\n    }\r\n\r\n\r\n    move(delta){\r\n        this.objects.forEach(object => object.move(delta * this.scale));\r\n        this.platforms.forEach(object => object.move(delta * this.scale));\r\n    }\r\n\r\n    draw(){\r\n        this.context.fillStyle = \"#CCEEFF\";\r\n        this.context.fillRect(0, 0, ...this.dimensions);\r\n        this.objects.forEach(object => object.draw());\r\n        this.platforms.forEach(object => object.draw());\r\n    }\r\n\r\n    animate(time){\r\n        const delta = time - this.lastTime;\r\n        this.lastTime = time;\r\n        this.move(delta/60);\r\n        this.draw();\r\n        requestAnimationFrame(this.animate);\r\n    }\r\n\r\n    platformSequence(sequenceObj, start = this.dimensions[1]*0.8){\r\n\r\n        console.log(sequenceObj.title)\r\n        const sequence = sequenceObj.sequence\r\n        \r\n        for(let i = 0; i < sequence.length; i++){\r\n            const platform = sequence[i];\r\n            const {y, width, timing, velocity} = platform;\r\n            setTimeout(this.platformSpawn.bind(this, [this.dimensions[0], this.last_y = y+this.last_y], width, velocity), timing*this.scale)\r\n            if(i === sequence.length-1){\r\n                const nextSeq = randomEl(_util_platformSequences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].easy);\r\n                setTimeout(this.platformSequence.bind(this, (nextSeq)), sequence[sequence.length-1].timing)\r\n            }\r\n        }\r\n        this.last_y = start;\r\n    }\r\n\r\n    platformSpawn([x, y], width=2, velocity=[0, 0]){\r\n        y = y ?? Math.floor(\r\n                this.last_y+\r\n                (Math.random()-0.5)*\r\n                this.dimensions[1]*0.25\r\n            )+this.dimensions[1]*0.2;\r\n\r\n        this.platforms.add(new _Platform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.context, this, [x, y], width*this.scale, [velocity[0], velocity[1]]));\r\n    }\r\n    \r\n    run(){\r\n        this.platformSpawn([0, this.dimensions[1]*0.5], 800, [-3, 0]);\r\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.context, this);\r\n        window.player = this.player;\r\n        this.objects.add(this.player);\r\n\r\n        setTimeout(this.platformSequence.bind(this, (_util_platformSequences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].easy[1])),0);\r\n        requestAnimationFrame(this.animate)\r\n    }\r\n\r\n\r\n}\r\n\r\nfunction randomEl(array){\r\n    const index = Math.floor(Math.random()*array.length);\r\n    return array[index];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://infinite_run/./src/classes/Game.js?");

/***/ }),

/***/ "./src/classes/Platform.js":
/*!*********************************!*\
  !*** ./src/classes/Platform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SolidObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolidObject */ \"./src/classes/SolidObject.js\");\n\r\n\r\n\r\nclass Platform extends _SolidObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(context, game, [x, y] = position, width=2, velocity=[0, 0]){\r\n        super(context, game, [x, y], velocity, [width, 10]);\r\n    }\r\n\r\n    move(delta){\r\n        super.move(delta);\r\n        if(this.position[0] < 0-this.dimensions[0]){\r\n            this.destroy();\r\n        }\r\n    }\r\n\r\n    draw(color=\"red\"){\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(...this.position, this.dimensions[0], this.dimensions[1]);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Platform);\n\n//# sourceURL=webpack://infinite_run/./src/classes/Platform.js?");

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SolidObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolidObject */ \"./src/classes/SolidObject.js\");\n\r\n\r\nclass Player extends _SolidObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(context, game){\r\n        super(context, game, [50*game.scale, 25*game.scale], [0, 0], [60*game.scale, 60*game.scale]);\r\n        this.addListeners();\r\n        this.standing = false;\r\n        this.footing = undefined;\r\n        this.spriteSheet = new Image();\r\n        this.spriteSheet.src = \"./runner.png\";\r\n        this.spriteState = 0;\r\n        this.keysDown = {};\r\n        this.coolDown = {};\r\n    }\r\n\r\n    move(){\r\n        // debugger;\r\n        this.velocity = [this.velocity[0]*0.995, Math.min(this.velocity[1] + 0.2, 9)];\r\n        if(this.velocity[0] < 0.5){\r\n            this.velocity[0] = 0;\r\n        }\r\n\r\n        if(this.velocity[1] > 0 && Array.from(this.game.platforms).some(object => object !== this && this.collides(object) && (this.footing = object))){\r\n            if(!this.standing){ // land from air\r\n                this.impact = Math.floor((this.velocity[1]/2))\r\n                // this.velocity[0] = Math.max(this.velocity[0]*0.95, this.footing?.velocity[0])\r\n                this.rolling = true;\r\n                setTimeout(() => {\r\n                    this.coolDown[\"jump\"] = false;\r\n                    this.rolling = false;\r\n                }, 200*this.impact)\r\n            }\r\n            this.velocity[1] = 0;\r\n            this.position[1] = this.footing.position[1]+1-this.dimensions[1];\r\n            this.standing = true;\r\n        } else {\r\n            this.footing = undefined;\r\n            this.standing = false;\r\n        }\r\n    \r\n        this.position = [\r\n            this.position[0] + (this.velocity[0]+(this.footing?.velocity[0]+1 || 0))*this.game.scale, \r\n            this.position[1] + (this.velocity[1]+ (this.footing?.velocity[1]+1 || 0))*this.game.scale\r\n        ]\r\n}\r\n    \r\n    spriteArgs(){\r\n        this.spriteState = (this.spriteState+1)%48;\r\n\r\n        let spritePosition = [40*Math.floor(this.spriteState/6), 1];\r\n        const relative_velocity = this.velocity[0] - (this.footing?.velocity[0] || 0);\r\n        debugger;\r\n        \r\n        if(this.rolling){\r\n            spritePosition = [200 + 40*Math.floor(this.spriteState/16), 80]\r\n        } else if(!this.standing && this.velocity[1] < -4*this.game.scale){ // jumping fast\r\n            spritePosition = [0, 80];\r\n        } else if(!this.standing && this.velocity[1] < -1*this.game.scale){ // jumping slow\r\n            spritePosition = [40, 80];\r\n        } else if(!this.standing && this.velocity[1] <= 1){ // in-air\r\n            spritePosition = [80, 80];\r\n        } else if(!this.standing && this.velocity[1] > 1){ // falling slow\r\n            spritePosition = [120, 80];\r\n        } else if(!this.standing && this.velocity[1] > 4*this.game.scale){ // falling fast\r\n            spritePosition = [160, 80];        \r\n        } else if(this.standing && Math.abs(relative_velocity) < 1*this.game.scale){ // standing, not running\r\n            spritePosition = [200, 80];\r\n            this.velocity[0] = this.footing.velocity[0];\r\n        } else if(this.standing && relative_velocity > -2*this.game.scale){ // running quickly\r\n            spritePosition[1] = 41;\r\n\r\n        } else if(relative_velocity > 0){ // running slowly\r\n        } else if(relative_velocity < 3*this.game.scale){ //running quickly left\r\n            // spritePosition[1] = 40;\r\n        } else if(relative_velocity < 0){ //running slowly left\r\n            \r\n        }\r\n        return [...spritePosition, 39, 39, this.position[0], this.position[1]-4*this.game.scale, ...this.dimensions];\r\n    }\r\n\r\n    draw(){\r\n        // super.draw(\"green\");\r\n        this.context.drawImage(this.spriteSheet, ...this.spriteArgs());\r\n    }\r\n\r\n    addListeners(){\r\n        document.addEventListener('keydown', function(e){\r\n            if(e.key == \" \" && this.standing){\r\n                e.preventDefault();\r\n                this.jump();\r\n                this.keysDown[e.key] ||= setInterval(this.jump.bind(this), 300);\r\n                \r\n            } else if(e.key == \"ArrowRight\" && this.standing){\r\n                e.preventDefault();\r\n                \r\n                this.velocity = [Math.min(this.velocity[0]+0.7, 8), this.velocity[1]];\r\n                this.keysDown[e.key] ||= setInterval(function(){if(this.standing) this.velocity = [Math.min(this.velocity[0]+0.7, 4.7), this.velocity[1]]}.bind(this), 200);\r\n                \r\n            } else if(e.key == \"ArrowLeft\" && this.standing){\r\n                e.preventDefault();\r\n               \r\n                this.velocity = [Math.max(this.velocity[0]-0.7, -8), this.velocity[1]]\r\n                this.keysDown[e.key] ||= setInterval(function(){if(this.standing) this.velocity = [Math.max(this.velocity[0]-0.7, -4.7), this.velocity[1]]}.bind(this), 200);\r\n            \r\n            }\r\n        }.bind(this));\r\n        \r\n        document.addEventListener('keyup', function(e){\r\n            clearInterval(this.keysDown[e.key]);\r\n            delete this.keysDown[e.key];\r\n        }.bind(this));\r\n    }\r\n\r\n    jump(){\r\n        if(!this.coolDown[\"jump\"]){\r\n            this.position = [this.position[0], this.position[1]-7];\r\n            this.velocity = [this.velocity[0], -7];\r\n            this.coolDown[\"jump\"] = true;\r\n            this.standing = false;\r\n            this.footing = undefined;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://infinite_run/./src/classes/Player.js?");

/***/ }),

/***/ "./src/classes/SolidObject.js":
/*!************************************!*\
  !*** ./src/classes/SolidObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SolidObject {\r\n    constructor(context, game, position = [0, 0], velocity = [0, 0], dimensions = [10, 10]){\r\n        this.position = position;\r\n        this.dimensions = [dimensions[0]*game.scale, dimensions[1]*game.scale];\r\n        this.velocity = velocity;\r\n        this.context = context;\r\n        this.game = game;\r\n    }\r\n\r\n    move(delta){\r\n        this.position = [\r\n            this.position[0] + this.velocity[0]*delta, \r\n            this.position[1] + this.velocity[1]*delta\r\n        ]\r\n    }\r\n\r\n    draw(color=\"red\"){\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(...this.position, ...this.dimensions);\r\n    }\r\n\r\n    destroy(){\r\n        this.game.objects.delete(this);\r\n    }\r\n\r\n    collisionBox(){\r\n        return [\r\n            this.position, \r\n            [this.position[0]+this.dimensions[0], this.position[1]], \r\n            [this.position[0]+this.dimensions[0], this.position[1]+this.dimensions[1]], \r\n            [this.position[0], this.position[1]+this.dimensions[1]]\r\n        ]\r\n    }\r\n\r\n\r\n    collides(otherObject){\r\n        let thisBox = this.collisionBox();\r\n        let otherBox = otherObject.collisionBox();\r\n\r\n        return inside(thisBox, otherBox) || inside(otherBox, thisBox);\r\n    }    \r\n}\r\n\r\nfunction inside(thisBox, otherBox){\r\n    let bounds = {\"xBounds\": [otherBox[0][0], otherBox[1][0]], \"yBounds\": [otherBox[0][1], otherBox[3][1]]};\r\n\r\n    return thisBox.some((corner)=>{\r\n        let [x, y] = corner;\r\n\r\n        return bounds[\"xBounds\"][0] <= x && x <= bounds[\"xBounds\"][1]\r\n            && bounds[\"yBounds\"][0] <= y && y <= bounds[\"yBounds\"][1];\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolidObject);\n\n//# sourceURL=webpack://infinite_run/./src/classes/SolidObject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game.js */ \"./src/classes/Game.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n\n\n\"use strict\";\n\nconst canvas = document.getElementById(\"canvas\");\nconst context = canvas.getContext(\"2d\")\nconst viewPortHeight = window.innerHeight;\nconst viewPortWidth = window.innerWidth;\n\n// canvas.height = viewPortHeight*0.8;\n// canvas.width = canvas.height*(9/16);\ncanvas.width = Math.min(viewPortWidth * 0.7, 800);\ncanvas.height = canvas.width * (8/16);\n\n\nconst game = new _classes_Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, [canvas.width, canvas.height]);\ngame.run();\n\n\n\n//# sourceURL=webpack://infinite_run/./src/index.js?");

/***/ }),

/***/ "./src/util/platformSequences.js":
/*!***************************************!*\
  !*** ./src/util/platformSequences.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar stepUp = {\r\n    title: \"stepUp\",\r\n    sequence: [\r\n        {y: 0, width: 400, timing: 6000, velocity: [-8, 0]},\r\n        {y: -60, width: 400, timing: 11000, velocity: [-8, 0]},\r\n        {y: -60, width: 400, timing: 16000, velocity: [-8, 0]},\r\n        {y: -60, width: 400, timing: 21000, velocity: [-8, 0]},\r\n    ],\r\n}\r\n\r\nvar straighHop = {\r\n    title: \"straightHop\",\r\n    sequence: [\r\n        {y: 0, width: 400, timing: 6000, velocity: [-8, 0]},\r\n        {y: 0, width: 400, timing: 12000, velocity: [-8, 0]},\r\n        {y: 0, width: 400, timing: 16000, velocity: [-8, 0]},\r\n        {y: 0, width: 400, timing: 22000, velocity: [-8, 0]},\r\n    ],\r\n}\r\n\r\nvar saddle = {\r\n    title: \"saddle\",\r\n    sequence: [\r\n        {y: 0, width: 400, timing:6000, velocity: [-8, 0]},\r\n        {y: -70, width: 400, timing:12000, velocity: [-8, 0]},\r\n        {y: 70, width: 400, timing:18000, velocity: [-8, 0]},\r\n    ],\r\n}\r\n\r\nvar dip = {\r\n    title: \"dip\",\r\n    sequence: [\r\n        {y: 0, width: 200, timing:6000, velocity: [-8, 0]},\r\n        {y: 50, width: 200, timing:12000, velocity: [-8, 0]},\r\n        {y: -80, width: 400, timing:18000, velocity: [-8, 0]},\r\n    ],\r\n}\r\n\r\nvar gap = {\r\n    title: \"gap\",\r\n    sequence: [\r\n        {y: 0, width: 200, timing: 0, velocity: [-8, 0]},\r\n        {y: 0, width: 300, timing: 8000, velocity: [-8, 0]},\r\n    ],\r\n}\r\n\r\nvar test = {\r\n    title: \"test\",\r\n    sequence: [\r\n        {y: 0, width: 200, timing: 5000, velocity: [-3, 0]},\r\n    ],\r\n}\r\n\r\n\r\nconst sequences = {\r\n    easy: [stepUp, straighHop, saddle, dip, gap],\r\n    medium: [gap],\r\n    hard: [],\r\n    test: [test]\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sequences);\n\n//# sourceURL=webpack://infinite_run/./src/util/platformSequences.js?");

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