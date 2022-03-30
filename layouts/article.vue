<template>
  <div class="layout">
    <firstLoading />
      <Header id="header" />
      <nuxt/>
      <Footer></Footer>
    </div>


</template>

<script>
  import firstLoading from './-first-loading'
  import Header from '@/components/Header';
  import Footer from "@/components/Footer";

  export default {
      components: {
          Header,
          Footer,
          firstLoading
      },
      methods: {
          animateHeader: function() {
              const target     = document.getElementById('header'),
                  height     = target.clientHeight;
              let offset       = 0,
                  lastPosition = 0,
                  ticking      = false;

              function onScroll() {
                  if (lastPosition > height) {
                      target.classList.add('head-bgc');
                      if (lastPosition > offset) {
                          target.classList.add('head-animation');
                      } else {
                          target.classList.remove('head-animation');
                      }
                      offset = lastPosition;
                  }else{
                      target.classList.remove('head-bgc');
                  }
              }

              window.addEventListener('scroll', function(e) {
                  lastPosition = window.scrollY;
                  if (!ticking) {
                      window.requestAnimationFrame(function() {
                          onScroll(lastPosition);
                          ticking = false;
                      });
                      ticking = true;
                  }
              });
          }
      },
      mounted() {
          this.animateHeader();
      }
  }
</script>
<style lang="scss" scoped>
  @media screen and (max-width: 767px){
    .header{
      background-color: transparent;
    }
  }
  .head-bgc{
    background-color: #191919;
  }
  .layout{
    position: relative;
  }
</style>

