const router = require('express').Router()
const userController = require('../../controllers/userController')

// Matches with "/api/user"
router.route('/')
// GET "/api/user"
  .get(userController.getAllUsers) // Gets all the users
// POST "/api/user" Example Request: { "vals": ["test_user", "111111", 1] }
  .post(userController.createNewUser)// create a new user
//= ======================================================

// Matches with "/api/user/:id"
router.route('/:id')
// GET "/api/user/:id"
  .get(userController.getUserById)// get user data by ID
// PUT "/api/user/:id" Example Request: { "vals": ["test_user", "111111", 1] }
  .put(userController.updateUserById)// update a user by ID
// DELETE "/api/user/:id"
  .delete(userController.deleteUserById)// delete a user by ID

module.exports = router
