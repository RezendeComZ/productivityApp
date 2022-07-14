// traduzir para inglês
// Colocar msg de tipo inválido?

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotaSchema = new Schema({
  title: {type: String,
          maxLength: [140, "Máximo de 140 caracteres para 'título'"]},
  body: {
    type: String,
    required: [true, 'O body é obrigatório'],
    maxLength: [2500, "Máximo de 2500 caracteres para 'body'"]
  },
  lists: [[{type: String, maxLength: [2000, "Máximo de 2000 caracteres para 'lists'"]}]],
  labels: [String],
  pinned: Boolean,
  color: String,
  reminders: [Number],
  expiration: Number,
  permissions: [Object], // Ou Map?
  url: String
})

const Nota = mongoose.model("nota", NotaSchema) // esse é o nome da colletion na DB

module.exports = Nota