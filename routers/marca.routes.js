const { Router } = require('express')
const router = Router()
const marcaController = require('../controllers/marca.controller')

router.get('/marca/:id', marcaController.marca);


module.exports = router