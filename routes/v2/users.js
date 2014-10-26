var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var response, users, user;

  users = [
    {
      id:         201,
      fullname:  'Tom Dale',
      email:     'tom@dale.com',
      questions: [101]
    },
    {
      id:         202,
      fullname:  'Tomster the Hamster',
      email:     'tomster@hamster.com',
      questions: [102]
    },
      {
      id:         203,
      fullname:  'Random Guy',
      email:     'random@gmail.com'
    }
  ];

  var user = {
    id: 201,
    fullname:  'Tom Dale',
    email:     'tom@dale.com',
    questions: [101]
  };

  response = { users: users };  

  res.send(
    JSON.stringify(response)
  );
});

router.post('/authenticate', function(req, res){
  var token;

  if(req.body['email'] === 'tom@dale.com') {
    token = 201;
  } else {
    token = 202;
  }

  res.send({ token: token });
});

router.get('/201', function(req, res) {
  var response, user;

  user = {
    id:         201,
    fullname:  'Tom Dale',
    email:     'tom@dale.com',
    questions: [101]
  };

  response = { user: user };

  res.send(
    JSON.stringify(response)
  );
});

router.get('/202', function(req, res) {
  var response, user;

  user = {
    id:         202,
    fullname:  'Tomster the Hamster',
    email:     'tomster@hamster.com',
    questions: [102]
  };

  response = { user: user };

  res.send(
    JSON.stringify(response)
  );
});

router.get('/203', function(req, res) {
  var response, user;

  user = {
    id:         203,
    fullname:  'Random Guy',
    email:     'random@gmail.com',
    answers:   [301]
  };

  response = { user: user };

  res.send(
    JSON.stringify(response)
  );
});

module.exports = router;
