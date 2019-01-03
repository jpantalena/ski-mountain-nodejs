
exports.up = function(knex, Promise) {
  return knex.schema.createTable("mountain", function (table) {
    table.increments('id').notNullable().primary();
    table.text("name").notNullable();
    table.text("city");
    table.text("state");
    table.text("description");
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("mountain")
};
