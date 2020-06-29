<script src="../nuxt.config.js"></script>
<template>
  <div class="single-post">
    <!--    <h1>slug is SLUG: {{ $route.params.slug }}</h1>-->
<!--    <img-->
<!--      :src="img"-->
<!--      :alt="alt"-->
<!--    >-->
    <div class="img-box hero"
         v-bind:style="{ backgroundImage: 'url(' + img +')' }"></div>



    <article class="section">
      <div class="headline">
        <h1 class="title has-text-centered">{{ title }}</h1>
        <p v-if="publishDate"  class="date">{{ publishDate }}</p>
      </div>
      <vue-markdown class="content">{{ body }}</vue-markdown>
    </article>
  </div>

</template>

<script>
    import VueMarkdown from 'vue-markdown'
    export default {
        components: {
            VueMarkdown
        },
        props: ['title', 'img', 'alt', 'publishDate', 'body']
    }
</script>

<style lang="scss">
  pre {
    white-space: unset;
  }

  .single-post{
    width: get-vw(620px);
    /*max-width: 620px;*/
    margin: auto;
    /*a,li{*/
    /*  font-size: get-vw(15px);*/
    /*  @media screen and (max-width: 1280px) {*/
    /*    font-size: 15px;*/
    /*  }*/
    /*  @media screen and (max-width: 768px){*/
    /*    font-size: responsive-vw(15px);*/
    /*  }*/
    /*}*/
    p{
      margin-bottom: get-vw(30px);
      /*font-size: get-vw(15px);*/
      /*@media screen and (max-width: 1280px) {*/
      /*  font-size: 15px;*/
      /*}*/
      /*@media screen and (max-width: 768px){*/
      /*  font-size: responsive-vw(15px);*/
      /*}*/
    }
    h2, h3{
      font-size: get-vw(20px);
      @media screen and (max-width: 1280px) {
        font-size: 20px;
      }
        @media screen and (max-width: 768px){
        font-size: responsive-vw(18px);
      }
    }
    a{
      color: rgb(46, 117, 212);
    }
    .title{
      font-size: get-vw(50px);
      line-height: 1.5;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(25px);
      }
    }
    .date{
      color: #999999;
      letter-spacing: 1px;
      font-size: get-vw(10px);
      @media screen and (max-width: 768px){
        font-size: responsive-vw(10px);
      }
    }
    .content{
      margin-top: get-vw(62px);
    }

    @media screen and (max-width: 768px){
      width: 100%;
    }
    ul{
      list-style: unset;
      padding-inline-start: get-vw(40px);
      padding-left: get-vw(40px);
    }
    .section{
      @media screen and (max-width: 768px){
        width: responsive-vw(310px);
        margin: auto;
      }
    }
  }
  .hero{
    background-size: cover;
    background-position: center;
    width: get-vw(620px);
    /*height: 100%;*/
    height: get-vw(400px);
    /*max-width: 620px;*/
    margin-bottom: get-vw(62px);
    @media screen and (max-width: 768px){
      width: 100%;
      height: responsive-vw(450px);
    }
  }
  .content{
    img{
      width: get-vw(620px);
      /*max-width: 620px;*/
      @media screen and (max-width: 768px){
        width: responsive-vw(310px);
      }
    }
  }

</style>
