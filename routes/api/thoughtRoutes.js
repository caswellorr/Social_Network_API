const router = require('express').Router();

// ======== IMPORTED THOUGHT CONTROLLERS ============

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');


// ======= THOUGHT ROUTES ========= 

// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought);

// ====== ADD REACTION TO THOUGHT ==========

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// ====== REMOVE REACTION FROM THOUGHT ==========

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);



module.exports = router;
