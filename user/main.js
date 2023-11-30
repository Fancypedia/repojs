import getCatalog from "./contentUser/getcatalog.js";
import getProduct from "./contentUser/getproduct.js";
// import { getCookie } from "./cookies.js";

import Logout from "./logout.js";
import checkCookie from "./checkCookie.js";

window.Logout = Logout;
window.checkCookie = checkCookie;

const previewCatalog = document.getElementById('mainCatalog');
if (previewCatalog) {
    getCatalog();
} else {
    console.log("Element with ID 'mainCatalog' not found. getCatalog not executed.");
}

const previewProduct = document.getElementById('mainProduct');
if (previewProduct) {
    getProduct();
} else {
    console.log("Element with ID 'mainProduct' not found. getProduct not executed.");
}

