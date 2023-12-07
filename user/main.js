import getCatalog from "./contentUser/getcatalog.js";
import getProduct from "./contentUser/getproduct.js";
// import { getCookie } from "./cookies.js";

//authUser
import userAuthorization from "./authorizationUser.js";
import Logout from "./logout.js";

window.Logout = Logout;

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

const previewuserAuthorization = document.getElementById('mainuserAuthorization');
if (previewuserAuthorization) {
    userAuthorization();
} else {
    console.log("Element with ID 'mainuserAuthorization' not found. userAuthorization not executed.");
}

