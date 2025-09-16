const mockGetAll = jest.fn();

const request = require('supertest');

const createApp = require('../src/app');

const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
})));

describe('test for Books', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  afterAll(async () => {
    await server.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests for [GET] /api/v1/books', () => {
    test('should return a list books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(3);
        });
    });
  });
});
