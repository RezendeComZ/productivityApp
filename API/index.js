require('dotenv').config()
const PORT = process.env.PORT || 3001
const MONGODB = process.env.MONGODB
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(MONGODB) // todo, colocar na .env
mongoose.Promise = global.Promise // ver se isso ainda é necessário

// Middlewares:
app.use(express.json())
app.use('/api', require('./routes/api')) // importando aqui ao invés de usar: const routes = require('./routes/api')

app.listen(PORT, () => console.log('Rodando na porta:', PORT))
