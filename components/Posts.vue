<template>
  <section class="post-preview">
    <!-- render blog posts -->
    <!--    <ul>-->

    <VueSlickCarousel v-bind="settings">

      <div v-for="index in 6"
           :key="index"
      >
<!--      <div v-for="post in posts"-->
<!--           :key="post.id"-->
<!--      >-->
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: posts[index - 1].fields.slug }}" class="card-footer-item">
          <div class="slide-content">
<!--            <div class="img-box"-->
<!--                 v-bind:style="{ backgroundImage: 'url(' + post.fields.topImage.fields.file.url +')' }"-->
<!--            ></div>-->
            <img loading="lazy" class="img-box" :src="`${posts[index - 1].fields.thumbnail.fields.file.url}?fit=thumb&w=660&h=546`" alt="">
                      <p class="strong">        {{ posts[index - 1].fields.title }}</p>
<!--            <span v-if="post.fields.publishDate" class="date">  {{-->
<!--            ( new Date(post.fields.publishDate).toDateString())-->
<!--            }}</span>-->

          </div>

        </nuxt-link>

      </div>
    </VueSlickCarousel>


    <!--    </ul>-->
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
                    "dots": true,
                    "responsive": [
                        {
                            "breakpoint": 768,
                            "settings": {
                                "slidesToShow": 1,
                                "centerPadding": "30px",
                                "slidesToScroll": 1,
                                // "focusOnSelect": true,
                                "centerMode": true,
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
  .post-preview{
    width: 80vw;
    margin: auto;
    @media screen and (max-width: 768px){
      width: 100%;
    }
    .slick-dots{
      bottom: -40px;
    }
    .slick-dots li button:before{
      color: $main-color;
    }
  }

  .slide-content{
    margin: auto;
    /*width: get-vw(350px);*/
    width: get-vw(330px);

    @media screen and (max-width: 768px) {
      width: responsive-vw(330px);
    }

    p,span{
      color: #292929;
      font-size: 1.3vw;
      margin: get-vh(5px) 0;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(14px);
      }
    }
    .img-box{
      background-size: cover;
      height: get-vw(273px);
      width: get-vw(330px);
      @media screen and (max-width: 768px) {
        @include res-width-height(330px, 273px);
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


  .card-footer-item{
    display: block;
  }
</style>

