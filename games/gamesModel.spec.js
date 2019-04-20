const gamesDB = require('./gamesModel.js');
const db = require('../data/dbConfig.js');

describe('games model', () => {
  describe('POST /games', async () => {
    beforeEach(() => db('games').truncate());

    it('should insert game and return status', async () => {
      await gamesDB.insert({ title: 'COD', genre: 'FPS', releaseYear: '2000' });
      const games = await db('games');

      expect(games[0].title).toBe('COD');
      expect(games.length).toBe(1);
      expect(201);
    });
  });
});