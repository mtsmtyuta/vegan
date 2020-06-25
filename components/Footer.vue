<template>
  <footer>
    <div class="footer-content flex"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="50"
         data-aos-once="true"
    >
      <nuxt-link to="/"><div class="img-container img-box logo"></div></nuxt-link>
      <ul class="footer-links flex">
        <li class="footer-links__item"><nuxt-link to="/posts/why-vegan">WHY VEGAN</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/nutrition">NUTRITION</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/recipes">RECIPES</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/restaurants">RESTAURANTS</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/posts/faq">FAQ</nuxt-link></li>
        <li class="footer-links__item"><nuxt-link to="/contact">CONTACT</nuxt-link></li>
        <li class="footer-links__item pc"><nuxt-link to="/about-us">ABOUT US</nuxt-link></li>
        <li class="footer-links__item pc"><nuxt-link to="/privacy-policy">PRIVACY POLICY</nuxt-link></li>
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
    .ig{
      margin-right: get-vw(52px);
    }
  }
  .footer-content{
    height: get-vh(307px);
    align-items: center;
    color: #fff;
    width: 80%;
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
    width: 70%;
    justify-content: space-between;
    a{
      display: block;
      font-size: get-vw(9px);
      @media screen and (max-width: 768px){
        font-size: responsive-vw(10px);
      }
    }
  }
</style>
