<template>
<!--  <transition name="fill">-->
    <div :class="color" class="button" >
      <nuxt-link :to="link">
        <p class="en"> {{text}}</p>
      </nuxt-link>
    </div>
<!--  </transition>-->
</template>

<script>
    export default {
        props: ['link','text', 'color']
    }
</script>

<style lang="scss">
  .button{
    text-align: center;
    line-height: get-vw(78px);
    width: get-vw(225px);
    height: get-vw(54px);
    -webkit-backdrop-filter: blur(1.5px);
    backdrop-filter: blur(1.5px);
    background-image: linear-gradient(to right, $main-color 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .2s ease-out;
    background-color: transparent;
    display: flex;
    align-items: center;
    &:hover{
      background-position: left bottom;
      color: #fff;
    }
    &.black{
      border: solid 1px #b1b1b1;
    }
    &.white{
      border: solid 1px white;
    }
    a{
      line-height: get-vw(48px);
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      @include res-width-height(305px, 51px);
      background-color: $main-color;
      color: #fff;
      border-radius: responsive-vw(26px);
      p{
        font-size: responsive-vw(12px);
        font-weight: normal;
      }
      a{
        line-height: get-vh(59px);
      }
    }
  }


</style>
