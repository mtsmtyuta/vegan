
<template>
  <article>
    <div v-if="currentPost.fields.topImage" class="single-post-page">
      <SinglePost :post="currentPost"/>
      <Author :author="currentPost.fields.author"></Author>
      <RelatedPosts :post="currentPost"></RelatedPosts>

    </div>
    <RecentPosts :posts="allPosts"></RecentPosts>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>

<script>
  import SinglePost from "../../../components/SinglePost";
  import Author from "../../../components/Author";
  // import SinglePostNoImage from "../../../components/SinglePostNoImage";
    import VueMarkdown from 'vue-markdown'
    // import {createClient} from '~/plugins/contentful.js'
  import RecentPosts from "../../../components/RecentPosts";
    // const client = createClient()
  import client from "~/plugins/contentful";
  import RelatedPosts from "../../../components/RelatedPosts";

  export default {
        layout: 'article',
        head () {
            return {
                title: this.currentPost.fields.title,
                meta: [
                    {content: this.currentPost.fields.description},
                    { hid: 'description', content: this.currentPost.fields.description },
                    { hid: 'og:description', property: 'og:description', content: this.currentPost.fields.description },
                    { hid: 'og:url', property: 'og:url', content: 'https://ox-vegan.jp/' + this.currentPost.fields.slug },
                    { hid: 'og:image', property: 'og:image', content: 'https:' + this.currentPost.fields.topImage.fields.file.url  },
                    { hid: 'og:title', property: 'og:title', content: this.title },
                    { name: 'twitter:card', content: 'summary' },
                ]
            }
        },

        data () {
            return {
                allPosts: [],
                currentPost: []
            }
        },
        components: {
            RelatedPosts,
            RecentPosts,
            VueMarkdown,
            SinglePost,
            Author
            // SinglePostNoImage
        },
        asyncData ({ env, params }) {
            return client.getEntries({
                // 'content_type': 'article',
                'content_type': env.CTF_BLOG_POST_TYPE_ID,
                order: '-fields.publishDate'
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
        // layout: 'article'
        // validate(data){
        //   console.log(data);
        // }
    }
</script>

<style lang="scss">
  .single-post-page{
    background-color: #f2f2f2;
    /*margin-bottom: get-vw(87px);*/
    .content{
    @include font-jp;
    font-size: get-vw(15px);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.6;
    letter-spacing: get-vw(1.5px);
    text-align: left;
    color: #2e2e2e;
    @media screen and (max-width: 768px){
      font-size: responsive-vw(13px);
    }
    }

  }

</style>
