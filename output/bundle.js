/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./design-pattern/template/Article.ts":
/*!********************************************!*\
  !*** ./design-pattern/template/Article.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Article {
    constructor(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
    getFooter() {
        return this.footer;
    }
}
exports["default"] = Article;


/***/ }),

/***/ "./design-pattern/template/DisplayArticleTemplate.ts":
/*!***********************************************************!*\
  !*** ./design-pattern/template/DisplayArticleTemplate.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class DisplayArticleTemplate {
    constructor(article) {
        this.article = article;
        // 파생 클래스에서 코드를 변경하지 못하도록 readonly
        this.displayHtml = () => {
            return `
      ${this.titleHtml()}
      ${this.contentHtml()}
      ${this.footerHtml()}
    `;
        };
    }
}
exports["default"] = DisplayArticleTemplate;


/***/ }),

/***/ "./design-pattern/template/EditableDisplayArticle.ts":
/*!***********************************************************!*\
  !*** ./design-pattern/template/EditableDisplayArticle.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DisplayArticleTemplate_1 = __importDefault(__webpack_require__(/*! ./DisplayArticleTemplate */ "./design-pattern/template/DisplayArticleTemplate.ts"));
class EditableDisplayArticle extends DisplayArticleTemplate_1.default {
    constructor(article) {
        super(article);
    }
    titleHtml() {
        return `<div><span>제목</span><input value="${this.article.getTitle()}"/></div>`;
    }
    contentHtml() {
        const items = this.article.getContent().map(item => `${item}\n`);
        return `<span>내용</span><br/><textarea cols="50" rows="5">${items.join("")}</textarea>`;
    }
    footerHtml() {
        return `<div><span>푸터</span><input value="${this.article.getFooter()}"/></div>`;
    }
}
exports["default"] = EditableDisplayArticle;


/***/ }),

/***/ "./design-pattern/template/SimpleDisplayArticle.ts":
/*!*********************************************************!*\
  !*** ./design-pattern/template/SimpleDisplayArticle.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DisplayArticleTemplate_1 = __importDefault(__webpack_require__(/*! ./DisplayArticleTemplate */ "./design-pattern/template/DisplayArticleTemplate.ts"));
class SimpleDisplayArticle extends DisplayArticleTemplate_1.default {
    constructor(article) {
        super(article);
    }
    titleHtml() {
        return `<h1>${this.article.getTitle()}</h1>`;
    }
    contentHtml() {
        const items = this.article.getContent().map(item => {
            return `<li>${item}</li>`;
        }).join("");
        return `<ul>${items}</ul>`;
    }
    footerHtml() {
        return `<h3>${this.article.getFooter()}</h3>`;
    }
}
exports["default"] = SimpleDisplayArticle;
;


/***/ }),

/***/ "./design-pattern/template/index.ts":
/*!******************************************!*\
  !*** ./design-pattern/template/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Article_1 = __importDefault(__webpack_require__(/*! ./Article */ "./design-pattern/template/Article.ts"));
const SimpleDisplayArticle_1 = __importDefault(__webpack_require__(/*! ./SimpleDisplayArticle */ "./design-pattern/template/SimpleDisplayArticle.ts"));
const EditableDisplayArticle_1 = __importDefault(__webpack_require__(/*! ./EditableDisplayArticle */ "./design-pattern/template/EditableDisplayArticle.ts"));
const article = new Article_1.default("제목이다", ["내용1", "내용2", "내용3"], "푸터다");
const display = new SimpleDisplayArticle_1.default(article);
// 브라우저 환경에서만 실행
if (typeof window !== "undefined" && typeof document !== "undefined") {
    const contentElement = document.querySelector(".content");
    if (contentElement) {
        contentElement.innerHTML = display.displayHtml();
    }
    (_a = document.querySelector(".edit-mode")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", (e) => {
        let display;
        if (e.target.checked) {
            display = new EditableDisplayArticle_1.default(article);
        }
        else {
            display = new SimpleDisplayArticle_1.default(article);
        }
        const contentElement = document.querySelector(".content");
        if (contentElement) {
            contentElement.innerHTML = display.displayHtml();
        }
    });
}


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
/******/ 	var __webpack_exports__ = __webpack_require__("./design-pattern/template/index.ts");
/******/ 	
/******/ })()
;