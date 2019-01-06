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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/flip */ \"./src/assets/scripts/modules/flip.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tb2R1bGVzL2ZsaXAnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/flip.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/flip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var flipbtn = document.querySelector('.btn-auth');\n  var flipbtnMain = document.querySelector('.js-user-links__link');\n  var flipCart = document.querySelector('.hero__cart');\n\n  flipbtn.onclick = function (e) {\n    e.preventDefault();\n    if (flipCart.classList.contains('flipped')) {\n      flipCart.classList.remove('flipped');\n      this.innerHTML = 'Авторизоваться';\n    } else {\n      flipCart.classList.add('flipped');\n      this.innerHTML = 'На главную';\n    }\n  };\n\n  flipbtnMain.onclick = function (e) {\n    e.preventDefault();\n    flipCart.classList.remove('flipped');\n    flipbtn.innerHTML = 'Авторизоваться';\n  };\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxpcGJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJmbGlwYnRuTWFpbiIsImZsaXBDYXJ0Iiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTs7QUFFeEQsTUFBTUMsVUFBVUYsU0FBU0csYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLE1BQU1DLGNBQWNKLFNBQVNHLGFBQVQsQ0FBdUIsc0JBQXZCLENBQXBCO0FBQ0EsTUFBTUUsV0FBV0wsU0FBU0csYUFBVCxDQUF1QixhQUF2QixDQUFqQjs7QUFFQUQsVUFBUUksT0FBUixHQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDN0JBLE1BQUVDLGNBQUY7QUFDQSxRQUFJSCxTQUFTSSxTQUFULENBQW1CQyxRQUFuQixDQUE0QixTQUE1QixDQUFKLEVBQTRDO0FBQzFDTCxlQUFTSSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixTQUExQjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsZ0JBQWpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xQLGVBQVNJLFNBQVQsQ0FBbUJJLEdBQW5CLENBQXVCLFNBQXZCO0FBQ0EsV0FBS0QsU0FBTCxHQUFpQixZQUFqQjtBQUNEO0FBQ0YsR0FURDs7QUFXQVIsY0FBWUUsT0FBWixHQUFzQixVQUFVQyxDQUFWLEVBQWE7QUFDakNBLE1BQUVDLGNBQUY7QUFDQUgsYUFBU0ksU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsU0FBMUI7QUFDQVQsWUFBUVUsU0FBUixHQUFvQixnQkFBcEI7QUFDRCxHQUpEO0FBTUQsQ0F2QkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgZmxpcGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYXV0aCcpO1xyXG4gIGNvbnN0IGZsaXBidG5NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXVzZXItbGlua3NfX2xpbmsnKTtcclxuICBjb25zdCBmbGlwQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19jYXJ0Jyk7XHJcblxyXG4gIGZsaXBidG4ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZmxpcENhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwcGVkJykpIHtcclxuICAgICAgZmxpcENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcHBlZCcpO1xyXG4gICAgICB0aGlzLmlubmVySFRNTCA9ICfQkNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPJzsgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmbGlwQ2FydC5jbGFzc0xpc3QuYWRkKCdmbGlwcGVkJyk7XHJcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gJ9Cd0LAg0LPQu9Cw0LLQvdGD0Y4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmxpcGJ0bk1haW4ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmbGlwQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwcGVkJyk7XHJcbiAgICBmbGlwYnRuLmlubmVySFRNTCA9ICfQkNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPJztcclxuICB9XHJcblxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ })

/******/ });