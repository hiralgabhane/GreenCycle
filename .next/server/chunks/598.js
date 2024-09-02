exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 1089:
/***/ ((module) => {

// Exports
module.exports = {
	"__counter": "styles___counter__tZtio",
	"__prev_btn": "styles___prev_btn__7Msia",
	"__next_btn": "styles___next_btn__pduFO",
	"__is_small": "styles___is_small__rV0Ui"
};


/***/ }),

/***/ 8598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1089);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2989);
// Styles


// Modules


// Context

const Counter = ({ isCart , value , increaseClick , decreaseClick  })=>{
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { getItemQuantity , cartItems , cartQuantity  } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_3__/* .useCart */ .j)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getItemQuantity(count);
    }, [
        count,
        cartItems,
        getItemQuantity
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return setCount(1);
    }, [
        router.asPath,
        cartItems,
        cartQuantity
    ]);
    const increaseCounter = ()=>{
        return setCount(count + 1);
    };
    const decreaseCounter = ()=>{
        if (count > 1) {
            return setCount(count - 1);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().__counter)} ${isCart ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().__is_small) : null}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().__prev_btn),
                    onClick: isCart ? decreaseClick : decreaseCounter,
                    children: "-"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().__counter),
                    children: isCart ? value : count
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().__next_btn),
                    onClick: isCart ? increaseClick : increaseCounter,
                    children: "+"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ })

};
;