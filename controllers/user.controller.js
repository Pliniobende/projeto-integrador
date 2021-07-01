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
    }
}

module.exports = userController