const { Router } = require('express')
const router = Router()
const avaliacaoController = require('../controllers/avaliacao.controller')


// router.get('/', avaliacaoController.avaliacao);
router.get('/:id', avaliacaoController.categoria);


module.exports = router;