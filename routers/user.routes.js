const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/signup', userController.pageSign);
router.get('/login', userController.pageLogin);
router.get('/recuperacao-senha', userController.pageRecuperacaoSenha);



module.exports = router