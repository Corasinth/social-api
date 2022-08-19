const router = require('express').Router();
const { findAllUsers, createUser, findUser, deleteUser, updateUser } = require('../../controllers/userController');

router.route('/').get(findAllUsers).post(createUser);

router.route('/:userId').get(findUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post().delete();

module.exports = router;