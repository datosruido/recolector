const request = require('supertest');
const app = require('../app');

describe('Endpoint: auth', () => {
    test('Debería responder al método POST', async () => {
        const email = 'test@email.com';
        const response = await request(app).post('/api/v1/auth').send({ email });
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('token');
    });
});