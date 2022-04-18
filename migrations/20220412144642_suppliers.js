/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable("suppliers").then(function (exists) {
      if(!exists) {
          return knex.schema.createTable("suppliers", function (table) {
              table.increments("supplier_id").primary();
              table.string("first_name").notNullable();
              table.string("last_name").notNullable();
              table.string("address").notNullable();
              table.string("city").notNullable();
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
