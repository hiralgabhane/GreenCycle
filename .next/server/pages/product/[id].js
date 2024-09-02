(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 6659:
/***/ ((module) => {

// Exports
module.exports = {
	"__go_back_btn": "product___go_back_btn__NWlSt",
	"__review_container": "product___review_container__Mw65m",
	"__reviews": "product___reviews__CfWck",
	"__recommended_products": "product___recommended_products__1R7uI"
};


/***/ }),

/***/ 8154:
/***/ ((module) => {

// Exports
module.exports = {
	"__product_accessories": "styles___product_accessories__IFDmM",
	"__left_block": "styles___left_block__O6XIg",
	"__right_block": "styles___right_block__dK0rq"
};


/***/ }),

/***/ 749:
/***/ ((module) => {

// Exports
module.exports = {
	"__product_recommendation": "styles___product_recommendation__iEtfb"
};


/***/ }),

/***/ 8048:
/***/ ((module) => {

// Exports
module.exports = {
	"__customer_review": "styles___customer_review__KnVVZ",
	"__user_info": "styles___user_info__ysDqn",
	"__profile": "styles___profile__lHMAG",
	"__title": "styles___title__I0M0y",
	"__content": "styles___content__ZPEPs",
	"__active": "styles___active__B3iLU",
	"__off": "styles___off__5KUHS"
};


/***/ }),

/***/ 6799:
/***/ ((module) => {

// Exports
module.exports = {
	"__leave_review": "styles___leave_review__k2to2"
};


/***/ }),

/***/ 7272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar-default.c0590f7f.png","height":1280,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXn6enm6Onl5+jk5ufj5ebi5OXh4+Tg4+Tf4uPf4ePf4eLX2tvW2dvW2drV2NrU19jS1dfHy83GyszFycu3vL+3vL62vL62u761u72rsbSqsbSpr7Oor7KorrKkq68h6ggBAAAARUlEQVR42hXIRxKAIBAEwA0DBhAVxYj8/5nCratJFcxQJUDcJACB5zcvXEHrlzdq06VrqCN9PM44Cpm9PHdJhmxw3rtgf050Aq7o+SM4AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Product/ProductAccessories/styles.module.scss
var styles_module = __webpack_require__(8154);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./components/Product/ProductAccessories/index.tsx


const ProductAccessories = ({ content , accessories  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).__product_accessories,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__left_block,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "features"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: content
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).__right_block,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "in the box"
                    }),
                    accessories?.map((item, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        item.quantity,
                                        "x"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: item.item
                                })
                            ]
                        }, index);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Product_ProductAccessories = (ProductAccessories);

