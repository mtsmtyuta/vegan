<template>
    <div class="sp hamburger">
        <nav>
            <div class="drawer">
                <div class="drawer-content">
                    <nuxt-link @click.native="hamburger()" class="header-logo" to="/"><div class="en logo"><img src="~assets/img/logo_set.svg" alt=""></div></nuxt-link>
                    <ul class="header-nav">
                        <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/posts/why-vegan"><img src="~assets/icons/category_why_vegan.svg" alt="why_vegan">WHY VEGAN</nuxt-link></li>
                        <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/posts/nutrition"><img src="~assets/icons/category_nutrition.svg" alt="nutrition">NUTRITION</nuxt-link></li>
                        <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/posts/recipes"><img src="~assets/icons/category_recipes.svg" alt="recipes">RECIPES</nuxt-link></li>
                        <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/posts/restaurants"><img src="~assets/icons/category_restaurants.svg" alt="restaurants">RESTAURANTS</nuxt-link></li>
                        <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/posts/ox-life"><img src="~assets/icons/category_ox_life.svg" alt="ox_life">OX LIFE</nuxt-link></li>
                    </ul>
                    <ul class="header-nav bottom">
                        <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/posts">ARCHIVE</nuxt-link></li>
                        <!--              <li class="header-nav__item"><nuxt-link @click.native="hamburger()" to="/writers">WRITER</nuxt-link></li>-->
                        <li class="header-nav__item"><a @click.native="hamburger()" href="/about-us">ABOUT US</a></li>

                    </ul>
                </div>
            </div>
            <div class="hamburger_button" @click="hamburger()">
                <span class="hamburger__line hamburger__line--1"></span>
                <span class="hamburger__line hamburger__line--2"></span>
                <span class="hamburger__line hamburger__line--3"></span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        hamburger: function() {
            let body = document.body;
            body.classList.toggle('nav-open');
        }
    }
}
</script>

<style lang="scss">

.drawer{
    opacity: 0;
    transition: opacity .6s ease-in-out;
    overflow: hidden;
    font-size: responsive-vw(15px);
    z-index: -1;
    height: 0;
    width: 0;
    pointer-events: none;
    background-color: $bg;
    &-content{
        margin: responsive-vw(20px);
    }
    .title a{
        font-size: responsive-vw(20px);
        display: block;
        margin-bottom:2vh;

    }
    .jp{
        font-weight: 200;
        font-size: responsive-vw(12px);
    }
    .nav-link{
        margin: get-spvh(10px) 0;
        a{
            font-size: responsive-vw(55px);
            letter-spacing: responsive-vw(2.75px);
            padding: 0;
            border: 0;
            .jp{
                margin-left: responsive-vw(16px);
            }
        }
        &:nth-child(5){
            margin-bottom: get-spvh(60px);
        }
        &.additional-pages{
            padding-bottom: get-spvh(19px);
            a{
                font-size: responsive-vw(16px);
                letter-spacing: responsive-vw(0.8px);
            }
        }
    }
    &-content{
        height: 100%;
        justify-content: space-around;
    }
    ul{
        list-style: none;
        padding: 0;
        margin-top: get-spvh(70px);
    }

}
.hamburger{
    z-index: 800;
    position: absolute;
    top: 0;
}
.hamburger_button{
    position: absolute;
    z-index: 999;
    top: 80px;
    left: responsive-vw(20px);
    height: get-spvh(48px);
}
.hamburger__line {
    position: absolute;
    height: 2px;
    background-color: $black;
    transition: all .6s;
}
.hamburger__line--1 {
    top: 50%;
    width: responsive-vw(24px);
}
.hamburger__line--2 {
    top: 65%;
    width: responsive-vw(24px);
}
.hamburger__line--3 {
    top: 80%;
    width: responsive-vw(24px);
}
.wrapper{
    z-index: 10;
    position: relative;
}
.nav-open{
    height: 100vh;
    overflow: hidden;
    article{
        display: none;
    }
    .drawer{
        //height: 230px;
        opacity: 1;
        height: 100vh;
        width: 100vw;
        /*background-color: #fff;*/
        position: relative;
        /*bottom: get-vh(40px);*/
        pointer-events: unset;
        z-index: 100;
        overflow: scroll;
    }
    .hamburger{
        height: 70px;
        top: 0;
        .logo{
            margin: 0 0 3vh 0 ;
        }
    }
    .hamburger__line--1 {
        transform: rotate(35deg);
        top: 60%;
    }
    .hamburger__line--2{
        display: none;
    }
    .hamburger__line--3 {
        transform: rotate(-35deg);
        top: 60%;
    }
}

</style>
