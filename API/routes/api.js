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
  Nota.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() => {
    Nota.findOne({_id: req.params.id}).then(nota => {
      res.send(nota)
    })
  })
})

// Apagando uma nota
router.delete('/notas/:id', (req, res, next) => {
  Nota.deleteOne({_id: req.params.id}).then(nota => {
    res.send(nota)
  })
})

module.exports = router