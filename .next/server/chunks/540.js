"use strict";
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 4540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SR": () => (/* binding */ deleteData),
/* harmony export */   "Yu": () => (/* binding */ getData),
/* harmony export */   "qC": () => (/* binding */ postData)
/* harmony export */ });
/* unused harmony export updateData */
const getData = async (url)=>{
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};
const postData = async (url, items)=>{
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                items
            })
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};
const deleteData = async (url)=>{
    const token = localStorage.getItem("token");
    try {
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        throw error;
    }
};
const updateData = async (url, item_id)=>{
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                item_id
            })
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};


/***/ })

};
;