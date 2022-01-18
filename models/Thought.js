const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thoughts model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtsSchema
  .virtual('reactionCount')
  .get(reactionSchema.length)

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
