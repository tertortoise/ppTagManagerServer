const { Tag, Entry } = require('../models/Entry');

module.exports = async (r) => {
  const { ids } = r.body;

  const entries = await Entry.find({ selectedTagsSearch: { $in: ids } });

  console.log(entries);

  if (entries.length > 0) {
    r.res.json({
      type: 'deleteTagUnsuccess',
      payload: entries.length,
    });
  } else {
    try {
      const z = await Tag.deleteMany({ _id: { $in: ids } });
      r.res.json({
        type: 'deleteTagSuccess',
        payload: z.deletedCount,
      });
    } catch (e) {
      r.res.json({type: 'error', payload: e.message });
    }
  }
};
