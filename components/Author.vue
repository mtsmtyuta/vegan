<template>
  <div class="author">
    <div class="flex between center-align">
      <div v-if="author.fields.faceImage" class="img-box face"
           v-bind:style="{ backgroundImage: 'url(' + author.fields.faceImage.fields.file.url +')' }">
      </div>
      <div class="flex column flex-right">
        <div class="flex center-align between">
          <p class="name en">{{author.fields.name}}</p>
          <div class="sns flex between">
            <a target="_blank" rel="noopener" v-if="author.fields.twitter" :href="author.fields.twitter" class="img-box tw"></a>
            <a target="_blank" rel="noopener" v-if="author.fields.instagram" :href="author.fields.instagram" class="img-box ig"></a>
          </div>
        </div>
        <p class="bio" v-if="author.fields.bio">{{author.fields.bio}}</p>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        props: ['author'],
        // methods: {
        //     log: function () {
        //         console.log(this.author);
        //     }
        // }
    }
</script>

<style lang="scss">
  .single-post{
    .author{
      .flex-right{
        width: 85%;
        @media screen and (max-width: 767px){
          width: 80%;
        }
      }
      p{
        /*margin-bottom: get-vw(14px);*/
        margin-bottom: 0;
        line-height: 1.5;
      }
    }
  }
  .author{
    margin: auto;
    padding: get-vw(60px) 0 get-vw(108px);
    .txt-box{
      width: get-vw(400px);
      @media screen and (max-width: 767px){
        width: responsive-vw(186px);
      }
    }
    /*.sns{*/
    /*  !*width: get-vw(62px);*!*/
    /*  margin-left: get-vw(62px);*/
    /*  @media screen and (max-width: 767px){*/
    /*    !*width: responsive-vw(44px);*!*/
    /*    margin-left: get-vw(30px);*/
    /*  }*/
    /*}*/
    .ig{
      background-image: url('~assets/icons/instagram-icon_black.svg');
      margin-left: get-vw(26px);
      @media screen and (max-width: 767px){
        margin-left: responsive-vw(30px);

      }
    }
    .tw{
      background-image: url('~assets/icons/twitter-icon_black.svg');
    }
    .name{
      font-size: get-vw(15px);
      font-weight: 700;
      color: #191919;
      @media screen and (max-width: 767px){
        font-size: responsive-vw(15px);
        font-weight: 700;
      }
    }
    .bio{
      /*font-size: get-vw(11px);*/
      color: #191919;
      line-height: 1.09;
      font-weight: 200;
      margin-top: get-vw(12px);
      letter-spacing: get-vw(0.3px);
      font-size: get-vw(13px);
      @media screen and (max-width: 767px){
        font-size: responsive-vw(12px);
        color: #191919;
        letter-spacing: responsive-vw(0.25px);
      }
    }
  }
  .face{
    width: get-vw(62px);
    height: get-vw(62px);
    border-radius: 50%;
    @media screen and (max-width: 767px){
      width: responsive-vw(60px);
      height: responsive-vw(60px);
    }
  }


</style>
