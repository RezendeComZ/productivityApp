require('dotenv').config()
const PORT = process.env.port || 3001
const express = require('express')
// const routes = require('./routes/api') // app.use já importa
const app = express()

// inicializando routa
app.use('/api', require('./routes/api'))

app.listen(PORT, () => console.log('rodando na porta:', PORT))
