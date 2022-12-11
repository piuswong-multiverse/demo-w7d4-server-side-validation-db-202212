const {Books} = require('./models/index');
const seedData = require('./seedData');
const {db} = require('./db');

const syncSeedData = async () => {
    await db.sync({force:true});
    await Books.bulkCreate(seedData);
}

syncSeedData();