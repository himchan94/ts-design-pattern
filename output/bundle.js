/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./design-pattern/iterator/array.ts":
/*!******************************************!*\
  !*** ./design-pattern/iterator/array.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const arrayIterator_1 = __importDefault(__webpack_require__(/*! ./arrayIterator */ "./design-pattern/iterator/arrayIterator.ts"));
class Array {
    // private items: Item[];
    constructor(items) {
        this.items = items;
    }
    iterator() {
        return new arrayIterator_1.default(this);
    }
    getItem(index) {
        return this.items[index];
    }
    get count() {
        return this.items.length;
    }
}
exports["default"] = Array;


/***/ }),

/***/ "./design-pattern/iterator/arrayIterator.ts":
/*!**************************************************!*\
  !*** ./design-pattern/iterator/arrayIterator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = -1;
    }
    current() {
        return this.array.getItem(this.index);
    }
    next() {
        this.index++;
        return this.index < this.array.count;
    }
}
exports["default"] = ArrayIterator;


/***/ }),

/***/ "./design-pattern/iterator/index.ts":
/*!******************************************!*\
  !*** ./design-pattern/iterator/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const array_1 = __importDefault(__webpack_require__(/*! ./array */ "./design-pattern/iterator/array.ts"));
const item_1 = __importDefault(__webpack_require__(/*! ./item */ "./design-pattern/iterator/item.ts"));
const items = [
    new item_1.default("쿠쿠다스", 2500),
    new item_1.default("몽쉘", 500),
    new item_1.default("쿠키", 1500),
    new item_1.default("통밀식빵", 10500)
];
const array = new array_1.default(items);
const iter = array.iterator();
while (iter.next()) {
    const item = iter.current();
    console.log(item);
}


/***/ }),

/***/ "./design-pattern/iterator/item.ts":
/*!*****************************************!*\
  !*** ./design-pattern/iterator/item.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Item {
    // private _name: string;
    // private _cost: number;
    //
    // constructor(name: string, cost: number) {
    //   this._name = name;
    //   this._cost = cost;
    // }
    constructor(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    get name() {
        return this._name;
    }
    get cost() {
        return this._cost;
    }
}
exports["default"] = Item;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./design-pattern/iterator/index.ts");
/******/ 	
/******/ })()
;