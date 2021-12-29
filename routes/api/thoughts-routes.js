const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    addReaction,
    updateThoughts,
    deleteThoughts,
    removeReaction
    } = require('../../controllers/thoughts-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThoughts);

router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

router
    .route('/:thoughtsId/reactions')
    .post(addReaction);

router
    .route('/:thoughtsId/:reactionId')
    .delete(removeReaction);

module.exports = router;