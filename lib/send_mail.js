var api_key = 'key-ef297db5b49a9a073e4e855642a0ff11';
var domain = 'sandbox4c12a580366f46ecba936b8fcfc6b1e2.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Steed Page <steed@gmail.com>',
  to: 'Matias <matias@steed.mx>, Coffi <alexcuenca4@gmail.com>',
  subject: 'New quote'
};

module.exports = function (form) {
  var now = new Date()
  html = `
    Enviada el: ${now.toLocaleTimeString()}
    </br>
    </br>
    Nombre: ${form.name}
    </br>
    Email: ${form.email}
    </br>
    Titulo: ${form.subject}
    </br>
    Sobre el proyecto: <p>${form.message}</p>
  `
  let formData = data;
  formData.html = html;
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}