
exports.up = function(knex, Promise) {
  return knex.schema.table('statuses', table => {
    table.string('current_status').notNullable();
    table.integer('rank').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('statuses', table => {
    table.dropColumn('current_status');
    table.dropColumn('rank');
  })
};
