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

        runningnose: req.body.runningnose,
        sneeze: req.body.sneeze,
        cough: req.body.cough,
        wheeze: req.body.wheeze,
        headache: req.body.headache,
        itch: req.body.itch,
        swell: req.body.swell,
        redrashes: req.body.redrashes,
        familyhistory: req.body.familyhistory,

        banana: req.body.banana,
        mango: req.body.mango,
        fruit1: req.body.fruit1,
        fruit2: req.body.fruit2,
        lime: req.body.lime,

        avaraikai: req.body.avaraikai,
        beans: req.body.beans,
        beetroot: req.body.beetroot,
        brinjal: req.body.brinjal,
        cabbage: req.body.cabbage,
        capsicum: req.body.capsicum,
        cauliflower: req.body.cauliflower,
        carrot: req.body.carrot,
        chowchow: req.body.chowchow,
        corn: req.body.corn,
        cucumber: req.body.cucumber,
        drumstick: req.body.drumstick,
        greens: req.body.greens,
        gourds: req.body.gourds,
        kovaikai: req.body.kovaikai,
        kothavarai: req.body.kothavarai,
        lfinger: req.body.lfinger,
        malli: req.body.malli,
        mushroom: req.body.mushroom,
        nuckol: req.body.nuckol,
        onion: req.body.onion,
        peas: req.body.peas,
        potroot: req.body.potroot,
        potato: req.body.potato,
        pumkin: req.body.pumkin,
        pudina: req.body.pudina,
        radish: req.body.radish,
        tomato: req.body.tomato,
        tondaikai: req.body.tondaikai,
        vazpoo: req.body.vazpoo,
        yams: req.body.yams,

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
        runningnose: req.body.runningnose,
        sneeze: req.body.sneeze,
        cough: req.body.cough,
        wheeze: req.body.wheeze,
        headache: req.body.headache,
        itch: req.body.itch,
        swell: req.body.swell,
        redrashes: req.body.redrashes,
        familyhistory: req.body.familyhistory,

        banana: req.body.banana,
        mango: req.body.mango,
        fruit1: req.body.fruit1,
        fruit2: req.body.fruit2,
        lime: req.body.lime,

        avaraikai: req.body.avaraikai,
        beans: req.body.beans,
        beetroot: req.body.beetroot,
        brinjal: req.body.brinjal,
        cabbage: req.body.cabbage,
        capsicum: req.body.capsicum,
        cauliflower: req.body.cauliflower,
        carrot: req.body.carrot,
        chowchow: req.body.chowchow,
        corn: req.body.corn,
        cucumber: req.body.cucumber,
        drumstick: req.body.drumstick,
        greens: req.body.greens,
        gourds: req.body.gourds,
        kovaikai: req.body.kovaikai,
        kothavarai: req.body.kothavarai,
        lfinger: req.body.lfinger,
        malli: req.body.malli,
        mushroom: req.body.mushroom,
        nuckol: req.body.nuckol,
        onion: req.body.onion,
        peas: req.body.peas,
        potroot: req.body.potroot,
        potato: req.body.potato,
        pumkin: req.body.pumkin,
        pudina: req.body.pudina,
        radish: req.body.radish,
        tomato: req.body.tomato,
        tondaikai: req.body.tondaikai,
        vazpoo: req.body.vazpoo,
        yams: req.body.yams,

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