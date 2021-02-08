<template>
    <section class="related-posts" v-if="post.fields.relatedArticles">
      <h4 class="">関連記事</h4>
<!--        <div class="related-post flex">-->

<!--          <div>{{article.fields.relatedArticles[index - 1].fields.title}}</div>-->
      <div class="post-container" v-for="(article, index) in post.fields.relatedArticles" v-bind:key="index"
      >
          <nuxt-link v-if="article.fields.slug" :to="'/' + article.fields.slug" class="related-post flex between">
            <img v-if="article.fields.thumbnail" loading="lazy" class="img-box" :src="`${article.fields.thumbnail.fields.file.url}?fit=thumb&w=660&h=504`" alt="">

            <!--            <p>{{article.fields.title}}</p>-->
            <div class="flex column between left">
              <div class="txt-box">
            <p v-if="article.fields.title" class="strong">{{ article.fields.title }}</p>
            <p v-if="article.fields.description" class="pc small">{{ article.fields.description }}</p>
              </div>

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
  .related-posts{
    width: get-vw(620px);
    margin: auto;
    @media screen and (max-width: 768px){
      width: responsive-vw(360px);
      margin: auto;
    }
    /*.txt-box{*/
    /*}*/
    h4{
      border-bottom: 1px solid #d9d9d9;

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
      padding: get-vw(15px) 0;
      @media screen and (max-width: 768px){
        /*margin-bottom: responsive-vw(15px);*/
        padding: responsive-vw(15px) 0;
      }
      &:last-child{
        border-bottom: none;
      }
      &:first-child{
        border-top: 1px solid #d9d9d9;
      }
    }
    .left{
      width: 80%;
      @media screen and (max-width: 768px){
        width: 65%;
      }
    }
    img{
      width: get-vw(110px);
      height: get-vw(84px);
      /*margin-right: get-vw(10px);*/
      /*@media screen and (max-width: 768px){*/
      /*  margin-right: responsive-vw(10px);*/
      /*}*/

      @media screen and (max-width: 768px){
        @include res-width-height(110px, 91px);
      }
    }
  }

</style>

