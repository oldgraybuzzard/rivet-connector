// const res = require('express/lib/response');
// const { process_params } = require('express/lib/router');
const { User, Thoughts } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },

  //get one user by the id with their thoughts
  getUserById({ params }, res) {
    User.findOneAndUpdate({ _id: params.id })
      .populate ({
        path: 'thoughts',
        select: '-__v'
      })
      .populate ({ 
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
      //if no user, return 404
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // find a user and update
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  //create a new user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  //delete a user
  deleteUser({ params }, res ) {
    User.findByIdAndDelete({ _id: params.id })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user with that id! '});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  //add a friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId},
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
    .then(dbUserData => {
      res.json(dbUserData);
    })
  },

  // delete a friend
  removeFriend( { params }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId }},
        { new: true}
    )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
}

module.exports = userController;