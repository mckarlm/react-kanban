
exports.up = function(knex, Promise) {
  return knex.schema.table('priorities', table => {
    table.string('priority_level').notNullable();
    table.integer('rank').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('priorities', table => {
    table.dropColumn('priority_level');
    table.dropColumn('rank');
  })
};
