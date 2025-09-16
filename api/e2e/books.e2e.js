const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config/index');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test for Books', () => {
  let app;
  let server;
  let database;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'Nicolas',
        },
        {
          name: 'Book2',
          year: 1998,
          author: 'Nicolas',
        },
      ]);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
