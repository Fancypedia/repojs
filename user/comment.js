document.addEventListener("DOMContentLoaded", function () {
    // fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallcomment')
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getall-comment')
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                displayComments(data.data);
            } else {
                console.error("Error fetching comments:", data.message);
                displayError("Failed to fetch comments. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
            displayError("Failed to fetch comments. Please try again later.");
        });
});

function displayComments(comments) {
    const commentsList = document.getElementById('commentsList');

    comments.forEach(comment => {
        // Check if status is true before displaying the comment
        if (comment.status) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('bg-white', 'p-4', 'rounded');

            commentElement.innerHTML = `
                <div>
                    <span class="font-bold">${comment.username}</span> - ${comment.tanggal}
                </div>
                <div class="mt-2">${comment.comment}</div>
                <div class="mt-2">${comment.questions}</div>
            `;

            commentsList.appendChild(commentElement);
        }
    });
}

function displayError(errorMessage) {
    const commentsList = document.getElementById('commentsList');
    const errorElement = document.createElement('div');
    errorElement.classList.add('text-red-500', 'font-bold');
    errorElement.textContent = errorMessage;
    commentsList.appendChild(errorElement);
}