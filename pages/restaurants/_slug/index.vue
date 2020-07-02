<template>
  <article>
    <div class="single-post-page">
      <Restaurant :restaurant="currentPost"></Restaurant>
    </div>
    <RecentPosts :posts="allPosts"></RecentPosts>
  </article>
</template>
<script>

    // import {createClient} from '~/plugins/contentful.js'
    import Restaurant from '~/components/Restaurant.vue'
    import Author from "../../../components/Author";
    import RecentPosts from "../../../components/RecentPosts";
    import VueMarkdown from 'vue-markdown'
    // import {createClient} from '~/plugins/contentful.js'
    import client from "~/plugins/contentful";
    //
    // const client = createClient()
    // const client = createClient()
    export default {
        head () {
            return {
                title: this.currentPost.fields.name,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.currentPost.fields.description
                    }
                ]
            }
        },
        data () {
            return {
                allPosts: [],
                currentPost: [],
                articles: []
            }
        },
        components: {
            RecentPosts,
            VueMarkdown,
            Restaurant,
            Author
            // SinglePostNoImage
        },

        asyncData ({ env, params }) {
            // const contents = async () =>{
            //     const post = client.getEntries({
            //         'content_type': env.CTF_BLOG_POST_TYPE_ID
            //     }).then((entries) => {
            //         const posts = entries.items
            //     })
            //
            //     const restaurant = client.getEntries({
            //         'content_type': env.CTF_RESTAURANTS_POST_TYPE_ID
            //     }).then((entries) => {
            //         const restaurants = entries.items
            //         const current = restaurants.filter(function (item) {
            //             return item.fields.slug === params.slug
            //         })
            //     })
            //     return Promise.all([post, restaurant]).then(values => {
            //         return [...values[0], ...values[1]]
            //     })
            // }
            return client.getEntries({
                // 'content_type': 'restaurants',
                'content_type': env.CTF_RESTAURANTS_POST_TYPE_ID,
                // order: '-fields.publishDate'
            }).then(entries => {
                const posts = entries.items
                const current = posts.filter(function (item) {
                    return item.fields.slug === params.slug
                })
                return {
                    allPosts: posts,
                    currentPost: current[0]
                }
            }).catch(console.error)
        },
    }
</script>
