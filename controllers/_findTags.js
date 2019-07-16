const { Tag } = require('../models/Entry');
const mongoose = require('../config/conn');
const ObjectId = mongoose.Types.ObjectId;

const find = async () => {
  const z = await Tag.find({
    '_id': {
      $in: ['5ccbd4f894f6ae23394ebcc2', '5ccbd5a8916a5423ac844a32', '5ccbd68aa77da4242e0553c6']
    }
  })
  //.populate({path: 'tags.parent', select: ['name']})

  console.log('z is ', z);
  return z;
};

find()
  .then(z => {
    //console.log('Populated: ', z[0].tags);
    mongoose.connection.close();
  })
  .catch(e => console.log('error', e));