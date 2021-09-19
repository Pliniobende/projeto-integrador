const { Categories } = require('../models');
const { Posts } = require('../models')


const avaliacaoController = {
    avaliacao: (req, res) => {
        res.render('avaliacao')
    },

    categoria: (req, res) => {
        let { id } = req.params;
        res.render('avaliacao', {name: id, user: req.session.userSaved});
    }
};



module.exports = avaliacaoController;