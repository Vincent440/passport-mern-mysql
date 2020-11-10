const router = require('express').Router()

// Matches with "api/logout"
router.route('/').get((req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err)
    }
    res.status(200).json({
      user: {
        accessId: 0,
        type: '',
        userId: 0,
        username: ''
      }
    })
  })
  req.logout()
})

module.exports = router
