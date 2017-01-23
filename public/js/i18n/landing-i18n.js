jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
    $('#loc-action-form-text').text($.i18n('action-form-text'));
    /* Not working
    $('#loc-action-form-name').attr("placeholder", $.i18n('action-form-name'));
    */
    /* NAVBAR */
    $('#loc-navbar-callus').text($.i18n('navbar-callus'));
    /* HERO */
    $('#loc-hero-title').text($.i18n('hero-title'));
    $('#loc-hero-desc1').text($.i18n('hero-desc1'));
    $('#loc-hero-desc2').text($.i18n('hero-desc2'));
    $('#loc-hero-desc3').text($.i18n('hero-desc3'));
    $('#loc-hero-desc4').text($.i18n('hero-desc4'));
    /* FORM */
    $('#loc-form-title').text($.i18n('form-title'));
    $('#loc-form-desc').text($.i18n('form-desc'));
    /* PACKS */
    $('#loc-packs-title').text($.i18n('packs-title'));
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
    /* SERVICES SECTION */
    $('#loc-intro-modal-packs').text($.i18n('intro-packs'));
    $('#loc-intro-modal-bundle1').text($.i18n('intro-modal-bundle1'));
    $('#loc-intro-modal-bundle1-bullet1').text($.i18n('intro-modal-bundle1-bullet1'));
    $('#loc-intro-modal-bundle1-bullet2').text($.i18n('intro-modal-bundle1-bullet2'));
    $('#loc-intro-modal-bundle1-bullet3').text($.i18n('intro-modal-bundle1-bullet3'));
    $('#loc-intro-modal-bundle1-bullet4').text($.i18n('intro-modal-bundle1-bullet4'));
    $('#loc-intro-modal-bundle1-bullet5').text($.i18n('intro-modal-bundle1-bullet5'));
    $('#loc-intro-modal-bundle1-bullet6').text($.i18n('intro-modal-bundle1-bullet6'));
    $('#loc-intro-modal-bundle1-bullet7').text($.i18n('intro-modal-bundle1-bullet7'));
    $('#loc-intro-modal-bundle1-bullet8').text($.i18n('intro-modal-bundle1-bullet8'));
    $('#loc-intro-modal-bundle1-bullet9').text($.i18n('intro-modal-bundle1-bullet9'));
    $('#loc-intro-modal-bundle1-bullet10').text($.i18n('intro-modal-bundle1-bullet10'));
    $('#loc-intro-modal-bundle1-bullet11').text($.i18n('intro-modal-bundle1-bullet11'));
    $('#loc-intro-modal-bundle1-bullet12').text($.i18n('intro-modal-bundle1-bullet12'));
    $('#loc-intro-modal-bundle2').text($.i18n('intro-modal-bundle2'));
    $('#loc-intro-modal-bundle2-bullet1').text($.i18n('intro-modal-bundle2-bullet1'));
    $('#loc-intro-modal-bundle2-bullet2').text($.i18n('intro-modal-bundle2-bullet2'));
    $('#loc-intro-modal-bundle2-bullet3').text($.i18n('intro-modal-bundle2-bullet3'));
    $('#loc-intro-modal-bundle2-bullet4').text($.i18n('intro-modal-bundle2-bullet4'));
    $('#loc-intro-modal-bundle2-bullet5').text($.i18n('intro-modal-bundle2-bullet5'));
    $('#loc-intro-modal-bundle2-bullet6').text($.i18n('intro-modal-bundle2-bullet6'));
    $('#loc-intro-modal-bundle2-bullet7').text($.i18n('intro-modal-bundle2-bullet7'));
    $('#loc-intro-modal-bundle2-bullet8').text($.i18n('intro-modal-bundle2-bullet8'));
    $('#loc-intro-modal-bundle2-bullet9').text($.i18n('intro-modal-bundle2-bullet9'));
    $('#loc-intro-modal-bundle2-bullet10').text($.i18n('intro-modal-bundle2-bullet10'));
    $('#loc-intro-modal-bundle2-bullet11').text($.i18n('intro-modal-bundle2-bullet11'));
    $('#loc-intro-modal-bundle2-bullet12').text($.i18n('intro-modal-bundle2-bullet12'));
    $('#loc-intro-modal-bundle3').text($.i18n('intro-modal-bundle3'));
    $('#loc-intro-modal-bundle3-bullet1').text($.i18n('intro-modal-bundle3-bullet1'));
    $('#loc-intro-modal-bundle3-bullet2').text($.i18n('intro-modal-bundle3-bullet2'));
    $('#loc-intro-modal-bundle3-bullet3').text($.i18n('intro-modal-bundle3-bullet3'));
    $('#loc-intro-modal-bundle3-bullet4').text($.i18n('intro-modal-bundle3-bullet4'));
    $('#loc-intro-modal-bundle3-bullet5').text($.i18n('intro-modal-bundle3-bullet5'));
    $('#loc-intro-modal-bundle3-bullet6').text($.i18n('intro-modal-bundle3-bullet6'));
    $('#loc-intro-modal-bundle3-bullet7').text($.i18n('intro-modal-bundle3-bullet7'));
    $('#loc-intro-modal-bundle3-bullet8').text($.i18n('intro-modal-bundle3-bullet8'));
    $('#loc-intro-modal-bundle3-bullet9').text($.i18n('intro-modal-bundle3-bullet9'));
    $('#loc-intro-modal-bundle3-bullet10').text($.i18n('intro-modal-bundle3-bullet10'));
    $('#loc-intro-modal-bundle3-bullet11').text($.i18n('intro-modal-bundle3-bullet11'));
    $('#loc-intro-modal-bundle3-bullet12').text($.i18n('intro-modal-bundle3-bullet12'));
    $('#loc-intro-modal-bundle3-bullet13').text($.i18n('intro-modal-bundle3-bullet13'));
    $('#loc-intro-modal-bundle3-bullet14').text($.i18n('intro-modal-bundle3-bullet14'));
    $('#loc-intro-modal-bundle3-bullet15').text($.i18n('intro-modal-bundle3-bullet15'));
    $('#loc-intro-modal-bundle3-bullet16').text($.i18n('intro-modal-bundle3-bullet16'));
    $('#loc-intro-modal-bundle3-bullet17').text($.i18n('intro-modal-bundle3-bullet17'));
    $('#loc-intro-modal-bundle4').text($.i18n('intro-modal-bundle4'));
    $('#loc-intro-modal-bundle4-bullet1').text($.i18n('intro-modal-bundle4-bullet1'));
    $('#loc-intro-modal-bundle4-bullet2').text($.i18n('intro-modal-bundle4-bullet2'));
    $('#loc-intro-modal-bundle4-bullet3').text($.i18n('intro-modal-bundle4-bullet3'));
    $('#loc-intro-modal-bundle4-bullet4').text($.i18n('intro-modal-bundle4-bullet4'));
    $('#loc-intro-modal-bundle4-bullet5').text($.i18n('intro-modal-bundle4-bullet5'));
    $('#loc-intro-modal-bundle4-bullet6').text($.i18n('intro-modal-bundle4-bullet6'));
    $('#loc-intro-modal-bundle4-bullet7').text($.i18n('intro-modal-bundle4-bullet7'));
    $('#loc-intro-modal-bundle4-bullet8').text($.i18n('intro-modal-bundle4-bullet8'));
    $('#loc-intro-modal-bundle4-bullet9').text($.i18n('intro-modal-bundle4-bullet9'));
    $('#loc-intro-modal-bundle4-bullet10').text($.i18n('intro-modal-bundle4-bullet10'));
    $('#loc-intro-modal-bundle4-bullet11').text($.i18n('intro-modal-bundle4-bullet11'));
    $('#loc-intro-modal-bundle4-bullet12').text($.i18n('intro-modal-bundle4-bullet12'));
    $('#loc-intro-modal-bundle4-bullet13').text($.i18n('intro-modal-bundle4-bullet13'));
    $('#loc-intro-modal-bundle4-bullet14').text($.i18n('intro-modal-bundle4-bullet14'));
    $('#loc-intro-modal-bundle4-bullet15').text($.i18n('intro-modal-bundle4-bullet15'));
    $('#loc-intro-modal-bundle4-bullet16').text($.i18n('intro-modal-bundle4-bullet16'));
    $('#loc-intro-modal-bundle4-bullet17').text($.i18n('intro-modal-bundle4-bullet17'));
    $('#loc-intro-modal-quote1').text($.i18n('intro-modal-quote'));
    $('#loc-intro-modal-quote2').text($.i18n('intro-modal-quote'));
    $('#loc-intro-modal-quote3').text($.i18n('intro-modal-quote'));
    $('#loc-intro-modal-quote4').text($.i18n('intro-modal-quote'));

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
      'navbar-callus': 'CALL US: (55)22596898',
      /* HERO */
      'hero-title': 'Design and animation with a solid technologic expertise',
      'hero-desc1': 'Agile Work with Fast Deliveries!',
      'hero-desc2': 'Get a Free Quote Now!',
      'hero-desc3': 'Responsive Websites Delivered in Less than 3 Days!',
      'hero-desc4': '24/7 Support',
      /* FORM */
      'form-title': 'Tell us about your project: an expert will help you out!',
      'form-desc': 'Get a free quote by filling this form or by calling us.',
      /* PACKS */
      'packs-title': 'Do you need to create or enhance your business branding?',
      /* CONTACT SECTION */
      'section-contact': 'Contact Us',
      'section-contact-address': '🏡 Address',
      'section-contact-phone': '📞 Phone',
      'section-contact-time': '🕖 Working Hours',
      'section-contact-time-montue': 'Monday - Tuesday:',
      'section-contact-time-fri': 'Friday:',
      'section-contact-time-fri-desc': 'Do you really work on Fridays?',
      'section-contact-time-weekend': 'Saturday and Sunday:',
      'section-contact-time-weekend-desc': 'Don\'t even try it',
      /* SERVICES */
      'intro-packs': 'Servicios Web',
      'intro-modal-quote': 'Cotiza',
      'intro-modal-bundle1': 'Personal',
      'intro-modal-bundle1-bullet1': 'Up to 5  static pages',
      'intro-modal-bundle1-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle1-bullet3': '100% custom design',
      'intro-modal-bundle1-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle1-bullet12': 'Up to 20 @your.domain mail accounts',
      'intro-modal-bundle1-bullet10': 'Up to 5 contact forms',
      'intro-modal-bundle1-bullet11': 'Google Analytics integration',
      'intro-modal-bundle1-bullet5': 'Free changes to banners, images & texts for 1 year',
      'intro-modal-bundle1-bullet6': 'Free domain registration',
      'intro-modal-bundle1-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle1-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle1-bullet8': '1.5GB Storage',
      'intro-modal-bundle1-bullet9': '2 rounds of changes to the site\'s structure & looks before launch',
      'intro-modal-bundle2': 'Negocio',
      'intro-modal-bundle2-bullet1': 'Up to 15 static pages',
      'intro-modal-bundle2-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle2-bullet3': '100% custom design',
      'intro-modal-bundle2-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle2-bullet12': 'Unlimited @your.domain mail accounts',
      'intro-modal-bundle2-bullet10': 'Unlimited contact forms',
      'intro-modal-bundle2-bullet11': 'Google Analytics integration',
      'intro-modal-bundle2-bullet5': 'Free changes to banners, images & texts for 1 year',
      'intro-modal-bundle2-bullet6': 'Free domain registration',
      'intro-modal-bundle2-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle2-bullet8': '1.5GB Storage',
      'intro-modal-bundle2-bullet9': '2 rounds of changes to the site\'s structure & looks before launch',
      'intro-modal-bundle3': 'Página editable',
      'intro-modal-bundle3-bullet1': 'Up to 5 static pages',
      'intro-modal-bundle3-bullet13': 'Content Management System',
      'intro-modal-bundle3-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle3-bullet3': '100% custom design',
      'intro-modal-bundle3-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle3-bullet12': 'Unlimited @your.domain mail accounts',
      'intro-modal-bundle3-bullet10': 'Unlimited contact forms',
      'intro-modal-bundle3-bullet11': 'Google Analytics integration',
      'intro-modal-bundle3-bullet5': '24/7 Technical support for 1 year',
      'intro-modal-bundle3-bullet6': 'Free domain registration',
      'intro-modal-bundle3-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle3-bullet8': '1.5GB storage',
      'intro-modal-bundle3-bullet14': 'User manual',
      'intro-modal-bundle3-bullet9': '2 rounds of changes to the site\'s structure & looks before launch',
      'intro-modal-bundle4': 'E-commerce',
      'intro-modal-bundle4-bullet1': 'Up to 5 static pages',
      'intro-modal-bundle4-bullet13': 'Content Management System',
      'intro-modal-bundle4-bullet15': 'Digital storefront',
      'intro-modal-bundle4-bullet16': 'Inventory manager',
      'intro-modal-bundle4-bullet17': 'Payment processor & PayPal',
      'intro-modal-bundle4-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle4-bullet3': '100% custom design',
      'intro-modal-bundle4-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle4-bullet12': 'Unlimited @your.domain mail accounts',
      'intro-modal-bundle4-bullet10': 'Unlimited contact forms',
      'intro-modal-bundle4-bullet11': 'Google Analytics integration',
      'intro-modal-bundle4-bullet5': '24/7 Technical support for 1 year',
      'intro-modal-bundle4-bullet6': 'Free domain registration',
      'intro-modal-bundle4-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle4-bullet8': '1.5GB storage',
      'intro-modal-bundle4-bullet14': 'User manual',
      'intro-modal-bundle4-bullet9': '2 rounds of changes to the site',
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
      'navbar-callus': 'LLAMA AL (55)22596898',
      /* HERO */
      'hero-title': 'Diseño y animación con una base tecnológica sólida',
      'hero-desc1': 'Trabajo Ágil Con Entregas Rápidas Según El Proyecto',
      'hero-desc2': 'Obtén un Presupuesto Gratis y Rápido',
      'hero-desc3': 'Entrega De Sitios Web Con Diseño Responsivo En Menos De 3 Días',
      'hero-desc4': 'Soporte 24/7',
      /* FORM */
      'form-title': 'Cuéntanos tu proyecto, un experto te atenderá',
      'form-desc': 'Para una cotización gratuita, llena la siguiente forma o llámanos.',
      /* PACKS */
      'packs-title': '¿Necesitas generar o mejorar la imagen de tu negocio?',
      /* CONTACT SECTION */
      'section-contact': 'Contáctanos',
      'section-contact-address': '🏡 Dirección',
      'section-contact-phone': '📞 Teléfono',
      'section-contact-time': '🕖 Horario',
      'section-contact-time-montue': 'Lunes - Jueves:',
      'section-contact-time-fri': 'Viernes:',
      'section-contact-time-fri-desc': '¿Trabajas los viernes?',
      'section-contact-time-weekend': 'Sábado y Domingo:',
      'section-contact-time-weekend-desc': 'No preguntes',
      /* SERVICES SECTION */
      'intro-packs': 'Web services',
      'intro-modal-quote': 'Cotiza',
      'intro-modal-bundle1': 'Personal',
      'intro-modal-bundle1-bullet1': 'Hasta milochomil páginas estáticas',
      'intro-modal-bundle1-bullet2': 'Diseño adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle1-bullet3': 'Diseño  100% personalizado',
      'intro-modal-bundle1-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle1-bullet12': 'Hasta 20 cuentas de correo @tu.dominio',
      'intro-modal-bundle1-bullet10': 'Hasta 5 formularios de contacto',
      'intro-modal-bundle1-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle1-bullet5': '1 año de cambios a banners, imágenes, y textos',
      'intro-modal-bundle1-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle1-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle1-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle1-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      'intro-modal-bundle2': 'Negocio',
      'intro-modal-bundle2-bullet1': 'Hasta 15 páginas estáticas',
      'intro-modal-bundle2-bullet2': 'Diseño adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle2-bullet3': 'Diseño  100% personalizado',
      'intro-modal-bundle2-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle2-bullet12': 'Cuentas de correo ilimitadas @tu.dominio, ligadas a Gmail o Outlook',
      'intro-modal-bundle2-bullet10': 'Todos los formularios de contacto que se requieran',
      'intro-modal-bundle2-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle2-bullet5': '1 año de cambios a banners, imágenes, y textos',
      'intro-modal-bundle2-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle2-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle2-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle2-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      'intro-modal-bundle3': 'Página editable',
      'intro-modal-bundle3-bullet1': 'Hasta 5 páginas estáticas',
      'intro-modal-bundle3-bullet13': 'Editor de contenidos',
      'intro-modal-bundle3-bullet2': 'Diseño  adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle3-bullet3': 'Diseño 100% personalizado',
      'intro-modal-bundle3-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle3-bullet12': 'Cuentas de correo ilimitadas @tu.dominio, ligadas a Gmail o Outlook',
      'intro-modal-bundle3-bullet10': 'Todos los formularios de contacto que se requieran',
      'intro-modal-bundle3-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle3-bullet5': '1 año de soporte técnico y resolución de dudas',
      'intro-modal-bundle3-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle3-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle3-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle3-bullet14': 'Manual de usuario',
      'intro-modal-bundle3-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      'intro-modal-bundle4': 'E-commerce',
      'intro-modal-bundle4-bullet1': 'Hasta 5 páginas estáticas',
      'intro-modal-bundle4-bullet13': 'Editor de contenidos',
      'intro-modal-bundle4-bullet15': 'Tienda en linea',
      'intro-modal-bundle4-bullet16': 'Catálogo y editor de productos',
      'intro-modal-bundle4-bullet17': 'Pago con tarjeta y PayPal',
      'intro-modal-bundle4-bullet2': 'Diseño adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle4-bullet3': 'Diseño 100% personalizado',
      'intro-modal-bundle4-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle4-bullet12': 'Cuentas de correo ilimitadas @tu.dominio, ligadas a Gmail o Outlook',
      'intro-modal-bundle4-bullet10': 'Todos los formularios de contacto que se requieran',
      'intro-modal-bundle4-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle4-bullet5': '1 año de soporte técnico y resolución de dudas',
      'intro-modal-bundle4-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle4-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle4-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle4-bullet14': 'Manual de usuario',
      'intro-modal-bundle4-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
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
