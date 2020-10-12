const request = require('supertest');
const app = require('../app');

describe('Endpoint: register', () => {
    test('Debería responder al método POST', async () => {
        const email = 'test@email.com';
        const response = await request(app).post('/api/v1/register').send({ email });
        expect(response.statusCode).toBe(200)
    });
});