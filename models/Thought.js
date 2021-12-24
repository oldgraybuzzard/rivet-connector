const { Schema, model, Types } = require('mongoose');

const ThoughtsSchema = new Schema(
  {
   thoughtText: {
     type: String,
     required: 'Text is required',
     min: 1,
     max: 280
   },
   createdAt: {
     type: Date,
     default: Date.now,
     get: (createdAtVal) => dateFormat(createdAtVal)
   },
   username: {
     type: String,
     required: 'Enter a username'
   },
   reactions: {
     type: Schema.Types.ObjectId,
     ref: 'Reaction'
   }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.reduce((total, reactions) => total + reactions.replies.length + 1,0);
})

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = (Thoughts);