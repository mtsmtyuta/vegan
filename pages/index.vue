<template>
    <div>
        <div id="main-content">
            <client-only>
                <div class="fv-container">
                    <div class="foreground">
                        <div class="top">
                            <div class="top-hero">
                                <div class="txt-box"
                                     data-aos="fade-in"
                                     data-aos-duration="2000"
                                     data-aos-delay="1000">
                                    <h1 class=" green">GAIN YOUR <br> OPTIMAL HEALTH</h1>
                                </div>
                                <img class="kv_img" height="480px" width="684px" src="~assets/img/kv_1.jpg" alt="">
                            </div>
                            <div class="flex vertical tag-line"
                                 data-aos="slide-down"
                                 data-aos-duration="1000"
                                 data-aos-delay="5000">
                                <p class="bold">健康をここから始める</p>
                                <p class="bold">ヴィーガンライフスタイルマガジン</p>
                            </div>
                            <div class="new-posts">
                                <div class="articles">
                                    <div class="flex between">
                                        <div class="title_box">
                                            <h2 class="new-posts_title">NEW ARTICLES</h2>
                                            <p>最新の記事を見る</p>
                                        </div>
                                        <nuxt-link class="to-archive en" to="/posts">VIEW MORE</nuxt-link>
                                    </div>
                                    <div class="article flex column">
                                        <div class="article-inner">
                                            <div class="article__items flex row-to-column">
                                                <div class="article__item">
                                                    <nuxt-link v-if="posts[0].fields.slug" class="flex row-to-column" :to="{ name: 'posts-slug', params: { slug: posts[0].fields.slug }}" >
                                                        <img v-if="posts[0].fields.thumbnail" loading="lazy" class="img-box" :src="`${posts[0].fields.thumbnail.fields.file.url}?fit=thumb&w=300&h=200`" alt="">
                                                        <div class="article_detail flex column">
                                                            <p class="article__item__title bold" v-if="posts[0].fields.title">        {{ posts[0].fields.title }}
                                                            </p>
                                                            <p class="article__description" v-if="posts[0].fields.description">{{ posts[0].fields.description }}</p>
                                                            <span class="date" v-if="posts[0].fields.publishDate">{{( new Date(posts[0].fields.publishDate).toDateString())}}
                              </span>
                                                        </div>
                                                    </nuxt-link>
                                                </div>
                                                <div class="article__item">
                                                    <nuxt-link v-if="posts[1].fields.slug" class="flex row-to-column" :to="{ name: 'posts-slug', params: { slug: posts[1].fields.slug }}" >
                                                        <img v-if="posts[1].fields.thumbnail" loading="lazy" class="img-box" :src="`${posts[1].fields.thumbnail.fields.file.url}?fit=thumb&w=300&h=200`" alt="">
                                                        <div class="article_detail flex column">
                                                            <p class="article__item__title bold" v-if="posts[1].fields.title">        {{ posts[1].fields.title }}
                                                            </p>
                                                            <p class="article__description" v-if="posts[1].fields.description">{{ posts[1].fields.description }}</p>
                                                            <span class="date" v-if="posts[1].fields.publishDate">{{
                                                                    ( new Date(posts[1].fields.publishDate).toDateString())
                                                                }}</span>
                                                        </div>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sns-links flex column pc">
                                <a href="https://www.instagram.com/ox_vegan_jp" target="_blank" rel="noopener"><div class="img-box ig"></div></a>
                                <a href="https://twitter.com/ox_vegan_jp" target="_blank" rel="noopener"><div class="img-box tw"></div></a>
                            </div>

                        </div>
                        <div class="txt-box bottom-ground"
                        >
                            <!--              <div class="txt-box bottom-ground"-->
                            <!--                 data-aos="fade-up"-->
                            <!--                 data-aos-duration="5000"-->
                            <!--                 data-aos-delay="1000"-->
                            <!--            >-->
                            <div class="img-box berries">
                                <img src="~assets/img/berries.jpg" alt="berries">
                            </div>
                            <h2 class="green">UNLEASH YOUR POTENTIAL</h2>
                            <p>動物性食品・加工食品の摂取を減らし、植物性食品・ホールフード中心の食事に切り替えることで、</p>
                            <p>あなたの全般的な健康だけでなく運動や知的パフォーマンスを大幅に向上させることができます。</p>
                            <p>そのことはアスリートだけでなく、人生と地球を愛する全ての人に手にしてもらいたいメリットです。</p>
                            <p>実践の為に必要なすべてのレシピやヒント、疑問への答えはここで入手してください。</p>
                        </div>
                    </div>
                </div>
                <div class="img-box greens">
                    <img src="~assets/img/greens.jpg" alt="greens">
                </div>
                <!--        <RecentPosts class="sp" :posts="posts"></RecentPosts>-->


            </client-only>


            <div class="category_container">
                <div class="txt-box">
                    <h2>WHAT TO LEARN TODAY?</h2>
                    <p>何をお探しですか？</p>
                </div>
                <div class="content-container">
                    <div class="category_item">
                        <img src="~assets/icons/category_why_vegan_white.svg" alt="why_vegan">
                        <div class="txt-box flex column">
                            <h3 class="">WHY VEGAN</h3>
                            <p class="strong">どうしてヴィーガンなの？</p>
                            <p class="category-description">病気のリスクを減らし、エネルギッシュでパフォーマンスの
                                高い生活をおくる為には食生活を変えてみましょう。</p>
                            <Button link="/posts/why-vegan" text="理由を学ぶ" color="white" />
                        </div>
                    </div>

                    <div class="category_item">
                        <img src="~assets/icons/category_nutrition_white.svg" alt="nutrition">

                        <div class="txt-box flex column">
                            <h3 class="">NUTRITION</h3>
                            <p class="strong">栄養について学ぶ</p>
                            <p class="category-description">動物性食品から摂取できる必須栄養素の全ては、植物だけでも摂取できます。神話に騙されないために栄養について学びましょう。</p>
                            <Button link="/posts/nutrition" text="栄養に詳しくなる" color="white" />
                        </div>
                    </div>
                    <div class="category_item">
                        <img src="~assets/icons/category_recipes_white.svg" alt="recipes">

                        <div class="txt-box flex column">
                            <div class="img-box recipe-icon"></div>
                            <h3 class="">RECIPE</h3>
                            <p class="strong">ヴィーガン料理をつくる</p>
                            <p class="category-description">
                                チャンピオンのような食事を実践する為のレシピやヒントを
                                手に入れましょう。</p>
                            <Button link="/posts/recipes" text="料理してみる" color="white" />

                        </div>
                    </div>

                    <div class="category_item">
                        <img src="~assets/icons/category_restaurants_white.svg" alt="restaurants">
                        <div class="txt-box flex column">
                            <div class="img-box restaurant-icon"></div>
                            <h3 class="">RESTAURANT</h3>
                            <p class="strong">外でヴィーガン料理を食べる</p>
                            <p class="category-description">ヴィーガン向けの飲食店は日本ではまだまだ多くはありません。
                                わたしたちが見つけたオススメの店を紹介していきます。</p>
                            <Button link="/posts/restaurants" text="食べに行こう" color="white" />

                        </div>
                    </div>

                    <div class="category_item">
                        <img src="~assets/icons/category_ox_life_white.svg" alt="ox_life">
                        <div class="txt-box flex column">
                            <div class="img-box ox-life-icon"></div>
                            <h3 class="">OX LIFE</h3>
                            <p class="strong">ヴィーガン生活</p>
                            <p class="category-description">ヴィーガン生活をする中で出てくる疑問に答えたり日々の生活に役立つ情報を紹介します。</p>
                            <Button link="/posts/ox-life" text="答えを探す" color="white" />
                        </div>
                    </div>
                </div>

                <!--          <PostList class=" sp" :post="whyVegan.slice(0,3)" />-->
                <!--      <RecentPosts class="pc" :posts="posts"></RecentPosts>-->
            </div>
            <div id="load" class="loading">
                <div class="img-box"></div>
            </div>

        </div>

    </div>
