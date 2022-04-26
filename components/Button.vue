<template>
    <!--  <transition name="fill">-->
    <div :class="color" class="button" >
        <nuxt-link :to="link">
            <p class=""> {{text}}</p>
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
    width: fit-content;
    padding: 12px 30px;
    text-align: center;
    background-color: white;
    display: flex;
    align-items: center;
    &:hover{
        background-position: left bottom;
        color: #fff;
    }
    &.black{
        border: solid 1px #b1b1b1;
        @media screen and (max-width: 767px){
            border: none;
        }
    }
    &.white{
        color: $accent-red;
        @media screen and (max-width: 767px){
            border: none;
        }
    }
    a{
        line-height: get-vw(48px);
        width: 100%;
    }
    p{
        font-weight: bold;
        line-height: 2;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-position: under;
    }
    @media screen and (max-width: 767px) {
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
