const router = require("express").Router();
const passport = require("passport");
require("../../controllers/passportController")(passport);

// Matches with "api/logout"
router.route("/").get((req, res)=> {
        if(req.isAuthenticated()){
            req.session.destroy(err=> {
                // cannot access session here
                console.log("\nUser Is now logged out: " + req.isUnauthenticated());
                res.status(200).json({ user:{}, loggedIn: req.isAuthenticated()});
            })
            req.logout();
        }
        else {
            console.log("user is already logged out:"+req.isAuthenticated());
            res.status(202).json({ user:{}, loggedIn: req.isAuthenticated()});
        }
    }
);

module.exports = router;