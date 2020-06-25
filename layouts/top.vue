<template>
  <div class="layout">
    <firstLoading />
      <Header />
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
      }
  }
</script>
<style lang="scss" scoped>
  .header{
    position: absolute;
    background-color: transparent;
  }
  .layout{
    position: relative;
  }
</style>

