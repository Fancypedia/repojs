import { getCookie } from "./inijs/cookies.js";
import { patchHeader } from "./inijs/api.js";
import { updatecommentt } from "./inijs/gudangAPI.js";

export default function editComment(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let id = parseInt(document.getElementById('id').value);
    let username = document.getElementById('username').value;
    let comment = document.getElementById('comment').value;
    let questions = document.getElementById('questions').value;
    let tanggal = document.getElementById('tanggal').value;
    let status = document.getElementById('status').checked;

    let datainjson = {
        "id": id, // Contoh id yang unik, Anda dapat menggunakan id yang sesuai dengan kebutuhan aplikasi Anda
        "username": username,
        "comment": comment,
        "questions": questions,
        "tanggal": tanggal,
        "status": status
    };

    patchHeader(updatecommentt,datainjson,tokenkey,tokenvalue,responseFunction)
}

function responseFunction(result) {

    if (result.status == true) {
        Swal.fire({
            title: "Berhasil!",
            text: "Comment Berhasil di Delete!",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "getcomment.html";
            }
          });
        console.log("Berhasil update")
        
    } else {
        alert('gagal update')
        console.log("Gagal")
    }
}


