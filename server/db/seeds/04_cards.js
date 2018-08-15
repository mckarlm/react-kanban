
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1, title: 'Dishes',
          body: 'Wash the dishes.',
          priority_id: 1,
          status_id: 2,
          created_by: 1,
          assigned_to: 1
        },
        {
          id: 2, title: 'Rabbits',
          body: 'Keep the rabbits company.',
          priority_id: 2,
          status_id: 3,
          created_by: 4,
          assigned_to: 3
        },
        {
          id: 3, title: 'Birds',
          body: 'Feed the birds.',
          priority_id: 3,
          status_id: 1,
          created_by: 2,
          assigned_to: 1
        },
        {
          id: 4, title: 'Slay a Kushala Daora',
          body: 'We have reports of a Kushala Daora prowling around the Ancient Forest. Find it, and take it down, Fiver!',
          priority_id: 4,
          status_id: 4,
          created_by: 2,
          assigned_to: 3
        }
      ]);
    });
};
