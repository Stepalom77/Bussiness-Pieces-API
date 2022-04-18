const knex = require('../config')

//Create
const create = (bodySuppliers) => {
    return knex
    .insert(bodySuppliers)
    .into('suppliers')
    .returning(['supplier_id', 'first_name', 'last_name', 'address', 'city', 'code', 'active'])
}

//findAll
const findAll = () => {
    return knex
    .select(['supplier_id', 'first_name', 'last_name', 'address', 'city', 'code', 'active'])
    .from('suppliers')
}

//findOne
const findOne = (idSupplier) => {
    return knex
    .select(['supplier_id', 'first_name', 'last_name', 'address', 'city', 'code', 'active'])
    .from('suppliers')
    .where({ supplier_id: idSupplier })
}

//Update
const updateOne = (idSupplier, bodyToUpdate) => {
    return knex
    .update(bodyToUpdate)
    .from('suppliers')
    .where({ supplier_id: idSupplier })
    .returning(['supplier_id', 'first_name', 'last_name', 'address', 'city', 'code', 'active'])
}

//Modify
const modifyOne = (idSupplier, bodyToModify) => {
    return knex
    .update(bodyToModify)
    .from('suppliers')
    .where({supplier_id: idSupplier})
    .returning(['supplier_id', 'first_name', 'last_name', 'address', 'city', 'code', 'active'])
}

//Delete
const destroy = (idSupplier) => {
    return knex
    .delete()
    .from('suppliers')
    .where({supplier_id: idSupplier})
}

//softDelete
const softDelete = (idSupplier) => {
    return knex
    .update({active: false})
    .from('suppliers')
    .where({supplier_id: idSupplier})
}

module.exports = {
    create,
    findAll,
    findOne,
    updateOne,
    modifyOne,
    destroy,
    softDelete
}