const express = require('express');
const router = express.Router();
const {Books} = require('../models/index');

// create endpoints;
router.get('/', async (req, res) => {
    // get all the books and send it out!
    res.send( await Books.findAll());
})

module.exports = router;