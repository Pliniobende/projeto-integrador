const { Router } = require('express')
const router = Router()
const marcaController = require('../controllers/marca.controller');
const auth = require('../middlewares/auth');

router.get('/marca/:id',auth, marcaController.marca);


module.exports = router