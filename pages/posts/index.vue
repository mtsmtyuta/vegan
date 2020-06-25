<template>
  <article>
    <div class="hero-banner top">
      <h1 class="page-title">
        ARCHIVES
      </h1>
    </div>
    <PostGrid :posts="posts"></PostGrid>
  </article>
</template>
<script>
    import Posts from "../../components/Posts";
    import PostGrid from "../../components/PostGrid";
    import RecentPosts from "../../components/RecentPosts";
    // import {createClient} from '~/plugins/contentful.js'
    import client from "../../plugins/contentful";
    //
    // const client = createClient()
    export default {
        head: {
            title: 'アーカイブ'
        },
        components: {
            Posts,
            PostGrid,
            RecentPosts
        },
        data () {
            return {
                posts: []
            }
        },
        asyncData ({ env }) {
            return client.getEntries({
                'content_type': env.CTF_BLOG_POST_TYPE_ID,
                order: '-fields.publishDate'
            }).then(entries => {
                return {
                    posts: entries.items
                }
            }).catch(console.error)
        }
    }
</script>
