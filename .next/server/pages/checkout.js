(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 2667:
/***/ ((module) => {

// Exports
module.exports = {
	"__checkout": "checkout___checkout__Hs__T",
	"__go_back_btn": "checkout___go_back_btn__1WWkM",
	"__wrapper": "checkout___wrapper__YM0QM",
	"__form": "checkout___form__bPtXN",
	"__billing_details": "checkout___billing_details__E6RDl",
	"__shipping_info": "checkout___shipping_info__vuxvD",
	"__payment_details": "checkout___payment_details__YA6fF",
	"__input_group": "checkout___input_group__Q3k0O"
};


/***/ }),

/***/ 9255:
/***/ ((module) => {

// Exports
module.exports = {
	"__cart_summary": "styles___cart_summary__QMAp8",
	"__footer": "styles___footer__N4TK1",
	"__total": "styles___total__zIZ6a"
};


/***/ }),

/***/ 8536:
/***/ ((module) => {

// Exports
module.exports = {
	"__checkout_form": "styles___checkout_form__vs025",
	"__form": "styles___form___FInc",
	"__billing_details": "styles___billing_details__n9g68",
	"__shipping_info": "styles___shipping_info__crgSo",
	"__payment_details": "styles___payment_details__nJGTs",
	"__card_element": "styles___card_element__2mtX5",
	"__submit_btn": "styles___submit_btn__L7pOc",
	"__error_message": "styles___error_message__WRopj",
	"__input_group": "styles___input_group__4NXZY",
	"__single_input": "styles___single_input__w0Kcs",
	"__spinner": "styles___spinner__R5KyZ",
	"spin": "styles_spin__BYqFh"
};


/***/ }),

/***/ 5957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9255);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2989);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5728);
// Styles


// Context

// Components

const CartSummary = ()=>{
    const { cartItems , cartTotalPrice  } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_1__/* .useCart */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__cart_summary),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                children: "summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__cart_items),
                children: cartItems.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CartItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        image: item.image,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        id: item.id,
                        removeTrashIcon: true,
                        removeQuantityCounter: true
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__footer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__total),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "total"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            children: "$" + cartTotalPrice.toLocaleString()
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartSummary);


/***/ }),

/***/ 2768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8536);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4179);
/* harmony import */ var _UI_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9498);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_formValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9434);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Modules


// Styles

// Components


// Modules




// Utilities

// Context