</template>


<script>


// import {createClient} from '~/plugins/contentful.js';
import client from '~/plugins/contentful';
import Posts from '~/components/Posts.vue';
import Button from "../components/Button";
import Footer from "../components/Footer";
import RecentPosts from "../components/RecentPosts";
import PostList from "../components/PostList";

// const client = createClient();

export default {
    layout: 'top',

    // head: {
    //     title: 'Home',
    // },
    components: {
        PostList,
        RecentPosts,
        Button,
        Posts,
        Footer
    },
    // mounted: function(){
    //     console.log(sys.createdAt);
    // }
    // ,
    data (){
        return{
            posts: []
        }
    },
    // `env` is available in the context object
    asyncData ({env}) {
        return Promise.all([
            client.getEntries({
                'content_type': env.CTF_BLOG_POST_TYPE_ID,
                order: '-fields.publishDate'

            })
        ]).then(([posts]) => {
            const items = posts.items
            // const whyVegan = items.filter(function (item){
            //     return item.fields.category === 'why-vegan'
            // })
            // const nutrition = items.filter(function (item){
            //     return item.fields.category === 'nutrition'
            // })
            // const recipes = items.filter(function (item){
            //     return item.fields.category === 'recipes'
            // })
            // const restaurants = items.filter(function (item){
            //     return item.fields.category === 'restaurants'
            // })
            // const oxLife = items.filter(function (item){
            //     return item.fields.category === 'ox-life'
            // })
            return {
                // whyVegan: whyVegan,
                // nutrition: nutrition,
                // recipes: recipes,
                // restaurants: restaurants,
                // oxLife: oxLife,
                posts: posts.items
                // posts: posts.items
            }
        }).catch(console.error);
    },
}
</script>

