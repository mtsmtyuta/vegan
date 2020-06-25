  // ./nuxt.config.js
  // require('dotenv').config()
  import dotenv from "dotenv";
const env = dotenv.config();
 // import client from "./plugins/contentful";
  const contentful = require('contentful')
  // const config = require('./.contentful.json')
  const client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    // timeout: 1000000
  })

const dynamicRoutes = async () =>{
    const post = client.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID
    }).then((entries) => {
      return [...entries.items.map(entry => `posts/${entry.fields.slug}`)]
    })

  const restaurant = client.getEntries({
    'content_type': process.env.CTF_RESTAURANTS_POST_TYPE_ID
  }).then((entries) => {
    return [...entries.items.map(entry => `restaurants/${entry.fields.slug}`)]
  })
  return Promise.all([post, restaurant]).then(values => {
    return [...values[0], ...values[1]]
  })
}

  module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
      title: 'OX(オックス）| ヴィーガンWebマガジン',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'OXは、ヴィーガンのライフスタイルに興味があるけれど、何から始めたらいいか分からないという方の疑問に答えます。' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", href: "https://use.typekit.net/dng4qey.css"}
      ]
    },
    generate: {
      // routes () {
        // let postRoutes =  client.getEntries({
        //   'content_type': config.CTF_BLOG_POST_TYPE_ID
        // }).then((entries) => {
        //   return [...entries.items.map(entry => `posts/${entry.fields.slug}`)]
        // })
        // let restaurantRoutes = client.getEntries({
        //   'content_type': config.CTF_BLOG_POST_TYPE_ID
        // }).then((entries) => {
        //   return [...entries.items.map(entry => `posts/${entry.fields.slug}`)]
        // })
        //
        // return Promise.all([postRoutes, restaurantRoutes]).then(values => {
        //   return [...values[0], ...values[1]]
        // })
      // },
      routes: dynamicRoutes,
      fallback: true
    },
    plugins: [
      { src: './plugins/vue-slick-carousel.js'
      // , mode: 'client'
    },
      { src: '~/plugins/aos.js', mode: 'client'},
      { src: '~/plugins/contentful.js'}
    ],


    modules: [
      '@nuxtjs/style-resources',
      ['nuxt-gmaps', {
        key: 'AIzaSyDZKnCkSgp4xlrJyJzd9tSfRAToeHfNFvE',
      }],
      ['@nuxtjs/google-analytics',
      {
        id: 'UA-167556404-1'
      }],
      // '@nuxtjs/dotenv'
    ],

    styleResources: {
      // your settings here
      scss: [
        'assets/styles/variables.scss',
        'assets/styles/animation.scss',
        'assets/styles/mixins.scss'
      ]
    },

    // env: env.parsed,
    env: {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
      CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
      CTF_RESTAURANTS_POST_TYPE_ID: process.env.CTF_RESTAURANTS_POST_TYPE_ID
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    buildModules: [
      '@nuxtjs/dotenv'
    ],
    /*
    ** Build configuration
    */
    build: {

      /*
      ** Run ESLint on save
      */
      extend (config, { isDev, isClient }) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    },
    css: [
      '@/assets/styles/main.scss',
      'vue-slick-carousel/dist/vue-slick-carousel.css',
      'aos/dist/aos.css'
    ]
  }

  console.log('nuxt.config: ' + process.env);
