const { Router } = require('express');
const router = Router();
const contactController = require('../controllers/contact.controller');


router.post('/support', contactController.requestContact);

module.exports = router;