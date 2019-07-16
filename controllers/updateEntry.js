const { Entry } = require('../models/Entry');

module.exports = async (r) => {
  const { _id } = r.body;

  const update = {
    title: r.body.title,
    description: r.body.description,
    date: r.body.date,
    importance: r.body.importance,
    status: r.body.status,
    selectedTagsSearch: r.body.selectedTagsSearch,
    selectedTagsEP: r.body.selectedTagsEP,
  };

  try {
    const z = await Entry.findByIdAndUpdate(_id, update, { new: true });
    r.res.json({
      type: 'editSuccess',
      payload: z.title,
    });
  } catch (e) {
    r.res.json({ type: 'error', payload: e.message });
  }
};
