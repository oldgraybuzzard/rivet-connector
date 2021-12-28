const res = require('express/lib/response');
const { process_params } = require('express/lib/router');
const { Thoughts } = require('../models');

const thoughtsController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
    .then(dbThoughtsData => res.json(dbThoughtsData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },

  //get one thought by the id
  getThoughtsById({ params }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtId },
      { _id: params.thoughtId },
      { new: true, runValidators: true })
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
  createThoughts({ body }, res) {
    Thoughts.create(body)
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => res.status(400).json(err));
  },

  //delete a thought
  deleteThoughts({ params }, res ) {
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
  }

}