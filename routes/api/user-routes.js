const router = require('express').Router();
const { addUser, removeUser, deleteUser, updateUser } = require('../../controllers/user-controller');

router.route('/:userId')