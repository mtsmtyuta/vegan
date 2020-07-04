<template>
  <div class="sp hamburger">
    <nav>
      <div class="drawer">
        <div class="drawer-content flex column">
          <!--          <div class="img-box logo"></div>-->
          <nav>
            <nuxt-link @click.native="hamburger()" to="/"><div class="title img-box logo"></div></nuxt-link>

            <ul>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/why-vegan">WHY VEGAN</nuxt-link></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/nutrition">NUTRITION</nuxt-link></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/recipes">RECIPES</nuxt-link></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/restaurants">RESTAURANTS</nuxt-link></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/faq">FAQ</nuxt-link></li>
              <li  class="nav-link"><nuxt-link @click.native="hamburger()" to="/posts/">ARCHIVE</nuxt-link></li>
              <li  class="nav-link"><nuxt-link class="pages" @click.native="hamburger()" to="/contact">CONTACT</nuxt-link></li>
              <li class="nav-link"><nuxt-link class="pages" @click.native="hamburger()" to="/about-us">ABOUT US</nuxt-link></li>
              <li class="nav-link"><nuxt-link class="pages" @click.native="hamburger()" to="/privacy-policy">PRIVACY POLICY</nuxt-link></li>
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
    font-size: responsive-vw(14px);
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    width: 0;
    pointer-events: none;
    background-color: #292929;
    .title a{
      font-size: responsive-vw(20px);
      display: block;
      margin-bottom:2vh;

    }
    .nav-link{
      margin: 1vh 0;
    }
    &-content{
      height: 100%;
      justify-content: center;
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      a{
        font-size: tab-vw(32px);
        line-height: 2.22;
        /*letter-spacing: tab-vw(4.8px);*/
        letter-spacing: 4.5px;
        padding: 0;
        border: 0;
      }
    }

  }
  .hamburger{
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
  }
  .hamburger__line {
    position: absolute;
    height: 2px;
    right: tab-vw(48px);
    background-color: #fff;
    /*background-color: #707070;*/
    transition: all .6s;
  }
  .hamburger__line--1 {
    top: responsive-vw(14px);
    width: responsive-vw(45px);
  }
  .hamburger__line--3 {
    top: responsive-vw(26px);
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
      .logo{
        margin: 0 0 3vh 0 ;
      }
    }
    .hamburger__line--1 {
      transform: rotate(25deg);
      top: 20px;
    }

    .hamburger__line--3 {
      transform: rotate(-25deg);
      top: 20px;
    }
  }

</style>
