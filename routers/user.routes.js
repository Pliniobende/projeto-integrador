const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/signup', userController.pageSign);
router.get('/login', userController.pageLogin);
router.get('/recuperacao-senha', userController.pageRecuperacaoSenha);
router.get('/categoria', userController.pageCategoria);
router.get('/conta', userController.conta);



module.exports = router