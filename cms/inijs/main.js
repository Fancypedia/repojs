// import RegistrasiUser from "./signup.js";
// // import { getCookie } from "./cookies.js";

// window.RegistrasiUser = RegistrasiUser;

// // const myHeaders = new Headers();
// // let tokencookie = getCookie("token");
// // myHeaders.set("token", tokencookie);



import editProduct from "../scriptupdated2.js";
import editComment from "../scriptupdatedcomment2.js";
import editBlog from "../scriptupdatedblog2.js";

import createBlog from "./content/createblog.js";
import createKomen from "./content/createcomment.js";
import buatprodukkk from "./content/createproduct.js";

import adminAuthorization from "./authorizationAdmin.js";

// import { getCookie } from "./cookies.js";

window.createBlog = createBlog;
window.createKomen = createKomen;
window.buatprodukkk = buatprodukkk;


window.editProduct = editProduct;
window.editComment = editComment;
window.editBlog = editBlog;

// window.updateProduct = updateProduct(event);

import Logout from "./logout.js";

window.Logout = Logout;


const previewadminAuthorization = document.getElementById('mainadminAuthorization');
if (previewadminAuthorization) {
    adminAuthorization();
} else {
    console.log("Element with ID 'mainadminAuthorization' not found. adminAuthorization not executed.");
}
// const myHeaders = new Headers();
// let tokencookie = getCookie("token");
// myHeaders.set("token", tokencookie);

