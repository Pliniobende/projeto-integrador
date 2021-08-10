const marcaController = {
    marca: (req, res) => {
        let { id } = req.params;
        res.render('marca', {nomeMarca: id, user: req.session.userSaved});
    }
}

module.exports = marcaController;