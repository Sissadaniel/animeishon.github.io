jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
    $('#loc-action-form-text').text($.i18n('action-form-text'));
    /* Not working
    $('#loc-action-form-name').attr("placeholder", $.i18n('action-form-name'));
    */
    /* NAVBAR */
    $('#loc-explanatory').text($.i18n('explanatory'));
    $('#loc-design').text($.i18n('design'));
    $('#loc-animation').text($.i18n('animation'));
    $('#loc-portfolio').text($.i18n('portfolio'));
    $('#loc-clients').text($.i18n('clients'));
    $('#loc-contact').text($.i18n('contact'));
    $('#messages').text($.i18n('message_from', 'Ann', 2, 'female'));
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load({
    'en': {
      'welcome': 'Welcome!',
      'action-form-text': 'Tell us about your project. Leave your contact info here or call us at (55)22596898',
      'action-form-name': 'Name',
      /* NAVBAR */
      'explanatory': 'Agency',
      'design': 'Design',
      'animation': 'Animation',
      'portfolio': 'Portfolio',
      'clients': 'Clients',
      'contact': 'Contact',
      'message_from': '$1 has send you $2 {{plural:$2|message|messages}}. {{gender:$3|He|She}} is waiting for your response!'
    },
    'es': {
      'welcome': 'Добро пожаловать!',
      'action-form-text': 'Platícanos tu proyecto. Déjanos tu contacto o llámanos al (55)22596898',
      'action-form-name': 'Nombre',
      /* NAVBAR */
      'explanatory': 'Agencia',
      'design': 'Diseño',
      'animation': 'Animación',
      'portfolio': 'Portafolio',
      'clients': 'Clientes',
      'contact': 'Contacto',
      'message_from': '$1 {{gender:$3|отправил|отправила}} вам $2 {{plural:$2|сообщение|сообщений|сообщения}}. {{gender:$3|Он|Она}} ждёт ответа!'
    }
  });

  update_texts();
});
