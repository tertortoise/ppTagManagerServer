const { Entry } = require('../models/Entry');

module.exports = async (r) => {
  const { id } = r.params;
  console.log(r.params);

  try {
    const z = await Entry.findByIdAndDelete(id);
    r.res.json(z);
  } catch (e) {
    r.res.json({ 'Возникла проблема': e.message });
  }
};
