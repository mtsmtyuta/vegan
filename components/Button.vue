<template>
<!--  <transition name="fill">-->
    <div :class="color" class="button" >
      <nuxt-link :to="link">
        <p> {{text}}</p>
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
    width: get-vw(202px);
    height: get-vw(48px);
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
      border: solid 1px #cbcbcb;
    }
    &.white{
      border: solid 1px white;
    }
    a{
      line-height: get-vw(48px);
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      @include res-width-height(277px, 59px);
      font-size: responsive-vw(14px);
      border-radius: 30px;
      a{
        line-height: get-vh(59px);
      }
    }
  }


</style>
