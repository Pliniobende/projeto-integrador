const express = require('express');
const app = express();
const port = 8080;
const userRoutes = require('./routers/user.routes')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.use('/api/v1', userRoutes);

app.post('/contact/support', (req, res) => {
    let datas = req.body;
    res.send(datas);
})

app.post('/api/user/signup', (req, res) => {
    let datas = req.body;
    res.send(datas);
})

app.post('/api/user/login', (req, res) => {
    let datas = req.body;
    res.send(datas);
})

app.post('/api/user/recuperacao-senha', (req, res) => {
    let datas = req.body;
    res.send(datas);
})
app.get('/marca', (req, res) => {
    res.render('marca')
})

app.get('/avaliacao', (req, res) => {
    res.render('avaliacao')
})


app.get('/categoria', (req, res) => {
    res.render('categoria')
})

app.listen(port, () => console.log(`Server started on port ${port}`))

