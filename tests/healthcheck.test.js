const request = require('supertest');
const app = require('../app');

describe('Endpoint: healthcheck', () => {
    test('Debería responder al método GET', async () => {
        const response = await request(app).get('/healthcheck');
        expect(response.statusCode).toBe(200)
    });
});