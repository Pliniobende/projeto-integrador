const marcaController = {
    marca: (req, res) => {
        let { id } = req.params;
        res.render('marca', {nomeMarca: id, user: req.session.userSaved});
    },
    marcaZero: (req, res) => {
        res.render('marca');
    }
}

module.exports = marcaController;