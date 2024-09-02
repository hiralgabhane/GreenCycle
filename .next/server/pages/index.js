(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9534:
/***/ ((module) => {

// Exports
module.exports = {
	"__hero": "styles___hero__3M0cX",
	"__background": "styles___background__6LvB7",
	"__image_hero_tablet": "styles___image_hero_tablet__DXohU",
	"__image_hero_mobile": "styles___image_hero_mobile___JjYU",
	"__content": "styles___content__Shf6v",
	"__image_hero_desktop": "styles___image_hero_desktop___1gLW"
};


/***/ }),

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout/Hero/styles.module.scss
var styles_module = __webpack_require__(9534);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/UI/Button/index.tsx + 1 modules
var Button = __webpack_require__(4179);
;// CONCATENATED MODULE: ./public/static/home/desktop/image-hero.jpg
/* harmony default export */ const image_hero = ({"src":"/_next/static/media/image-hero.149b597b.jpg","height":729,"width":1440,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmQP/xAAaEAACAgMAAAAAAAAAAAAAAAABAwACITGx/9oACAEBAAE/AFgFb8aqOz//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/static/home/tablet/image-header.jpg
/* harmony default export */ const image_header = ({"src":"/_next/static/media/image-header.6953f81d.jpg","height":1458,"width":1536,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmQP/xAAXEAADAQAAAAAAAAAAAAAAAAAAARIT/9oACAEBAAE/AJWdH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/static/home/mobile/image-header.jpg
/* harmony default export */ const mobile_image_header = ({"src":"/_next/static/media/image-header.b89e9b36.jpg","height":1200,"width":750,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmQP/xAAYEAEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAgBAQABPwBrQDc7P//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Layout/Hero/index.tsx
// Styles


// Modules


// Components

// Assets



const Hero = ({ heroOverline , heroTitle , heroParagraph , productId  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).__hero,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__background,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (styles_module_default()).__image_hero_desktop,
                        src: image_hero,
                        alt: "background",
                        width: 1400,
                        height: 700
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (styles_module_default()).__image_hero_tablet,
                        src: image_header,
                        alt: "background",
                        width: 700,
                        height: 700
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (styles_module_default()).__image_hero_mobile,
                        src: mobile_image_header,
                        alt: "background",
                        width: 100,
                        height: 100
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "overline",
                        children: heroOverline
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: heroTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: heroParagraph
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/product/${productId}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            btnContent: "see product"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Layout_Hero = (Hero);

// EXTERNAL MODULE: ./components/Card/CardCategories/index.tsx
var CardCategories = __webpack_require__(2913);
// EXTERNAL MODULE: ./components/Card/CardGroup/index.tsx + 4 modules
var CardGroup = __webpack_require__(881);
;// CONCATENATED MODULE: ./pages/index.tsx
// Components




const cardCategoryData = [
    {
        imageUrl: "/shared/desktop/image-category-thumbnail-headphones.png",
        categoryName: "headphones",
        categoryHref: "/category/headphones"
    },
    {
        imageUrl: "/shared/desktop/image-category-thumbnail-speakers.png",
        categoryName: "speakers",
        categoryHref: "/category/speakers"
    },
    {
        imageUrl: "/shared/desktop/image-category-thumbnail-earphones.png",
        categoryName: "earphones",
        categoryHref: "/category/earphones"
    }
];
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Hero, {
                heroOverline: "new product",
                heroTitle: "XX99 Mark II Headphones",
                heroParagraph: " Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
                productId: "4"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "__card_categories",
                        children: cardCategoryData.map((card, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(CardCategories/* default */.Z, {
                                categoryName: card.categoryName,
                                categoryImage: `/static${card.imageUrl}`,
                                categoryHref: card.categoryHref,
                                // width={card.width}
                                // height={card.height}
                                btnContent: "SHOP"
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CardGroup/* default */.Z, {
                        firstBlockTitle: "zx9 speaker",
                        firstBlockParagraph: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
                        firstBlockProductId: "6",
                        secondBlockTitle: "zx7 speaker",
                        secondBlockProductId: "5",
                        thirdBlockTitle: "yx1 earphone",
                        thirdBlockProductId: "1"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,179,881,913], () => (__webpack_exec__(6432)));
module.exports = __webpack_exports__;

})();