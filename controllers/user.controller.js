const userController = {
    pageSign: (req, res) => {
        res.render('cadastro')
    },
    pageLogin: (req,res) => {
        res.render('login')
    
    },
    pageRecuperacaoSenha: (req,res) => {
        res.render('recuperacao-senha')
    
    },
    pageCategoria: (req, res) => {
        res.render('categoria')
    },
    conta: (req, res) =>{
        res.render('minha-conta')
    },
    editarperfil: (req, res) => {
        res.render('editar-perfil')
    },
    uploadfoto: (req, res) => {
        let foto;
        if (req.file) {
          foto = req.file.path;
        }
    }
}

module.exports = userController