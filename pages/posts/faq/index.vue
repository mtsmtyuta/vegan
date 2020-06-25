
<template>
  <article>
    <div class="hero-banner faq">
      <h1 class="page-title">
        FAQ
      </h1>
    </div>
    <PostGrid :posts="category"></PostGrid>

    <RecentPosts class="pc" :posts="posts"></RecentPosts>
  </article>
</template>

<script>
    import Posts from "../../../components/Posts";

    import VueMarkdown from 'vue-markdown'
    // import {createClient} from '~/plugins/contentful.js'
    import PostGrid from "../../../components/PostGrid";
    import RecentPosts from "../../../components/RecentPosts";
    import client from "~/plugins/contentful";

    export default {
        head : {
            title: 'ヴィーガンについてよくある質問'
        },
        data () {
            return {
                posts: []
            }
        },
        components: {
            RecentPosts,
            PostGrid,
            Posts
        },
        asyncData ({ env }) {
            return client.getEntries({
                'content_type': env.CTF_BLOG_POST_TYPE_ID,
                order: '-fields.publishDate'
            }).then(entries => {
                const posts = entries.items
                const category = posts.filter(function (item) {
                    // return item.fields.category === 'nutrition'
                    return item.fields.category === 'faq'
                })
                return {
                    category: category,
                    posts: posts
                }
            }).catch(console.error)
        },
        // computed: {
        //     dateOrder: function () {
        //         for (let i = 0; i < this.allPosts.length; i++) {
        //             if (this.allPosts[i].fields.publishDate === this.currentPost.fields.publishDate) {
        //                 return i
        //             }
        //         }
        //     },
        //     nextPost: function () {
        //         if (this.dateOrder === 0) {
        //             return false
        //         } else {
        //             return this.allPosts[this.dateOrder - 1]
        //         }
        //     },
        //     prevPost: function () {
        //         if (this.dateOrder === this.allPosts.length - 1) {
        //             return false
        //         } else {
        //             return this.allPosts[this.dateOrder + 1]
        //         }
        //     }
        // },
    }
</script>
