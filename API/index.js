require('dotenv').config()
const PORT = process.env.PORT || 3001
const MONGODB = process.env.MONGODB
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(MONGODB)
mongoose.Promise = global.Promise // ver se isso ainda é necessário

// Middlewares:
app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/api')) // importando aqui ao invés de usar: const routes = require('./routes/api')
app.use(express.static('public'))

// error handlling
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message})
})

app.listen(PORT, () => console.log('Rodando na porta:', PORT))
