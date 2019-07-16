const { Tag } = require('../models/Entry');

module.exports = async (r) => {
  let { name, description, ancestors, parent, level } = r.body;

  const newTag = new Tag({
    name,
    description,
    ancestors,
    parent,
    level,
  });

  try {
    const z = await newTag.save();
    r.res.json({
      type: 'addTagSuccess',
      payload: z.name,
    });
  } catch (e) {
    r.res.json({ type: 'error', payload: e.message });
  }
};
