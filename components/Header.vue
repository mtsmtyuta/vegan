<template>
  <header class="header"

  >
    <nuxt-link to="/"><div class="img-container img-box logo"></div></nuxt-link>
    <ul class="header-nav pc">
<!--      <li class="header-nav__item"><nuxt-link to="/about">ABOUT</nuxt-link></li>-->
      <li class="header-nav__item"><nuxt-link to="/posts/why-vegan">WHY VEGAN</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/nutrition">NUTRITION</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/recipes">RECIPES</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/restaurants">RESTAURANTS</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/posts/faq">FAQ</nuxt-link></li>
      <li class="header-nav__item"><nuxt-link to="/about-us">ABOUT US</nuxt-link></li>
    </ul>
    <div class="sp hamburger-menu">
      <HamburgerMenu></HamburgerMenu>
    </div>


  </header>
</template>
<style lang="scss">
  .logo {
    background-image: url('~assets/icons/ox_title.svg');
    height: get-vw(18px);
    width: get-vh(36px);
    @media screen and (max-width: 768px) {
      width: responsive-vw(34px);
      height: responsive-vw(17px);
    }
  }
  .header {
    display: flex;
    background-color: #191919;
    width: 100%;
    z-index: 99;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    height: get-vh(63px);
    a {
      @include font-en;
      font-size: get-vw(14px);
      letter-spacing: 4.5px;
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
