exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 5430:
/***/ ((module) => {

// Exports
module.exports = {
	"__cart_item": "styles___cart_item__BBQSM",
	"__image": "styles___image__eDjTI",
	"__details": "styles___details__ZN8YG",
	"__quantity": "styles___quantity__bFK15",
	"__trash": "styles___trash__hdQCB"
};


/***/ }),

/***/ 5728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cart_CartItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Cart/CartItem/styles.module.scss
var styles_module = __webpack_require__(5430);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/UI/Counter/index.tsx
var Counter = __webpack_require__(8598);
// EXTERNAL MODULE: ./utilities/replaceString.tsx
var replaceString = __webpack_require__(4742);
// EXTERNAL MODULE: ./context/CartContext.tsx + 1 modules
var CartContext = __webpack_require__(2989);
;// CONCATENATED MODULE: ./public/static/trash-icon.svg
/* harmony default export */ const trash_icon = ({"src":"/_next/static/media/trash-icon.0e18a415.svg","height":512,"width":448});
;// CONCATENATED MODULE: ./components/Cart/CartItem/index.tsx
// Styles


// Modules


// Components

// Utilities

// Context

// Assets

const CartItem = ({ image , name , price , quantity , id , removeTrashIcon , removeQuantityCounter  })=>{
    let cartImage = (0,replaceString/* replaceString */.G)(image, "public", "");
    const { removeItem , increaseQuantity , decreaseQuantity  } = (0,CartContext/* useCart */.j)();
    const router = (0,router_.useRouter)();
    const goToProductPage = ()=>{
        return router.push(`/product/${id}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).__cart_item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).__image,
                onClick: goToProductPage,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `/static${cartImage}`,
                    alt: "article",
                    fill: true,
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__details,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        onClick: goToProductPage,
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "$",
                            price.toLocaleString()
                        ]
                    })
                ]
            }),
            !removeQuantityCounter ? /*#__PURE__*/ jsx_runtime_.jsx(Counter/* default */.Z, {
                isCart: true,
                value: quantity,
                increaseClick: ()=>increaseQuantity(id),
                decreaseClick: ()=>decreaseQuantity(id)
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (styles_module_default()).__quantity,
                children: [
                    "x",
                    quantity
                ]
            }),
            !removeTrashIcon && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).__trash,
                onClick: ()=>removeItem(id),
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: trash_icon,
                    alt: "article",
                    fill: true,
                    objectFit: "cover"
                })
            })
        ]
    });
};
/* harmony default export */ const Cart_CartItem = (CartItem);


/***/ })

};
;