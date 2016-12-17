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
    /* DESIGN SECTION */
    $('#loc-section-design').text($.i18n('design'));
    $('#loc-section-design-webdev').text($.i18n('section-design-webdev'));
    $('#loc-section-design-webdev-content').text($.i18n('section-design-webdev-content'));
    $('#loc-section-design-appdev').text($.i18n('section-design-appdev'));
    $('#loc-section-design-appdev-content').text($.i18n('section-design-appdev-content'));
    $('#loc-section-design-branding-content').text($.i18n('section-design-branding-content'));
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
      /* DESIGN SECTION */
      'section-design-webdev': 'Web Development',
      'section-design-webdev-content': 'We create beautiful, modern, mobile-first websites that will really make you stand out. You will also get Search Engine Optimization (SEO), heatmaps to know where your visitors click, and real-time analytics for your website.',
      'section-design-appdev': 'App Development',
      'section-design-appdev-content': 'User interfaces for a beautiful user experience. Our apps are clean and straightforward. Programmers love us!',
      'section-design-branding-content': 'We build brands that can be easily recognized by their desired audience. From the logo and how to use it, the look and feel of the website, the company\'s communication and the harmony among these elements.',

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
      /* DESIGN SECTION */
      'section-design-webdev': 'Desarrollo Web',
      'section-design-webdev-content': 'Creamos sitios web estéticos y modernos con diseño mobile-first, optimización en buscadores (SEO), mapas de calor para que sepas como se comportan tus clientes en tu sitio y analíticas en tiempo real.',
      'section-design-appdev': 'Desarrollo de apps',
      'section-design-appdev-content': 'Hacemos aplicaciones funcionales y estéticas, siempre pensando en cómo se ve (UI) y cómo se siente (UX).',
      'section-design-branding-content': 'Construimos marcas con el objetivo de que sean identificadas por el público deseado. Todo desde el logo y cómo usarlo, el look que tendrá el sitio web, la comunicación de la empresa y la armonía entre todos esos elementos.',

      'message_from': '$1 {{gender:$3|отправил|отправила}} вам $2 {{plural:$2|сообщение|сообщений|сообщения}}. {{gender:$3|Он|Она}} ждёт ответа!'
    }
  });

  update_texts();
});
