
<template>
  <article>
    <div class="hero-banner nutrition">
      <h1 class="page-title">
          <img src="~assets/icons/category_nutrition.svg" alt="nutrition">
        NUTRITION
      </h1>
    </div>
    <PostGrid :posts="category"></PostGrid>

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
            title: '栄養の知識をつける'
        },
        layout: 'article',
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
                order: '-fields.publishDate',
                limit: 1000
            }).then(entries => {
                const data = entries.items;
                const today = new Date();

                const posts = data.filter(function(item){
                    let published = new Date(item.fields.publishDate);
                    return published < today
                });
                const category = posts.filter(function (item) {
                    return item.fields.category === 'nutrition'
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
        // validate(data){
        //   console.log(data);
        // }
    }
</script>
