const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  idCliente: Number,
  nombreFantasia: String,
  nombre: String,
  apellido: String,
  email: String,
  whatsapp: String,
  direccion: String,
  fechaAlta: Date,
  cuit: Number,
  diasHorarios: String,
  completed: Boolean,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;