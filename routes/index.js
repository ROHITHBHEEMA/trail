var express = require('express');
var router = express.Router();

const indexControllers = require('../controllers/index');

/* GET home page. */
router.get('/', indexControllers.getIndex);

module.exports = router;
