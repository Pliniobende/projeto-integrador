const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user.controller')
const multer = require("multer");
const upload = multer( { dest: 'public/images' } );
const middleware = require('../middlewares/middlewareValidation');
const { userSchema } = require('../middlewares/schemas');


router.get('/signup', userController.pageSign);
router.post('/signup', middleware(userSchema),userController.createUser);
router.get('/login', userController.pageLogin);
router.post('/login', userController.loginUser);
router.get('/recuperacao-senha', userController.pageRecuperacaoSenha);
router.get('/categoria', userController.pageCategoria);
router.get('/conta', userController.conta);
router.get("/editar-perfil", userController.avatar);
router.post("/editar-perfil", upload.single("image"), userController.fotoavatar);
router.get('/all', userController.index);

module.exports = router;