const CheckoutForm = ()=>{
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [processing, setProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [clientSecret, setClientSecret] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe)();
    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements)();
    const { cartItems  } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .j)();
    const cardElement = elements?.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement);
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        zip_code: "",
        city: "",
        country: ""
    });
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`${process.env.NEXT_PUBLIC_STRIPE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cartItems
            })
        }).then((res)=>res.json()).then((data)=>setClientSecret(data.clientSecret));
    }, [
        cartItems
    ]);
    const handleChange = async (event)=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async (ev)=>{
        const [isValid, error] = (0,_utilities_formValidation__WEBPACK_IMPORTED_MODULE_9__/* .formValidation */ .z)(values.email, undefined, values.name, undefined, values.phone_number, values.address, values.zip_code, values.city, values.country);
        if (isValid) {
            ev.preventDefault();
            setProcessing(true);
            if (cardElement) {
                const payload = await stripe?.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: cardElement
                    }
                });
                if (payload?.error) {
                    setError(`Payment failed ${payload.error.message}`);
                    setProcessing(false);
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Something went wrong! Please try again.");
                } else {
                    setError(null);
                    setProcessing(false);
                    router.push("/order-confirmation");
                }
            }
        }
        setErrors(error);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__checkout_form),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__form),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "checkout"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__billing_details),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "sub_title",
                                    children: "billing details"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__input_group),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        error: errors && errors.find((err)=>err.input === "name"),
                                                        label: "Name",
                                                        placeholder: "Alexei *",
                                                        type: "text",
                                                        value: values.name,
                                                        onChange: (e)=>setValues({
                                                                ...values,
                                                                name: e.target.value
                                                            })
                                                    }),
                                                    errors && errors.map((err, index)=>{
                                                        if (err.input === "name") {
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                                children: err.message
                                                            }, index);
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        error: errors && errors.find((err)=>err.input === "email"),
                                                        label: "Email Address",
                                                        type: "email",
                                                        placeholder: "alexei@mail.com *",
                                                        value: values.email,
                                                        onChange: (e)=>setValues({
                                                                ...values,
                                                                email: e.target.value
                                                            })
                                                    }),
                                                    errors && errors.map((err, index)=>{
                                                        if (err.input === "email") {
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                                children: err.message
                                                            }, index);
                                                        }
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__single_input),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            error: errors && errors.find((err)=>err.input === "phone_number"),
                                            label: "Phone Number",
                                            type: "text",
                                            placeholder: "+1 202-555-0136",
                                            value: values.phone_number,
                                            onChange: (e)=>setValues({
                                                    ...values,
                                                    phone_number: e.target.value
                                                })
                                        }),
                                        errors && errors.map((err, index)=>{
                                            if (err.input === "phone_number") {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                    children: err.message
                                                }, index);
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__shipping_info),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "sub_title",
                                    children: "shipping info"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            error: errors && errors.find((err)=>err.input === "address"),
                                            label: "Address",
                                            type: "text",
                                            placeholder: "1137 Williams Avenue",
                                            isFullWidth: true,
                                            value: values.address,
                                            onChange: (e)=>setValues({
                                                    ...values,
                                                    address: e.target.value
                                                })
                                        }),
                                        errors && errors.map((err, index)=>{
                                            if (err.input === "address") {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                    children: err.message
                                                }, index);
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__input_group),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    error: errors && errors.find((err)=>err.input === "zip_code"),
                                                    label: "ZIP Code",
                                                    type: "text",
                                                    placeholder: "10001",
                                                    value: values.zip_code,
                                                    onChange: (e)=>setValues({
                                                            ...values,
                                                            zip_code: e.target.value
                                                        })
                                                }),
                                                errors && errors.map((err, index)=>{
                                                    if (err.input === "zip_code") {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                            children: err.message
                                                        }, index);
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    error: errors && errors.find((err)=>err.input === "city"),
                                                    label: "City",
                                                    type: "text",
                                                    placeholder: "New York",
                                                    value: values.city,
                                                    onChange: (e)=>setValues({
                                                            ...values,
                                                            city: e.target.value
                                                        })
                                                }),
                                                errors && errors.map((err, index)=>{
                                                    if (err.input === "city") {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                            children: err.message
                                                        }, index);
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__single_input),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            error: errors && errors.find((err)=>err.input === "country"),
                                            label: "Country",
                                            type: "text",
                                            placeholder: "United States",
                                            value: values.country,
                                            onChange: (e)=>setValues({
                                                    ...values,
                                                    country: e.target.value
                                                })
                                        }),
                                        errors && errors.map((err, index)=>{
                                            if (err.input === "country") {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__error_message),
                                                    children: err.message
                                                }, index);
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "sub_title",
                            children: "payment"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement, {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__card_element),
                            onChange: handleChange
                        }),
                        processing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__spinner)
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default().__submit_btn),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                btnContent: "continue & pay",
                                onClick: handleSubmit
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {
                position: "top-center",
                autoClose: 1000
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2667);
/* harmony import */ var _assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(943);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2768);
/* harmony import */ var _components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5957);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4179);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__]);
_components_Forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Styles


// Modules




// Components



// Context

// Assets
const stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
const Checkout = ()=>{
    const { cartQuantity  } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .j)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (cartQuantity < 1) {
            router.push("/");
        }
    }, [
        cartQuantity,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__checkout),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `container ${(_assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__go_back_btn),
                        onClick: ()=>router.back(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            btnContent: "go back",
                            btnType: "borderless"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.Elements, {
                                stripe: stripePromise,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_assets_styles_pages_checkout_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__summary),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cart_CartSummary__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4515:
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 943:
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,179,175,540,132,825,598,728], () => (__webpack_exec__(5662)));
module.exports = __webpack_exports__;

})();