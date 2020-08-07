module.exports = {
  title: 'Tailwindcss',
  description: 'Tailwindcss con bluuweb',
  base: '/tailwindcss/',
  locales: {
    '/': {
      lang: 'es-ES'
    }
  },
  themeConfig: {
    nav: [{
        text: 'Guía',
        link: '/'
      },
      // { text: 'Guia', link: '/docs/' },
      {
        text: 'Youtube',
        link: 'https://youtube.com/bluuweb'
      },
      {
        text: 'Curso Vue.js',
        link: 'http://curso-vue-js-udemy.bluuweb.cl'
      },
      {
        text: 'Curso React.js',
        link: 'http://curso-react-js-udemy.bluuweb.cl'
      },
      {
        text: 'Curso Bootstrap',
        link: 'http://curso-bootstrap-4-udemy.bluuweb.cl'
      },
    ],
    sidebar: [
      '/',
      '/01-fundamentos/',
      '/02-grid/',
      '/03-personalizar/',
      '/04-flexbox/',
      '/05-components/',
      '/06-react/',
      '/07-animaciones/',
    ]
  }

}