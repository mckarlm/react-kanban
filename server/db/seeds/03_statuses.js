
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {
          id: 1,
          current_status: 'queue',
          rank: 1
        },
        {
          id: 2,
          current_status: 'working',
          rank: 2
        },
        {
          id: 3,
          current_status: 'done',
          rank: 3
        }
      ]);
    });
};
