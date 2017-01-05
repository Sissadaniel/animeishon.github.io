var api_key = 'key-845e78bc37106ad7dd88664b31a40935';
var domain = 'sandbox1a7ab271b8024241a82880839cf155b5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Steed Page <steed@gmail.com>',
  to: 'matias.rodgian@gmail.com',
  subject: 'New quote'
};

module.exports = function (form) {
  console.log('we are here! ', form);
  var now = new Date()
  html = `
    Enviada el: ${now.toLocaleTimeString()}
    </br>
    </br>
    Nombre: ${form.name}
    </br>
    Email: ${form.email}
    </br>
    Titulo: ${form.coupon}
  `
  let formData = data;
  formData.html = html;
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}
