const router = require("express").Router();
const passport = require("passport");
require("../../controllers/passportController")(passport);

// Matches with "api/logout"
router.route("/").get(
    function(req, res) {
        req.logout();
        console.log("\nLogging User out.\n\nUser Is Logged Out: " + req.isUnauthenticated());
        res.status(200).json({ user:{}, loggedIn: req.isAuthenticated() });
    }
);

module.exports = router;