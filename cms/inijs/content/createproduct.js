

import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createproductfix } from "../gudangAPI.js";
import { getCookie } from "../cookies.js";


export default function buatprodukkk(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "Nomorid": parseInt(getValue("idnomor")),
        "Name": getValue("nama"),
        "Description": getValue("deskripsi"),
        "Price": parseInt(getValue("harga")),
        "Size": getValue("ukuran"),
        "Stock": parseInt(getValue("stok")),
        "Image": getValue("gambar"),
        "status": true
    }
    
    postBiasa(createproductfix,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        Swal.fire({
            title: "Berhasil!",
            text: "Product Berhasil Dibuat!",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "getproduct.html";
            }
          });
        window.location.href = "getproduct.html";
    }else{
        alert("Gagal Input Data");
        window.location.href = "getproduct.html";
    }
}