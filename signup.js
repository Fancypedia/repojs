import { postBiasa } from "./api.js";
import { getValue } from "./element.js";
import { userbarunowa } from "./gudangAPI.js";

const loadingIndicator = document.getElementById("loadingIndicator");
const signupButton = document.getElementById("btnSignup");

export default function RegistrasiUser(){
    let username = getValue("usernamesignup");
    let password = getValue("passwordsignup");
    let nowa = getValue("nowa");
    if (!username) {
        // alert("Username perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        // alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!nowa) {
        // alert("NoWa perlu diisi");
        return; // Stop execution if the fields are not filled
    }

    // loginButton.style.display = "none";

    let datainjson = {
        "username": username,
        "password": password,
        "no_whatsapp": nowa
    }

    signupButton.style.display = "none";
    loadingIndicator.style.display = "block";
    
    postBiasa(userbarunowa,datainjson,responseData);
}

function responseData(result) {
    loadingIndicator.style.display = "none";

    if (result.message == "Berhasil Input data") {
        window.location.href = "../signin/index.html";
    }
}