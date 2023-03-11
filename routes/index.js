var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/form-submit', function(req, res, next) {
  const email=req.body.email;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'neutralstaar@gmail.com',
      pass: 'grkiqkedykjtrjtk'
    }
  });

  var mailOptions = {
    from: 'neutralstaar@gmail.com',
    to:  'anoopatwork632@gmail.com',
    subject: 'Sending Email For enquirey from '+email,
    text:'\n'
  };

  // Add each field of the form data as a separate line in the email message
  for (const [key, value] of Object.entries(req.body)) {
    mailOptions.text += `${key}: ${value}\n`;
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
