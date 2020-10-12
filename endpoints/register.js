const express = require('express');
const router = express.Router();

const { getDatabase } = require('../db');
const collectionName = 'users';

router.post('/', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ 'message': 'Bad Request'})
    }

    const db = await getDatabase();
    const { insertedId } = await db.collection(collectionName).insertOne({ email })
    res.status(200).send({ 'message': 'success' });
});

module.exports = router;