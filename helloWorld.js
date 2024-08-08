// hello-world.js

// Import the axios module
const axios = require('axios');

// Define a function to make an HTTP GET request
function fetchHelloWorld() {
    // Make a GET request to a public API or a simple endpoint
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            // Handle the response
            console.log('Hello World from Axios!');
            console.log('Response data:', response.data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching data:', error);
        });
}

// Call the function
fetchHelloWorld();