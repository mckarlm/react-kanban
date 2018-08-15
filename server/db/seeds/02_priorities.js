
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {
          id: 1,
          priority_level: 'low',
          rank: 1
        },
        {
          id: 2,
          priority_level: 'high',
          rank: 2
        },
        {
          id: 3,
          priority_level: 'medium',
          rank: 1
        },
        {
          id: 4,
          priority_level: 'high',
          rank: 1
        }
      ]);
    });
};
