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



module.exports = server;