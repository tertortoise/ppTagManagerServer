const { Entry } = require('../models/Entry');
const mongoose = require('../config/conn');
const ObjectId = mongoose.Types.ObjectId;

const find = async () => {
  const z = await Entry.find({}).populate({
    path: 'selectedTagsSearch',
    populate: {
      path: 'ancestors',
      select: 'name',
    },
  });

  console.log('z is ', z);
  return z;
};

find()
  .then(z => {
    console.log('Populated: ', z[3].selectedTagsSearch);
    mongoose.connection.close();
  })
  .catch(e => console.log('error', e));
