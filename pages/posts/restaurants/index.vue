
<template>
  <article>
    <div class="hero-banner restaurant">
      <h1 class="page-title">
          <img src="~assets/icons/category_restaurants.svg" alt="restaurants">

          RESTAURANTS <span></span>
      </h1>
    </div>
    <PostGrid :posts="category"></PostGrid>
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
