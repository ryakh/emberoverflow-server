var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1', function(req, res) {
  res.send('Hello world');
});

module.exports = router;
