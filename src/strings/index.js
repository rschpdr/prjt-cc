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
      title: {
        pt: 'Quem sou eu?',
        en: 'Who am I?'
      },
      paragraphs: [
        {
          pt:
            'Olá, meu nome é Carolina e sou uma designer brasileira, e desde que nasci vivendo no interior de São Paulo.',
          en: ''
        },
        {
          pt:
            'Amo muito desenhar e criar, e desenvolvo para as mais diversas áreas do design. Possuo dois anos de experiência em web design e branding e mais de cinco em ilustração.',
          en: ''
        },
        {
          pt:
            'Me formei em design gráfico pela Ceunsp em 2017, e atualmente sou estudante de Motion Graphics.',
          en: ''
        },
        {
          pt:
            'Também sou dona de gatos, suculentas e colecionadora de sketchbooks.',
          en: ''
        },
        {
          pt:
            'Você também pode acompanhar meu trabalho por este site, Instagram, Dribbble ou Behance.',
          en: ''
        },
        {
          pt: 'Obrigada!',
          en: ''
        }
      ]
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
      }
    }
  }
};
