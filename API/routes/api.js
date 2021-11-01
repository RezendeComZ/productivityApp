const express = require('express')
const router = express.Router()

// Pegando uma lista de notas do banco de dados
router.get('/notas', (req, res) => {
  res.send({type:'GET'})
  console.log('entrou');
})

// Adicionando uma nota
router.post('/notas', (req, res) => {
  res.send({type:'POST'})
  // console.log(req)
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