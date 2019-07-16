const { Entry } = require('../models/Entry');

module.exports = async (r) => {
  let {
    title,
    description,
    date,
    importance,
    status,
    selectedTagsSearch,
    selectedTagsEP,
  } = r.body;

  const newEntry = new Entry({
    title,
    description,
    date,
    importance,
    status,
    selectedTagsSearch,
    selectedTagsEP,
  });
  
  try {
    const z = await newEntry.save();
    r.res.json({
      type: 'addSuccess',
      payload: z.title,
    });
  } catch (e) {
    r.res.json({ type: 'error', payload: e.message });
  }
};
