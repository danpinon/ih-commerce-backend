const express = require('express')
const app =  express()


app.use(express.json())
//IMPORT ALL ROUTES
const products = require('./routes/product')

app.use('/api/v1', products)

module.exports = app
