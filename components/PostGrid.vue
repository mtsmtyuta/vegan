<template>
  <section>
    <div class="gray">

      <div class="responsive-container post-grid">
        <div v-for="post in posts"
             :key="post.id"
        >
          <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
            <div class="slide-content"
                 data-aos="fade-up"
                 data-aos-duration="500"
                 data-aos-delay="0"
                 data-aos-offset="100"
            >
<!--                 data-aos="fade-up"-->
<!--                 data-aos-duration="500"-->
<!--                 data-aos-delay="50"-->
<!--                 data-aos-offset="10"-->
<!--            >-->
<!--              <div class="img-box"-->
<!--                   v-bind:style="{ backgroundImage: 'url(' + post.fields.thumbnail.fields.file.url +')' }"-->
<!--              ></div>-->
              <img loading="lazy" class="img-box" :src="`${post.fields.thumbnail.fields.file.url}?fit=thumb&q=90&&w=270&h=230`" alt="">

              <p class="strong">{{ post.fields.title }} <span v-if="post.fields.region" class="region"> | {{post.fields.region}}</span></p>
<!--              <span v-if="post.fields.publishDate" class="date">  {{-->
<!--            ( new Date(post.fields.publishDate).toDateString())-->
<!--            }}</span>-->

            </div>

          </nuxt-link>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        props: ['posts']
    }
</script>


<style lang="scss" >
  .gray{
    padding-top: get-vw(26px);
    background-color: #f2f2f2;
    padding-bottom: get-vw(300px);
  }

  .post-grid{
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    @media screen and (max-width: 768px){
      display: block;
      margin: auto;
    }
    .card-footer-item{
      margin-bottom: get-vw(100px);
    }
    .slide-content{
      margin: 0 get-vw(21px);
      width: get-vw(270px);
      height: get-vw(230px);
      @media screen and (max-width: 768px){
        width: 100%;
        /*height: responsive-vw(350px);*/
        height: unset;

        margin-top: responsive-vw(43px);
      }
      .img-box{
        /*width: unset;*/
        /*width: get-vw(270px);*/
        width: get-vw(270px);
        height: get-vw(230px);


        @media screen and (max-width: 768px){
          width: 100%;
          height: unset;

          /*height: responsive-vw(284px);*/
          /*height: auto;*/
        }
      }
    }
  }
</style>

