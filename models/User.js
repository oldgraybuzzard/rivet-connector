const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'That user name is already taken. Choose another!',
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: 'That email is already in use.',
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
      trim: true
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'User'
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

UserSchema.virtual('friendCount').get(function() {
  return this.comments.reduce((total, friends) => total + friends.replies.length + 1,0);
})

const User = model('User', UserSchema);

module.exports = (User);