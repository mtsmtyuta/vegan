<template>
  <footer>
    <div class="footer-content flex"
    >
      <nuxt-link to=""><div class="img-container img-box logo"></div></nuxt-link>
      <ul class="footer-links flex">
        <li class="footer-links__item"><nuxt-link to="/posts/why-vegan">WHY VEGAN</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/nutrition">NUTRITION</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/recipes">RECIPES</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/restaurants">RESTAURANTS</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/faq">FAQ</nuxt-link></li>
        <li class="footer-links__item "><nuxt-link class="pages" to="/contact">CONTACT</nuxt-link></li>
        <li class="footer-links__item "><nuxt-link class="pages" to="/about-us">ABOUT US</nuxt-link></li>
        <li class="footer-links__item "><nuxt-link class="pages" to="/privacy-policy">PRIVACY POLICY</nuxt-link></li>
      </ul>
      <div class="sns-links flex">
        <div class="img-box ig"></div>
        <div class="img-box tw"></div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default { }
</script>

<style lang="scss">
  footer{
    background-color: #292929;
    @media screen and (max-width: 768px){
      background-color: #191919;
    }
    .ig{
      margin-right: get-vw(52px);
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
        margin-top: get-vh(85px);
      }
    }
  }
  .footer-links{
    width: 75%;
    justify-content: space-between;
    a{
      @include font-en;
      display: block;
      font-size: get-vw(9px);
      letter-spacing: 4.5px;
      @media screen and (max-width: 768px){
        font-size: responsive-vw(14px);
        &.pages{
          font-size: responsive-vw(12px);
        }
      }
    }
  }
</style>
