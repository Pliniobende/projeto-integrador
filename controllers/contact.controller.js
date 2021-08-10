const { Contact } = require('../models')

const contactController = {
    requestContact: (req, res) => {
        const { nome, email, mensagem, } = req.body
        try {
            Contact.create({
                nome: nome,
                email: email,
                mensagem: mensagem,
                replied: false
            })

            res.redirect('/')
        } catch(error) {
            console.log(`Error: ${error}`)
        }
    }
}

module.exports = contactController