const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    nombre:{type: String, required: true, trim: true},
    categoria: {
        type: String,
        enum: ['Pantallas', 'Arduino', 'Esp32', 'Cables', 'Protoboard', 'Leds', 'Resistencias', 'Potenciometros', 'Sensores', 'Otros'],
        required: true,
    },
    cantidad: {type: Number, required: true, min: 0},
    ubicacion: {type: String, trim: true},
    estado: {type: String, enum:['Nuevo', 'Usado', 'Defectuoso'], default: 'Nuevo'},
    descripcion:{type: String, trim: true},
    fechaDeIngreso:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('stockSchema', stockSchema);