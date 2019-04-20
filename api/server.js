const express = require('express');
const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

// TEST
server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
});

// GET ALL GAMES
server.get('/games', async (req, res) => {
  const rows = await games.getAll();
  res.status(200).json(rows);
});

// POST NEW GAME
server.post('/games', async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if(!title || !genre) {
    return res.status(422).json({ error: "Fill out the required Fields" });
  } else {
    games.insert({ title, genre, releaseYear })
    .then( game => res.status(200).json({ game }))
    .catch(err => res.status(422).json(err));
  };
})

module.exports = server;