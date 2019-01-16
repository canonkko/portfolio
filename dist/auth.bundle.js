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
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var flipbtn = document.querySelector('.btn-auth');\n  var flipbtnMain = document.querySelector('.js-user-links__link');\n  var flipCart = document.querySelector('.hero__cart');\n\n  // flipbtn.onclick = function (e) {\n  //   e.preventDefault();\n  //   if (flipCart.classList.contains('flipped')) {\n  //     flipCart.classList.remove('flipped');\n  //     this.innerHTML = 'Авторизоваться'; \n  //   } else {\n  //     flipCart.classList.add('flipped');\n  //     this.innerHTML = 'На главную';\n  //   }\n  // }\n\n  // flipbtnMain.onclick = function (e) {\n  //   e.preventDefault();\n  //   flipCart.classList.remove('flipped');\n  //   flipbtn.innerHTML = 'Авторизоваться';\n  // }\n\n  document.body.onclick = function (e) {\n\n    // e.preventDefault();\n    if (!e.target.closest('.hero__cart')) {\n      // console.log(\"fgf\");\n      if (!flipCart.classList.contains('flipped') && e.target !== flipbtnMain) {\n        return false;\n        flipCart.classList.toggle('flipped');\n        flipbtn.innerHTML = 'Авторизоваться';\n      }\n    }\n  };\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxpcGJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJmbGlwYnRuTWFpbiIsImZsaXBDYXJ0IiwiYm9keSIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTs7QUFFeEQsTUFBTUMsVUFBVUYsU0FBU0csYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLE1BQU1DLGNBQWNKLFNBQVNHLGFBQVQsQ0FBdUIsc0JBQXZCLENBQXBCO0FBQ0EsTUFBTUUsV0FBV0wsU0FBU0csYUFBVCxDQUF1QixhQUF2QixDQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBSCxXQUFTTSxJQUFULENBQWNDLE9BQWQsR0FBd0IsVUFBQ0MsQ0FBRCxFQUFPOztBQUU3QjtBQUNBLFFBQUksQ0FBQ0EsRUFBRUMsTUFBRixDQUFTQyxPQUFULENBQWlCLGFBQWpCLENBQUwsRUFBc0M7QUFDcEM7QUFDQSxVQUFJLENBQUNMLFNBQVNNLFNBQVQsQ0FBbUJDLFFBQW5CLENBQTRCLFNBQTVCLENBQUQsSUFBMkNKLEVBQUVDLE1BQUYsS0FBYUwsV0FBNUQsRUFBeUU7QUFDdkUsZUFBTyxLQUFQO0FBQ0FDLGlCQUFTTSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixTQUExQjtBQUNBWCxnQkFBUVksU0FBUixHQUFvQixnQkFBcEI7QUFDRDtBQUNGO0FBQ0YsR0FYRDtBQWFELENBcENEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZmxpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IGZsaXBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWF1dGgnKTtcclxuICBjb25zdCBmbGlwYnRuTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy11c2VyLWxpbmtzX19saW5rJyk7XHJcbiAgY29uc3QgZmxpcENhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fY2FydCcpO1xyXG5cclxuICAvLyBmbGlwYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgaWYgKGZsaXBDYXJ0LmNsYXNzTGlzdC5jb250YWlucygnZmxpcHBlZCcpKSB7XHJcbiAgLy8gICAgIGZsaXBDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBwZWQnKTtcclxuICAvLyAgICAgdGhpcy5pbm5lckhUTUwgPSAn0JDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRjyc7IFxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZmxpcENhcnQuY2xhc3NMaXN0LmFkZCgnZmxpcHBlZCcpO1xyXG4gIC8vICAgICB0aGlzLmlubmVySFRNTCA9ICfQndCwINCz0LvQsNCy0L3Rg9GOJztcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIGZsaXBidG5NYWluLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgZmxpcENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcHBlZCcpO1xyXG4gIC8vICAgZmxpcGJ0bi5pbm5lckhUTUwgPSAn0JDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRjyc7XHJcbiAgLy8gfVxyXG5cclxuICBkb2N1bWVudC5ib2R5Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5oZXJvX19jYXJ0JykpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJmZ2ZcIik7XHJcbiAgICAgIGlmICghZmxpcENhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwcGVkJykgJiYgZS50YXJnZXQgIT09IGZsaXBidG5NYWluKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGZsaXBDYXJ0LmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXBwZWQnKTtcclxuICAgICAgICBmbGlwYnRuLmlubmVySFRNTCA9ICfQkNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ })

/******/ });