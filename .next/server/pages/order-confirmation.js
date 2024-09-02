(() => {
var exports = {};
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 1648:
/***/ ((module) => {

// Exports
module.exports = {
	"__order_confirmation": "order-confirmation___order_confirmation__QtNhF",
	"__wrapper": "order-confirmation___wrapper__fvPCu",
	"__order_summary": "order-confirmation___order_summary__KA_TV",
	"__items": "order-confirmation___items__goBLR",
	"__first_item": "order-confirmation___first_item__PAqha",
	"__image": "order-confirmation___image__GG5qq",
	"__quantity": "order-confirmation___quantity__EpBup",
	"__total": "order-confirmation___total__qpy6l"
};


/***/ }),

/***/ 2717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ order_confirmation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./assets/styles/pages/order-confirmation.module.scss
var order_confirmation_module = __webpack_require__(1648);
var order_confirmation_module_default = /*#__PURE__*/__webpack_require__.n(order_confirmation_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-confetti"
const external_react_confetti_namespaceObject = require("react-confetti");
// EXTERNAL MODULE: ./utilities/replaceString.tsx
var replaceString = __webpack_require__(4742);
// EXTERNAL MODULE: ./utilities/api.tsx
var api = __webpack_require__(4540);
;// CONCATENATED MODULE: ./public/static/checkout/icon-order-confirmation.svg
/* harmony default export */ const icon_order_confirmation = ({"src":"/_next/static/media/icon-order-confirmation.2e6d9ad0.svg","height":64,"width":64});
// EXTERNAL MODULE: ./context/CartContext.tsx + 1 modules
var CartContext = __webpack_require__(2989);
// EXTERNAL MODULE: ./components/UI/Button/index.tsx + 1 modules
var Button = __webpack_require__(4179);
;// CONCATENATED MODULE: ./pages/order-confirmation/index.tsx
// Styles


// Modules



// Utilities


// Assets

// Context

// Components

const OrderConfirmation = ()=>{
    const { cartItems , cartTotalPrice , clearCart  } = (0,CartContext/* useCart */.j)();
    const router = (0,router_.useRouter)();
    const backToHomepage = ()=>{
        router.push("/");
        (0,api/* deleteData */.SR)(process.env.NEXT_PUBLIC_CLEAR_CART);
        clearCart();
    };
    return cartItems.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (order_confirmation_module_default()).__order_confirmation,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (order_confirmation_module_default()).__wrapper,
            children: [
                 false && /*#__PURE__*/ 0,
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: icon_order_confirmation,
                    alt: "Success icon"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "thank you for your order!"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "You will receive an email confirmation shortly."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (order_confirmation_module_default()).__order_summary,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (order_confirmation_module_default()).__items,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (order_confirmation_module_default()).__first_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (order_confirmation_module_default()).__image,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    alt: "Product",
                                                    src: `/static${(0,replaceString/* replaceString */.G)(cartItems[0].image && cartItems[0].image, "public", "")}`,
                                                    fill: true,
                                                    objectFit: "cover"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (order_confirmation_module_default()).__info,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: cartItems[0].name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "$",
                                                            cartItems[0].price.toLocaleString()
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: (order_confirmation_module_default()).__quantity,
                                                children: [
                                                    "x",
                                                    cartItems[0].quantity
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                cartItems.length > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "And ",
                                                cartItems.length - 1,
                                                " other item(s)"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (order_confirmation_module_default()).__total,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "grand total"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "$" + cartTotalPrice.toLocaleString()
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    onClick: backToHomepage,
                    btnContent: "back to home",
                    isFullWidth: true
                })
            ]
        })
    });
};
/* harmony default export */ const order_confirmation = (OrderConfirmation);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,179,175,540,825], () => (__webpack_exec__(2717)));
module.exports = __webpack_exports__;

})();