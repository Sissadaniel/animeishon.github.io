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
    /* ANIMATION SECTION */
    $('#loc-section-animation').text($.i18n('animation'));
    $('#loc-section-animation-expvids-content').text($.i18n('section-animation-expvids-content'));
    $('#loc-section-animation-3dvr').text($.i18n('section-animation-3dvr'));
    $('#loc-section-animation-3dvr-content').text($.i18n('section-animation-3dvr-content'));
    $('#loc-section-animation-kintypo-content').text($.i18n('section-animation-kintypo-content'));
    $('#loc-section-animation-webcont').text($.i18n('section-animation-webcont'));
    $('#loc-section-animation-webcont-content').text($.i18n('section-animation-webcont-content'));
    $('#loc-section-animation-examples').text($.i18n('section-animation-examples'));
    $('#loc-section-animation-modal').text($.i18n('section-animation-webcont'));
    /* PORTFOLIO SECTION */
    $('#loc-section-portfolio').text($.i18n('portfolio'));
    $('#loc-section-portfolio-desc').text($.i18n('section-portfolio-desc'));
    /* CLIENTS SECTION */
    $('#loc-section-clients').text($.i18n('section-clients'));
    /* CONTACT SECTION */
    $('#loc-section-contact').text($.i18n('section-contact'));
    $('#loc-section-contact-address').text($.i18n('section-contact-address'));
    $('#loc-section-contact-phone').text($.i18n('section-contact-phone'));
    $('#loc-section-contact-time').text($.i18n('section-contact-time'));
    $('#loc-section-contact-time-montue').text($.i18n('section-contact-time-montue'));
    $('#loc-section-contact-time-fri').text($.i18n('section-contact-time-fri'));
    $('#loc-section-contact-time-fri-desc').text($.i18n('section-contact-time-fri-desc'));
    $('#loc-section-contact-time-weekend').text($.i18n('section-contact-time-weekend'));
    $('#loc-section-contact-time-weekend-desc').text($.i18n('section-contact-time-weekend-desc'));
    /* FOOTER */
    $('#loc-footer-about').text($.i18n('footer-about'));
    $('#loc-footer-whyus').text($.i18n('footer-whyus'));
    $('#loc-footer-whyus-1').text($.i18n('footer-whyus-1'));
    $('#loc-footer-whyus-2').text($.i18n('footer-whyus-2'));
    $('#loc-footer-whyus-3').text($.i18n('footer-whyus-3'));
    $('#loc-footer-ouroff').text($.i18n('footer-ouroff'));
    $('#loc-footer-address').text($.i18n('section-contact-address'));
    $('#loc-footer-phone').text($.i18n('section-contact-phone'));
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
      /* ANIMATION SECTION */
      'section-animation-expvids-content': 'Let your clients know what you offer, in under 2 minutes. No. Overhead.',
      'section-animation-3dvr': '3D & VR',
      'section-animation-3dvr-content': 'Stereoscopic video and animations. Ocuclus Rift & Hololens ready. Even Google Cardboard.',
      'section-animation-kintypo-content': 'Movin’ type. Express yourself with animated text. Dynamic, simple and easy.',
      'section-animation-webcont': 'Web Content',
      'section-animation-webcont-content': 'Original, curated and custom made posts for your Facebook, Instagram, & Twitter. PNGs, High Quality GIFs, WebMs, you call it.',
      'section-animation-examples': 'See examples',
      /* PORTFOLIO SECTION */
      'section-portfolio-desc': 'Our work speaks for ourselves',
      /* CLIENTS SECTION */
      'section-clients': 'Our Clients',
      /* CONTACT SECTION */
      'section-contact': 'Contact Us',
      'section-contact-address': 'Address',
      'section-contact-phone': 'Phone',
      'section-contact-time': 'Working Hours',
      'section-contact-time-montue': 'Monday - Tuesday:',
      'section-contact-time-fri': 'Friday:',
      'section-contact-time-fri-desc': 'Do you really work on Fridays?',
      'section-contact-time-weekend': 'Saturday and Sunday:',
      'section-contact-time-weekend-desc': 'Don\'t even try it',
      /* FOOTER */
      'footer-about': 'Animeishon Studio is a creative agency focused on digital design and animation. We provide different creative services with a solid technical experience. hello@animeishon.studio',
      'footer-whyus': 'Why us?',
      'footer-whyus-1': 'We have worked with a wide range of clients: from creative industries to the government.',
      'footer-whyus-2': 'Mix design and technology to create a polished product.',
      'footer-whyus-3': '24/7 Support included in every service. We care for you ♥︎',
      'footer-ouroff': 'Our Offices',
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
      /* ANIMATION SECTION */
      'section-animation-expvids-content': 'Cada uno de los videos que hacemos explica de forma efectiva tu negocio, producto o servicio en menos de 2 minutos, creando una conexión emocional con el cliente.',
      'section-animation-3dvr': '3D y Realidad Virtual',
      'section-animation-3dvr-content': 'Desarrollamos animaciones y videos 3D, listos para ser utilizados por Oculus Rift, HoloLens y Google Cardboard.',
      'section-animation-kintypo-content': 'Texto en movimiento. Es una técnica de animación que mezcla animación y texto con el propósito de transmitir una idea de manera fácil, rápida y simple.',
      'section-animation-webcont': 'Contenido Web',
      'section-animation-webcont-content': 'Creamos contenido para redes sociales, Facebook, Instagram y Twitter además de sitios web. Formato WEBM, GIF, MOV, etc.',
      'section-animation-examples': "Ver ejemplos",
      /* PORTFOLIO SECTION */
      'section-portfolio-desc': "Dejamos que nuestro trabajo hable por nosostros",
      /* CLIENTS SECTION */
      'section-clients': 'Nuestros Clientes',
      /* CONTACT SECTION */
      'section-contact': 'Contáctanos',
      'section-contact-address': 'Dirección',
      'section-contact-phone': 'Teléfono',
      'section-contact-time': 'Horario',
      'section-contact-time-montue': 'Lunes - Jueves:',
      'section-contact-time-fri': 'Viernes:',
      'section-contact-time-fri-desc': '¿Trabajas los viernes?',
      'section-contact-time-weekend': 'Sábado y Domingo:',
      'section-contact-time-weekend-desc': 'No preguntes',
      /* FOOTER */
      'footer-about': 'Animeishon Studio es una agencia especializada en diseño digital y animación. Proveemos distintos servicios enfocados a la creatividad, con fundamentos técnicos sólidos y experiencia. hello@animeishon.studio ',
      'footer-whyus': '¿Por qué nosotros?',
      'footer-whyus-1': 'Hemos trabajado con todo tiempo de clientes: desde instancias gubernamentales hasta industrias creativas.',
      'footer-whyus-2': 'Conjuga diseño y tecnología para lograr un producto completo.',
      'footer-whyus-3': 'Soporte 24/7 incluido en cada servicio. Nosotros te cuidamos ♥︎',
      'footer-ouroff': 'Nuestra oficinas',
      'message_from': '$1 {{gender:$3|отправил|отправила}} вам $2 {{plural:$2|сообщение|сообщений|сообщения}}. {{gender:$3|Он|Она}} ждёт ответа!'
    }
  });

  update_texts();
});
