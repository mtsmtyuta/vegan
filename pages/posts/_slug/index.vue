<template>
  <article>
    <div v-if="currentPost.fields.topImage" class="single-post-page">
      <SinglePost :post="currentPost" />
      <RelatedPosts :post="currentPost"></RelatedPosts>
    </div>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </article>
</template>

<script>
import SinglePost from "../../../components/SinglePost";
import Author from "../../../components/Author";
// import SinglePostNoImage from "../../../components/SinglePostNoImage";
import VueMarkdown from "vue-markdown";
// import {createClient} from '~/plugins/contentful.js'
import RecentPosts from "../../../components/RecentPosts";
// const client = createClient()
import client from "~/plugins/contentful";
import RelatedPosts from "../../../components/RelatedPosts";

export default {
  layout: "article",
  head() {
    return {
      title: this.currentPost.fields.title,
      meta: [
        { content: this.currentPost.fields.description },
        { hid: "description", content: this.currentPost.fields.description },
        {
          hid: "og:description",
          property: "og:description",
          content: this.currentPost.fields.description
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ox-vegan.jp/" + this.currentPost.fields.slug
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https:" + this.currentPost.fields.topImage.fields.file.url
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.currentPost.fields.title
        },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },

  data() {
    return {
      allPosts: [],
      currentPost: []
    };
  },
  components: {
    RelatedPosts,
    RecentPosts,
    VueMarkdown,
    SinglePost,
    Author
    // SinglePostNoImage
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug": params.slug,
        limit: 1
      })
      .then(entries => {
        if (entries.items.length > 0) {
          return {
            currentPost: entries.items[0]
          };
        } else {
          return {
            currentPost: null
          };
        }
      })
      .catch(console.error);
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
