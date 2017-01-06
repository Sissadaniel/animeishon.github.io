var express = require('express');
var sendMail = require('../lib/send_mail.js');

var router = express.Router();

router.post('/contacto', function(req, res) {
  sendMail('contacto', req.body);
  console.log('RESPONSE: ', res);
  res.redirect(req.get('referer'));
});

router.post('/contacto_landing', function(req, res) {
  sendMail('contacto_landing', req.body);
  console.log('RESPONSE: ', res);
  res.redirect(req.get('referer'));
});

router.post('/contacto_mobile', function(req, res) {
  sendMail('contacto_mobile', req.body);
  console.log('RESPONSE: ', res);
  res.redirect(req.get('referer'));
});

module.exports = router;
