const { Router } = require('express')
const router = Router()
const marcaController = require('../controllers/marca.controller')

router.get('/marca/:id', marcaController.marca);
router.get('/marca', marcaController.marcaZero);


module.exports = router