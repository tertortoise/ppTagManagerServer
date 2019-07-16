const mongoose = require('../config/conn');

const { tag1, tag2a, tag3a, tag3b } = require('../models/data-tags');


const add = async () => {
  //const a = await tag1.save();
  // const b = await tag2a.save();
  const c = await tag3a.save();
  const d = await tag3b.save();
};

add()
  .then(() => {
    console.log('done');
    mongoose.connection.close();
  })
  .catch(e => console.log('error', e));