import LoginUser from "./signin.js";
import RegistrasiUser from "./signup.js";
import getCatalog from "./contentUser/getcatalog.js";
import getProduct from "./contentUser/getproduct.js";

window.LoginUser = LoginUser;
window.RegistrasiUser = RegistrasiUser;



import Logout from "./postLogout.js";
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
