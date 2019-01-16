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
eval("\n\nvar _flip = __webpack_require__(/*! ./modules/flip */ \"./src/assets/scripts/modules/flip.js\");\n\nvar _flip2 = _interopRequireDefault(_flip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var flipbtn = document.querySelector('.btn-auth'),\n      flipbtnMain = document.querySelector('.js-user-links__link'),\n      flipCart = document.querySelector('.hero__cart');\n\n  (0, _flip2.default)(flipbtn, flipbtnMain, flipCart);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsaXBidG4iLCJxdWVyeVNlbGVjdG9yIiwiZmxpcGJ0bk1haW4iLCJmbGlwQ2FydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNOztBQUVsRCxNQUFJQyxVQUFVRixTQUFTRyxhQUFULENBQXVCLFdBQXZCLENBQWQ7QUFBQSxNQUNBQyxjQUFjSixTQUFTRyxhQUFULENBQXVCLHNCQUF2QixDQURkO0FBQUEsTUFFQUUsV0FBV0wsU0FBU0csYUFBVCxDQUF1QixhQUF2QixDQUZYOztBQUlBLHNCQUFLRCxPQUFMLEVBQWNFLFdBQWQsRUFBMkJDLFFBQTNCO0FBRUQsQ0FSRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsaXAgZnJvbSAnLi9tb2R1bGVzL2ZsaXAnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICBsZXQgZmxpcGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYXV0aCcpLFxyXG4gIGZsaXBidG5NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXVzZXItbGlua3NfX2xpbmsnKSxcclxuICBmbGlwQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19jYXJ0Jyk7XHJcblxyXG4gIGZsaXAoZmxpcGJ0biwgZmxpcGJ0bk1haW4sIGZsaXBDYXJ0KTtcclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/flip.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/flip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n'use string';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar flip = function flip(flipbtn, flipbtnMain, flipCart) {\n  document.body.onclick = function (e) {\n    if (!e.target.closest('.hero__cart') || e.target === flipbtnMain) {\n      if (!flipCart.classList.contains('flipped') && e.target !== flipbtn) {\n        return false;\n      }\n      flipCart.classList.toggle('flipped');\n      flipbtn.classList.toggle('hidden');\n    }\n  };\n};\n\nexports.default = flip;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiZmxpcCIsImZsaXBidG4iLCJmbGlwYnRuTWFpbiIsImZsaXBDYXJ0IiwiZG9jdW1lbnQiLCJib2R5Iiwib25jbGljayIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsT0FBRCxFQUFVQyxXQUFWLEVBQXVCQyxRQUF2QixFQUFvQztBQUMvQ0MsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEdBQXdCLFVBQUNDLENBQUQsRUFBTztBQUM3QixRQUFJLENBQUNBLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixhQUFqQixDQUFELElBQW9DRixFQUFFQyxNQUFGLEtBQWFOLFdBQXJELEVBQWtFO0FBQ2hFLFVBQUksQ0FBQ0MsU0FBU08sU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsU0FBNUIsQ0FBRCxJQUEyQ0osRUFBRUMsTUFBRixLQUFhUCxPQUE1RCxFQUFxRTtBQUNuRSxlQUFPLEtBQVA7QUFDRDtBQUNERSxlQUFTTyxTQUFULENBQW1CRSxNQUFuQixDQUEwQixTQUExQjtBQUNBWCxjQUFRUyxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixRQUF6QjtBQUNEO0FBQ0YsR0FSRDtBQVNELENBVkQ7O2tCQVllWixJIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZmxpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaW5nJztcclxuXHJcbmNvbnN0IGZsaXAgPSAoZmxpcGJ0biwgZmxpcGJ0bk1haW4sIGZsaXBDYXJ0KSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmhlcm9fX2NhcnQnKSB8fCBlLnRhcmdldCA9PT0gZmxpcGJ0bk1haW4pIHtcclxuICAgICAgaWYgKCFmbGlwQ2FydC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsaXBwZWQnKSAmJiBlLnRhcmdldCAhPT0gZmxpcGJ0bikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBmbGlwQ2FydC5jbGFzc0xpc3QudG9nZ2xlKCdmbGlwcGVkJyk7XHJcbiAgICAgIGZsaXBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZsaXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ })

/******/ });