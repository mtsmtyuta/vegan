
<template>
  <article>
    <div class="hero-banner recipe">
      <h1 class="page-title">
        RECIPES
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
                // 'fields.category': 'recipes'
            }).then(entries => {
                const posts = entries.items;
                const category = posts.filter(function (item) {
                    // return item.fields.category === 'nutrition'
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
