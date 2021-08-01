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
    pageCategoria: (req, res) =>{
        res.render('categoria')
    },
    conta: (req, res) =>{
        res.render('minha-conta')
    },
    perfil: (req, res) =>{
        res.render('editar-perfil')
    },
    fotoavatar: (req, res) => {
        let foto;
        if (req.file) {
          foto = req.file.path;
        }
    },
    avatar: (req,res) =>{
        res.render('editar-perfil');
    }
}

module.exports = userController