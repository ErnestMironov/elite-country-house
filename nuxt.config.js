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
      { name: 'yandex-verification', content: 'd5d8bc9d179f8998' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
      },
      {
        hid: 'bookingWidget',
        src: 'https://realtycalendar.ru/webpack/application.js?_t=9058a171d7fb2c4af6cb',
        defer: true,
      },
      {
        type: 'text/javascript',
        innerHTML: `
           (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
			m[i].l=1*new Date();
			for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
			k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(95554258, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
			});
        `,
      },
    ],
    noscript: [
      {
        innerHTML: `
        <div><img src="https://mc.yandex.ru/watch/95554258" style="position:absolute; left:-9999px;" alt="" /></div>
        `,
      },
    ],
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
    'animate.css/animate.css',
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
