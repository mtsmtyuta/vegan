<template>
  <footer>
    <div class="footer-content flex"
    >
      <nuxt-link to="/"><div class="img-container img-box logo"></div></nuxt-link>
      <ul class="footer-links flex">
        <li class="footer-links__item"><nuxt-link to="/posts/why-vegan">WHY VEGAN</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/nutrition">NUTRITION</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/recipes">RECIPES</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/restaurants">RESTAURANTS</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/faq">FAQ</nuxt-link></li>
        <li class="footer-links__item pc"><nuxt-link class="pages" to="/contact">CONTACT</nuxt-link></li>
        <li class="footer-links__item pc"><nuxt-link class="pages" to="/privacy-policy">PRIVACY POLICY</nuxt-link></li>
      </ul>
      <div class="sns-links flex">
<!--        <a href="https://www.instagram.com/ox_vegan_jp" target="_blank" rel="noopener"><div class="img-box ig"></div></a>-->
        <a href="https://twitter.com/ox_vegan_jp" target="_blank" rel="noopener"><div class="img-box tw"></div></a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default { }
</script>

<style lang="scss">
  footer{
    background-color: #191919;
    .ig{
      margin-right: get-vw(32px);
      @media screen and (max-width: 768px){
        margin-right: 9vw;
      }
    }
  }
  .footer-content{
    height: get-vh(307px);
    align-items: center;
    color: #fff;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      height: get-vh(607px);
      height: auto;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .logo{
        display: none;
      }
      .footer-links{
        flex-direction: column;
        justify-content: space-between;
        height: get-vh(349px);
      }
      .sns-links{
        margin-top: get-vh(14px);
        margin-bottom: get-vh(75px);
      }
    }
  }
  .footer-links{
    width: 75%;
    justify-content: space-between;
    @media screen and (max-width: 768px){
      margin: responsive-vw(84px) auto;
    }
    a{
      @include font-en;
      display: block;
      font-size: get-vw(10px);
      letter-spacing: 4.5px;
      @media screen and (min-width: 1440px){
        font-size: 14px;
      }
      @media screen and (max-width: 768px){
        font-size: responsive-vw(15px);
        &.pages{
          font-size: responsive-vw(12px);
        }
      }
      &:hover{
        color: $main-color ;
      }
    }
    .nuxt-link-exact-active{
      color: $main-color;
    }
  }
</style>
