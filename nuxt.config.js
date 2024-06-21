export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-prac-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: '/assets/css/bootstrap.min.css', rel: 'stylesheet', type: 'text/css' },
      { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css', rel: 'stylesheet', type: 'text/css' },
      { href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css', rel: 'stylesheet', type: 'text/css' },
      { href: '/assets/css/AdminLTE.min.css', rel: 'stylesheet', type: 'text/css' },
      { href: '/assets/css/_all-skins.min.css', rel: 'stylesheet', type: 'text/css' },
      { href: '/assets/css/style.css', rel: 'stylesheet', type: 'text/css' },
      { href: '/assets/css/dynamo/dynamo-common.css', rel: 'stylesheet', type: 'text/css' },
    ],
    script: [
      { src: 'http://code.jquery.com/jquery-2.1.4.min.js', type: 'text/javascript' },
      { src: '/assets/js/bootstrap.min.js', type: 'text/javascript' },
      { src: '/assets/js/jquery.slimscroll.min.js', type: 'text/javascript' },
      { src: '/assets/js/fastclick.min.js', type: 'text/javascript' },
      { src: '/assets/js/app.min.js', type: 'text/javascript' },
      { src: '/assets/js/demo.js', type: 'text/javascript' },
    ],
  },

  server: {
    port: 10012,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
