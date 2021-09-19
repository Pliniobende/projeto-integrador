const { Router } = require('express')
const router = Router()
const avaliacaoController = require('../controllers/avaliacao.controller')


router.get('/avaliacao', avaliacaoController.avaliacao);
router.get('/avaliacao/:id', avaliacaoController.categoria);


module.exports = router;