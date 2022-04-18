const modelPieces = require('../models/pieces')

//Create
const createPieces = (req, res) => {
    modelPieces.create(req.body)
        .then((row) => {
            res.status(201).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

//findAll
const findAllPieces = (req, res) => {
    modelPieces.findAll()
        .then((row) => {
            res.status(200).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

//findOne
const findOnePiece = (req, res) => {
    modelPieces.findOne(req.params.idPiece)
        .then((row) => {
            res.status(200).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

//Update
const updateOnePiece = (req, res) => {
    modelPieces.update(req.params.idPiece, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

//Modify
const modifyOnePiece = (req, res) => {
    modelPieces.modify(req.params.idPiece, req.body)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message)
    }) 
}

//Delete
const destroyOnePiece = (req, res) => {
    modelPieces.destroy(req.params.idPiece)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

//Soft delete
const softDeleteOnePiece = (req, res) => {
    modelPieces.softDelete(req.params.idPiece)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

//export

module.exports = {
    createPieces,
    findAllPieces,
    findOnePiece,
    updateOnePiece,
    modifyOnePiece,
    destroyOnePiece,
    softDeleteOnePiece
}