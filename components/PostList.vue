<template>
  <section class="post-list" v-if="post">
    <!--        <div class="related-post flex">-->

    <!--          <div>{{article.fields.relatedArticles[index - 1].fields.title}}</div>-->
    <div class="post-container" v-for="(article, index) in post" v-bind:key="index"
    >
      <nuxt-link v-if="article.fields.slug" :to="'/posts/' + article.fields.slug" class="related-post flex between">
        <img v-if="article.fields.thumbnail" loading="lazy" class="pc img-box" :src="`${article.fields.thumbnail.fields.file.url}?fit=thumb&w=302&h=202`" alt="">
        <img v-if="article.fields.thumbnail" loading="lazy" class="sp img-box" :src="`${article.fields.thumbnail.fields.file.url}?fit=thumb&w=210&h=212`" alt="">

        <!--            <p>{{article.fields.title}}</p>-->
        <div class="flex column between left">
          <div class="txt-box">
            <p class="green sp" v-if="article.fields.category">{{ article.fields.category }}</p>
            <h3 v-if="article.fields.title" class="strong">{{ article.fields.title }}</h3>
            <p v-if="article.fields.description" class="pc small green"><span class="normal">{{ article.fields.description }}</span></p>
          </div>

          <p class="sp" v-if="article.fields.author">By {{ article.fields.author.fields.name }}</p>


          <!--              <Button text="続きを読む" color="black" :link="`${article.fields.slug}`"></Button>-->
        </div>

      </nuxt-link>
      <!--        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="link"></nuxt-link>-->
    </div>
  </section>
</template>

<script>
    import Button from "./Button";
    export default {
        components: {Button},
        props: ['post']
    }
</script>


<style lang="scss" >
  .post-list{
    width: get-vw(620px);
    margin: auto;
    @media screen and (max-width: 768px){
      width: responsive-vw(326px);
      margin: 0 auto responsive-vw(78px);
    }
    h2, h3{
      font-size: get-vw(18px);
      line-height: 1.25;
      font-weight: 700;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(14px);
        margin-top: responsive-vw(11px);
      }
    }
    h2{
      margin-bottom: get-vw(15px);
      @media screen and (max-width: 768px){
        font-weight: 500;
      }
    }
    .green{
      color: $main-color;
      text-transform: uppercase;
    }
    .normal{
      color: #191919;
    }
    p{
      font-size: get-vw(14px);
      font-weight: 200;
      letter-spacing: 0.35px;
      color: #191919;
      margin-top: get-vw(10px);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(12px);
      }
    }
    a:hover{
      color: $main-color;
    }
    .related-post{
      gap: get-vw(46px);
    }
    .post-container{
      border-bottom: 1px solid #d9d9d9;
      /*margin-bottom: get-vw(15px);*/
      padding: get-vw(21px) 0;
      @media screen and (max-width: 768px){
        /*margin-bottom: responsive-vw(15px);*/
        padding: responsive-vw(15px) 0;
      }
      &:last-child{
        /*border-bottom: none;*/
      }
      &:first-child{
        /*border-top: 1px solid #d9d9d9;*/
        margin-top: responsive-vw(49px);
      }
    }
    .left{
      width: 80%;
      @media screen and (max-width: 768px){
        width: 65%;
      }
    }
    img{
      @media screen and (max-width: 768px){
        @include res-width-height(105px, 106px);
      }
    }
  }

</style>

