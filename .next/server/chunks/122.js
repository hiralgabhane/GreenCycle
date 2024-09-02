exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 9417:
/***/ ((module) => {

// Exports
module.exports = {
	"__rating_system": "styles___rating_system__YEogl",
	"__active": "styles___active__Ek5RC",
	"__off": "styles___off__KV83p",
	"__star_ratings": "styles___star_ratings__BGhCY",
	"__stars": "styles___stars__QhbUF"
};


/***/ }),

/***/ 4122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9417);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Styles



const StarRatings = ({ ratingSystem , count , rating , setRating , isSubmit  })=>{
    const [stars, setStars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        ratingSystem ? setStars([
            ...Array(5)
        ].map((star, index)=>{
            index += 1;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().__rating_system),
                onClick: ()=>setRating(index),
                onMouseEnter: ()=>setHover(index),
                onMouseLeave: ()=>setHover(rating),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: index <= (rating && hover || hover) && !isSubmit ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().__active) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().__off),
                    children: "★"
                })
            }, index);
        })) : setStars([
            ...Array(5)
        ].map((star, index)=>{
            index += 1;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: index <= count ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().__active) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().__off),
                    children: "★"
                }, index)
            });
        }));
    }, [
        rating,
        hover,
        count,
        ratingSystem,
        setRating,
        isSubmit
    ]);
    return ratingSystem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: stars
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: stars
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRatings);


/***/ })

};
;