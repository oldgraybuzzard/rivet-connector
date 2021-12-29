// const res = require('express/lib/response');
// const { process_params } = require('express/lib/router');
const { Thoughts, User } = require('../models');

const thoughtsController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbThoughtsData => res.json(dbThoughtsData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },

  //get one thought by the id
  getThoughtsById({ params }, res) {
    Thoughts.findOne({ _id: params.thoughtId })
      .populate({
        path: 'user',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtsData => {
        //if no thought, return 404
        if (!dbThoughtsData) {
        res.status(404).json({ message: 'No thought found with that id!' });
        return;
      }
      res.json(dbThoughtsData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // find a thought and update
  updateThoughts({ params, body }, res) {
    Thoughts.findOneAndUpdate({ _id: process_params.id }, body, { new: true, runValidators: true })
    .then(dbThoughtsData => {
      if (!dbThoughtsData) {
        res.status(404).json({ message: 'No thought found with that id!' });
        return;
      }
      res.json(dbThoughtsData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  //create a new thought
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Thought has been created but no user with this id!' });
        }
        res.json({ message: 'Thought has been created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //delete a thought
  deleteThoughts({ params, body }, res ) {
    Thoughts.findByIdAndDelete({ _id: params.id })
    .then(dbThoughtsData => {
      if (!dbThoughtsData) {
        res.status(404).json({ message: 'No thought with that id! '});
        return;
      }
      res.json(dbThoughtsData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  //add a reaction
  addReaction ({ params, body}, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtsId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: 'No thoughts found with this id!' });
          return;
        }
        res.json(dbThoughtsData)
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
  },

  //delete a Reaction
  removeReaction({ params }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtsId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.json(err));
    }
}

module.exports = thoughtsController;