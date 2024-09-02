exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 4176:
/***/ ((module) => {

// Exports
module.exports = {
	"__product_info": "styles___product_info__lit2O",
	"__image": "styles___image___X8gm",
	"__info": "styles___info__jyG9N",
	"__stars": "styles___stars__pzEI8",
	"__rating": "styles___rating__fqaXu",
	"__links": "styles___links__ZGXYj",
	"__add_to_cart": "styles___add_to_cart__e1GCx",
	"__see_product_btn": "styles___see_product_btn__pakhO",
	"__reverse": "styles___reverse__DBgNN"
};


/***/ }),

/***/ 7052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4176);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8598);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4179);
/* harmony import */ var _Review_StarRatings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4122);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2989);
// Styles


// Modules



// Components



// Context

const ProductInfo = ({ image , isNew , name , description , price , index , showCounterQuantity , id , cartImage , cartName , count , reviewLength  })=>{
    const { addToCart  } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_7__/* .useCart */ .j)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const reverseClass = index && index % 2 !== 0 ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__reverse) : null;
    const showNewArticle = isNew ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "overline",
        children: "new product"
    }) : null;
    const selectedButton = showCounterQuantity ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__add_to_cart),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Counter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClick: ()=>addToCart(id, cartImage, cartName, price),
                btnContent: "add to cart"
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__see_product_btn),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/product/${id}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                btnContent: "see product"
            })
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__product_info),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__image)} ${reverseClass}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: `/static${image}`,
                    alt: "article",
                    fill: true,
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__info),
                children: [
                    showNewArticle,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__stars),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__rating),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: Math.floor(count)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Review_StarRatings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            count: count
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "(",
                                            reviewLength,
                                            ")"
                                        ]
                                    })
                                ]
                            }),
                            router.pathname === "/product/[id]" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().__links),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#customer-review",
                                        scroll: false,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            btnContent: "show all reviews",
                                            btnType: "borderless"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "/"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        btnContent: "leave a review",
                                        btnType: "borderless",
                                        onClick: ()=>router.push(`/create-review/${id}`, undefined, {
                                                shallow: true
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: description
                    }),
                    showCounterQuantity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        children: "$" + price?.toLocaleString()
                    }),
                    selectedButton
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);


/***/ })

};
;