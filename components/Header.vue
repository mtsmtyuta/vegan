<template>
  <header class="header"

  >
    <nuxt-link class="header-logo" to="/"><div class="en logo"><img class="pc" src="~assets/img/logo_set.svg" alt=""><img class="sp" src="~assets/img/logo_symbol.svg" alt=""></div></nuxt-link>
<!--    <nuxt-link class="header-logo" to="/"><div class="en logo"><img src="~assets/img/logo_set.svg" alt=""></div></nuxt-link>-->
    <ul class="header-nav pc">
<!--      <li class="header-nav__item"><nuxt-link to="/about">ABOUT</nuxt-link></li>-->
      <li class="header-nav__item"><nuxt-link to="/posts/why-vegan"><img src="~assets/icons/category_why_vegan.svg" alt="why_vegan">WHY VEGAN</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/nutrition"><img src="~assets/icons/category_nutrition.svg" alt="nutrition">NUTRITION</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/recipes"><img src="~assets/icons/category_recipes.svg" alt="recipes">RECIPES</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/restaurants"><img src="~assets/icons/category_restaurants.svg" alt="restaurants">RESTAURANTS</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/ox-life"><img src="~assets/icons/category_ox_life.svg" alt="ox_life">OX LIFE</nuxt-link></li>
    </ul>
    <ul class="header-nav bottom pc">
      <li class="header-nav__item"><nuxt-link to="/posts">ARCHIVE</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/writers">WRITER</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/about-us">ABOUT US</nuxt-link></li>
    </ul>

    <div class="sp hamburger-menu">
      <HamburgerMenu></HamburgerMenu>
    </div>


  </header>
</template>
<style lang="scss">
  .logo {
    color: #fff;
    font-size: 21px;
    letter-spacing: get-vw(2.1px);
    img{
      width: 210px;
      height: 48px;
      @media screen and (max-width: 767px){
       width: 100.24px;
       height: 48.5px;
      }
    }
    @media screen and (max-width: 767px) {
    }
  }
  .header {
    display: flex;
    z-index: 99;
    position: absolute;
    flex-flow: column;
    align-items: baseline;
    /*height: get-vh(63px);*/
    @media screen and (max-width: 767px){
      /*height: 9vh;*/
    }
    a {
      font-size: get-vw(16px);
      letter-spacing: get-vw(1.13px);
      font-family: $roboto;
      text-decoration: none;
      display: flex;
      align-items: center;
      img{
        margin-right: get-vw(12px);
        @media screen and (max-width: 767px){
          margin-right: responsive-vw(12px);
        }
      }
      @media screen and (min-width: 1280px){
        font-size: 16px;
      }
      @media screen and (max-width: 767px){
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
      &__item {
        margin: get-vw(24px) get-vw(36px);
        @media screen and (max-width: 767px){
            margin: responsive-vw(24px) 0;
        }
      }
      &.bottom{
        margin-top: get-vh(240px);
        @media screen and (max-width: 767px){
          margin-top: get-spvh(146px);
        }
      }
    }
    .logo {
      margin:get-vw(36px);
      @media screen and (max-width: 767px){
        margin: responsive-vw(20px);
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
