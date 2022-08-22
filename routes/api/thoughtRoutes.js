const router = require('express').Router();
const { findAllThoughts, createThought, deleteThought, updateThought, findThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');

router.route('/').get(findAllThoughts).post(createThought);

router.route('/:thoughtId').get(findThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;