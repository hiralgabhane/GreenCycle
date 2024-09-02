"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};
const AuthProvider = ({ children  })=>{
    const [token, setTokenState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTokenState(()=>{
            if (false) {}
            return null;
        });
    }, [
        token
    ]);
    const setToken = (token)=>{
        setTokenState(token);
        localStorage.setItem("token", token);
    };
    const removeToken = ()=>{
        setTokenState(null);
        localStorage.removeItem("token");
    };
    const isLoggedIn = ()=>{
        return token !== null;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            token,
            setToken,
            removeToken,
            isLoggedIn
        },
        children: children
    });
};


/***/ })

};
;