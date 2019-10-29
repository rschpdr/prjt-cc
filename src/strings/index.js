const PT = 'pt';
const EN = 'en';

export default {
  supportedLangs: [PT, EN],
  ui: {
    sidebarMenu: {
      home: {
        pt: 'Início',
        en: 'Home'
      },
      about: {
        pt: 'Sobre',
        en: 'About'
      },
      portfolio: {
        pt: 'Portfolio',
        en: 'Portfolio'
      },
      contact: {
        pt: 'Contato',
        en: 'Contact'
      }
    }
  },
  pages: {
    about: {
      secondaryTitle: {
        pt: 'sobre',
        en: 'about'
      },
      title1: {
        pt: 'Olá, meu nome é Carolina,',
        en: 'Who am I?'
      },
      title2: {
        pt: 'mas pode me chamar de Carol!',
        en: ''
      },
      paragraphs: [
        {
          lang: {
            pt: 'Visual Designer |  Illustrator',
            en: ''
          },
          tag: 'h4'
        },
        {
          lang: {
            pt:
              'Sou formada em design gráfico pela CEUNSP e moro no interior de São Paulo. Desenvolvo para as mais diversas áreas do design, adoro resolver problemas e sou apaixonada por ilustração. Também sou dona de gatos, suculentas e colecionadora de sketchbooks. Caso queira saber mais, você pode baixar ',
            en: ''
          },
          tag: 'p',
          class: 'content__paragraph content__paragraph--inline'
        },
        {
          lang: {
            pt: 'meu currículo aqui.',
            en: ''
          },
          tag: 'a',
          href:
            'https://drive.google.com/open?id=1Z6Bug3t2dgQy4RonBa2vv6epDw7BqIM8',
          class: 'content__paragraph content__paragraph--inline'
        },
        {
          lang: {
            pt: 'Skills',
            en: ''
          },
          tag: 'h4'
        },
        {
          lang: {
            pt: 'UI Design • Ilustração • Identidade Visual • Motion Design',
            en: ''
          },
          tag: 'p'
        }
      ],
      contactLink: {
        pt: 'ENTRE EM CONTATO',
        en: ''
      }
    },
    contact: {
      header: {
        pt: 'Contato',
        en: 'Work with me!'
      },
      inputPlaceholders: {
        name: {
          pt: 'Nome',
          en: 'Name'
        },
        email: {
          pt: 'E-mail',
          en: 'E-mail'
        },
        message: {
          pt: 'Assunto',
          en: 'Message'
        }
      },
      inputErrorMessages: {
        name: {
          pt: 'Por favor preencha um nome',
          en: 'Name is a required field'
        },
        email: {
          pt: 'Por favor preencha um e-mail',
          en: 'E-mail is a required field'
        },
        message: {
          pt: 'Por favor preencha o assunto',
          en: 'Message is a required field'
        }
      },
      submitButton: {
        pt: 'Enviar',
        en: 'Send'
      },
      submitMessages: {
        success: {
          pt: 'Sua mensagem foi enviada! Logo entrarei em contato ;)',
          en: "Your message has been sent! I'll get in touch soon ;)"
        },
        error: {
          pt:
            'Desculpe! Algo deu errado e sua mensagem não pôde ser enviada. Por favor, me avise pelas redes sociais ou e-mail.',
          en:
            'Sorry! There was an error and your message could not be sent. Please, contact me through social networks or e-mail.'
        }
      }
    }
  }
};
