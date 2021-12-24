const { Schema, model, Types, Mongoose } = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId:{
      parentId: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280
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

const Reaction = model('Reaction', ReactionSchema);

module.exports = (Reaction);