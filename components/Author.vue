<template>
  <div class="author">
    <div class="flex between center-align">
      <div v-if="author.fields.faceImage" class="img-box face"
           v-bind:style="{ backgroundImage: 'url(' + author.fields.faceImage.fields.file.url +')' }">
      </div>
      <div class="txt-box">
        <p class="name en">{{author.fields.name}}</p>
        <p class="bio" v-if="author.fields.bio">{{author.fields.bio}}</p>
      </div>
      <div class="sns flex between">
        <a target="_blank" rel="noopener" v-if="author.fields.twitter" :href="author.fields.twitter" class="img-box tw"></a>
        <a target="_blank" rel="noopener" v-if="author.fields.instagram" :href="author.fields.instagram" class="img-box ig"></a>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        props: ['author'],
        methods: {
            log: function () {
                console.log(this.author);
            }
        }
    }
</script>

<style lang="scss">
  .author{
    width: get-vw(620px);
    /*max-width: 620px;*/
    margin: auto;
    padding: get-vw(80px) 0;
    @media screen and (max-width: 768px){
      width: responsive-vw(310px);
    }
    .txt-box{
      width: get-vw(400px);
      @media screen and (max-width: 768px){
        width: responsive-vw(186px);
      }
    }
    .sns{
      width: get-vw(62px);
      margin-left: get-vw(62px);
      @media screen and (max-width: 768px){
        width: responsive-vw(44px);
      }
    }
    .ig{
      background-image: url('~assets/icons/instagram-icon_black.svg');
    }
    .tw{
      background-image: url('~assets/icons/twitter-icon_black.svg');
    }
    .name{
      font-size: get-vw(18px);
      font-weight: 500;
      color: #292929;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(15px);
      }
    }
    .bio{
      /*font-size: get-vw(11px);*/
      color: #a2a2a2;
      line-height: 1.09;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(13px);
        color: #7e7e7e;
      }
    }
  }
  .face{
    width: get-vw(62px);
    height: get-vw(62px);
    border-radius: 50%;
    @media screen and (max-width: 768px){
      width: responsive-vw(50px);
      height: responsive-vw(50px);
    }
  }


</style>
