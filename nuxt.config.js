// ./nuxt.config.js
// require('dotenv').config()
import dotenv from "dotenv";
const env = dotenv.config();
// import client from "./plugins/contentful";
const contentful = require("contentful");
// const config = require('./.contentful.json')
const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  // timeout: 1000000
});

const dynamicRoutes = async () => {
  const post = client
    .getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID
    })
    .then(entries => {
      console.log("Entries:", entries.items); // Log the entries
      return entries.items
        .map(entry => {
          if (entry && entry.fields && entry.fields.slug) {
            console.log("Valid entry:", entry); // Log valid entries
            return `posts/${entry.fields.slug}`;
          } else {
            console.error("Invalid entry:", entry); // Log invalid entries
            return null;
          }
        })
        .filter(Boolean); // Filter out invalid entries
    });
  return Promise.all([post]).then(values => {
    return [...values[0]];
  });
};

// const dynamicRoutes = async () => {
//   const post = client
//     .getEntries({
//       content_type: process.env.CTF_BLOG_POST_TYPE_ID
//     })
//     .then(entries => {
//       return [...entries.items.map(entry => `posts/${entry.fields.slug}`)];
//     });
//   return Promise.all([post]).then(values => {
//     return [...values[0]];
//   });
// };

module.exports = {
  mode: "static",
  head: {
    title:
      "OX(オックス）| 菜食・ホールフード中心生活で健康・パフォーマンス向上を目指す人のためのWebマガジン",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "OXは、菜食・ホールフード中心のライフスタイルに興味があるけれど、何から始めたらいいか分からないという方の疑問に答えます。"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content:
          "OX(オックス）| 菜食・ホールフード中心生活で健康・パフォーマンス向上を目指す人のためのWebマガジン"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://ox-vegan.jp" },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "OX(オックス）| 菜食・ホールフード中心生活で健康・パフォーマンス向上を目指す人のためのWebマガジン"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "菜食・ホールフード中心のライフスタイルに興味があるけれど、何から始めたらいいか分からないという方の疑問に答えます。"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ox-vegan.jp/ogp.png"
      },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: "https://use.typekit.net/dng4qey.css" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
      }
    ]
  },
  generate: {
    // routes: dynamicRoutes,
    routes() {
      let postRoutes = client
        .getEntries({
          content_type: process.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [...entries.items.map(entry => `posts/${entry.fields.slug}`)];
        });
      return Promise.all([postRoutes]).then(values => {
        return [...values[0]];
      });
    },
    fallback: true,
    interval: 1000
  },
  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "~/plugins/aos.js", mode: "client" },
    { src: "~/plugins/contentful.js" }
  ],

  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
    [
      "nuxt-gmaps",
      {
        key: process.env.GOOGLE_MAP_API_KEY
      }
    ],
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-167556404-1"
      }
    ]
  ],
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://ox-vegan.jp",
    routes() {
      let postRoutes = client
        .getEntries({
          content_type: process.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [...entries.items.map(entry => `posts/${entry.fields.slug}`)];
        });
      return Promise.all([postRoutes]).then(values => {
        return [...values[0]];
      });
    }
  },

  styleResources: {
    scss: [
      "assets/styles/variables.scss",
      "assets/styles/animation.scss",
      "assets/styles/mixins.scss"
    ]
  },

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_RESTAURANTS_POST_TYPE_ID: process.env.CTF_RESTAURANTS_POST_TYPE_ID,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: [
    "@/assets/styles/main.scss",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "aos/dist/aos.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
  ]
};

// console.log(process.env);
