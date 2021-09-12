const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./Patient')

app.use(bodyParser.json())

const Patient = mongoose.model("patient")

const mongoUri = "mongodb+srv://medical:07wThdmDuzg202z8@cluster0.hbrud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
})

mongoose.connection.on("error", (err) => {
})

app.get('/', (req, res) => {
    Patient.find({}).then(data => {
        res.send(data)
    }).catch(err => {
    })
})

app.post('/create', (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
    })
    patient.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
        })
})


app.post('/update', (req, res) => {
    Patient.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
        })
})

app.post('/delete', (req, res) => {
    Patient.findByIdAndRemove(req.body.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
        })
})


app.listen(3000, () => {

})