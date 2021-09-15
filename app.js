const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();

const userRoutes = require('./routers/user.routes');
const contactRoutes = require('./routers/contact.routes');
const marcaRoutes = require('./routers/marca.routes')

app.use(session({
    secret:"secret",
    resave: true,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/chave', (req, res) => {
    let { senha } = req.body;
    let novaSenha = bcrypt.hashSync(senha, 15);
    res.send({novaSenha});
})


app.get('/', (req, res) => {
    res.render('home1');
})

app.use('/user', userRoutes);

app.use('/contact', contactRoutes);

app.post('/user/recuperacao-senha', (req, res) => {
    let datas = req.body;
    res.send(datas);
})

app.use('/marca', marcaRoutes);

app.get('/marca/:id', (req, res) => {
    let { id } = req.params;
    res.render('marca', { id })
})

app.get('/avaliacao', (req, res) => {
    res.render('avaliacao')
})

app.get('/categoria', (req, res) => {
    res.render('categoria')
})

app.get('/quemsomos', (req, res) => {
    res.render('quem-somos')
})

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))

