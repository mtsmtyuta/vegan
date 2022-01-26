<template>
  <header class="header"

  >
    <nuxt-link class="header-logo" to="/"><div class="en logo"><img src="~assets/img/logo_set.svg" alt=""></div></nuxt-link>
<!--    <nuxt-link class="header-logo" to="/"><div class="en logo"><img src="~assets/img/logo_set.svg" alt=""></div></nuxt-link>-->
    <ul class="header-nav pc">
<!--      <li class="header-nav__item"><nuxt-link to="/about">ABOUT</nuxt-link></li>-->
      <li class="header-nav__item"><nuxt-link to="/posts/why-vegan">WHY VEGAN</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/nutrition">NUTRITION</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/recipes">RECIPES</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/restaurants">RESTAURANTS</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/ox-life">OX LIFE</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/about-us">ABOUT US</nuxt-link></li>
    </ul>
    <div class="sp hamburger-menu">
      <HamburgerMenu></HamburgerMenu>
    </div>


  </header>
</template>
<style lang="scss">
  .logo {
    /*background-image: url('~assets/icons/ox_title.svg');*/
    /*height: get-vw(18px);*/
    color: #fff;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: get-vw(2.1px);
    /*width: get-vh(36px);*/
    img{
      width: 210px;
      height: 48px;
    }
    @media screen and (max-width: 768px) {
      /*width: responsive-vw(34px);*/
      /*height: responsive-vw(17px);*/
    }
  }
  .header {
    display: flex;
    background-color: #FCFBF8;
    width: 100%;
    z-index: 99;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    height: get-vh(63px);
    @media screen and (max-width: 768px){
      height: 9vh;
    }
    a {
      font-size: get-vw(15px);
      letter-spacing: get-vw(1.13px);
      font-weight: 300;
      text-decoration: none;
      color: white;
      display: block;
      @media screen and (min-width: 1280px){
        font-size: 14px;
      }
      @media screen and (max-width: 768px){
        font-size: responsive-vw(14px);
      }
      &:hover{
        color: $main-color ;
      }
    }
    .nuxt-link-exact-active{
      color: $main-color;
    }

    .header-nav {
      list-style: none;
      /*width: 80%;*/
      display: flex;
      justify-content: space-evenly;

      &__item {
        margin: 0 get-vw(30px);
        font-size: get-vw(12px);
        &:last-child{
          margin-right: 3.14788vw;
        }
      }
    }
    .logo {
      margin: 0 get-vw(43px);
    }
    @media screen and (max-width: 768px) {
      position: fixed;
      .header-nav{
        display: none;
      }
    }
  }

</style>
<script>
    import HamburgerMenu from "./HamburgerMenu";
    export default {
        components: {HamburgerMenu}
    }
</script>
