<template>
  <div class="sp hamburger">
    <nav>
      <div class="drawer">
        <div class="drawer-content flex column">
          <!--          <div class="img-box logo"></div>-->
          <nav>
            <nuxt-link @click.native="hamburger()" to="/"><div class="title img-box logo"></div></nuxt-link>

            <ul>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/why-vegan">WHY VEGAN </nuxt-link><span class="jp">どうしてヴィーガンなの？</span></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/nutrition">NUTRITION </nuxt-link><span class="jp">栄養について学ぶ</span></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/recipes">RECIPES </nuxt-link><span class="jp">ヴィーガン料理をつくる</span></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/restaurants">RESTAURANTS </nuxt-link><span class="jp">外でヴィーガン料理を食べる</span></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/faq">FAQ </nuxt-link><span class="jp">よくある疑問の答えを知る</span></li>
              <li  class="nav-link additional-pages"><nuxt-link @click.native="hamburger()" to="/posts/">ARCHIVE <span class="jp">記事一覧</span></nuxt-link></li>
              <li  class="nav-link additional-pages"><nuxt-link class="pages" @click.native="hamburger()" to="/contact">CONTACT <span class="jp">OXに声をかける</span></nuxt-link></li>
              <li class="nav-link additional-pages"><nuxt-link class="pages" @click.native="hamburger()" to="/about-us">ABOUT US <span class="jp">OXについて</span></nuxt-link></li>
              <li class="nav-link additional-pages"><nuxt-link class="pages" @click.native="hamburger()" to="/privacy-policy">PRIVACY POLICY <span class="jp">プライバシーポリシー</span></nuxt-link></li>
            </ul>
          </nav>
          <div class="sns-links flex">
          </div>
          <!--          <a href="/privacy-policy" class="en policy">PRIVACY POLICY</a>-->
        </div>
      </div>
      <div class="hamburger" @click="hamburger()">
        <span class="hamburger__line hamburger__line--1"></span>
        <span class="hamburger__line hamburger__line--3"></span>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        methods: {
            hamburger: function() {
                let body = document.body;
                body.classList.toggle('nav-open');
            }
        }
    }
</script>

<style lang="scss">

  .drawer{
    opacity: 0;
    transition: opacity .6s ease-in-out;
    overflow: hidden;
    font-size: responsive-vw(15px);
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    width: 0;
    pointer-events: none;
    background-color: #0f0f0f;
    &-content{
      margin: 0 auto 0 responsive-vw(36px);
    }
    .title a{
      font-size: responsive-vw(20px);
      display: block;
      margin-bottom:2vh;

    }
    .jp{
      font-weight: 100;
      font-size: responsive-vw(12px);
      color: $gray;
    }
    .nav-link{
      margin: get-spvh(10px) 0;
      a{
        font-size: responsive-vw(55px);
        letter-spacing: responsive-vw(2.75px);
        font-family: $bebas;
        padding: 0;
        border: 0;
        .jp{
          margin-left: responsive-vw(16px);
        }
      }
      &:nth-child(5){
        margin-bottom: get-spvh(60px);
      }
      &.additional-pages{
        padding-bottom: get-spvh(19px);
        a{
          font-size: responsive-vw(16px);
          letter-spacing: responsive-vw(0.8px);
          @include font-en;
        }
      }
    }
    &-content{
      height: 100%;
      justify-content: space-around;
    }
    ul{
      list-style: none;
      padding: 0;
      margin-top: get-spvh(70px);
    }

  }
  .hamburger{
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    height: 7vh;
  }
  .hamburger__line {
    position: absolute;
    height: 1px;
    right: tab-vw(48px);
    background-color: #fff;
    /*background-color: #707070;*/
    transition: all .6s;
  }
  .hamburger__line--1 {
    top: 60%;
    width: responsive-vw(45px);
  }
  .hamburger__line--3 {
    top: 80%;
    width: responsive-vw(45px);
  }
  .wrapper{
    z-index: 10;
    position: relative;
  }
  .nav-open{
    .drawer{
      //height: 230px;
      opacity: 1;
      height: 100vh;
      width: 100vw;
      /*background-color: #fff;*/
      position: relative;
      /*bottom: get-vh(40px);*/
      pointer-events: unset;
      z-index: 100;

    }
    .hamburger{
      height: 70px;
      top: 0;
      .logo{
        margin: 0 0 3vh 0 ;
      }
    }
    .hamburger__line--1 {
      transform: rotate(35deg);
      top: 60%;
    }

    .hamburger__line--3 {
      transform: rotate(-35deg);
      top: 60%;
    }
  }

</style>
