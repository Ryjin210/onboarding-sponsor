const title = 'Onboarding Sponsors'
const description =
  'You can help by donating the cost of OSS projects gas fees and help make their crypto experience an amazing journey.'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:site_name', content: title },
      {
        property: 'og:url',
        content: 'https://onboarding-sponsors.devprotocol.xyz',
      },
      {
        property: 'og:description',
        content: description,
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content:
          'https://onboarding-sponsors.devprotocol.xyz/images/eyecatch.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@devprtcl' },
      {
        name: 'twitter:description',
        content: description,
      },
      { name: 'twitter:title', content: title },
      {
        name: 'twitter:image',
        content:
          'https://onboarding-sponsors.devprotocol.xyz/images/eyecatch.png',
      },
    ],
    link: [
      {
        rel: 'preload',
        href: 'https://devstaticasset.azureedge.net/font/ABCWhyte-Regular.woff2',
        as: 'font',
      },
      {
        rel: 'preload',
        href: 'https://devstaticasset.azureedge.net/font/ABCWhyteInktrap-Bold.woff2',
        as: 'font',
      },
      {
        rel: 'preload',
        href: 'https://devstaticasset.azureedge.net/font/ABCWhyteInktrap-Regular.woff2',
        as: 'font',
      },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap',
        as: 'style',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/css/styles.scss' }, 'ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  server: {
    host: '0.0.0.0',
  },

  env: {
    REDIRECT_URI: process.env.REDIRECT_URI,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GET_GENDOU_API_URL: process.env.GET_GENDOU_API_URL,
    INFURA_ID: process.env.INFURA_ID,
  },
}
