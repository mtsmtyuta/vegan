
<template>
  <article>
    <div class="hero-banner restaurant">
      <h1 class="page-title">
        RESTAURANTS
      </h1>
    </div>
    <PostGrid :posts="category"></PostGrid>
    <RecentPosts class="pc" :posts="posts"></RecentPosts>
  </article>
</template>
<script>
    import Posts from "../../../components/Posts";
    import PostGrid from "../../../components/PostGrid";
    import RecentPosts from "../../../components/RecentPosts";
    import client from "~/plugins/contentful";

    export default {
        head: {
            title: 'Restaurants',
            description: 'ヴィーガン向けの飲食店は日本ではまだまだ多くはありません。私たちが見つけたオススメのお店を紹介していきます。'
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
                const posts = entries.items;
                const category = posts.filter(function (item) {
                    return item.fields.category === 'restaurants'
                });
                return {
                    category: category,
                    posts: posts
                }
            }).catch(console.error)
        },
    }
</script>
