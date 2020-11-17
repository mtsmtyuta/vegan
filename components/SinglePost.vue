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
        <h1 class="title has-text-centered">{{ post.fields.title }}</h1>
        <p v-if="post.fields.publishDate"  class="date">{{ post.fields.publishDate }}</p>
      </div>
      <div class="content">
        <vue-markdown>{{ post.fields.body }}</vue-markdown>
        <div v-if="post.fields.citation" class="citation">
          <div @click="citation = !citation" class="toggle">出典をみる <transition name="fade"><span v-if="citation">-</span> <span v-else>+</span></transition></div>
          <transition name="fade">
            <div v-if="citation" class="links">
              <vue-markdown>{{ post.fields.citation }}</vue-markdown>
            </div>
          </transition>
        </div>
      </div>
      <div v-if="post.fields.category === 'restaurants'" class="flex between access sp-column-reverse">
        <vue-markdown class="txt-box">{{ post.fields.access }}</vue-markdown>
        <Gmap class="map-box" :location="post.fields.location" :name="post.fields.title" />
      </div>

    </article>
  </div>

</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import Gmap from "./Gmap";
    import Button from "./Button";
    export default {
        components: {
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

  .citation{
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    padding: 20px 0;
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
  }
  .links{
    margin-top: get-vw(30px);
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
    p{
      margin-bottom: get-vw(30px);
      line-height: 2;
      @media screen and (max-width: 768px){
        margin-bottom: 30px;
        line-height: 30px;
      }
    }
    ul{
      margin: get-vw(-30px) 0 get-vw(30px);
      @media screen and (max-width: 768px){
        margin: -30px 0 30px;
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
      font-size: get-vw(22px);
      margin-top: get-vw(20px);
      @media screen and (max-width: 1280px) {
        font-size: 20px;
      }
        @media screen and (max-width: 768px){
        font-size: responsive-vw(20px);
      }
    }
    h3{
      font-size: get-vw(20px);
      margin-top: get-vw(20px);
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
      font-size: get-vw(45px);
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
      margin-top: get-vw(42px);
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
        width: responsive-vw(360px);
        margin: auto;
      }
    }
  }
  .hero{
    background-size: cover;
    background-position: center;
    width: get-vw(620px);
    /*height: 100%;*/
    height: get-vw(430px);
    /*max-width: 620px;*/
    margin-bottom: get-vw(42px);
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
  .access{
    padding: get-vw(178px) 0 get-vw(160px);
  }
  .map-box{
    width: get-vw(290px);
    @media screen and (max-width: 768px){
      width: 100%;
      margin-bottom: responsive-vw(30px);
    }
  }

</style>
