/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable("supplies").then(function (exists) {
      if(!exists) {
          return knex.schema.createTable("supplies", function (table) {
              table.increments("supply_id").primary();
              table.integer("number_pieces").notNullable();
              table.date("date_supply").notNullable();
              table.boolean("active").notNullable().defaultTo(true);
              table.integer("supplier_id").notNullable().references("supplier_id").inTable("suppliers");
              table.integer("piece_id").notNullable().references("piece_id").inTable("pieces");
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
