(() => {
var exports = {};
exports.id = 732;
exports.ids = [732];
exports.modules = {

/***/ 5090:
/***/ ((module) => {

// Exports
module.exports = {
	"__user_informations": "user-settings___user_informations__Q_fBZ",
	"__container": "user-settings___container__XpluK",
	"__go_back_btn": "user-settings___go_back_btn__Df3J5",
	"__wrapper": "user-settings___wrapper__TWcIv"
};


/***/ }),

/***/ 673:
/***/ ((module) => {

// Exports
module.exports = {
	"__user_info_form": "styles___user_info_form__qGdYo",
	"__inputs": "styles___inputs__wX7ui",
	"__upload_avatar": "styles___upload_avatar__nZjuY",
	"__avatar": "styles___avatar__Yq7xT",
	"__error_message": "styles___error_message__N74U_"
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

/***/ 9622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(673);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4179);
/* harmony import */ var _UI_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9498);
/* harmony import */ var _utilities_formValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9434);
/* harmony import */ var _public_static_avatar_default_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Style


// Modules




// Components


// Utilities

// Assets

const UserSettingsForm = ({ data  })=>{
    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        avatar: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValues({
            name: data && data.rows[0].name,
            email: data && data.rows[0].email,
            avatar: data && data.rows[0].avatar
        });
    }, [
        data
    ]);
    const handleSubmit = async ()=>{
        const [isValid, error] = (0,_utilities_formValidation__WEBPACK_IMPORTED_MODULE_8__/* .formValidation */ .z)(values.email, undefined, values.name);
        if (isValid) {
            const token = localStorage.getItem("token");
            try {
                const data = await fetch(`${process.env.NEXT_PUBLIC_UPDATE_USER}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        name: values.name,
                        email: values.email
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`
                    }
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Your information has been successfully updated!");
            } catch (error1) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Something went wrong, please try again later.");
                throw error1;
            }
        }
        setErrors(error);
    };
    const handleUpload = async ()=>{
        const data = new FormData();
        data.append("file", selectedFile);
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/user/upload", {
            method: "POST",
            body: data,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const res = await response.json();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__user_info_form),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__inputs),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__upload_avatar),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "file",
                                        onChange: (e)=>setSelectedFile(e.target.files[0])
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        btnContent: "upload",
                                        onClick: handleUpload
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__avatar),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: values.avatar ? `${process.env.NEXT_PUBLIC_BASE_URL}/${values.avatar}` : _public_static_avatar_default_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                            alt: "Avatar",
                                            width: 50,
                                            height: 50
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        error: errors && errors.find((err)=>err.input === "name"),
                                        placeholder: "Name",
                                        label: "Name",
                                        isFullWidth: true,
                                        value: values.name,
                                        onChange: (e)=>setValues({
                                                ...values,
                                                name: e.target.value
                                            })
                                    }),
                                    errors && errors.map((err, index)=>{
                                        if (err.input === "name") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__error_message),
                                                children: err.message
                                            }, index);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        error: errors && errors.find((err)=>err.input === "email"),
                                        placeholder: "Email",
                                        label: "Email",
                                        isFullWidth: true,
                                        type: "email",
                                        value: values.email,
                                        onChange: (e)=>setValues({
                                                ...values,
                                                email: e.target.value
                                            })
                                    }),
                                    errors && errors.map((err, index)=>{
                                        if (err.input === "email") {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__error_message),
                                                children: err.message
                                            }, index);
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().__submit_btn),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            btnContent: "update",
                            onClick: handleSubmit
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                position: "top-center",
                autoClose: 1000
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSettingsForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5090);
/* harmony import */ var _assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4179);
/* harmony import */ var _components_Forms_UserSettingsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9622);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var _utilities_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Forms_UserSettingsForm__WEBPACK_IMPORTED_MODULE_4__]);
_components_Forms_UserSettingsForm__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Modules



// Styles

// Components


// Context

// Utilities

const UserSettings = ()=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { isLoggedIn  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utilities_api__WEBPACK_IMPORTED_MODULE_6__/* .getData */ .Yu)(process.env.NEXT_PUBLIC_GET_USER).then((data)=>{
            setUser(data);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isLoggedIn()) {
            router.push("/");
        }
    }, [
        isLoggedIn,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__user_informations),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__go_back_btn),
                    onClick: ()=>router.back(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        btnContent: "go back",
                        btnType: "borderless"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "settings"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_assets_styles_pages_user_settings_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__form),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Forms_UserSettingsForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                data: user
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [675,179,175,540,132], () => (__webpack_exec__(2640)));
module.exports = __webpack_exports__;

})();