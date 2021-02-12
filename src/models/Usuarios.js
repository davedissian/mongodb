const { builtinModules } = require('module')
const { Schema, model } = require('mongoose')

const Usuario = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    }
})

modelo = model("usuarios", Usuario)

module.exports = modelo
