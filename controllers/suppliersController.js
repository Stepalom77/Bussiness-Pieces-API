const modelSuppliers = require('../models/suppliers')

//Create
const createSupplier = (req, res) => {
    modelSuppliers.create(req.body) 
        .then((row) => {
            res.status(201).send(row)
        })
        .catch((err) => {
            res.status(400).send(err.message)
        })
    
}

//findAll
const findAllSuppliers = (req, res) => {
    modelSuppliers.findAll()
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//findOne
const findOneSupplier = (req, res) => {
    modelSuppliers.findOne(req.params.idSupplier)
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//updateOne
const updateOneSupplier = (req, res) => {
    modelSuppliers.updateOne(req.params.idSupplier, req.body)
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//modifyOne
const modifyOneSupplier = (req, res) => {
    modelSuppliers.updateOne(req.params.idSupplier, req.body)
    .then((row) => {
        res.status(200).send(row)
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//deleteOne
const destroyOneSupplier = (req, res) => {
    modelSuppliers.destroy(req.params.idSupplier)
    .then(() => {
        res.status(204).send()
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//softDelete
const softDeleteOneSupplier = (req, res) => {
    modelSuppliers.softDelete(req.params.idSupplier)
    .then(() => {
        res.status(204).send()
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

module.exports = {
    createSupplier,
    findAllSuppliers,
    findOneSupplier,
    updateOneSupplier,
    modifyOneSupplier,
    destroyOneSupplier,
    softDeleteOneSupplier
}