const res = require('express/lib/response');
const { process_params } = require('express/lib/router');
const { User } = require('../models');

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },

  //get one user by the id
  getUserById({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.thoughtId },
      { _id: params.userId },
      { new: true, runValidators: true })
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
    User.findOneAndUpdate({ _id: process_params.id }, body, { new: true, runValidators: true })
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
  }

}