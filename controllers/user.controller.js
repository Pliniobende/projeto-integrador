const { User } = require('../models')

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
    index: async (req, res) => {
        let users = await User.findAll()
        res.send(users)
    }, 
    createUser: async (req, res) => {
        try {
            let { name, email, password, mobile, categoria, newsletter} = req.body
            User.create({
                userName: name,
                email: email,
                userPassword: password,
                mobile: mobile,
                categoria: categoria,
                newsletter: newsletter
            })

            res.redirect('/')
        } catch(error) {
            console.log(`Error: ${error}`)
        }
    }
}

module.exports = userController