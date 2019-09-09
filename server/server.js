const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require( 'express' )
const data = require('../react-crm-ex-yuvalbloch/data')
const customer = require('./customer')
const app = express()
const port = process.env.PORT ||8080
const path = require( 'path' )
const api = require('./api')
mongoose.connect("mongodb://localhost/crm", { useNewUrlParser: true } )
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api)
app.listen( port, () => console.log( `Example app listening on port ${ port }!` ) )
 // data.forEach(d => {
 //     d.surname= d.name.split(" ")[1]
 //     d.name = d.name.split(" ")[0]
 //     const cust = new customer(d)
 //     cust.save()
 // })