require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { getDatabase } = require('../db');
const collectionName = 'measurements';

router.use((req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).send({ 'message': 'Unauthorized'});
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return next(err);
        }

        req.decoded = decoded;
        return next();
    });
});

router.post('/', async (req, res) => {
    const db = await getDatabase();
    const { inserteredId } = await db.collection(collectionName).insertOne(req.body);

    res.status(200).send({ 'message': 'success' });
});

module.exports = router;