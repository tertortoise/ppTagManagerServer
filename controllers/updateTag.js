const { Tag } = require('../models/Entry');

module.exports = async (r) => {
  const { _id } = r.body;
  console.log('got here');
  const update = {
    name: r.body.name,
    description: r.body.description,
  };

  try {
    const z = await Tag.findByIdAndUpdate(_id, update, { new: true });
    r.res.json({
      type: 'updateTagSuccess',
      payload: z.name,
    });
  } catch (e) {
    r.res.json({ type: 'error', payload: e.message });
  }
};
