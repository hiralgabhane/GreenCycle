"use strict";
exports.id = 825;
exports.ids = [825];
exports.modules = {

/***/ 2989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CartProvider),
  "j": () => (/* binding */ useCart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utilities/api.tsx
var api = __webpack_require__(4540);
// EXTERNAL MODULE: ./context/AuthContext.tsx
var AuthContext = __webpack_require__(175);
;// CONCATENATED MODULE: ./utilities/localStorage.tsx
const storeItems = (cartItems)=>{
     true ? localStorage.setItem("cartItems", JSON.stringify(cartItems)) : 0;
};
const getItems = (key)=>{
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};
const removeItems = (key)=>{
    const data = localStorage.removeItem(key);
    return data;
};

;// CONCATENATED MODULE: ./context/CartContext.tsx



// import { isLoggedIn } from "../utilities/auth";


const CartContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const useCart = ()=>{
    return (0,external_react_.useContext)(CartContext);
};
const CartProvider = ({ children  })=>{
    const [cartItems, setCartItems] = (0,external_react_.useState)([]);
    const [quantity, setQuantity] = (0,external_react_.useState)(0);
    const [update, setUpdate] = (0,external_react_.useState)(false);
    const { isLoggedIn  } = (0,AuthContext/* useAuth */.a)();
    (0,external_react_.useEffect)(()=>{
        if (isLoggedIn()) {
            (0,api/* getData */.Yu)(process.env.NEXT_PUBLIC_GET_CART).then((data)=>{
                setCartItems([
                    ...data.cartItems
                ]);
            });
        } else {
            if (getItems("cartItems")) {
                setCartItems(getItems("cartItems"));
            }
        }
    }, [
        isLoggedIn()
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isLoggedIn()) {
            (0,api/* postData */.qC)(process.env.NEXT_PUBLIC_ADD_TO_CART, cartItems);
        } else {
            if (cartItems.length > 0) storeItems(cartItems);
            if (cartItems.length === 0) removeItems("cartItems");
        }
    }, [
        cartItems,
        update
    ]);
    const addToCart = (id, image, name, price)=>{
        const alreadyExist = cartItems.find((item)=>item.id === id);
        if (!alreadyExist) {
            setCartItems([
                ...cartItems,
                {
                    id,
                    image,
                    name,
                    price,
                    quantity
                }
            ]);
        } else {
            cartItems.map((item, index)=>{
                if (item.id === id) {
                    cartItems[index].quantity += quantity;
                }
            });
            setUpdate(!update);
        }
    };
    const cartQuantity = cartItems.reduce((quantity, item)=>item.quantity + quantity, 0);
    const getItemQuantity = (qty)=>{
        return setQuantity(qty);
    };
    const clearCart = ()=>{
        if (isLoggedIn()) {
            (0,api/* deleteData */.SR)(process.env.NEXT_PUBLIC_CLEAR_CART);
        }
        return setCartItems([]);
    };
    const cartTotalPrice = cartItems.reduce((accumulator, current)=>accumulator + current.price * current.quantity, 0);
    const removeItem = (id)=>{
        if (isLoggedIn()) {
            (0,api/* deleteData */.SR)(`${process.env.NEXT_PUBLIC_REMOVE_ITEM}/${id}`);
        }
        return setCartItems([
            ...cartItems.filter((item)=>item.id !== id)
        ]);
    };
    const increaseQuantity = (id)=>{
        cartItems.map((item, index)=>{
            if (item.id === id) {
                return cartItems[index].quantity++;
            }
        });
        setUpdate(!update);
    };
    const decreaseQuantity = (id)=>{
        cartItems.map((item, index)=>{
            if (item.id === id) {
                if (item.quantity < 2) {
                    removeItem(id);
                }
                return cartItems[index].quantity--;
            }
        });
        setUpdate(!update);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(CartContext.Provider, {
        value: {
            addToCart,
            cartQuantity,
            cartItems,
            getItemQuantity,
            clearCart,
            cartTotalPrice,
            removeItem,
            increaseQuantity,
            decreaseQuantity
        },
        children: children
    });
};


/***/ }),

/***/ 4742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ replaceString)
/* harmony export */ });
const replaceString = (data, stringToReplace, replaceBy)=>{
    return data.replace(`${stringToReplace}`, `${replaceBy}`);
};


/***/ })

};
;