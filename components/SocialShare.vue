<template>
  <div class="social_box">
    <a
      target="_blank" rel="noopener"
      class="twitter_share flex center-align"
      :href="'https://twitter.com/intent/tweet?url=https://ox-vegan.jp/posts/'
               + slug
               + '&text='
               + title
               + '%0a'
               + '@ox_vegan_jp%0a'
               ">
      <span>Twitterでシェア</span>

      <div class="social">

        <div @click="shareTw()" :class="animateTw" class="share_icon twt"></div>
      </div>
    </a>

  </div>
</template>
<script>
  export default {
    props: {
      slug: String,
      title: String
    },
    data: function(){
      return{
        animateTw: "",
      }
    },
    methods: {
      shareTw: function () {
        if(this.animateTw === ''){
          this.animateTw = 'ShareAnimation';
        }else {
          this.animateTw = '';
        }
      },
    }
  }
</script>
<style lang="scss">
  .social_box{
    a{
      color: $black !important;
        @media screen and (max-width: 767px){
          font-size: 12px;
        }
    }
  }
  .social {
    position:relative;
    width:50px;
    height:50px;
    border-radius: 25px;
    overflow: hidden;
  }
  .share_icon.twt {
    position:absolute;
    background-position:0;
    background-size:950px;
    background-repeat:no-repeat;
    width:50px;
    height:50px;
    cursor:pointer;
    left: 0;
  }
  .share_icon.twt {
    background-image:url('~assets/animation/web_twt_animation.png');
  }
  #confirm .social {
    left:-17px
  }
  #listing_detail_page .social {
    top:unset
  }
  @keyframes share {
    0% {
      background-position:0
    }
    to {
      background-position:100%
    }
  }
  .ShareAnimation {
    display:inline-block;
    background-position:100%;
    -webkit-animation-name: share;
    animation-name: share;
    -webkit-animation-duration:.8s;
    animation-duration:.8s;
    -webkit-animation-iteration-count:1;
    animation-iteration-count:1;
    -webkit-animation-timing-function:steps(18);
    animation-timing-function:steps(18)
  }
</style>
