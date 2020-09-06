const { Router } = require('express')
const { login } = require('../handlers/auth')
const router = Router()

router.get('/login', login)

module.exports = router