const { Schema, model } = require('../config/conn');

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  level: {
    type: Number,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    default: null,
  },
  ancestors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
      default: null,
    },
  ],
});

const EntrySchema = new Schema({
  selectedTagsSearch: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  selectedTagsEP: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  title: {
    type: 'String',
    required: [true, 'Why no title in entry?'],
  },
  description: {
    type: 'String',
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum: ['notStarted', 'wip', 'completed', 'postponed'],
    default: 'notStarted',
  },
  importance: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high'],
    default: 'Medium',
  },
});

const entry = model('Entry', EntrySchema);
const tag = model('Tag', TagSchema);

module.exports = { Entry: entry, Tag: tag };
