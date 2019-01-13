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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/hamburger */ \"./src/assets/scripts/modules/hamburger.js\");\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tb2R1bGVzL2hhbWJ1cmdlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFyYWxsYXgnXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburger.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/hamburger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\n  var hamburger = document.querySelector('.hamburger');\n  var overlay = document.querySelector('.js-overlay-menu');\n  hamburger.onclick = function (e) {\n    e.preventDefault();\n\n    this.classList.toggle('on');\n    overlay.classList.toggle('open');\n  };\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZTQ5ZCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW1idXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwib3ZlcmxheSIsIm9uY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZOztBQUV4RCxNQUFNQyxZQUFZRixTQUFTRyxhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQ0EsTUFBTUMsVUFBVUosU0FBU0csYUFBVCxDQUF1QixrQkFBdkIsQ0FBaEI7QUFDQUQsWUFBVUcsT0FBVixHQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDL0JBLE1BQUVDLGNBQUY7O0FBRUEsU0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLElBQXRCO0FBQ0FMLFlBQVFJLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLE1BQXpCO0FBQ0QsR0FMRDtBQU9ELENBWEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW92ZXJsYXktbWVudScpO1xyXG4gIGhhbWJ1cmdlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICB9O1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburger.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallax = function () {\n  var bg = document.querySelector('.hero__bg');\n  var user = document.querySelector('.user');\n  var uzor = document.querySelector('.hero__uzor');\n\n  return {\n    move: function move(block, windowScroll, strafeAmount) {\n      var strafe = windowScroll / -strafeAmount + '%';\n      var transformString = 'translate3d(0,' + strafe + ', 0)';\n\n      var style = block.style;\n\n      style.transform = transformString;\n      style.webkitTransform = transformString;\n    },\n\n    init: function init(wScroll) {\n      this.move(bg, wScroll, 40);\n      this.move(uzor, wScroll, 25);\n      this.move(user, wScroll, 10);\n    }\n  };\n}();\n\nwindow.onscroll = function () {\n  var wScroll = window.pageYOffset;\n\n  parallax.init(wScroll);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4IiwiYmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyIiwidXpvciIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInN0eWxlIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVksWUFBWTtBQUMxQixNQUFJQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQVQ7QUFDQSxNQUFJQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVg7QUFDQSxNQUFJRSxPQUFPSCxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQVg7O0FBRUEsU0FBTztBQUNMRyxVQUFNLGNBQVNDLEtBQVQsRUFBZ0JDLFlBQWhCLEVBQThCQyxZQUE5QixFQUE0QztBQUNoRCxVQUFJQyxTQUFTRixlQUFlLENBQUNDLFlBQWhCLEdBQStCLEdBQTVDO0FBQ0EsVUFBSUUsa0JBQWtCLG1CQUFrQkQsTUFBbEIsR0FBMEIsTUFBaEQ7O0FBRUEsVUFBSUUsUUFBUUwsTUFBTUssS0FBbEI7O0FBRUFBLFlBQU1DLFNBQU4sR0FBa0JGLGVBQWxCO0FBQ0FDLFlBQU1FLGVBQU4sR0FBd0JILGVBQXhCO0FBQ0QsS0FUSTs7QUFXTEksVUFBTSxjQUFTQyxPQUFULEVBQWtCO0FBQ3RCLFdBQUtWLElBQUwsQ0FBVUwsRUFBVixFQUFjZSxPQUFkLEVBQXVCLEVBQXZCO0FBQ0EsV0FBS1YsSUFBTCxDQUFVRCxJQUFWLEVBQWdCVyxPQUFoQixFQUF5QixFQUF6QjtBQUNBLFdBQUtWLElBQUwsQ0FBVUYsSUFBVixFQUFnQlksT0FBaEIsRUFBeUIsRUFBekI7QUFDRDtBQWZJLEdBQVA7QUFpQkQsQ0F0QmUsRUFBaEI7O0FBd0JBQyxPQUFPQyxRQUFQLEdBQWtCLFlBQVk7QUFDNUIsTUFBSUYsVUFBVUMsT0FBT0UsV0FBckI7O0FBRUFuQixXQUFTZSxJQUFULENBQWNDLE9BQWQ7QUFDRCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19iZycpO1xyXG4gIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcclxuICB2YXIgdXpvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX191em9yJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQgKyAnJSc7XHJcbiAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwnKyBzdHJhZmUgKycsIDApJztcclxuXHJcbiAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG5cclxuICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKHdTY3JvbGwpIHtcclxuICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0MCk7XHJcbiAgICAgIHRoaXMubW92ZSh1em9yLCB3U2Nyb2xsLCAyNSk7XHJcbiAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KCkpXHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ })

/******/ });