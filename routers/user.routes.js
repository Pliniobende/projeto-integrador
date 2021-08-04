const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user.controller');

router.get('/signup', userController.pageSign);
router.post('/signup', userController.createUser);
router.get('/login', userController.pageLogin);
router.get('/recuperacao-senha', userController.pageRecuperacaoSenha);
router.get('/index', userController.index);


module.exports = router;