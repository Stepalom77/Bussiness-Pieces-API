const knex = require('../config')

//Create
const create = (bodySupplies) => {
    return knex 
    .insert(bodySupplies)
    .into('supplies')
    .returning(['supply_id', 'number_pieces', 'date_supply', 'supplier_id', 'piece_id', 'active'])
}

//findAll
const findAll = () => {
    return knex
    .select(['supply_id', 'number_pieces', 'date_supply', 'supplier_id', 'piece_id', 'active'])
    .from('supplies')
}

//findOne
const findOne = (idSupply) => {
    return knex
    .select(['supply_id', 'number_pieces', 'date_supply', 'supplier_id', 'piece_id', 'active'])
    .from('supplies')
    .where({supply_id: idSupply})
}

//update
const update = (idSupply, bodyToUpdate) => {
    return knex
    .update(bodyToUpdate)
    .from('supplies')
    .where({supply_id: idSupply})
    .returning(['supply_id', 'number_pieces', 'date_supply', 'supplier_id', 'piece_id', 'active'])
}

//modify
const modify = (idSupply, bodyToModify) => {
    return knex
    .update(bodyToModify)
    .from('supplies')
    .where({supply_id: idSupply})
    .returning(['supply_id', 'number_pieces', 'date_supply', 'supplier_id', 'piece_id', 'active'])
}

//delete
const destroy = (idSupply) => {
    return knex
    .delete()
    .from('supplies')
    .where({supply_id: idSupply})
}

//softDelete
const softDelete = (idSupply) => {
    return knex
    .update({active: false})
    .from('supplies')
    .where({supply_id: idSupply})
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    modify,
    destroy,
    softDelete
}