const mongoose = require('../config/conn');

const { entry1 } = require('../models/data-entries');

const add = async () => {
  const a = await entry1.save();
  //  const b = await tag0a1a.save();
  //const c = await tag0a1a2a.save();
};

add()
  .then(() => {
    console.log('done');
    mongoose.connection.close();
  })
  .catch(e => console.log('error', e));