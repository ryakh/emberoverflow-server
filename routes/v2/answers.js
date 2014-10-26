var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var response, answers;

  answers = [
    {
      id:      301,
      answer: 'You can feed them from a bowl!',
      date:   '2013-01-01T12:00:00',
      author:  203
    }
  ];

  response = { answers: answers };  

  res.send(
    JSON.stringify(response)
  );
});

router.get('/301', function(req, res) {
  var response, answer;

  answer = {
    id:      301,
    answer: 'You can feed them from a bowl!',
    date:   '2013-01-01T12:00:00',
    author:  203
  };

  response = { answer: answer };

  res.send(
    JSON.stringify(response)
  );
});

module.exports = router;

router.post('/', function(req, res) {
  var answer, id;

  id = Math.floor(Math.random() * (10000 - 1)) + 1;

  answer = {
    id: id,
    answer: req.body['answer']['answer'],
    date: req.body['answer']['date']
  };

  res.status(201).send(JSON.stringify({ answer: answer }));
});
