const router = require('express').Router();
const {} = require('../../controllers/thoughtController');

router.route('/').get().post().put().delete();

router.route('/:thoughtId').get();

router.route('/:thoughtId/reactions').post().delete();

module.exports = router;