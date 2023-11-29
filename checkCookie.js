import { getCookie } from "./cookies.js";

export default function checkCookie() {
    let user = getCookie("token");
    let username = getCookie("username");
	if (user != "" || user == null || user == undefined) {
	alert("Welcome " + username);
	} else {
		alert("Biasakan Login Dulu Ya Bang!")

		// ATTENTION : Ini dinyalakan dan body onload check cookies 
		// window.location.href="https://fancypedia.my.id/theme/signin/";

		window.location.href="https://fancypedia.my.id/theme/signin/";
	}
}