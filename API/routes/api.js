const express = require('express')
const router = express.Router()
const Nota = require('../models/nota')

// Pegando uma lista de notas do banco de dados
router.get('/notas', (req, res) => {
  res.send({type:'GET'})
})

// Adicionando uma nota
router.post('/notas', (req, res) => {
  Nota.create(req.body).then(nota => { // é uma promisse, e depois vem o 'then'
    res.send(nota)
  })
})

// Atualizando uma nota
router.put('/notas/:id', (req, res) => {
  res.send({type:'PUT'})
})

// Apagando uma nota
router.delete('/notas/:id', (req, res) => {
  res.send({type:'DELETE'})
})

module.exports = router