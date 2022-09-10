require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  devtools: true,
  target: 'static',
  server: {
    port: process.env.PORT,
    host: 'localhost' // default: localhost
  },
  env: {
    baseUrl:  process.env.BASE_URL || ''
  },
  head: {
    title: 'CMS-DEMO',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap'
      },
    ],
  },
  loading: '~/components/layout/loading/pageLoading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/style.scss',
    '@/assets/sass/common.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: {
    base: process.env.BASE_ROUTER || '/',
    prefetchLinks: false,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {selector: to.hash}
      } else {
        return {x: 0, y: 0}
      }
    }
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/axios.js'},
    {src: '~/plugins/element-ui.js'},
    {src: "@/plugins/v-show-slide.js", mode: 'client'},
    {src: '@/plugins/vClickOutside', mode: 'client'},
    {src: '@/plugins/vue-awesome-swiper', mode: 'client'},
    {src: '@/plugins/vue-draggable.js', mode: 'client'},
    {src: "@/plugins/vue-popover", mode: 'client'},
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['@nuxtjs/i18n', {
      locales: [{
        code: 'tw',
        iso: 'Chinese'
      }, {
        code: 'en',
        iso: 'English'
      }],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: true
      },
      defaultLocale: 'tw',
      vueI18n: {
        fallbackLocale: 'tw',
        silentFallbackWarn: true,
        baseUrl: 'http://localhost:3000/',
        messages: {
          'en': require('./locales/en.json'),
          'tw': require('./locales/tw.json'),
        },
        detectBrowserLanguage: {
          useCookie: false,
          detectBrowserLanguage: true,
          cookieCrossOrigin: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
          alwaysRedirect: true,
        }
      }
    }],
  ],
  axios: {
    baseURL: 'https://designcomb.github.io/dcomb-membership-cms-demo/'
  },
  styleResources: {
    sass: [
      './assets/sass/_variables.scss',
    ],
    scss: [
      './assets/sass/style.scss'
    ]
  },
  svgSprite: {
    // manipulate module options
  },
  build: {
    vendor: ['element-ui', 'vue-i18n'],
  },
}
