<template>
    <footer class="footer flex row-to-column"

    >
        <nuxt-link class="footer-logo" to="/"><div class="en logo"><img src="~assets/img/logo_set.svg" alt="logo"></div></nuxt-link>
        <!--    <nuxt-link class="footer-logo" to="/"><div class="en logo"><img src="~assets/img/logo_set.svg" alt=""></div></nuxt-link>-->
        <div>
            <ul class="footer-nav flex row-to-column">
                <!--      <li class="footer-nav__item"><nuxt-link to="/about">ABOUT</nuxt-link></li>-->
                <li class="footer-nav__item"><nuxt-link to="/posts/why-vegan"><img src="~assets/icons/category_why_vegan.svg" alt="why_vegan">WHY VEGAN</nuxt-link></li>
                <li class="footer-nav__item"><nuxt-link to="/posts/nutrition"><img src="~assets/icons/category_nutrition.svg" alt="nutrition">NUTRITION</nuxt-link></li>
                <li class="footer-nav__item"><nuxt-link to="/posts/recipes"><img src="~assets/icons/category_recipes.svg" alt="recipes">RECIPES</nuxt-link></li>
                <li class="footer-nav__item"><nuxt-link to="/posts/restaurants"><img src="~assets/icons/category_restaurants.svg" alt="restaurants">RESTAURANTS</nuxt-link></li>
                <li class="footer-nav__item"><nuxt-link to="/posts/ox-life"><img src="~assets/icons/category_ox_life.svg" alt="ox_life">OX LIFE</nuxt-link></li>
            </ul>
            <ul class="footer-nav bottom flex row-to-column">
                <li class="footer-nav__item"><nuxt-link to="/posts">ARCHIVE</nuxt-link></li>
                <li class="footer-nav__item"><nuxt-link to="/writers">WRITER</nuxt-link></li>
                <li class="footer-nav__item"><nuxt-link to="/about-us">ABOUT US</nuxt-link></li>
            </ul>
        </div>
        <p>&copy; OX</p>
    </footer>
</template>
<style lang="scss">
    .footer{
        display: flex;
        padding: get-vw(36px);
        justify-content: space-between;
        margin-top: 80px;
        &-nav{
            display: flex;
            &.bottom{
                margin-top: 28px;
                a{
                    font-size: 16px;
                }
            }
            &__item{
                @media screen and (max-width: 767px){
                    margin-bottom: 20px;
                }
            }
            a{
                font-size: get-vw(20px);
                margin: 0 get-vw(30px);
                display: flex;
                align-items: center;
                img{
                    margin-right: get-vw(16px);
                }
                @media screen and (max-width: 767px){
                    font-size: responsive-vw(20px);
                }
            }
        }
        p{
            align-self: end;
        }
    }
</style>
<script>
export default {
}
</script>
