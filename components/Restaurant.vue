<template>
  <div class="restaurant single-post">
    <div class="img-box hero"
         v-bind:style="{ backgroundImage: 'url(' + restaurant.fields.topImage.fields.file.url +')' }"></div>
    <article class="content">
      <div class="headline">
        <h1 class="title has-text-centered">{{restaurant.fields.name }}</h1>
      </div>
      <vue-markdown>{{ restaurant.fields.about }}</vue-markdown>
      <div class="flex between access sp-column-reverse">
        <vue-markdown class="txt-box">{{ restaurant.fields.access }}</vue-markdown>
          <Gmap class="map-box" :location="restaurant.fields.location" :name="restaurant.fields.name" />
      </div>

    </article>
  </div>

</template>

<script>
  import Gmap from "./Gmap";
  import VueMarkdown from 'vue-markdown'

  export default {
        components: {
            Gmap,
            VueMarkdown
        },
        props: ['restaurant']
    }
</script>

<style lang="scss">
  .single-post.restaurant{
    width: unset;
  }
  .restaurant{
    .title{
      margin-bottom: get-vw(90px);
    }
    .hero{
      width: 100%;
    }
    .content{
      width: get-vw(620px);
      margin: auto;
      @media screen and (max-width: 768px){
        width: responsive-vw(310px);
      }
    }
    .txt-box{
      width: get-vw(290px);
      line-height: 2;
      font-size: get-vw(12px);
      @media screen and (max-width: 768px){
        font-size: responsive-vw(12px);
        width: 100%;

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


  }
</style>