<style lang="scss">

@media screen and (max-width: 767px){
    [data-aos][data-aos][data-aos-delay="2000"].aos-animate{
        transition-delay: 0s !important;
    }
}
.tag-line{
    position: absolute;
    right: get-vw(108px);
    top: get-vh(108px);
    display: flex;
    flex-flow: column-reverse;
    p + p{
        margin-right: get-vw(16px);
        @media screen and (max-width: 767px){
            margin-right: responsive-vw(14px);
        }
    }
    @media screen and (max-width: 767px){
        top: get-spvh(80px);
    }
}

.main-content{
    background-color: #f0f0f0;
    padding-bottom: get-vh(10px);
    @media screen and (max-width: 767px){
        background-color: transparent;
    }
}
.top{
    position: relative;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    h1{
        font-size: 50px;
        width: 30px;
        white-space: nowrap;
        /*z-index: 999;*/
        position: relative;
        margin: 0 auto 0 0;
        line-height: 64px;
        @media screen and (max-width: 767px){
            font-size: 30px;
            line-height: 40px;
            bottom: get-spvh(150px);
            left: responsive-vw(20px);
        }
    }
    .top-hero{
        padding-top: get-vh(108px);
        display: flex;
        align-items: center;
        @media screen and (max-width: 767px){
            padding-top: get-spvh(328px);
        }
        img{
            margin-right: get-vw(258px);
            width: get-vh(615px);
            height: get-vh(432px);
            @media screen and (max-width: 767px){
                width: get-spvh(296px);
                height: get-spvh(207px);
            }
        }
    }
    .txt-box {
        width: 92vw;
        margin-left: auto;
        @media screen and (max-width: 767px){
            width: $sp-contents;
            margin: auto;
        }
    }
    .new-posts{
        margin-top: get-vh(60px);
        @media screen and (max-width: 767px){
            width: $sp-contents;
            margin: get-spvh(63px) auto;
        }
        img{
            width: get-vh(300px);
            height: get-vh(200px);
            @media screen and (max-width: 767px){
                width: 100%;
                height: auto;
            }
        }
        .title_box{
            h2{
                font-weight: 700;
                font-size: get-vh(24px);
            }
            p{
                font-weight: 700;
                font-size: get-vh(16px);
                margin: get-vh(8px) 0 get-vh(20px);
            }
        }
    }
    .article__items{
        overflow-x: scroll;
    }
    .article__description{
        margin: get-vh(8px) 0 auto;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        @media screen and (max-width: 767px){
            margin: get-spvh(8px) 0;
        }
    }
    .article_detail{
        width: get-vw(287px);
        margin: 0 get-vw(24px);
        @media screen and (max-width: 767px){
            width: 100%;
            margin: get-spvh(12px) 0 get-spvh(32px);
        }
    }
    .to-archive{
        color: $accent_red;
        font-family: $roboto;
        font-size: get-vh(23px);
        border-bottom: 3px solid $accent_red;
        padding: get-vh(8px) 0;
        height: fit-content;
        margin: 0 get-vh(32px);
        @media screen and (max-width: 767px){
            margin: unset;
        }
    }
}
.date {
    font-size: 20px;
    font-family: $roboto;
}
.foreground {
    margin-left: auto;
    width: get-vw(1060px);
    @media screen and (max-width: 767px){
        width: 100%;
    }
}

