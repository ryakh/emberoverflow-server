var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var response, questions;

  questions = [
    {
      id:        101,
      title:    'How do I feed hamsters?',
      author:   'Tom Dale',
      date:     '2013-01-01T12:00:00',
      question: 'Tomster cant eat using knife and a fork because his hands are \
                 too small. We are looking for a way to feed him. Any ideas?'
    },
    {
      id:        102,
      title:    'Are humans insane?',
      author:   'Tomster the Hamster',
      date:     '2013-02-02T12:00:00',
      question: 'I mean are totaly nuts? Is there any hope left for them? Should \
                 we hamsters try to save them?'
    }
  ];

  response = { questions: questions };

  res.send(
    JSON.stringify(response)
  );
});

router.get('/101', function(req, res) {
  var response, question;

  question = {
    id:        101,
    title:    'How do I feed hamsters?',
    author:   'Tom Dale',
    date:     '2013-01-01T12:00:00',
    question: 'Tomster cant eat using knife and a fork because his hands are \
               too small. We are looking for a way to feed him. Any ideas?'
  };

  response = { question: question };

  res.send(
    JSON.stringify(response)
  );
});

router.get('/102', function(req, res) {
  var response, question;

  question = {
    id:        102,
    title:    'Are humans insane?',
    author:   'Tomster the Hamster',
    date:     '2013-02-02T12:00:00',
    question: 'I mean are totaly nuts? Is there any hope left for them? Should \
               we hamsters try to save them?'
  };

  response = { question: question };

  res.send(
    JSON.stringify(response)
  );
});

module.exports = router;
