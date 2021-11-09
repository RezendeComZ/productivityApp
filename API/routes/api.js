const util = require('../util')
const express = require('express')
const router = express.Router()
const Nota = require('../models/nota')

// GET de todas as notas
router.get('/notas', (req, res, next) => {
  let query = util.objValuesToLowerCase(req.query)

  const { color, labels } = query
  if (Object.keys(query).length === 0) {
    Nota.find({}).then(notas => {
      res.send(notas)
    })
  } else if (labels && !color) {
    Nota.find({labels}).then(notas => {
      res.send(notas)
    })
  } else if (color && !labels) {
    Nota.find({color}).then(notas => {
      res.send(notas)
    })
  } else if (labels && color) {
    Nota.find({labels, color}).then(notas => {
      res.send(notas)
    })
  }
})

// GET individual de nota
router.get('/notas/:id', (req, res, next) => {
  const { color, labels } = req.query

  Nota.find({_id: req.params.id}).then(nota => {
    res.send(nota)
  })
})

// POST - Adicionando uma nota
// todo - 'url' deve ser única
// todo - validacoes de outros campos
router.post('/notas', (req, res, next) => {
  let notaPost = util.processNota(req.body)

  Nota.create(notaPost).then(nota => {
    res.send(nota)
  }).catch(next)
})

// Atualizando uma nota
router.put('/notas/:id', (req, res, next) => {
  let notaPost = util.processNota(req.body)
  
  Nota.findByIdAndUpdate(req.params.id, notaPost, {new: true}).then(() => {
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