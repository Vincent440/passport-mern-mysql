const router = require('express').Router()
const passport = require('passport')

// '/api/login' route
router.route('/').post(// Using local strategy to redirect back to the signin page if there is an error
  passport.authenticate('local'), (req, res) => {
    console.log('req.sessionID:', req.sessionID)
    res.status(200).json({ user: req.user })
  })

// '/api/login/status' route
router.route('/status').get((req, res) => {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    res.status(200).json({ user: req.user })
  } else {
    res.status(200).json({
      user: {
        accessId: 0,
        type: '',
        userId: 0,
        username: ''
      }
    })
  }
})

module.exports = router
