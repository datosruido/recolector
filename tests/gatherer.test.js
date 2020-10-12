const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');

describe('Endpoint: gatherer', () => {
    test('Debería responder al método POST', async () => {
        const email = 'test@email.com';
        const token =  jwt.sign({
            email,
        },
        'secret_key',
        {
            expiresIn: '7d'
        });
        const response = await request(app).post('/api/v1/gatherer').set('x-access-token', token);
        expect(response.statusCode).toBe(200)
    });
});