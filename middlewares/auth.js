function auth(req, res, next){
    if(typeof(req.session.user) != "undefined"){
        return next()
    }else{
        return res.send("você precisa se logar para continuar!")
    }
}

module.exports = auth