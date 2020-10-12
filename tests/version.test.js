const request = require('supertest');
const app = require('../app');

describe('Endpoint: version', () => {
    test('Debería responder al método GET', async () => {
        const response = await request(app).get('/version');
        expect(response.statusCode).toBe(200)
    });
});