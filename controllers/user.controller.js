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
    },

    index: async (req, res) => {
        let users = await User.findAll()
        res.send(users)
    },
    
    createUser: async (req, res) => {
        try {
            let { name, email, password, mobile, categoria, newsletter} = req.body
            
            let checkEmail = await User.findOne({ where: { email } })

            if (checkEmail){
                console.log('ja tem')
            } else {
                try {
                    await User.create({
                        userName: name,
                        email: email,
                        userPassword: password,
                        mobile: mobile,
                        categoria: categoria,
                        newsLetter: newsletter
                    })
        
                    res.redirect('/')
                } catch(error) {
                    console.log(`Error: ${error}`)
                }
            }
        } catch(error) {
            console.log(`Error: ${error}`)
        }
    }
}

module.exports = userController