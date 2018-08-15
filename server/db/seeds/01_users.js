
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Ash',
          last_name: 'Ketchum',
          email: 'pkmnmstr151@pkmnleague.org'
        },
        {
          id: 2,
          first_name: 'Jeanne',
          last_name: 'D\'arc',
          email: 'servantruler@fateapoc.com'
        },
        {
          id: 3,
          first_name: 'Eldena',
          last_name: 'Haire',
          email: 'theblackhaire@mira.net'
        },
        {
          id: 4,
          first_name: 'Ixia',
          last_name: 'Olympia',
          email: 'rabbitmerchant@mira.net'
        }
      ]);
    });
};
