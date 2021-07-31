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
    }
}

module.exports = userController