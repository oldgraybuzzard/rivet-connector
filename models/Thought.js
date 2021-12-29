const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

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
     required: 'Username required',
     ref: 'User'
   },
   reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);


module.exports = (Thoughts);