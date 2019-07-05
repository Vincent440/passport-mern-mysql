const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")

// GET "/api/users"
.get(userController.getAllUsers) //Gets all the users

// POST "/api/users" Example Request: 
// { "vals": ["test_user", "111111", 1] }
.post(userController.createNewUser);// create a new user


// Matches with "/api/users/:id"
router.route("/:id")

// GET "/api/users/:id"
.get(userController.getUserById)// get user data by ID

// PUT "/api/users/:id" Example Request: 
// { "vals": ["test_user", "111111", 1] }
.put(userController.updateUserById)// update a user by ID

// DELETE "/api/users/:id"
.delete(userController.deleteUserById);// delete a user by ID

// '/api/user/status' route
router.route("/status").post((req,res)=>{
    if(req.isAuthenticated){
      res.status(200).json({ user: req.user, isLoggedIn: req.isAuthenticated() });
    }
    else if (req.isUnauthenticated()){
      res.status(401).send("User is not logged in currently.");
    }
});

module.exports = router;