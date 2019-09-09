const express = require('express')
const bodyParser = require('body-parser')
const customer = require('./customer')
const router = express.Router()
router.post('/customer',function (req,res) {
    const NewCustomer = new customer(req.body)
    NewCustomer.save()
    res.send("sucess")
})
router.get("/customers" ,function (req ,res) {
    customer.find({} ,function (err,data) {
        res.send(data)
    })
})
router.put('/customer' , function (req ,res) {
    console.log(req.body )
     customer.findOne({name : req.body.name.split(" ")[0]} , function (err ,data) {
         console.log(data)
        if(data)
        {

            console.log(data[req.body.type])
            data[req.body.type] = req.body.value
            data.save()
            res.send("update")

        }
        else
        {
            res.send(req.body.name.split(" ")[0]  )
        }
    })
})
module.exports = router