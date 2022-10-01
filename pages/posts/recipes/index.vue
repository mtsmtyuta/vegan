
<template>
  <article>
    <div class="hero-banner recipe">
      <h1 class="page-title">
        RECIPES
      </h1>
    </div>
    <PostGrid :posts="category"></PostGrid>
    <div class="section-recent">
      <RecentPosts :posts="posts"></RecentPosts>
    </div>
  </article>
</template>

<script>
    import Posts from "../../../components/Posts";
    import PostGrid from "../../../components/PostGrid";
    import RecentPosts from "../../../components/RecentPosts";
    import client from "~/plugins/contentful";

    export default {
        head : {
            title: 'ヴィーガンのレシピ'
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
                // 'fields.category': 'recipes'
            }).then(entries => {
                const data = entries.items;
                const today = new Date();

                const posts = data.filter(function(item){
                    let published = new Date(item.fields.publishDate);
                    return published < today
                });
                const category = posts.filter(function (item) {
                    return item.fields.category === 'recipes'
                });
                return {
                    category: category,
                    posts: posts
                }
            }).catch(console.error)
        },
    }
</script>
