/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable("categories").then(function (exists) {
      if(!exists) {
          return knex.schema.createTable("categories", function (table) {
              table.increments("category_id").primary();
              table.string("name").notNullable();
              table.integer("code").unique().notNullable();
              table.boolean("active").notNullable().defaultTo(true);
          })
      }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
