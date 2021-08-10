const express = require('express');
const app = express();
const port = 8080;
const userRoutes = require('./routers/user.routes');
const contactRoutes = require('./routers/contact.routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
})

app.use('/user', userRoutes);


app.use('/contact', contactRoutes);



app.use('/contact', contactRoutes);

app.post('/user/login', (req, res) => {
    let datas = req.body;
    res.send(datas);
})

app.post('/user/recuperacao-senha', (req, res) => {
    let datas = req.body;
    res.send(datas);
})

app.get('/marca', (req, res) => {
    res.render('marca')
})

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


app.listen(port, () => console.log(`Server started on port ${port}`))

