<template>
  <article>
    <div class="hero-banner restaurant">
      <h1 class="page-title">
        <img src="~assets/icons/category_restaurants.svg" alt="restaurants" />
        RESTAURANTS <span></span>
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
    title: "Restaurants",
    description:
      "ヴィーガン向けの飲食店は日本ではまだまだ多くはありません。私たちが見つけたオススメのお店を紹介していきます。"
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
        "fields.category": "restaurants",
        order: "-fields.publishDate",
        limit: 1000
      })
      .then(entries => {
        const today = new Date();
        const posts = entries.items.filter(item => {
          let published = new Date(item.fields.publishDate);
          return published < today;
        });
        return {
          category: posts
        };
      })
      .catch(error => {
        console.error(error);
        throw new Error(
          "Failed to fetch restaurant posts. Please try again later."
        );
      });
  }
};
</script>

<style lang="scss">
.section-recent {
  width: 80vw;
  margin: get-vw(115px) auto 0;
  border-top: 1px solid #b7b7b7;
  @media screen and (max-width: 767px) {
    margin: responsive-vw(76px) auto 0;
    width: responsive-vw(326px);
    .section-title {
      margin-top: responsive-vw(78px);
    }
  }
}
</style>
