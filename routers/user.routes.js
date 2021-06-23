const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/user/signup', userController.pageSign);
router.get('/user/login', userController.pageLogin);
router.get('/user/recuperacao-senha', userController.pageRecuperacaoSenha);



module.exports = router