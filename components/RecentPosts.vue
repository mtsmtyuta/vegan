<template>
  <div class="recent-posts "
       data-aos="fade-up-mini"
       data-aos-duration="500"
       data-aos-delay="50"
  >

    <div class="comp-section-title">
      <h2 class="en-medi section-title">ARTICLES</h2>
      <hr>
      <h3>最新の記事を見る</h3>
    </div>

    <Posts :posts="posts"></Posts>
    <Button link="/posts" text="GO TO ARCHIVES" color="black" />

  </div>
</template>

<script>
  import Posts from "./Posts";
  import Button from "./Button";
    export default {
        props: ['posts'],
        components: {
            Posts,
            Button
        }
    }
</script>
