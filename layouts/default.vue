<template>
  <div>
    <Header id="header" />
    <nuxt class="header-padding"/>
    <Footer></Footer>
  </div>


</template>

<script>
    import Header from '@/components/Header';
    import Footer from "@/components/Footer";

    export default {
        components: {
            Header,
            Footer
        },
        // methods: {
        //     animateHeader: function() {
        //         const target     = document.getElementById('header'),
        //             height     = target.clientHeight;
        //         let offset       = 0,
        //             lastPosition = 0,
        //             ticking      = false;
        //
        //         function onScroll() {
        //             if (lastPosition > height) {
        //                 if (lastPosition > offset) {
        //                     target.classList.add('head-animation');
        //                 } else {
        //                     target.classList.remove('head-animation');
        //                 }
        //                 offset = lastPosition;
        //             }
        //         }
        //
        //         window.addEventListener('scroll', function(e) {
        //             lastPosition = window.scrollY;
        //             if (!ticking) {
        //                 window.requestAnimationFrame(function() {
        //                     onScroll(lastPosition);
        //                     ticking = false;
        //                 });
        //                 ticking = true;
        //             }
        //         });
        //     }
        // },
        // mounted() {
        //     this.animateHeader();
        // }
    }
</script>
<style lang="scss">
  .layout{
    background-color: $bg;
  }
</style>

