const Sequelize = require('sequelize');
const {db} = require('../db.js');

const Books = db.define('books', {
    name: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING
})

module.exports = {Books};