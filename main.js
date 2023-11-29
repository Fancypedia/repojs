import getblogUser from "./contentUser/getblog.js";
import LoginUser from "./signin.js";
import RegistrasiUser from "./signup.js";


window.LoginUser = LoginUser;
window.RegistrasiUser = RegistrasiUser;


const previewContentElement = document.getElementById('mainBlog');
if (previewContentElement) {
    getblogUser();
} else {
    console.log("Element with ID 'mainBlog' not found. getTitle not executed.");
}