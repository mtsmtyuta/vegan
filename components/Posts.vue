<template>
  <section class="post-preview">
    <!-- render blog posts -->
    <!--    <ul>-->

    <VueSlickCarousel v-bind="settings" v-if="posts">

      <div v-for="index in 6"
           :key="index"
      >
<!--      <div v-for="post in posts"-->
<!--           :key="post.id"-->
<!--      >-->
        <nuxt-link v-if="posts[index - 1].fields.slug" :to="{ name: 'posts-slug', params: { slug: posts[index - 1].fields.slug }}" class="card-footer-item">
          <div class="slide-content">
<!--            <div class="img-box"-->
<!--                 v-bind:style="{ backgroundImage: 'url(' + post.fields.topImage.fields.file.url +')' }"-->
<!--            ></div>-->
            <img v-if="posts[index - 1].fields.thumbnail" loading="lazy" class="img-box" :src="`${posts[index - 1].fields.thumbnail.fields.file.url}?fit=thumb&w=664&h=442`" alt="">
                      <p class="strong" v-if="posts[index - 1].fields.title">        {{ posts[index - 1].fields.title }}</p>
            <p class=" description"><span class="normal"> {{posts[index - 1].fields.description}}</span></p>
<!--            <span v-if="post.fields.publishDate" class="date">  {{-->
<!--            ( new Date(post.fields.publishDate).toDateString())-->
<!--            }}</span>-->

          </div>

        </nuxt-link>

      </div>
    </VueSlickCarousel>

  </section>
</template>

<script>
    export default {
        props: ['posts'],
        data() {
            return {
                settings: {
                    // "speed": 500,
                    "active": false,
                    "slidesToShow": 3,
                    // "slidesToScroll": 3,
                    // "initialSlide": 0,
                    "autoplay": false,
                    "infinite": true,
                    // "autoplaySpeed": 1000,
                    // "speed": 2000,
                    "arrows": false,
                    "centerPadding": "40px",
                    "dots": true,
                    "arrow" : true,
                    "responsive": [
                        {
                            "breakpoint": 768,
                            "settings": {
                                "slidesToShow": 1,
                                "centerPadding": "30px",
                                "slidesToScroll": 1,
                                // "focusOnSelect": true,
                                // "centerMode": true,
                                "autoplay": false,
                                // "arrows": false,
                            }
                        }
                    ]
                }
            }
        }
    }
</script>


<style lang="scss" >
  .green{
    color: $main-color;
  }
  .post-preview{
    width: 80vw;
    margin: auto;
    @media screen and (max-width: 768px){
      width: 100%;
    }
    .slick-dots{
      bottom: -40px;
      @media screen and (max-width: 768px){
        bottom: responsive-vw(-48px);
      }
    }
    .slick-dots li {
      margin: 0 get-vw(11px);
    }
  }
  .slick-slide{
    /*margin: 0 get-vw(41px);*/
  }
  .slick-list{
  }

  .slide-content{
    margin: auto;
    /*width: get-vw(350px);*/
    width: get-vw(330px);

    @media screen and (max-width: 768px) {
      width: responsive-vw(330px);
    }

    p.description{
      font-weight: 200;
      color: $main-color;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p,span{
      color: #191919;
      font-size: 1.3vw;
      margin: get-vh(5px) 0;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(14px);
      }
    }
    .img-box{
      background-size: cover;
      width: get-vw(300px);
      height: get-vw(200px);
      @media screen and (max-width: 768px) {
        @include res-width-height(326px, 217px);
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
    a{
      text-decoration: none;
      &:visited{
        color: #000;
      }
    }

    ul{
      li{
        list-style: none;
      }
      p{
        text-align: left;
        color: #000;
      }
    }
  }

  .slick-dots li.slick-active button{
    width: get-vw(24px);
    height: get-vw(24px);

    &:before{
      content: "";
      border-radius: 50%;
      border: 1px solid $main-color;
      background-color: #fff;
      width: get-vw(24px);
      height: get-vw(24px);
      max-width: 30px;
      max-height: 30px;
      @media screen and (max-width: 768px){
        top: 5px;
        left: 6px;
        position: absolute;
        width: 11px;
        height: 11px;
      }
    }
    @media screen and (max-width: 768px){
      width: 11px;
      height: 11px;
    }
  }
  .slick-dots li button{
    /*width: 6px;*/
    /*height: 6px;*/
    /*background-color: #b1b1b1;*/
    /*border-radius: 50%;*/
    margin: auto;
    @media screen and (max-width: 768px){
      width: 11px;
      height: 11px;

    }
    &:before{
      /*content: "";*/
    @media screen and (max-width: 768px){
      color: #191919;
      @include font-en();
      font-size: responsive-vw(12px);
    }
    }

  }

  .card-footer-item{
    display: block;
  }
</style>

