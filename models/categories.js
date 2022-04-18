const knex = require('../config');

//Create
const create = (bodyCategories) => {
    return knex
        .insert(bodyCategories)
        .into('categories') 
        .returning(['category_id', 'name', 'code', 'active'])
}

//findAll
const findAll = () => {
    return knex
        .select(['category_id', 'name', 'code', 'active'])
        .from('categories')
}

//findOne
const findOne = (categoryId) => {
    return knex
        .select(['category_id', 'name', 'code', 'active'])
        .from('categories')
        .where({ category_id: categoryId });
}

//Update
const update = (categoryId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) 
        .from('categories')
        .where({ category_id: categoryId })
        .returning(['category_id', 'name', 'code', 'active'])
}

//Modify
const modify = (categoryId, bodyToModify) => {
    return knex
        .update(bodyToModify) 
        .from('categories')
        .where({ category_id: categoryId  })
        .returning(['category_id', 'name', 'code', 'active'])
}

//Delete
const destroy = (categoryId) => {
    return knex
        .del()
        .from('categories')
        .where({ category_id: categoryId })
}

//Soft delete
const softDelete = (categoryId) => {
    return knex
        .update({ active: false })
        .from('categories')
        .where({ category_id: categoryId })
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