const app = require('./src/config/server')

const connection = require('./src/config/connection')

const Usuarios = require('./src/models/Usuarios')

app.get("/", async (req,res) => {
    const result = await Usuarios.find()

    res.json(result)
})

app.post("/", async (req,res) => {
    const { nome, email } = req.body

    let result = await Usuarios.create({ nome, email })

    res.json(result)
})

app.put("/:id", async (req,res) => {
    const { id } = req.params
    const { nome, email } = req.body

    let result = await Usuarios.updateOne({ _id: id }, { nome, email })

    res.json(result)
})

app.delete("/", async (req,res) => {
    const { id } = req.body

    let result = await Usuarios.deleteOne({ _id: id })
    res.json(result)
}) 
