const { Router } = require('express')
const router = Router()
const avaliacaoController = require('../controllers/avaliacao.controller')


// router.get('/get', avaliacaoController.avaliacao);
router.get('/all', (req, res) => {
    res.status(200).send('get')
});


module.exports = router;