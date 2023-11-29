import getTitle from "./content/index.js";
import LoginUser from "./signin.js";
import RegistrasiUser from "./signup.js";


window.LoginUser = LoginUser;
window.RegistrasiUser = RegistrasiUser;


const previewContentElement = document.getElementById('header-title');
if (previewContentElement) {
    getTitle();
} else {
    console.log("Element with ID 'header-title' not found. getTitle not executed.");
}