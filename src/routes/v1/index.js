const express = require('express');

const { InfoController } = require('../../controlllers')

const router = express.Router();

router.get('/info', InfoController.info);

module.exports = router;