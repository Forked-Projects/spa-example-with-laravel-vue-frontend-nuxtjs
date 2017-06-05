module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Laravel ❤ VueJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http://spa-laravel.codingweb.tw/api' : 'http://spa-laravel.dev/api')
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios', 'vue-awesome','vuetify']
  },
  plugins: ['~plugins/vue-awesome','~plugins/vuetify']
}
