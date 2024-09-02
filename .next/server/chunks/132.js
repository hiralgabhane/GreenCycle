exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 1329:
/***/ ((module) => {

// Exports
module.exports = {
	"__input": "styles___input__rP3TE",
	"__isRadio": "styles___isRadio__HIWPn",
	"__full_width": "styles___full_width__IV6lo",
	"__error": "styles___error__U0Bo2"
};


/***/ }),

/***/ 9498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1329);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Input = ({ name , placeholder , isFullWidth , label , isRadio , onChange , value , type , error , isTextArea  })=>{
    return isRadio ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().__isRadio),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: type,
                    name: "hello",
                    id: "hello"
                }),
                label
            ]
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().__input)} ${isFullWidth ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().__full_width) : null}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                children: label
            }),
            !isTextArea ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: error ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().__error) : "",
                id: name,
                name: name,
                type: type,
                placeholder: placeholder,
                onChange: onChange,
                value: value
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                className: error ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().__error) : "",
                placeholder: placeholder,
                onChange: onChange,
                value: value,
                rows: 10
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 9434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ formValidation)
});

;// CONCATENATED MODULE: ./constants/index.tsx
const VALID_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

;// CONCATENATED MODULE: ./utilities/formValidation.tsx

const formValidation = (email, password, name, confirmPassword, phone_number, address, zip_code, city, country, title, content)=>{
    let isValid = true;
    let error = [];
    if (email !== undefined) {
        if (!email) {
            error.push({
                input: "email",
                message: "Email is required."
            });
            isValid = false;
        } else if (!email.match(VALID_EMAIL) && email) {
            error.push({
                input: "email",
                message: "Email format incorrect."
            });
            isValid = false;
        }
    }
    if (password !== undefined) {
        if (!password) {
            error.push({
                input: "password",
                message: "Password is required."
            });
            isValid = false;
        } else if (password.length < 8) {
            error.push({
                input: "password",
                message: "Password must be at least 8 characters long."
            });
            isValid = false;
        }
    }
    if (confirmPassword !== undefined) {
        if (!confirmPassword) {
            isValid = false;
            error.push({
                input: "confirmPassword",
                message: "Password confirmation is required."
            });
        } else if (confirmPassword !== password) {
            error.push({
                input: "confirmPassword",
                message: "Passwords dont match."
            });
            isValid = false;
        }
    }
    if (name !== undefined) {
        if (!name) {
            error.push({
                input: "name",
                message: "Name is required."
            });
            isValid = false;
        } else if (name.length < 4) {
            error.push({
                input: "name",
                message: "Name must be at least 4 characters long."
            });
            isValid = false;
        }
    }
    if (phone_number !== undefined) {
        if (!phone_number) {
            error.push({
                input: "phone_number",
                message: "Phone Number is required."
            });
            isValid = false;
        }
    }
    if (address !== undefined) {
        if (!address) {
            error.push({
                input: "address",
                message: "Address is required."
            });
            isValid = false;
        }
    }
    if (zip_code !== undefined) {
        if (!zip_code) {
            error.push({
                input: "zip_code",
                message: "ZIP Code is required."
            });
            isValid = false;
        }
    }
    if (city !== undefined) {
        if (!city) {
            error.push({
                input: "city",
                message: "City is required."
            });
            isValid = false;
        }
    }
    if (country !== undefined) {
        if (!country) {
            error.push({
                input: "country",
                message: "Country is required."
            });
            isValid = false;
        }
    }
    if (title !== undefined) {
        if (!title) {
            error.push({
                input: "title",
                message: "Title is required."
            });
            isValid = false;
        }
    }
    if (content !== undefined) {
        if (!content) {
            error.push({
                input: "content",
                message: "Experience is required."
            });
            isValid = false;
        }
    }
    return [
        isValid,
        error
    ];
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;