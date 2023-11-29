let getallblog = "https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallblog";

export default function getTitle() {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('kategori');

    // Fetch GET request
    return fetch(getallblog, {
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
    const postContainer = document.getElementById('mainBlog');

    // Loop through the array and generate HTML content for each object
    dataArray.forEach(data => {
        // Check if the category matches the query parameter
        if (categoryParam === null || data.kategori === categoryParam) {
            // Create a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Set the HTML content for the post
            postDiv.innerHTML = `
            <div class="single-details">
					<img src="https://i.postimg.cc/zXWsVdd7/blog-1.png" alt="" class=" w-100">

					<h2 class="my-5 text-lg"><a href="">${data.title}</a></h2>

					<p>${data.judul}</p>

				</div>
            `;
            // Append the post div to the post container
            postContainer.appendChild(postDiv);
        }
    });
}