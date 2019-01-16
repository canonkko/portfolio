/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/menu */ \"./src/assets/scripts/modules/menu.js\");\n\n// import \"./modules/parallax\";\n// import \"./modules/scrolltoid\";\n// import \"./modules/skills\";\n// import \"./modules/map\";\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZLENBSXpELENBSkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbW9kdWxlcy9tZW51JztcclxuLy8gaW1wb3J0IFwiLi9tb2R1bGVzL3BhcmFsbGF4XCI7XHJcbi8vIGltcG9ydCBcIi4vbW9kdWxlcy9zY3JvbGx0b2lkXCI7XHJcbi8vIGltcG9ydCBcIi4vbW9kdWxlcy9za2lsbHNcIjtcclxuLy8gaW1wb3J0IFwiLi9tb2R1bGVzL21hcFwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburger_menu.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/modules/hamburger_menu.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n'use string';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar hamburger_menu = function hamburger_menu(hamburger, overlay) {\n  hamburger.onclick = function (e) {\n    e.preventDefault();\n\n    this.classList.toggle('on');\n    overlay.classList.toggle('open');\n  };\n};\n\nexports.default = hamburger_menu;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXJfbWVudS5qcz8yNDI4Il0sIm5hbWVzIjpbImhhbWJ1cmdlcl9tZW51IiwiaGFtYnVyZ2VyIiwib3ZlcmxheSIsIm9uY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUM3Q0QsWUFBVUUsT0FBVixHQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDL0JBLE1BQUVDLGNBQUY7O0FBRUEsU0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLElBQXRCO0FBQ0FMLFlBQVFJLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLE1BQXpCO0FBQ0QsR0FMRDtBQU1ELENBUEQ7O2tCQVNlUCxjIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvaGFtYnVyZ2VyX21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmluZyc7XHJcblxyXG5jb25zdCBoYW1idXJnZXJfbWVudSA9IChoYW1idXJnZXIsIG92ZXJsYXkpID0+IHtcclxuICBoYW1idXJnZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvbicpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbWJ1cmdlcl9tZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburger_menu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _hamburger_menu = __webpack_require__(/*! ./hamburger_menu */ \"./src/assets/scripts/modules/hamburger_menu.js\");\n\nvar _hamburger_menu2 = _interopRequireDefault(_hamburger_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\n  var hamburger = document.querySelector('.hamburger');\n  var overlay = document.querySelector('.js-overlay-menu');\n\n  (0, _hamburger_menu2.default)(hamburger, overlay);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFtYnVyZ2VyIiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXkiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTs7QUFFeEQsTUFBTUMsWUFBWUYsU0FBU0csYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLE1BQU1DLFVBQVVKLFNBQVNHLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWhCOztBQUVBLGdDQUFlRCxTQUFmLEVBQTBCRSxPQUExQjtBQUVELENBUEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbWJ1cmdlcl9tZW51IGZyb20gJy4vaGFtYnVyZ2VyX21lbnUnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1vdmVybGF5LW1lbnUnKTtcclxuXHJcbiAgaGFtYnVyZ2VyX21lbnUoaGFtYnVyZ2VyLCBvdmVybGF5KTtcclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ })

/******/ });