const modelCategories = require('../models/categories')

//Create
const createCategories = (req, res) => {

    modelCategories.create(req.body)
        .then((row) => {
            res.status(201).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

//findAll
const findAllCategories = (req, res) => {
    modelCategories.findAll()
        .then((row) => {
            res.status(200).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

//findOne
const findOneCategory = (req, res) => {
    modelCategories.findOne(req.params.idCategory)
        .then((row) => {
            res.status(200).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

//Update
const updateOneCategory = (req, res) => {
    modelCategories.update(req.params.idCategory, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

//Modify
const modifyOneCategory = (req, res) => {
    modelCategories.modify(req.params.idCategory, req.body)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message)
    })
}

//Delete
const destroyOneCategory = (req, res) => {
    modelCategories.destroy(req.params.idCategory)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

//Soft delete
const softDeleteOneCategory = (req, res) => {
    modelCategories.softDelete(req.params.idCategory)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

//export

module.exports = {
    createCategories,
    findAllCategories,
    findOneCategory,
    updateOneCategory,
    modifyOneCategory,
    destroyOneCategory,
    softDeleteOneCategory
}