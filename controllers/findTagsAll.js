const { Tag } = require('../models/Entry');

module.exports = async (r) => {
  console.log('got here');
  try {
    const x = await Tag.find({});
    if (x === null) {
      throw new Error('Ничего не найдено');
    } else {
      r.res.json(x);
    }
  } catch (e) {
    r.res.json({ 'Возникла проблема': e.message });
  }
};