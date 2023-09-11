const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase.js')

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
    // função callback retorna a mensagem informando a porta
})

app.use (bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos())
    //res.send({nome: 'Notebook', preco: 123.45 }) 
        // objeto será convertido em JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco

    })
    res.send(produto) // irá gerar um JSON
})

app.put('/produtos/:id', (req,res,next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // irá gerar um JSON
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = dataBase.excluirProduto(req.params.id)
    res.send(produto) // irá gerar um JSON
})

