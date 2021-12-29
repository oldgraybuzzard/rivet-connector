const { Schema, model, Types } = require('mongoose');
// const ReactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280,
      trim: true
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
 },
 {
   toJSON: {
     getters: true,
   }
 });



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
     required: 'Enter a username',
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

const Thoughts = model('Thoughts', ThoughtsSchema);

ThoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.reduce((total, reactions) => total + reactions.replies.length + 1,0);
})

module.exports = (Thoughts);