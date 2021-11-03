const express = require('express')
const router = express.Router()
const Nota = require('../models/nota')

// Pegando uma lista de notas do banco de dados
router.get('/notas', (req, res, next) => {
  res.send({type:'GET'})
})

// Adicionando uma nota
router.post('/notas', (req, res, next) => {
  Nota.create(req.body).then(nota => {
    res.send(nota)
  }).catch(next)
})

// Atualizando uma nota
router.put('/notas/:id', (req, res, next) => {
  res.send({type:'PUT'})
})

// Apagando uma nota
router.delete('/notas/:id', (req, res, next) => {
  res.send({type:'DELETE'})
})

module.exports = router