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
                  <h1 class=" green">THE ANSWER <br> FOR YOUR <br> OPTIMAL HEALTH</h1>
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
                 data-aos="fade-up"
                 data-aos-duration="5000"
                 data-aos-delay="1000"
            >
<!--              <p>植物を中心とした食事に切り替えると、最適な燃料が得られることで、血流が増加し、</p>-->
<!--              <p>筋肉がより効率的になり、パフォーマンスが大幅に向上し、炎症を抑えることで回復が速くなります。</p>-->
              <p>動物性食品の摂取を減らし、植物性食品中心の食事に切り替えることで、</p>
              <p>あなたの全般的な健康だけでなく運動や知的パフォーマンスを大幅に向上させることができます。</p>
              <p>そのことはアスリートだけでなく、人生と地球を愛する全ての人に手にしてもらいたいメリットです。</p>
              <p class="top-margin">実践の為に必要なすべてのレシピやヒント、疑問への答えはここで入手してください。</p>
            </div>
          </div>
        </div>
<!--        <RecentPosts class="sp" :posts="posts"></RecentPosts>-->


      </client-only>


      <div class="main-content">


        <div class="comp-category-card pc"
             data-aos="slide-right"
             data-aos-duration="1000"
             data-aos-delay="50"
        >
          <div class="img-box whyvegan-bg left">
            <div class="content-container pc">
              <div class="txt-box flex column">
                <h3 class="">WHY VEGAN</h3>
                <p class="strong">どうしてヴィーガンなの？</p>
                <p class="category-description">病気のリスクを減らし、エネルギッシュでパフォーマンスの<br>
                  高い生活をおくる為には食生活を変えてみましょう。</p>
                <Button link="/posts/why-vegan" text="理由を学ぶ" color="white" />
              </div>
            </div>
          </div>
        </div>
        <section class="why-vegan category-item sp">
          <div class="comp-category-card img-box whyvegan-bg sp"
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="0"
          >
            <div class="content-container">
              <div class="txt-box flex column">
                <div class="flex center-align card-title"><p class="en">WHY VEGAN</p><div class="green">|</div><p>どうしてヴィーガンなの？</p></div>
                <p class="bigTxt">食生活を変えることがあなたの健康やパフォーマンスを向上させます。</p>
              </div>
              <div class="flex between center-align category-link-text">
                <nuxt-link to="/posts/why-vegan">
                  理由を学ぶ</nuxt-link>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <PostList class=" sp" :post="whyVegan.slice(0,3)" />
          <Button link="/posts/why-vegan" text="VIEW MORE" color="white" />
        </section>

        <div class="comp-category-card pc"
             data-aos="slide-left"
             data-aos-duration="1000"
             data-aos-delay="50"
        >
          <div class="img-box nutrition-bg right">
            <div class="content-container pc">
              <div class="txt-box flex column">
                <h3 class="">NUTRITION</h3>
                <p class="strong">栄養について学ぶ</p>
                <p class="category-description">動物性食品から摂取できる必須栄養素の全ては、植物だけでも摂取できます。神話に騙されないために栄養について学びましょう。</p>
                <Button link="/posts/nutrition" text="栄養に詳しくなる" color="white" />
              </div>
            </div>
          </div>
        </div>
        <section class="nutrition category-item sp">
          <div class="comp-category-card img-box nutrition-bg sp"
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="0"
          >
            <div class="content-container">
              <div class="txt-box flex column">
                <div class="flex center-align card-title"><p class="en">NUTRITION</p><div class="green">|</div><p>栄養について学ぶ</p></div>
                <p class="bigTxt">動物性食品から摂取できる必須栄養素の全ては、植物だけでも摂取できます。</p>
              </div>
              <div class="flex between center-align category-link-text">
                <nuxt-link to="/posts/nutrition">
                  栄養に詳しくなる</nuxt-link>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <PostList class=" sp" :post="nutrition.slice(0,3)" />
          <Button link="/posts/nutrition" text="VIEW MORE" color="white" />
        </section>
        <div class="comp-category-card pc"
             data-aos="slide-right"
             data-aos-duration="1000"
             data-aos-delay="50"
        >
          <div class="img-box recipe-bg left">
            <div class="flex-part content-container">
              <div class="txt-box flex column">
                <div class="img-box recipe-icon"></div>
                <h3 class="">RECIPE</h3>
                <p class="strong">ヴィーガン料理をつくる</p>
                <p class="category-description">
                  チャンピオンのような食事を実践する為のレシピやヒントを<br>
                  手に入れましょう。</p>
                <Button link="/posts/recipes" text="料理してみる" color="white" />

              </div>
            </div>
          </div>
        </div>
        <section class="why-vegan category-item sp">
          <div class="comp-category-card img-box recipe-bg sp"
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="0"
          >
            <div class="content-container">
              <div class="txt-box flex column">
                <div class="flex center-align card-title"><p class="en">RECIPE</p><div class="green">|</div><p>ヴィーガン料理をつくる</p></div>
                <p class="bigTxt">チャンピオンのような食事を実践する為のレシピやヒントを手に入れましょう。</p>
              </div>
              <div class="flex between center-align category-link-text">
                <nuxt-link to="/posts/recipes">
                  料理してみる</nuxt-link>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <PostList class=" sp" :post="recipes.slice(0,3)" />
          <Button link="/posts/recipes" text="VIEW MORE" color="white" />
        </section>

        <div class="comp-category-card pc"
             data-aos="slide-left"
             data-aos-duration="1000"
             data-aos-delay="50">
          <div class="img-box restaurant-bg right">
            <div class="flex-part content-container">
              <div class="txt-box flex column">
                <div class="img-box restaurant-icon"></div>
                <h3 class="">RESTAURANT</h3>
                <p class="strong">外でヴィーガン料理を食べる</p>
                <p class="category-description">ヴィーガン向けの飲食店は日本ではまだまだ多くはありません。<br>
                  わたしたちが見つけたオススメの店を紹介していきます。</p>
                <Button link="/posts/restaurants" text="食べに行こう" color="white" />

              </div>
            </div>
          </div>
        </div>
        <section class="why-vegan category-item sp">
          <div class="comp-category-card img-box restaurant-bg sp"
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="0"
          >
            <div class="content-container">
              <div class="txt-box flex column">
                <div class="flex center-align card-title"><p class="en">RESTAURANTS</p><div class="green">|</div><p>外でヴィーガン料理を食べる</p></div>
                <p class="bigTxt">ヴィーガン料理が楽しめるおすすめのレストラン情報を紹介します。</p>
              </div>
              <div class="flex between center-align category-link-text">
                <nuxt-link to="/posts/restaurants">
                  食べに行こう</nuxt-link>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <PostList class=" sp" :post="restaurants.slice(0,3)" />
          <Button link="/posts/restaurants" text="VIEW MORE" color="white" />
        </section>
        <div class="comp-category-card pc"
             data-aos="slide-right"
             data-aos-duration="1000"
             data-aos-delay="50"
        >
          <div class="img-box ox-life-bg left">
            <div class="flex-part content-container ">
              <div class="txt-box flex column">
                <div class="img-box ox-life-icon"></div>
                <h3 class="">OX LIFE</h3>
                <p class="strong">ヴィーガン生活</p>
                <p class="category-description">ヴィーガン生活をする中で出てくる疑問に答えたり日々の生活に役立つ情報を紹介します。</p>
                <Button link="/posts/ox-life" text="答えを探す" color="white" />
              </div>
            </div>
          </div>
        </div>
        <section class="why-vegan category-item sp">
          <div class="comp-category-card img-box ox-life-bg sp"
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="0"
          >
            <div class="content-container">
              <div class="txt-box flex column">
                <div class="flex center-align card-title"><p class="en">OX LIFE</p><div class="green">|</div><p>ヴィーガン生活</p></div>
                <p class="bigTxt">ヴィーガン生活をする中で出てくる疑問に答えたり日々の生活に役立つ情報を紹介します。</p>
              </div>
              <div class="flex between center-align category-link-text">
                <nuxt-link to="/posts/ox-life">
                  答えを探す</nuxt-link>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <PostList class=" sp" :post="oxLife.slice(0,3)" />
          <Button link="/posts/ox-life" text="VIEW MORE" color="white" />
        </section>
      </div>

      <RecentPosts class="pc" :posts="posts"></RecentPosts>


    </div>
    <div id="load" class="loading">
      <div class="img-box"></div>
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
                const whyVegan = items.filter(function (item){
                    return item.fields.category === 'why-vegan'
                })
                const nutrition = items.filter(function (item){
                    return item.fields.category === 'nutrition'
                })
                const recipes = items.filter(function (item){
                    return item.fields.category === 'recipes'
                })
                const restaurants = items.filter(function (item){
                    return item.fields.category === 'restaurants'
                })
                const oxLife = items.filter(function (item){
                    return item.fields.category === 'ox-life'
                })
                return {
                    whyVegan: whyVegan,
                    nutrition: nutrition,
                    recipes: recipes,
                    restaurants: restaurants,
                    oxLife: oxLife,
                    posts: posts.items
                    // posts: posts.items
                }
            }).catch(console.error);
        },
    }
