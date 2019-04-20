const server = require('./server.js');
const request = require('supertest');

const Game = require('../games/gamesModel.js');
const db = require('../data/dbConfig.js');

describe('GET /games', () => {
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