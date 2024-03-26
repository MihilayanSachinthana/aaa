document.addEventListener("DOMContentLoaded", function() {
    // Fetch content from about.json
    fetch('about.json')
        .then(response => response.json())
        .then(data => {
            // Set content
            document.getElementById('about-content').innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.content}</p>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});
