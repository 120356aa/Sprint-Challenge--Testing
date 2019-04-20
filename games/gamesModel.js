const db = require('../data/dbConfig.js');

module.exports = {
  getAll,
  insert
};

function getAll() {
  return db('games');
}

function insert(body) {
  return db('games')
    .insert(body)
    .then(ids => ids[0]);
}