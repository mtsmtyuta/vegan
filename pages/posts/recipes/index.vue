<template>
  <article>
    <div class="hero-banner recipe">
      <h1 class="page-title">
        <img src="~assets/icons/category_recipes.svg" alt="recipes" />
        RECIPES
      </h1>
    </div>
    <PostGrid :posts="category"></PostGrid>
  </article>
</template>

<script>
import PostGrid from "../../../components/PostGrid";
import client from "~/plugins/contentful";

export default {
  head: {
    title: "ヴィーガンのレシピ"
  },
  layout: "article",
  data() {
    return {
      category: []
    };
  },
  components: {
    PostGrid
  },
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.category": "recipes",
        order: "-fields.publishDate",
        limit: 1000
      })
      .then(entries => {
        const today = new Date();
        return {
          category: entries.items.filter(
            item => new Date(item.fields.publishDate) < today
          )
        };
      })
      .catch(error => {
        console.error(error);
        throw new Error(
          "Failed to fetch recipe posts. Please try again later."
        );
      });
  }
};
</script>
