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
<<<<<<< HEAD
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\nymaps.ready(init);\n\nfunction init() {\n  var myMap = new ymaps.Map('map', {\n    center: [57.99442617227664, 56.283732030938616],\n    zoom: 16,\n    controls: []\n  });\n\n  myMap.controls.add('zoomControl');\n  myMap.behaviors.disable('scrollZoom');\n\n  var myPlacemark = new ymaps.Placemark([57.99480628049517, 56.29240662924609], {}, {\n    iconLayout: 'default#image',\n    iconImageHref: '../images/icons/map_n.svg',\n    iconImageSize: [61, 58],\n    iconImageOffset: [-45, -72]\n  });\n\n  myMap.geoObjects.add(myPlacemark);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwiYWRkIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsIm15UGxhY2VtYXJrIiwiUGxhY2VtYXJrIiwiaWNvbkxheW91dCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQUEsTUFBTUMsS0FBTixDQUFZQyxJQUFaOztBQUVBLFNBQVNBLElBQVQsR0FBaUI7QUFDZixNQUFJQyxRQUFRLElBQUlILE1BQU1JLEdBQVYsQ0FBYyxLQUFkLEVBQXFCO0FBQy9CQyxZQUFRLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCLENBRHVCO0FBRS9CQyxVQUFNLEVBRnlCO0FBRy9CQyxjQUFVO0FBSHFCLEdBQXJCLENBQVo7O0FBTUFKLFFBQU1JLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNBTCxRQUFNTSxTQUFOLENBQWdCQyxPQUFoQixDQUF3QixZQUF4Qjs7QUFFQSxNQUFJQyxjQUFjLElBQUlYLE1BQU1ZLFNBQVYsQ0FDaEIsQ0FBQyxpQkFBRCxFQUFvQixpQkFBcEIsQ0FEZ0IsRUFFaEIsRUFGZ0IsRUFHaEI7QUFDRUMsZ0JBQVksZUFEZDtBQUVFQyxtQkFBZSwyQkFGakI7QUFHRUMsbUJBQWUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhqQjtBQUlFQyxxQkFBaUIsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVA7QUFKbkIsR0FIZ0IsQ0FBbEI7O0FBV0FiLFFBQU1jLFVBQU4sQ0FBaUJULEdBQWpCLENBQXFCRyxXQUFyQjtBQUNEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcblxueW1hcHMucmVhZHkoaW5pdClcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcbiAgICBjZW50ZXI6IFs1Ny45OTQ0MjYxNzIyNzY2NCwgNTYuMjgzNzMyMDMwOTM4NjE2XSxcbiAgICB6b29tOiAxNixcbiAgICBjb250cm9sczogW11cbiAgfSlcblxuICBteU1hcC5jb250cm9scy5hZGQoJ3pvb21Db250cm9sJylcbiAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKVxuXG4gIHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgWzU3Ljk5NDgwNjI4MDQ5NTE3LCA1Ni4yOTI0MDY2MjkyNDYwOV0sXG4gICAge30sXG4gICAge1xuICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgaWNvbkltYWdlSHJlZjogJy4uL2ltYWdlcy9pY29ucy9tYXBfbi5zdmcnLFxuICAgICAgaWNvbkltYWdlU2l6ZTogWzYxLCA1OF0sXG4gICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstNDUsIC03Ml1cbiAgICB9XG4gIClcblxuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyaylcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");
=======
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");
>>>>>>> 9451b993036a2792f8ae1c9e28f46bba9d9d17b2

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ })

/******/ });