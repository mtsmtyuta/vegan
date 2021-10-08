<template>
  <div class="single-post">
    <!--    <h1>slug is SLUG: {{ $route.params.slug }}</h1>-->
<!--    <img-->
<!--      :src="img"-->
<!--      :alt="alt"-->
<!--    >-->
    <div v-if="post.fields.topImage" class="img-box hero"
         v-bind:style="{ backgroundImage: 'url(' + post.fields.topImage.fields.file.url +')' }"></div>



    <article class="section">
      <div class="headline">
        <h1 v-if="post.fields.title" class="title has-text-centered">{{ post.fields.title }}</h1>
        <p v-if="post.fields.publishDate"  class="date">{{ post.fields.publishDate }}</p>
      </div>
      <div class="content">
        <vue-markdown v-if="post.fields.body">{{ post.fields.body }}</vue-markdown>
        <Author :author="post.fields.author"></Author>
        <div v-if="post.fields.citation" class="citation">
          <div @click="citation = !citation" class="toggle">出典をみる <transition name="fade"><span v-if="citation">-</span> <span v-else>+</span></transition></div>
          <transition name="fade">
            <div v-if="citation" class="links">
              <vue-markdown>{{ post.fields.citation }}</vue-markdown>
            </div>
          </transition>
        </div>
        <section class="announce">
          <p></p>
          <p>OXでは菜食（ヴィーガン）に興味はあるけど具体的にどうすればいいか分からない、という人のためにレシピやレストラン、栄養、よくある疑問などについて発信しています。
          </p>
          <p>
            なんで菜食なの？という方は<a href="/posts/why-vegan">なぜヴィーガンなの？</a>セクションを、<br>
            そもそもヴィーガンとは？というかたは<a href="/posts/vegan-type">ヴィーガンとは？定義や種類、ベジタリアンとの違いを紹介</a>を読んでみてください！
          </p>
        </section>
      </div>
      <div v-if="post.fields.category === 'restaurants'" class="flex between access sp-column-reverse">
        <vue-markdown v-if="post.fields.access" class="txt-box">{{ post.fields.access }}</vue-markdown>
        <Gmap v-if="post.fields.location" class="map-box" :location="post.fields.location" :name="post.fields.title" />
      </div>
    </article>
  </div>
</template>
<component v-if="post" is="style">

</component>
<script>
    import VueMarkdown from 'vue-markdown'
    import Gmap from "./Gmap";
    import Button from "./Button";
    import Author from "./Author";
    export default {
        components: {
            Author,
            Button,
            Gmap,
            VueMarkdown
        },
        props: ['post'],
        data(){
            return{
                citation: false
            }
        },

    }
</script>

<style lang="scss">
  .announce{
  }
  .headline{
    margin-bottom: 36px;
  }
  .single-post-page{
    /*background-color: #f2f2f2;*/
    padding-top: get-vw(133px);

    @media screen and (max-width: 768px){
      padding-top: 0;
    }
    .content{
      @include font-jp;
      font-size: get-vw(15px);
      line-height: 2.6;
      letter-spacing: 0.4px;
      /*letter-spacing: get-vw(1.5px);*/
      text-align: left;
      color: #191919;
      font-weight: 200;
      /*color: #2e2e2e;*/
      @media screen and (max-width: 768px){
        font-size: responsive-vw(13px);
      }
    }

  }

  .citation{
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    padding: get-vw(36px) 0;
    margin-bottom: get-vw(36px);
    @media screen and (max-width: 768px){
      padding: responsive-vw(36px) 0;
      margin-bottom: responsive-vw(36px);
    }
  }
  .toggle{
    cursor: pointer;
    color: $main-color !important;
    /*margin-top: get-vw(30px);*/
    /*font-size: 16px;*/
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
  }
  .links{
    margin-top: get-vw(30px);
    div p{
      margin: 0;
    }
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active{
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  pre {
    white-space: unset;
  }
  .single-post{
    width: get-vw(620px);
    margin: auto;
    @media screen and (max-width: 768px){
      width: 100%;
    }
    p, ul, ol{
      margin-bottom: get-vw(30px);
      line-height: 2;
      @media screen and (max-width: 768px){
        margin-bottom: 30px;
        line-height: 30px;
      }
    }
    ol{
     img{
       @media screen and (max-width: 768px){
        position: relative;
         right: 40px;
       }
     }
    }
    iframe{
      width: 100%;
      height: get-vw(346px);
      @media screen and (max-width: 768px){
        height: responsive-vw(201px);
      }
    }
    br{
      margin-bottom: get-vw(30px);
      @media screen and (max-width: 768px){
        margin-bottom: responsive-vw(15px);
      }
    }
    h2{
      font-size: get-vw(30px);
      margin-top: get-vw(20px);
      margin-bottom: get-vw(10px);
      line-height: 1.23;
      @media screen and (max-width: 1280px) {
        font-size: 28px;
      }
        @media screen and (max-width: 768px){
        font-size: responsive-vw(20px);
          margin: responsive-vw(20px) 0 responsive-vw(10px);
      }
    }
    h3{
      font-size: get-vw(20px);
      margin-top: get-vw(20px);
      line-height: 1.23;
      @media screen and (max-width: 1280px) {
        font-size: 18px;
      }
        @media screen and (max-width: 768px){
        font-size: responsive-vw(18px);
      }
    }
    a{
      color: rgb(46, 117, 212);
    }
    .title{
      font-size: get-vw(40px);
      line-height: 1.5;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(25px);
      }
    }
    .date{
      color: #999999;
      letter-spacing: 1px;
      font-size: get-vw(14px);
      margin-top: get-vw(40px);
      @media screen and (max-width: 768px){
        font-size: responsive-vw(10px);
      }
    }
    .content{
      margin-top: get-vw(42px);
    }

    @media screen and (max-width: 768px){
      width: 100%;
    }
    ul{
      list-style: unset;
      padding: 18px 25px 18px 40px;
      background-color: #f7f9f9;
    }
    .section{
      @media screen and (max-width: 768px){
        width: $sp-contents;
        margin: auto;
      }
    }
  }
  .hero{
    background-size: cover;
    background-position: top;
    width: get-vw(620px);
    /*height: 100%;*/
    height: get-vw(413px);
    /*max-width: 620px;*/
    margin-bottom: get-vw(42px);
    @media screen and (max-width: 768px){
      width: 100%;
      height: responsive-vw(250px);
      margin-bottom: responsive-vw(36px);
    }
  }
  .content{
    p, strong, a, li{
      font-size: get-vw(18px);
      @media screen and (max-width: 1440px){
        font-size: 18px;
      }
      @media screen and (max-width: 768px){
        font-size: responsive-vw(16px);
      }
    }
    img{
      width: get-vw(620px);
      /*max-width: 620px;*/
      margin: get-vw(30px) 0;
      @media screen and (max-width: 768px){
        width: responsive-vw(324px);
        margin: auto;
      }
    }
  }
  .access{
    padding: get-vw(40px) 0;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    gap: 20px;
    margin-bottom: get-vw(40px);
    @media screen and (max-width: 768px){
      padding: responsive-vw(40px) 0;
      margin-bottom: responsive-vw(40px);
    }
    a strong{
      font-size: get-vw(18px);
      @media screen and (max-width: 768px){
        font-size: responsive-vw(16px);
      }
    }
    a, p{
      font-weight: 200;
    }
    p:last-child{
      margin: 0;
    }
  }
  .map-box{
    width: get-vw(290px);
    @media screen and (max-width: 768px){
      width: 100%;
      margin-bottom: responsive-vw(30px);
    }
  }

</style>
