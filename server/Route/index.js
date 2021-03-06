const express = require('express')
const router = express.Router()
const axios = require('axios')
const { response } = require('express')

router.get('/search',(req,res)=>{
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(response=> res.json(response.data))
    .catch(err=>console.log(err))
})

router.get('/items/:id',(req,res)=>{
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    .then(response=> res.json(response.data))
    .catch(err=>console.log(err))
})

module.exports = router