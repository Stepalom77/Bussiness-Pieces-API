const knex = require('../config');

//Create
const create = (bodyPieces) => {
    return knex
        .insert(bodyPieces)
        .into('pieces') 
        .returning(['piece_id', 'name', 'code', 'active', 'color', 'price', 'category_id'])
}

//findAll
const findAll = () => {
    return knex
        .select(['piece_id', 'name', 'code', 'active', 'color', 'price', 'category_id'])
        .from('pieces')
}

//findOne
const findOne = (pieceId) => {
    return knex
        .select(['piece_id', 'name', 'code', 'active', 'color', 'price', 'category_id'])
        .from('pieces')
        .where({ piece_id: pieceId });
}

//Update
const update = (pieceId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) 
        .from('pieces')
        .where({ piece_id: pieceId })
        .returning(['piece_id', 'name', 'code', 'active', 'color', 'price', 'category_id'])
}

//Modify
const modify = (pieceId, bodyToModify) => {
    return knex
        .update(bodyToModify) 
        .from('pieces')
        .where({ piece_id: pieceId  })
        .returning(['piece_id', 'name', 'code', 'active', 'color', 'price', 'category_id'])
}

//Delete
const destroy = (pieceId) => {
    return knex
        .del()
        .from('pieces')
        .where({ piece_id: pieceId })
}

//Soft delete
const softDelete = (pieceId) => {
    return knex
        .update({ active: false })
        .from('pieces')
        .where({ piece_id: pieceId })
}

//Export functions

module.exports = {
    create,
    findAll,
    findOne,
    update,
    modify,
    destroy,
    softDelete
}