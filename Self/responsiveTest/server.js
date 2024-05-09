const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const port = 5500; // Use environment variable PORT or default to 3000

// Define a route to serve the index.html file
app.use(express.static('public')); // Assuming CSS file is in the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html')); // Send the index.html file
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
