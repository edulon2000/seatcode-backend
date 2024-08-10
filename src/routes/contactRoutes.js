const express = require('express');
const { getContacts, createContact } = require('../controllers/contactController');

const router = express.Router();

router.route('/')
  .get(getContacts)
  .post(createContact);

module.exports = router;
