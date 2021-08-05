const marcaController = {
    marca: (req, res) => {
        let { id } = req.params;
        res.render('marca', {nomeMarca: id});
    }
}

module.exports = marcaController;