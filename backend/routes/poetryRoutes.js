const express = require('express');
const {
  getAllPoetries,
  createPoetry,
} = require('../controllers/poetryController');

const router = express.Router();

router.route('/').get(getAllPoetries).post(createPoetry);

module.exports = router;
