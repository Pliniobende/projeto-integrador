const { Router } = require('express')
const router = Router()
const avaliacaoController = require('../controllers/avaliacao.controller')


router.get('/avaliacao', avaliacaoController.avaliacao);


module.exports = router