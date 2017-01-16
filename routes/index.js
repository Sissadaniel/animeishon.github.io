var express = require('express');
var flash = require('express-flash');
var sendMail = require('../lib/send_mail.js');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    expressFlash: req.flash('success'),
    sessionFlash: res.locals.sessionFlash,
    title: 'Animeishon Studio'
  });
});

router.get('/landing', function(req, res) {
  res.render('landing', { title: 'Animeishon Studio'});
});

router.post('/contacto', function(req, res) {
  sendMail('contacto', req.body);
  console.log('RESPONSE: ', res);
  req.flash('success', '¡Gracias por tu mensaje! En breve nos pondremos en comunicación contigo.');
  res.redirect(301, '/');
  //res.redirect(req.get('referer'));
});

router.post('/contacto_landing', function(req, res) {
  sendMail('contacto_landing', req.body);
  console.log('RESPONSE: ', res);
  req.flash('success', '¡Gracias por tu mensaje! En breve nos pondremos en comunicación contigo.');
  res.redirect(301, '/');
  //res.redirect(req.get('origin'));
});

router.post('/contacto_mobile', function(req, res) {
  sendMail('contacto_mobile', req.body);
  console.log('RESPONSE: ', res);
  req.flash('success', '¡Gracias por tu mensaje! En breve nos pondremos en comunicación contigo.');
  res.redirect(301, '/');
  //res.redirect(req.get('referer'), {msg: true});
});

module.exports = router;
