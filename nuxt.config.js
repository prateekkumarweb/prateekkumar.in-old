export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Prateek Kumar | Developer | Rust and JavaScript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Developer | Rust and JavaScript',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans&display=swap',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        body: true,
        async: true,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/fontawesome.js', '~/plugins/disqus.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/gtm',
      '@nuxtjs/pwa',
      {
        manifest: {
          background_color: '#ffffff',
          theme_color: '#123456',
          icons: [
            {
              src: '/images/logo-192.png',
              type: 'image/png',
              sizes: '192x192',
            },
            {
              src: '/images/logo-512.png',
              type: 'image/png',
              sizes: '512x512',
            },
          ],
        },
      },
    ],
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  gtm: {
    id: 'GTM-TH6BJ98',
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      remarkPlugins: ['remark-emoji'],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
