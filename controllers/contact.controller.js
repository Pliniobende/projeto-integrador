const { Contact } = require('../models')

const contactController = {
    requestContact: (req, res) => {
        const { nome, email, mensagem, } = req.body
        try {
            Contact.create({
                name: nome,
                email: email,
                message: mensagem,
                replied: false
            })

            res.redirect('/')
        } catch(error) {
            console.log(`Error: ${error}`)
        }
    }
}

module.exports = contactController