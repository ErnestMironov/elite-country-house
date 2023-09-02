export default {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Гедонист',
    htmlAttrs: {
      lang: 'ru',
	},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
		{ name: 'format-detection', content: 'telephone=no' },
	  { name: 'yandex-verification', content: 'bec704d007def96a' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'swiper/css/swiper.css',
    '~/assets/styles/reset.css',
    '~/assets/fonts/fonts.css',
    '~/assets/styles/scss/components.scss',
    '~/assets/styles/scss/common.scss',
    '~/assets/styles/scss/_ui.scss',
    '~/assets/styles/scss/_colors.scss',
    '~/assets/styles/main.css',
    'animate.css/animate.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', '@nuxtjs/markdownit', '@nuxtjs/device'],

  http: {
    baseURL: 'https://admin.hedonistclub.ru/api/',
  },

  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  server: {
    host: '0',
    port: 2222,
  },
}
