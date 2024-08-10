const express = require('express');
const { getServices, createService } = require('../controllers/serviceController');

const router = express.Router();

router.route('/')
  .get(getServices)
  .post(createService);

module.exports = router;
