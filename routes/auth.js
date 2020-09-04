const { Router } = require('express')
const router = Router()

router.get('/login', (req, res) => {
  res.send('Logged in')
})

module.exports = router