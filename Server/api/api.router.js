'use strict';

var router = require('express').Router();

router.use('/giphy', require('./giphy/giphy.router'));

module.exports = router;