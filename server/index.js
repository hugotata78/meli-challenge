const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api',require('./Route/index'))

app.listen(3001, ()=>{
    console.log('Servidor corriendo en puerto 3001')
})