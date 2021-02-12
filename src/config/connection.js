const mongoose = require('mongoose')

function connection() {  
    mongoose.connect("mongodb://localhost/bdusuario", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb conectado!!')
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = connection()
