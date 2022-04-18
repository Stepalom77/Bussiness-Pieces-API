/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("pieces").then(function (exists) {
        if(!exists) {
            return knex.schema.createTable("pieces", function (table) {
                table.increments("piece_id").primary();
                table.string("name").notNullable();
                table.integer("code").unique().notNullable();
                table.string("color").notNullable();
                table.string("price").notNullable();
                table.boolean("active").notNullable().defaultTo(true);
                table.integer("category_id").notNullable().references("category_id").inTable("categories");
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
