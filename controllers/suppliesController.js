const modelSupplies = require('../models/supplies')

//Create
const createSupplies = (req, res) => {
    modelSupplies.create(req.body)
    .then((row) => {
        res.status(201).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//findAll
const findAllSupplies = (req, res) => {
    modelSupplies.findAll()
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//findOne
const findOneSupply = (req, res) => {
    modelSupplies.findOne(req.params.idSupply)
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//updateOne
const updateOneSupply = (req, res) => {
    modelSupplies.update(req.params.idSupply, req.body)
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//modifyOne
const modifyOneSupply = (req, res) => {
    modelSupplies.modify(req.params.idSupply, req.body)
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//deleteOne
const destroyOneSupply = (req, res) => {
    modelSupplies.destroy(req.params.idSupply)
    .then(() => {
        res.status(204).send()
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//softDeleteOne
const softDeleteOneSupply = (req, res) => {
    modelSupplies.softDelete(req.params.idSupply)
    .then(() =>{
        res.status(204).send()
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

module.exports = {
    createSupplies,
    findAllSupplies,
    findOneSupply,
    updateOneSupply,
    modifyOneSupply,
    destroyOneSupply,
    softDeleteOneSupply
}
