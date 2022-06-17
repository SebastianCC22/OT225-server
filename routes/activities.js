const express = require('express');
const router = express.Router();
const {createActivity } = require('../controllers/activities/index');

router.post('/', createActivity);

module.exports = router;