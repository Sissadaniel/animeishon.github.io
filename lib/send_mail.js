var api_key = 'key-845e78bc37106ad7dd88664b31a40935';
var domain = 'animeishon.studio';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Animeishon Studio <hello@animeishon.studio>',
  to: 'matias.rodgian@gmail.com',
  subject: 'Solicitud cotización'
};

module.exports = function (form_name, form) {
  var now = new Date()

  switch(form_name) {
    case 'contacto':
      html = `
        <b>Enviada el: ${now.toLocaleTimeString()}</b>
        <br>
        <br>
        <b>Nombre: </b>${form.name}
        <br>
        <b>Email: </b>${form.email}
        <br>
        <b>Cupón: </b>${form.coupon}
      `
      break;
    case 'contacto_landing':
      html = `
        <b>Enviada el: ${now.toLocaleTimeString()}</b>
        <br>
        <br>
        <b>Nombre: </b>${form.name}
        <br>
        <b>Email: </b>${form.email}
        <br>
        <b>Servicio: </b>${form.service}
        <br>
        <b>Mensaje: </b>${form.message}
      `
      break;
    default:
      html = `
        <b>Enviada el: ${now.toLocaleTimeString()}</b>
        <br>
        <br>
        <b>Nombre: </b>${form.name}
        <br>
        <b>Email: </b>${form.email}
        <br>
        <b>Titulo: </b>${form.subject}
        <br>
        <b>Mensaje: </b>${form.message}
      `
  }

  /*
  let formData = data;
  formData.html = html;
  */

  data.html = html;

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}
