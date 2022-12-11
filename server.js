// Load up necessary files
const express = require('express');
const app = express();
const port = 3000;
const {db} = require('./db');

// Root endpoint for testing
app.get('/', (req, res) => {
    res.send("The root path GET endpoint works.")
})

// TODO
// Use Express Router as middleware to "books" endpoints





// Start server
app.listen(port, () => {
    db.sync(); // Creates all models in database if they don't already exist
    console.log(`Server listening on http://localhost:${port}`)
})