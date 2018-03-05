const port = 3003
const database = require('./database')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))



app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(database.getProtuto(req.params.id))
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = database.excluirProduto(req.params.id)
    res.send(produto)
})

app.post('/produtos', (req, res, next)=>{
    const produto = database.SalvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.listen(port, () =>{
    console.log('servidor esta executando na porta 3003')
})

