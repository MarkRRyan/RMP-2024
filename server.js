require('dotenv').config()

const { PORT } = process.env
const controllers = require('./controllers/index')
const express = require('express')
const app = express()
const cors = require("cors")

// Middleswares
app.use(cors())
app.use(express.json()) // app please use json
app.use(express.urlencoded({ extended: true })) // app please use urlencoded

// Routes
app.use('/api', controllers)

app.use((req, res) => {
    res.status(404).json({ message: 'Not a proper route' })
})

app.listen(PORT, ()=> {
    console.log(`Petting them puppers on ${PORT}`)
} )