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
router.post('/', async (req, res) => {
    await Books.create(req.body);
    res.json( await Books.findAll() );
})
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
router.delete('/:id', async (req, res) => {
    await Books.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json( await Books.findAll() );
})

module.exports = router;