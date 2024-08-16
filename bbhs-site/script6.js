
// Get the form element
var form = document.getElementById('sheetdb-form');

// Add an event listener for form submission
form.addEventListener("submit", e => {
    e.preventDefault();

    // Submit form data to the specified action URL
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success - provide feedback and optionally redirect
        alert("Your data was submitted successfully!");

        // Uncomment the following line to redirect after submission
        window.location.href = 'page2.html'; 
    })
    .catch(error => {
        // Handle error - notify user
        console.error('Error!', error.message);
        alert("There was a problem with your submission. Please try again.");
    });
});
