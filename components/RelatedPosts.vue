<template>
    <section class="related-posts" v-if="post.fields.relatedArticles">
        <h2 class="">こちらもおすすめ</h2>
        <!--        <div class="related-post flex">-->

        <!--          <div>{{article.fields.relatedArticles[index - 1].fields.title}}</div>-->
        <div class="post-container" v-for="(article, index) in post.fields.relatedArticles" v-bind:key="index"
        >
            <nuxt-link v-if="article.fields.slug" :to="'/posts/' + article.fields.slug" class="related-post flex between">
                <img v-if="article.fields.thumbnail" loading="lazy" class="pc img-box" :src="`${article.fields.thumbnail.fields.file.url}?fit=thumb&w=300&h=200`" alt="">
                <img v-if="article.fields.thumbnail" loading="lazy" class="sp img-box" :src="`${article.fields.thumbnail.fields.file.url}?fit=thumb&w=300&h=200`" alt="">
                <img class="category_icon" v-if="post.fields.category === 'why-vegan'" src="~assets/icons/category_why_vegan.svg" alt="why_vegan">
                <img class="category_icon" v-if="post.fields.category === 'nutrition'" src="~assets/icons/category_nutrition.svg" alt="nutrition">
                <img class="category_icon" v-if="post.fields.category === 'recipes'" src="~assets/icons/category_recipes.svg" alt="recipes">
                <img class="category_icon" v-if="post.fields.category === 'restaurants'" src="~assets/icons/category_restaurants.svg" alt="restaurants">
                <img class="category_icon" v-if="post.fields.category === 'ox-life'" src="~assets/icons/category_ox_life.svg" alt="ox_life">
                <div class="flex column between left">
                    <div class="txt-box">
                        <p class="green sp" v-if="article.fields.category">{{ article.fields.category }}</p>
                        <h3 v-if="article.fields.title" class="strong">{{ article.fields.title }}</h3>
                        <p v-if="article.fields.description" class="pc small green"><span class="normal">{{ article.fields.description }}</span></p>
                    </div>
                    <!--              <p class="sp" v-if="article.fields.author">By {{ article.fields.author.fields.name }}</p>-->
                </div>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
import Button from "./Button";
export default {
    components: {Button},
    props: ['post']
}
</script>


<style lang="scss" >
.related-posts{
    width: $pc-contents;
    max-width: 840px;
    margin: auto;
    @media screen and (max-width: 767px){
        width: $sp-contents;
        margin: auto;
    }
    h2, h3{
        font-size: 18px;
        line-height: 1.25;
        font-weight: 700;
        @media screen and (max-width: 767px){
            font-size: 14px;
        }
    }
    h2{
        margin-bottom: 15px;
        @media screen and (max-width: 767px){
            font-weight: 500;
            margin-bottom: 16px;
        }
    }
    .green{
        color: $main-color;
        text-transform: uppercase;
        margin-top: 0;
    }
    .normal{
        color: #191919;
    }
    p{
        font-size: 14px;
        font-weight: 200;
        letter-spacing: 0.35px;
        color: #191919;
        margin-top: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        @media screen and (max-width: 767px){
            font-size: 12px;
        }
    }
    a:hover{
        color: $main-color;
    }
    .related-post{
        gap: 20px;
        position: relative;
    }
    .post-container{
        border-bottom: 1px solid #d9d9d9;
        padding: 20px 0;
        @media screen and (max-width: 767px){
            padding: 16px 0;
        }
        &:last-child{
            /*border-bottom: none;*/
        }
        &:first-child{
            border-top: 1px solid #d9d9d9;
        }
    }
    .left{
        width: 80%;
        @media screen and (max-width: 767px){
            width: 72%;
        }
    }
    img{
        width: 150px;
        height: 100px;
        &.category_icon{
            width: 20px;
            height: 20px;
            position: absolute;
            top: -12px;
            left: 139px;
            z-index: 99;
            @media screen and (max-width: 767px){
                left: 90px;
            }
        }
        @media screen and (max-width: 767px){
            width: 100px;
            height: 67px;
        }
    }
}

</style>

