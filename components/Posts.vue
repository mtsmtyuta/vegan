<template>
  <section class="post-preview">
    <!-- render blog posts -->
    <!--    <ul>-->

    <VueSlickCarousel v-bind="settings">

      <div v-for="post in posts"
           :key="post.id"
      >
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
          <div class="slide-content">
<!--            <div class="img-box"-->
<!--                 v-bind:style="{ backgroundImage: 'url(' + post.fields.topImage.fields.file.url +')' }"-->
<!--            ></div>-->
            <img loading="lazy" class="img-box" :src="`${post.fields.thumbnail.fields.file.url}?q=50&fit=crop`" alt="">
                      <h4>        {{ post.fields.title }}</h4>
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
                    "slidesToShow": 3,
                    // "slidesToScroll": 3,
                    // "initialSlide": 0,
                    "autoplay": true,
                    "infinite": true,
                    "arrows": false,
                    "autoplaySpeed": 1000,
                    "speed": 2000,
                    "responsive": [
                        {
                            "breakpoint": 768,
                            "settings": {
                                "slidesToShow": 1,
                                "centerPadding": "30px",
                                "slidesToScroll": 1,
                                "focusOnSelect": true,
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

  }

  .slide-content{
    margin: auto;
    /*width: get-vw(350px);*/
    width: get-vw(330px);

    @media screen and (max-width: 768px) {
      width: responsive-vw(340px);
    }
    h4{
      color: #292929;
      font-size: get-vw(12px);
      margin: get-vh(5px) 0;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(12px);
      }
    }
    .img-box{
      background-size: cover;
      height: get-vw(273px);
      width: get-vw(330px);
      @media screen and (max-width: 768px) {
        @include res-width-height(340px, 265px);
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