</script>

<style lang="scss">

  @media screen and (max-width: 768px){
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
    @media screen and (max-width: 768px){
      background-color: transparent;
    }
  }
  .top{
    position: relative;
    @media screen and (max-width: 768px) {
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
      @media screen and (max-width: 768px){
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
      @media screen and (max-width: 768px){
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
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 2.57;
    letter-spacing: 1.4px;
  }
  .top-margin{
    margin-top: get-vw(120px);
  }

  .ig{
    @include width-height(15.4px, 15.4px);
    background-image: url('~assets/icons/instagram-icon.svg');
    @media screen and (max-width: 768px) {
      @include res-width-height(15px, 15px)
    }
  }

  .tw{
    @include width-height(15.4px, 12.5px);
    background-image: url('~assets/icons/twitter-icon.svg');
    @media screen and (max-width: 768px) {
      @include res-width-height(15.8px, 12.8px)
    }

  }

  .whyvegan-bg{
    background-image: url('~assets/img/whyvegan.jpg');
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/whyvegan-sp.jpg');
    }
  }
  .nutrition-bg{
    background-image: url('~assets/img/nutrition.jpg');
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/nutrition-sp.jpg');
    }

  }
  .recipe-bg{
    background-image: url('~assets/img/recipe.jpg');
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/recipe-sp.jpg');
    }

  }
  .restaurant-bg{
    background-image: url('~assets/img/restaurant.jpg');
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/restaurant-sp.jpg');
    }

  }
  .ox-life-bg{
    background-image: url('~assets/img/faq.jpg');
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/faq-sp.jpg');
    }

  }
  .introduction{
    padding: get-vh(132px) 0 get-vh(115px);
    @media screen and (max-width: 768px){
      padding: get-vh(74px) 0 get-vh(61px);
    }
  }

</style>
