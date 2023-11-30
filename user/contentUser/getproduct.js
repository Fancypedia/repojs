import { getallproduct } from "../gudangAPI.js"

export default function getProduct() {
    // Fetch GET request
    return fetch(getallproduct, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const maincatalog = document.getElementById('mainProduct');
        const searchInput = document.getElementById('searchInput');

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
                        <span class="text-sm text-color is-uppercase has-text-weight-bold">${product.name}</span>
        
                        <h3 class="mb-3"><a href="blog-single.html">${product.description}</a></h3>
                        <p class="mb-5">${product.price}</p>
                        <p class="mb-5">${product.size}</p>
                        <p class="mb-5">${product.stock}</p>
        
                    </div>
                </div>
            </div>
            `;

            maincatalog.appendChild(productCard);
        });
    };

    displayProducts(data.data);


    // Filter products based on search input
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.trim().toLowerCase();
        const filteredProducts = data.data.filter(product => product.name.toLowerCase().includes(searchValue));
        displayProducts(filteredProducts);
    });
})
}