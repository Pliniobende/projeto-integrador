const { User } = require('../models')
const bcrypt = require('bcrypt');

const userController = {
    pageSign: (req, res) => {
        res.render('cadastro', {erro: null})
    },

    pageLogin: (req,res) => {
        res.render('login', {erro: null})
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

    loginUser: async (req,res)=>{
        let {email, senha} = req.body;
        let userSaved = await User.findOne({
            where: {
                email
            }
        })
        if(userSaved){
            if(bcrypt.compareSync(senha, userSaved.password)){
                req.session.user = userSaved
                res.redirect('/')                
            }else{
                res.render("login", {erro: "Senha Inválida"})
            }
        }else{
            res.render("login", {erro: "Usuário não encontrado"})
        }  
    },
    
    createUser: async (req, res) => {
        try {
            let { name, email, password, mobile, newsletter} = req.body
            let senha = bcrypt.hashSync(password, 15);
            
            let checkEmail = await User.findOne({ where: { email } })

            if (checkEmail){
                res.status(404).render('cadastro', {erro: "Usuário/e-mail já cadastro!"})
            } else {
                try {
                    await User.create({
                        name,
                        email,
                        password: senha,
                        mobile,
                        newsletter
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