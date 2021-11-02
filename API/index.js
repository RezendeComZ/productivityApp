require('dotenv').config()
const PORT = process.env.port || 3001
const express = require('express')
const app = express()

// Middlewares:
app.use(express.json())
app.use('/api', require('./routes/api')) // importando aqui ao invés de usar: const routes = require('./routes/api')

app.listen(PORT, () => console.log('Rodando na porta:', PORT))
