const router = require("express").Router();
const passport = require("passport");
require("../../controllers/passportController")(passport);

// Matches with "api/logout"
router.route("/").get((req, res) => {
  req.session.destroy(err => {
    if(err) {console.log(err);}
    // cannot access session here
    console.log("\nUser Is now logged out: " + req.isUnauthenticated());
    res.status(200).json({
    user: {
      access_id: 0,
      type: "Guest",
      user_id: 0,
      username: "guest"
    }});
  });
  req.logout();
});

module.exports = router;
