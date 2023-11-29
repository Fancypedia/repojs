let bismillahcontentall = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/bismillahcontentall";

export default function getTitle() {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('kategori');

    // Fetch GET request
    return fetch(bismillahcontentall, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(dataArray => {

        // Display news
        displayNews(dataArray, categoryParam);

        return dataArray; // Return the data for use if needed
    })
    .catch(error => console.error('Error fetching data:', error));
        
}

function displayNews(dataArray, categoryParam) {
    // Reference to the post container
    const postContainer = document.getElementById('header-title');

    // Loop through the array and generate HTML content for each object
    dataArray.forEach(data => {
        // Check if the category matches the query parameter
        if (categoryParam === null || data.kategori === categoryParam) {
            // Create a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Set the HTML content for the post
            postDiv.innerHTML = `
            <span class="is-block mb-4 text-white is-capitalized">${data.content}</span>
            <h1 class="mb-5">${data.image}</h1>
            <p class="mb-6">${data.description}</p>
            `;
            // Append the post div to the post container
            postContainer.appendChild(postDiv);
        }
    });
}