
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.string('email').unique().notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('email');
  })
};
