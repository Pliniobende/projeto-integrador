const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.get('/marca', (req, res) => {
    res.render('marca')
})

app.get('/avaliacao', (req, res) => {
    res.render('avaliacao')
})

app.listen(port, () => console.log(`Server started on port ${port}`))