const express = require('express');
const router = express.Router();
const {Books} = require('../models/index');

// create endpoints;
// GET
router.get('/', async (req, res) => {
    // get all the books and send it out!
    res.send( await Books.findAll());
})
// POST
// PUT
router.put('/:id', async (req, res) => {
    // modify one record in the db
    const newBookData = req.body; // getting the body data (books)
    const bookToModify = await Books.findByPk(req.params.id);
    await bookToModify.update(newBookData);
    // send out a response
    res.json( await Books.findAll() );
});
// DELETE

module.exports = router;