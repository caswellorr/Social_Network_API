const router = require('express').Router();

// ======== IMPORTED USER CONTROLLERS ============

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// ============ USER ROUTES ============

// /api/users
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


// ========== ADD A FRIEND ===========

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend);

// ========== REMOVE FRIEND ===========

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .delete(removeFriend);

module.exports = router;
