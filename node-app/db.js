import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

console.log(Usuario);