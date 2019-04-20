
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Counter Strike 1.6', genre: 'FPS', releaseYear: '1999'},
        {title: 'Counter Strike Source', genre: 'FPS', releaseYear: '2008'},
        {title: 'Counter Strike Global Offensive', genre: 'FPS', releaseYear: '2013'},
      ]);
    });
};
