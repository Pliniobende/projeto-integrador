const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/user/signup', userController.pageSign);

module.exports = router