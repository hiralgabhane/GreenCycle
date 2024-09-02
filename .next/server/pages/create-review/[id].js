(() => {
var exports = {};
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 6201:
/***/ ((module) => {

// Exports
module.exports = {
	"__create_review": "create-review___create_review__vjJfx",
	"__container": "create-review___container__p11jW",
	"__head": "create-review___head__cPFyD",
	"__go_back_btn": "create-review___go_back_btn__d_YMT",
	"__product": "create-review___product__sS_z2",
	"__add_title": "create-review___add_title__R_zTz",
	"__write_review": "create-review___write_review__UrnRh",
	"__error_message": "create-review___error_message__DV_Ma",
	"__error_ratings": "create-review___error_ratings__Iwtnz"
};


/***/ }),

/***/ 4669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6201);
/* harmony import */ var _assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Review_StarRatings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4122);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4179);
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9498);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_replaceString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4742);
/* harmony import */ var _utilities_formValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9434);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
react_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const CreateReview = ({ product  })=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [errorRating, setErrorRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isSubmit, setIsSubmit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        content: "",
        title: ""
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { isLoggedIn  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setData({
            name: product.rows[0].name,
            image: (0,_utilities_replaceString__WEBPACK_IMPORTED_MODULE_10__/* .replaceString */ .G)(product.rows[0].cart_image, "public", "/static")
        });
    }, [
        product
    ]);
    const handleSubmit = async ()=>{
        if (!isLoggedIn()) {
            return (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)("To leave a review, you must be logged in. Please log in or create an account to continue.", {
                autoClose: 5000,
                type: "warning"
            });
        }
        const [isValid, error] = (0,_utilities_formValidation__WEBPACK_IMPORTED_MODULE_11__/* .formValidation */ .z)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, values.title, values.content);
        if (isValid && rating !== 0) {
            const token = localStorage.getItem("token");
            try {
                const data = await fetch(`${process.env.NEXT_PUBLIC_CREATE_REVIEW}`, {
                    method: "POST",
                    body: JSON.stringify({
                        product_id: product.rows[0].item_id,
                        title: values.title,
                        content: values.content,
                        rating: rating
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`
                    }
                });
                const response = await data.json();
                if (response.status === 201) {
                    setIsSubmit(true);
                    setValues({
                        title: "",
                        content: ""
                    });
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Your review has been successfully submitted!");
                    setTimeout(()=>{
                        router.push("/");
                    }, 3000);
                } else if (response.status === 400) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("You have already submitted a review for this product.");
                    setIsSubmit(false);
                    setDisabled(true);
                    setTimeout(()=>{
                        router.back();
                    }, 3000);
                }
            } catch (error1) {
                setIsSubmit(false);
                throw error1;
            }
        }
        setErrors(error);
        setErrorRating("Overall note is required");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__create_review),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__head),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: "Leave a review"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__go_back_btn),
                                    onClick: ()=>router.back(),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        btnContent: "go back",
                                        btnType: "borderless"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__product),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: data.image,
                                    alt: "product",
                                    width: 50,
                                    height: 50
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: data.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__overall_note),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Overall note"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Review_StarRatings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    ratingSystem: true,
                                    rating: rating,
                                    setRating: setRating,
                                    isSubmit: isSubmit
                                }),
                                rating === 0 && !isSubmit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__error_ratings),
                                    children: errorRating
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__add_title),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Add a title"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            error: errors && errors.find((err)=>err.input === "title"),
                                            placeholder: "Enter a descriptive title for your review",
                                            isFullWidth: true,
                                            type: "text",
                                            value: values.title,
                                            onChange: (e)=>setValues({
                                                    ...values,
                                                    title: e.target.value
                                                })
                                        }),
                                        errors && errors.map((err, index)=>{
                                            if (err.input === "title") {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__error_message),
                                                    children: err.message
                                                }, index);
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__write_review),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Share your experience"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            error: errors && errors.find((err)=>err.input === "content"),
                                            placeholder: "Tell us what you liked or disliked about the product",
                                            isFullWidth: true,
                                            type: "text",
                                            isTextArea: true,
                                            value: values.content,
                                            onChange: (e)=>setValues({
                                                    ...values,
                                                    content: e.target.value
                                                })
                                        }),
                                        errors && errors.map((err, index)=>{
                                            if (err.input === "content") {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_assets_styles_pages_create_review_module_scss__WEBPACK_IMPORTED_MODULE_12___default().__error_message),
                                                    children: err.message
                                                }, index);
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            btnContent: "Send",
                            onClick: handleSubmit,
                            disabled: disabled
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {
                position: "top-center",
                autoClose: 1000
            })
        ]
    });
};
async function getStaticProps(params) {
    const productData = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/${params.params.id}`);
    const response = await productData.json();
    return {
        props: {
            product: response
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ replaceString)
/* harmony export */ });
const replaceString = (data, stringToReplace, replaceBy)=>{
    return data.replace(`${stringToReplace}`, `${replaceBy}`);
};


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

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,179,175,132,122], () => (__webpack_exec__(4669)));
module.exports = __webpack_exports__;

})();