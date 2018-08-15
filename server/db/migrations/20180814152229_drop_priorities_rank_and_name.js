
exports.up = function(knex, Promise) {
  return knex.schema.table('priorities', table => {
    table.dropColumn('name');
    table.dropColumn('rank');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('priorities', table => {
    table.dropColumn('name');
    table.dropColumn('rank');
  })
};
