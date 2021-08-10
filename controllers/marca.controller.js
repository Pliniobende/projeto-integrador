const marcaController = {
    marca: (req, res) => {
        let { id } = req.params;
        res.render('marca', {nomeMarca: id});
    },
    marcaZero: (req, res) => {
        res.render('marca');
    }
}

module.exports = marcaController;