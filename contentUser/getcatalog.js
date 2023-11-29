// // let bismillahcontentall = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/bismillahcontentall";
// import { getallblog } from "../gudangAPI.js"

// export default function getCatalog() {
//     // Fetch GET request
//     return fetch(getallblog, {
//         method: 'GET',
//     })
//     .then(response => response.json())
//     .then(data => {
//         const maincatalog = document.getElementById('mainCatalog');

//         const displayProducts = (products) => {
//             products.filter(item => item.status).forEach(product => {
//                 const productCard = document.createElement('div');

//                 productCard.innerHTML = `
//                 <div class="column is-4-desktop is-6-tablet">
//                 <div class="blog-item-content mb-4">
//                     <img src=${product.image} alt="" class="w-100">
        
//                     <div class="blog-item-content-content mt-3">
//                         <span class="text-sm text-color is-uppercase has-text-weight-bold">${product.content_one}</span>
        
//                         <h3 class="mb-3"><a href="blog-single.html">${product.content_two}</a></h3>
//                         <p class="mb-5">${product.description}</p>
        
//                         <a href="blog-single.html" class="btn btn-small btn-main is-rounded">${product.description_two}</a>
//                     </div>
//                 </div>
//             </div>
//                 `;
//                 maincatalog.appendChild(productCard);
//             });
//         };

//         displayProducts(data.data);
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }



// Fetch data from the API and populate the product details
// fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallblog')
// .then(response => response.json())
// .then(data => {
//     const maincatalog = document.getElementById('mainCatalog');

import { getallblog } from "../gudangAPI.js"

export default function getCatalog() {
    // Fetch GET request
    return fetch(getallblog, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const maincatalog = document.getElementById('mainCatalog');

    const displayProducts = (products) => {
        maincatalog.innerHTML = '';
        products.filter(item => item.status).forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'columns is-multiline';

            productCard.innerHTML = `
                <div class="column is-12-desktop is-12-tablet">
                <div class="blog-item-content mb-8">
                    <img src=${product.image} alt="" class="w-100">
        
                    <div class="blog-item-content-content mt-3">
                        <span class="text-sm text-color is-uppercase has-text-weight-bold">${product.content_one}</span>
        
                        <h3 class="mb-3"><a href="blog-single.html">${product.content_two}</a></h3>
                        <p class="mb-5">${product.description}</p>
        
                        <a href="blog-single.html" class="btn btn-small btn-main is-rounded">${product.description_two}</a>
                    </div>
                </div>
            </div>
            `;

            maincatalog.appendChild(productCard);
        });
    };

    displayProducts(data.data);
})
}