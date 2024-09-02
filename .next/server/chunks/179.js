exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 9223:
/***/ ((module) => {

// Exports
module.exports = {
	"__button": "styles___button__u_wF5",
	"__btn_icon": "styles___btn_icon___T8_C",
	"__borderless": "styles___borderless__jHHts",
	"__outlined": "styles___outlined__OF6EI",
	"__full_width": "styles___full_width__amkQJ",
	"__disabled": "styles___disabled__Dg0eP"
};


/***/ }),

/***/ 4179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UI_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/UI/Button/styles.module.scss
var styles_module = __webpack_require__(9223);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/static/right-arrow.svg
/* harmony default export */ const right_arrow = ({"src":"/_next/static/media/right-arrow.76b4c2a6.svg","height":12,"width":7});
;// CONCATENATED MODULE: ./components/UI/Button/index.tsx
// Styles


// Modules

// Assets

const Button = ({ btnContent , btnType , btnIcon , onClick , isFullWidth , id , disabled  })=>{
    const selectedBtnType = btnType === "borderless" ? (styles_module_default()).__borderless : btnType === "outlined" ? (styles_module_default()).__outlined : null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(styles_module_default()).__button} ${selectedBtnType} ${isFullWidth ? (styles_module_default()).__full_width : null} ${disabled ? (styles_module_default()).__disabled : null}`,
        onClick: onClick,
        id: id,
        children: [
            btnContent,
            btnIcon && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (styles_module_default()).__btn_icon,
                src: right_arrow,
                alt: "right arrow",
                width: 10,
                height: 10
            })
        ]
    });
};
/* harmony default export */ const UI_Button = (Button);


/***/ })

};
;