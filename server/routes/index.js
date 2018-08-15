const express = require('express');
const router = express.Router();
const cards = require('./cards');

router.use('/cards', cards);
// const users = require('./users');
// router.use('/users', users);

module.exports = router;