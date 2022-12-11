const Sequelize = require('sequelize');
const path = require('path');

// Create database
const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

module.exports = {db};