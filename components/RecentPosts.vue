<template>
  <div class="recent-posts ">
<!--       data-aos="fade-up"-->
<!--       data-aos-duration="500"-->
<!--       data-aos-delay="0"-->
<!--  >-->

    <div class="comp-section-title">
      <h2 class="en section-title">NEW <br class="sp">ARTICLES</h2>
      <hr>
      <h3>最新の記事を見る</h3>
    </div>

    <Posts :posts="posts"></Posts>
    <Button link="/posts" text="VIEW MORE" color="black" />

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

<style lang="scss">
  .recent-posts{
    .comp-section-title{
      margin: get-vw(85px) auto;
      @media screen and (max-width: 768px){
        margin: responsive-vw(57px) auto responsive-vw(31px);
      }
    }
    div.button{
      margin: get-vw(85px) auto;
      border: 1px solid #cbcbcb;
      @media screen and (max-width: 768px){
        margin: 19vw auto responsive-vw(120px);
      }
    }
    @media screen and (max-width: 768px){
      .slick-track{
        height: responsive-vw(312px);
      }
    }
  }
</style>
