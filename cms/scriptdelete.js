function deleteProduct() {
    const productID = parseInt(document.getElementById('productID').value)
    let tokenvalue = getCookie('token')

    // Lakukan validasi jika productID tidak kosong
    if (productID === '') {
      alert('Please enter a Product ID');
      return;
    }
  
    const endpoint = 'https://asia-southeast2-testlogin-366704.cloudfunctions.net/deleteproductt';
    const payload = {
      nomorid: productID
    };
  
    fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': tokenvalue
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          document.getElementById('response').innerText = 'Product deleted successfully';
          console.log("Berhasil DELETE")
          Swal.fire({
            title: "Berhasil!",
            text: "Produk Berhasil di Delete!",
            icon: "success"
          });
          window.location.href = "getproduct.html";
        } else {
          document.getElementById('response').innerText = 'Failed to delete product';
          alert('gagal DELETE')
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'An error occurred, please try again.';
      });
  }
  


const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const val = document.getElementById("productID");
val.value = id;
console.log(id);

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
	}