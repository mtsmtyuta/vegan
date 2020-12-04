<template>
  <section class="related-posts">
    <h4 class="">こちらもオススメ</h4>
      <div v-for="{post, index} in posts"
           :key="index"
      >
          <div class="related-post flex">
            <img loading="lazy" class="img-box" :src="`${post.fields.thumbnail.fields.file.url}?fit=thumb&w=660&h=504`" alt="">
            <p class="strong">{{ post.fields.title }}</p>
            <p class="">{{ post.fields.description }}</p>
            <Button text="続きを読む" :link="`${post.fields.slug}`"></Button>
          </div>
<!--        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="link"></nuxt-link>-->
      </div>
  </section>
</template>

<script>
    import Button from "./Button";
    export default {
        components: {Button},
        props: ['posts']
    }
</script>


<style lang="scss" >

</style>