.bottom-ground{
    text-align: left;
    line-height: 2.57;
    letter-spacing: 1.4px;
    @media screen and (max-width: 767px){
        padding: 0 30px;
    }
    .green{
        font-size: get-vw(42px);
        position: relative;
        z-index: 11;
        @media screen and (max-width: 767px){
            font-size: 28px;
            line-height: 1.8;
        }
    }
    .berries{
        width: fit-content;
        margin-left: auto;
        position: relative;
        top: 106px;
        @media screen and (max-width: 767px){
            top: 0;
            left: 30px;
        }
        img{
            width: get-vw(636px);
            height: get-vw(393px);
            @media screen and (max-width: 767px){
                width: responsive-vw(290px);
                height: responsive-vw(179px);
            }
        }
    }
}
.greens{
    margin: 72px 0 104px;
    img{
        width: get-vw(720px);
        height: get-vw(449px);
        @media screen and (max-width: 767px){
            width: responsive-vw(290px);
            height: responsive-vw(180px);
        }
    }
}
.ig{
    @include width-height(15.4px, 15.4px);
    background-image: url('~assets/icons/instagram-icon.svg');
    @media screen and (max-width: 767px) {
        @include res-width-height(15px, 15px)
    }
}

.tw{
    @include width-height(15.4px, 12.5px);
    background-image: url('~assets/icons/twitter-icon.svg');
    @media screen and (max-width: 767px) {
        @include res-width-height(15.8px, 12.8px)
    }

}

.category_container{
    background-color: $main-color;
    color: white;
    padding: 80px;
    @media screen and (max-width: 767px){
        padding: 40px 20px;
    }
    h2, h3{
        font-size: 32px;
        margin-bottom: 8px;
        @media screen and (max-width: 767px){
            font-size: 24px;
        }
    }

    .txt-box{
        margin-left: auto;
        width: get-vw(1020px);
        @media screen and (max-width: 767px){
            width: 100%;
        }
    }
    .content-container{
        margin-left: auto;
        width: get-vw(1060px);
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: 767px){
            width: 100%;
        }
    }
    .category_item{
        width: calc(50% - 80px);
        margin: 40px;
        display: flex;
        @media screen and (max-width: 767px){
            width: 100%;
            margin: 24px 0;
            .txt-box{
                width: responsive-vw(270px);
            }
        }
        img{
            width: 44px;
            height: 44px;
            margin-right: 24px;
        }
    }
    .category-description{
        margin: 24px 0;
    }
}

</style>
