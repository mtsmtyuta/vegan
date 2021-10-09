<template>
  <div>
    <div id="main-content">


      <client-only>
        <div class="fv-container">
          <div class="img-box background pc"></div>
          <div class="foreground">
            <div class="top img-box">
              <div class="txt-box"
                   data-aos="fade-in"
                   data-aos-duration="2000"
                   data-aos-delay="1000">
                <h1 class="en-medi">THE <br class="sp"> ANSWER <br class="sp"> FOR<br>YOUR <br class="sp"> OPTIMAL <br class="sp"> HEALTH</h1>
                <p class="jp sub-title pc">
                  ヴィーガンのライフスタイルに興味はあるけど、<br>
                  何から始めたらいいか分からないという方の疑問に答えます。</p>
                  <p class="sub-title jp sp"
                     data-aos="fade-in"
                     data-aos-duration="1500"
                     data-aos-delay="1500">
                  </p>
              </div>
              <div class="new-posts pc"
                   data-aos="slide-left"
                   data-aos-duration="1000"
                   data-aos-delay="2000"
              >
                <div class="articles">
                  <div class="article flex column">
                    <div class="article-inner">
                      <div class="article__items flex">
                        <div class="green-border"></div>

                        <div class="article__item">
                          <nuxt-link v-if="posts[0].fields.slug" class="block grow" :to="{ name: 'posts-slug', params: { slug: posts[0].fields.slug }}" >

                            <p class="article__item__title bold" v-if="posts[0].fields.title">        {{ posts[0].fields.title }}
                            </p>

                            <p class="article__description small" v-if="posts[0].fields.description">{{ posts[0].fields.description }}</p>
                            <span class="date smallest" v-if="posts[0].fields.publishDate">{{
                          ( new Date(posts[0].fields.publishDate).toDateString())
                          }}</span>
                          </nuxt-link>
                        </div>
                        <div class="green-border"></div>

                        <div class="article__item"
                             >
                          <nuxt-link v-if="posts[1].fields.slug" class="block grow" :to="{ name: 'posts-slug', params: { slug: posts[1].fields.slug }}" >

                            <p class="article__item__title bold" v-if="posts[1].fields.title">        {{ posts[1].fields.title }}
                            </p>

                            <p class="article__description small" v-if="posts[1].fields.description">{{ posts[1].fields.description }}</p>
                            <span class="date smallest" v-if="posts[1].fields.publishDate">{{
                          ( new Date(posts[1].fields.publishDate).toDateString())
                          }}</span>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="link">
                    <nuxt-link class="new-posts-link en" to="/posts">VIEW MORE</nuxt-link>
                    <div class="bgbar"></div>
                  </div>

                </div>
              </div>
              <div class="sns-links flex column pc">
                <a href="https://www.instagram.com/ox_vegan_jp" target="_blank" rel="noopener"><div class="img-box ig"></div></a>
                <a href="https://twitter.com/ox_vegan_jp" target="_blank" rel="noopener"><div class="img-box tw"></div></a>
              </div>

            </div>
            <div class="txt-box bottom-ground pc"
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
            <div class="scroll flex sp vertical"
                 data-aos="slide-down"
                 data-aos-duration="1000"
                 data-aos-delay="5000">
              <p class="en">SCROLL</p>
              <hr>
            </div>
          </div>
        </div>
        <RecentPosts class="sp" :posts="posts"></RecentPosts>


      </client-only>


      <div class="main-content">

        <div class="introduction "
        >
          <div class="comp-section-title">
            <h2 class="en-medi section-title">WHAT TO LEARN TODAY?</h2>
            <hr>
            <h3 class="pc">何をお探しですか？</h3>
            <h3 class="sp">ヴィーガンのライフスタイルに興味はあるけど、何から始めたらいいか分からないという方の疑問に答えます。植物を中心とした食事に切り替えパフォーマンスを大幅に向上させる為にヒントを手に入れて、毎日をエネルギッシュに過ごしましょう。</h3>
            <div class="img-box category-logo sp"></div>
          </div>
        </div>

        <div class="comp-category-card pc"
             data-aos="slide-right"
             data-aos-duration="1000"
             data-aos-delay="50"
        >
          <div class="img-box whyvegan-bg left">
            <div class="content-container pc">
              <div class="txt-box flex column">
                <h3 class="en-medi">WHY VEGAN</h3>
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
                <h3 class="en-medi">NUTRITION</h3>
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
                <h3 class="en-medi">RECIPE</h3>
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
                <h3 class="en-medi">RESTAURANT</h3>
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
                <h3 class="en-medi">OX LIFE</h3>
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
  .comp-section-title{
    position: relative;
  }
  .category-logo{
    @include res-width-height(287.5px, 294px);
    background-image: url('~assets/img/categorylogo.svg');
    position: absolute;
    right: responsive-vw(-50px);
    top: responsive-vw(-93px);
    z-index: -1;
  }

  .vertical{
    margin-left: auto;
    margin-right: 5%;
    color: #fff;
    position: relative;
    bottom: 30%;
    align-items: center;
    hr{
      transform: rotate(90deg);
      width: 40vh;
      position: absolute;
      top: 30vh;
      height: 0.5px;
      border-color: #888888;
    }
  }
  .main-content{
    background-color: #f0f0f0;
    padding-bottom: get-vh(10px);
@media screen and (max-width: 768px){
  background-color: transparent;
}
  }
  .fv-container {
    position: relative;
    width: 100%;
    height: 200vh;
    display: flex;
    @media screen and (max-width: 768px) {
      background: #1b1b1b;
      /*height: get-vh(1029px);*/
      /*width: 100%;*/
      height: 100vh;
    }
  }
  .top{
    color: white;
    background-image: url('~assets/img/top.jpg');
    background-size: cover;
    /*width: get-vw(1380px);*/
    /*height: get-vw(804px);*/
    height: 100vh;
    position: relative;
    /*margin-left: auto;*/
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/sptop.jpg');
      height: 100vh;
      width: 100%;
      background-attachment: scroll;
    }
    .sns-links{
      position: absolute;
      bottom: 7vh;
      left: 3.5vw;
      gap: get-vw(45px);
    }
    h1{
      font-size: 15vh;
      padding-top: get-vh(164px);
      letter-spacing: get-vh(5.1px);
      line-height: 1.07;
      font-family: $bebas;
      @media screen and (max-width: 768px){
        font-size: get-vh(99px);
        /*font-size: get-vh(40px);*/
        line-height: 0.99;
        font-weight: normal;
        padding-top: get-vh(126px);
        letter-spacing: get-vh(4.55px);
        margin-bottom: get-vh(15px);
      }
    }
    .txt-box {
      width: 92vw;
      margin-left: auto;
      @media screen and (max-width: 768px){
        width: $sp-contents;
        margin: auto;
      }
      p{
        font-size: get-vw(14px);
        line-height: 2;
        /*letter-spacing: responsive-vw(2.6px);*/
        text-align: left;
        color: #d5d5d5;
        @media screen and (max-width: 768px){
          font-size: 1.6vh;
          letter-spacing: 0.6vw;
          /*font-size: get-vh(14px);*/
          line-height: 2.1;
        }
      }
    }
    .sub-title{
      line-height: 1.93;
      letter-spacing: get-vh(1.5px);
      @media screen and (max-width: 768px){
        margin-top: 0;
        width: 80%;
      }
    }
    .new-posts{
      position: absolute;
      bottom: 0;
      width: 92vw;
      right: 0;
      height: get-vh(208px);
      @media screen and (max-width: 768px){
        bottom: -40vh;
        height: 30vh;
        /*height: get-vh(251px);*/
      }
      &__title{
        margin-bottom: get-vh(32px);
        color: #3aaa98;
        letter-spacing: 4.5px;
        @media screen and (max-width: 768px){
          margin: get-vh(10px) 0;
        }
      }
    }
    .green-border{
      border-left: 1px solid $main-color;
      padding-bottom: get-vh(120px);
    }
    .articles{
      height: 100%;
      display: flex;
    }
    .article{
      width: calc(100% - 5.70312vw);
      height: 100%;
      backdrop-filter: blur(1px);
      background-color: #ffffff17;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px){
        margin-left: auto;
        width: calc(100% - 18vw);
      }
      &-inner{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        width: 80%;
        @media screen and (max-width: 768px){
          justify-content: center;
          height: 100%;
        }
      }
      &__items{
        justify-content: space-between;
      }
      &__item{
        width: get-vw(337px);
      }
      &__description{
        width: get-vw(368px);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 200;
        font-size: get-vh(14px);
        margin: get-vh(18px) 0 get-vh(16px) 0;
        @media screen and (max-width: 768px){
          margin: get-vh(5px) 0;
          width: 100%;
        }
      }
    }
    .article__item__title{
      font-weight: 700;
      font-size: get-vw(15px);
    }
    .link{
      width: get-vw(73px);
      height: 100%;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      position: relative;
     transition: all .2s ease-out;
      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $main-color;
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      &:hover:before {
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
      }
      &:hover{
        background-position:  right;
      }
      @media screen and (max-width: 768px){
        width: responsive-vw(66px);
      }
    }
    .new-posts-link{
      height: 100%;
      width: 100%;
      line-height: get-vw(73px);
      white-space: nowrap;
      text-align: center;
      display: block;
      position: relative;
      z-index: 99;
      &:hover{
        transform: unset;
      }
      @media screen and (max-width: 768px){
        line-height: responsive-vw(66px);
      }

    }
  }
  .date {
    font-size: get-vw(12px);
    @media screen and (max-width: 768px) {
      font-size: responsive-vw(9px);
    }
  }
  .background{
    background-image: url('~assets/img/topbackground.jpg');
    width: 100%;
    height: 200vh;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-attachment: fixed;
    @media screen and (max-width: 768px) {
      background: #1b1b1b;
      height: get-vh(1029px);
      width: 100%;
    }
  }

  .foreground {
    margin-left: auto;
    width: 100%;
  }

  .bottom-ground{
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 2.57;
    letter-spacing: 1.4px;
    color: #fff;
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
