const apiURL = 'https://api.example.com/data';

// Use the Fetch API to make a GET request to the API
fetch(apiURL)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Work with the data received from the API
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with your fetch operation:', error);
    });
