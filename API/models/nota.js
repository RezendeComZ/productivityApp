const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotaSchema = new Schema({
  title: String,
  body: {
    type: String,
    required: [true, 'O body é obrigatório']
  },
  lists: [[String]],
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