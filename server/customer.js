const mongoose = require('mongoose')
const Schema = mongoose.Schema
const customerSchema = new Schema({
    name: String,
    surname:String,
    emailType: String,
    firstContact: Date,
    sold : Boolean,
    owner :String,
    country : String

})
const customer = mongoose.model('customer', customerSchema)
module.exports = customer