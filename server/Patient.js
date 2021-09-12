const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    age: String,
    gender: String
})

mongoose.model("patient", PatientSchema)