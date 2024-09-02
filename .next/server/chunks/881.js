exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 721:
/***/ ((module) => {

// Exports
module.exports = {
	"__posters": "styles___posters__z8YXw",
	"__card_group": "styles___card_group__p4G4K",
	"__first_block": "styles___first_block__d_1rT",
	"__second_img_container": "styles___second_img_container__tfF73",
	"__content": "styles___content___51PL",
	"__second_block": "styles___second_block__TUs0w",
	"__third_block": "styles___third_block__MbJ4r",
	"__product_img": "styles___product_img__JO_M4"
};


/***/ }),

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card_CardGroup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Card/CardGroup/styles.module.scss
var styles_module = __webpack_require__(721);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./components/UI/Button/index.tsx + 1 modules
var Button = __webpack_require__(4179);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/static/home/desktop/pattern-circles.svg
/* harmony default export */ const pattern_circles = ({"src":"/_next/static/media/pattern-circles.809ea95a.svg","height":944,"width":944});
;// CONCATENATED MODULE: ./public/static/home/desktop/image-speaker-zx7.jpg
/* harmony default export */ const image_speaker_zx7 = ({"src":"/_next/static/media/image-speaker-zx7.6e63ca7e.jpg","height":320,"width":1110,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgf/xAAbEAACAQUAAAAAAAAAAAAAAAABAmEABQYRIf/aAAgBAQABPwDI+tbofYg1/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/static/home/desktop/image-speaker-zx9.png
/* harmony default export */ const image_speaker_zx9 = ({"src":"/_next/static/media/image-speaker-zx9.06448a5c.png","height":918,"width":756,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6UlEQVR42mPQNzQykZVXmMovKPTByMTs/fmLl1++evv+/u69+xcy6Ojp/1BSVvnPwMDwf8r0Gf+fPHvx/8SpM/+v37r9n0FbV++ngpLSX6Dkv7aOzn/Xbtz6d+TYif+Pnjz7zKAN1CkqLvFfQVEJrHv12vX/rt289X/Tth0fQMb+FJOQBEuER0b9z8kr+JeWkfW/e8IUoKS+wQ9pWTmQ5L/e/gn/Wts7/plbWPxfs37TewZdfYO/IGN5+AX/+wcG/W9qbftf39j8f8acBV9Bkk+ERcWeyykoPgLqfhoVHf05Mib+dVN79x0AeG9yuXKtjKcAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/static/home/desktop/image-earphones-yx1.jpg
/* harmony default export */ const image_earphones_yx1 = ({"src":"/_next/static/media/image-earphones-yx1.bec270bd.jpg","height":320,"width":540,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmgP/xAAcEAABAwUAAAAAAAAAAAAAAAABAAIEAxESIUL/2gAIAQEAAT8AEvC0cU276X//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/Card/CardGroup/index.tsx
// Styles


// Components

// Modules


// Assets




const CardGroup = ({ firstBlockTitle , firstBlockParagraph , firstBlockProductId , secondBlockTitle , secondBlockProductId , thirdBlockTitle , thirdBlockProductId , posters  })=>{
    if (posters) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).__posters,
            children: posters.map((poster, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: `/static${poster}`,
                        alt: "poster",
                        fill: true,
                        objectFit: "cover"
                    })
                }, index);
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).__card_group,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__first_block,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: pattern_circles,
                        width: 900,
                        height: 900,
                        alt: "circle"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).__second_img_container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image_speaker_zx9,
                            fill: true,
                            objectFit: "contain",
                            alt: "speaker"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).__content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: firstBlockTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: firstBlockParagraph
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `product/${firstBlockProductId}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    btnContent: "see product",
                                    btnType: "outlined"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__second_block,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image_speaker_zx7,
                        fill: true,
                        alt: "speaker"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).__content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: secondBlockTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `product/${secondBlockProductId}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    btnContent: "see product",
                                    btnType: "outlined"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__third_block,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).__product_img,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image_earphones_yx1,
                            fill: true,
                            objectFit: "cover",
                            alt: "speaker"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).__content,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: thirdBlockTitle
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `product/${thirdBlockProductId}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        btnContent: "see product",
                                        btnType: "outlined"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Card_CardGroup = (CardGroup);


/***/ })

};
;