// EXTERNAL MODULE: ./components/Product/ProductInfo/index.tsx
var ProductInfo = __webpack_require__(7052);
// EXTERNAL MODULE: ./components/Card/CardGroup/index.tsx + 4 modules
var CardGroup = __webpack_require__(881);
// EXTERNAL MODULE: ./components/Product/ProductRecommendation/styles.module.scss
var ProductRecommendation_styles_module = __webpack_require__(749);
var ProductRecommendation_styles_module_default = /*#__PURE__*/__webpack_require__.n(ProductRecommendation_styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/UI/Button/index.tsx + 1 modules
var Button = __webpack_require__(4179);
;// CONCATENATED MODULE: ./components/Product/ProductRecommendation/index.tsx
// Styles


// Modules


// Components

const ProductRecommendation = ({ productImage , productName , productSlug  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductRecommendation_styles_module_default()).__product_recommendation,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `/static${productImage}`,
                    alt: "Product",
                    fill: true,
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: productName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `${productSlug}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    btnContent: "see product"
                })
            })
        ]
    });
};
/* harmony default export */ const Product_ProductRecommendation = (ProductRecommendation);

// EXTERNAL MODULE: ./components/Review/StarRatings/index.tsx
var StarRatings = __webpack_require__(4122);
// EXTERNAL MODULE: ./components/Review/CustomerReview/styles.module.scss
var CustomerReview_styles_module = __webpack_require__(8048);
var CustomerReview_styles_module_default = /*#__PURE__*/__webpack_require__.n(CustomerReview_styles_module);
;// CONCATENATED MODULE: ./components/Review/CustomerReview/index.tsx




const CustomerReview = ({ name , title , content , rating , avatar  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CustomerReview_styles_module_default()).__customer_review,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CustomerReview_styles_module_default()).__user_info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (CustomerReview_styles_module_default()).__profile,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: avatar,
                            alt: "profile",
                            width: 30,
                            height: 30
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CustomerReview_styles_module_default()).__title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StarRatings/* default */.Z, {
                        count: rating
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CustomerReview_styles_module_default()).__content,
                children: content
            })
        ]
    });
};
/* harmony default export */ const Review_CustomerReview = (CustomerReview);

// EXTERNAL MODULE: ./assets/styles/pages/product.module.scss
var product_module = __webpack_require__(6659);
var product_module_default = /*#__PURE__*/__webpack_require__.n(product_module);
// EXTERNAL MODULE: ./utilities/replaceString.tsx
var replaceString = __webpack_require__(4742);
// EXTERNAL MODULE: ./components/Review/LeaveReview/styles.module.scss
var LeaveReview_styles_module = __webpack_require__(6799);
var LeaveReview_styles_module_default = /*#__PURE__*/__webpack_require__.n(LeaveReview_styles_module);
;// CONCATENATED MODULE: ./components/Review/LeaveReview/index.tsx




const LeaveReview = ({ productId  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LeaveReview_styles_module_default()).__leave_review,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                children: "Review this product"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Share your thoughts with other customers."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                btnContent: "leave a review",
                onClick: ()=>router.push(`/create-review/${productId}`, undefined, {
                        shallow: true
                    })
            })
        ]
    });
};
/* harmony default export */ const Review_LeaveReview = (LeaveReview);

// EXTERNAL MODULE: ./public/static/avatar-default.png
var avatar_default = __webpack_require__(7272);
;// CONCATENATED MODULE: ./pages/product/[id].tsx
// Modules



// Components






// Styles

// Utilities



const Product = ({ product , products , review  })=>{
    const [data, setData] = (0,external_react_.useState)({});
    const [dataReview, setDataReview] = (0,external_react_.useState)();
    const [averageRating, setAverageRating] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    const productData = product.rows;
    const productsData = products.rows;
    const reviews = review.rows;
    let productRecommendedList = [];
    let galleryList = [];
    const productImages = productData[0].images;
    const productImage = (0,replaceString/* replaceString */.G)(productImages[0].desktop, "./assets", "");
    const accessoriesList = productData[0].includes;
    const gallery = productData[0].gallery;
    Object.keys(gallery).map((item)=>{
        galleryList.push((0,replaceString/* replaceString */.G)(gallery[item].desktop, "./assets", ""));
    });
    productsData.sort(()=>0.5 - Math.random()).filter((product)=>product.item_id !== productData[0].item_id).slice(0, 3).map((el)=>{
        let images = el.images;
        let image = (0,replaceString/* replaceString */.G)(images[0].desktop, "./assets", "");
        const obj = {
            name: el.short_name,
            id: el.item_id,
            image: image
        };
        productRecommendedList.push(obj);
    });
    (0,external_react_.useEffect)(()=>{
        setData({
            name: productData[0].name,
            image: productImage,
            description: productData[0].description,
            features: productData[0].features,
            price: productData[0].price,
            accessories: accessoriesList,
            gallery: galleryList,
            recommended: productRecommendedList,
            new: productData[0].new,
            id: productData[0].item_id,
            cartImage: productData[0].cart_image,
            cartName: productData[0].short_name
        });
        setDataReview(reviews);
        setAverageRating(reviews.reduce((acc, rev)=>acc + rev.rating, 0) / reviews.length);
    }, [
        productData,
        reviews,
        averageRating
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (product_module_default()).__go_back_btn,
                onClick: ()=>router.back(),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    btnContent: "go back",
                    btnType: "borderless"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductInfo/* default */.Z, {
                image: data.image,
                name: data.name,
                description: data.description,
                price: data.price,
                showCounterQuantity: true,
                isNew: data.new === 1 ? true : false,
                id: data.id,
                cartImage: data.cartImage,
                cartName: data.cartName,
                count: isNaN(averageRating) ? 0 : averageRating,
                reviewLength: reviews.length
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Product_ProductAccessories, {
                content: data.features,
                accessories: data.accessories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardGroup/* default */.Z, {
                posters: data.gallery
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (product_module_default()).__review_container,
                id: "customer-review",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Review_LeaveReview, {
                        productId: data.id
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: reviews.length !== 0 ? dataReview && dataReview.map((review, index)=>{
                            console.log(review.avatar);
                            return /*#__PURE__*/ jsx_runtime_.jsx(Review_CustomerReview, {
                                name: review.name,
                                title: review.title,
                                content: review.content,
                                rating: review.rating,
                                avatar: review.avatar !== null ? `${process.env.NEXT_PUBLIC_BASE_URL}/${review.avatar}` : avatar_default/* default */.Z
                            }, index);
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Be the first to share your experience with us! Leave a review and let others know what you think about our product."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                style: {
                    textAlign: "center",
                    marginTop: "160px"
                },
                children: "you may also like"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (product_module_default()).__recommended_products,
                children: data.recommended && data.recommended.map((product, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Product_ProductRecommendation, {
                        productImage: product.image,
                        productName: product.name,
                        productSlug: product.id
                    }, index);
                })
            })
        ]
    });
};
async function getStaticProps(params) {
    const productData1 = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/${params.params.id}`);
    const response1 = await productData1.json();
    const productData2 = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`);
    const response2 = await productData2.json();
    const review1 = await fetch(`${process.env.NEXT_PUBLIC_GET_REVIEW}/${params.params.id}`);
    const reviewResponse1 = await review1.json();
    return {
        props: {
            product: response1,
            products: response2,
            review: reviewResponse1
        }
    };
}
async function getStaticPaths() {
    const productData = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}`);
    const response = await productData.json();
    return {
        paths: response.rows.map((product)=>{
            const id = product.item_id.toString();
            return {
                params: {
                    id
                }
            };
        }),
        fallback: false
    };
}
/* harmony default export */ const _id_ = (Product);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,179,175,540,825,598,122,881,52], () => (__webpack_exec__(9424)));
module.exports = __webpack_exports__;

})();