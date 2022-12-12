// Load up necessary files
const express = require('express');
const app = express();
const port = 3000;
const {db} = require('./db');
const booksRouter = require('./routes/books');

// Root endpoint for testing
app.get('/', (req, res) => {
    res.send("The root path GET endpoint works.")
})

// Load middleware to interpret req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Use Express Router as middleware to access "books" endpoints
app.use('/books', booksRouter);

// Start server
app.listen(port, () => {
    db.sync(); // Creates all models in database if they don't already exist
    console.log(`Server listening on http://localhost:${port}`)
})