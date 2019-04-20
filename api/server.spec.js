const server = require('./server.js');
const request = require('supertest');

const Game = require('../games/gamesModel.js');
const db = require('../data/dbConfig.js');

describe('GET /games', () => {
  beforeEach(() => db('games').truncate());

  it('should return status 200', async () => {
    const res = await request(server).get('/games');
    expect(res.status).toEqual(200);
  });

  it('should return JSON', async () => {
    const res = await request(server).get('/games');
    expect(res.type).toBe('application/json');
  });

  it('should return an array', async () => {
    const res = await request(server).get('/games');
    expect(res.body).toEqual([]);
  });
});

describe('insert game test', () => {
  beforeEach(() => db('games').truncate());

  it('insert game return length of 1', async () => {
    await Game.insert({ title: 'COD', genre: 'FPS', releaseYear: '2000' });
    const game = await db('games');

    expect(game.length).toBe(1);
  });

  it('insert game return game to be COD', async () => {
    await Game.insert({ title: 'COD', genre: 'FPS', releaseYear: '2000' });
    const game = await db('games');

    expect(game[0].title).toBe('COD');
  });
});