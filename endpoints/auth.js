require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { getDatabase } = require('../db');
const collectionName = 'users';

router.post('/', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ 'message': 'Bad Request'});
    }

    const db = getDatabase();
    const user = db.collection(collectionName).findOne({ email });

    if (!user) {
        return res.status(400).send({ 'message': 'Bad Request'});
    }

    const token = jwt.sign({
        user,
    },
    process.env.SECRET,
    {
        expiresIn: '7d'
    });

    res.status(200).send({ token });
});

module.exports = router;