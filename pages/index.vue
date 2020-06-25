<template>
  <div>
    <div id="main-content">


      <client-only>
        <div class="fv-container">
          <div class="img-box background pc"></div>
          <div class="foreground">
            <div class="top img-box">
              <div class="txt-box"
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="1000">
                <h1 class="en-medi">THE <br class="sp"> ANSWER FOR <br>YOUR OPTIMAL <br class="sp"> HEALTH</h1>
                <p class="jp sub-title">ヴィーガンのライフスタイルに興味があるけれど、<br>
                  何から始めたらいいか分からないという方の疑問に答えます。</p>
                <div class="sp">
                  <p>
                    植物を中心とした食事に切り替え<br>
                    パフォーマンスを大幅に向上させる為に<br>
                    必要なレシピ、食事計画、ヒントを手に入れて、<br>
                    毎日をエネルギッシュに過ごしましょう！
                  </p>
                </div>
              </div>
              <div class="new-posts"
                   data-aos="slide-left"
                   data-aos-duration="1000"
                   data-aos-delay="2000"
              >
                <div class="articles">
                  <div class="article flex column">
                    <div class="article-inner">
                      <h3 class="new-posts__title en-medi">ARTICLES</h3>
                      <div class="article__items flex pc">
                        <div class="article__item" v-for="index in 2"
                             :key="index"
                        >

                          <nuxt-link class="block grow" :to="{ name: 'posts-slug', params: { slug: posts[0].fields.slug }}" >

                            <p class="article__item__title bold">        {{ posts[1].fields.title }}
                              <span class="date en-medi">{{
                          ( new Date(posts[index].fields.publishDate).toDateString())
                          }}</span>
                            </p>

                            <p class="article__description">{{ posts[index].fields.description }}</p>
                          </nuxt-link>
                        </div>
                      </div>

                      <div class="article__items flex sp">
                        <nuxt-link class="block grow" :to="{ name: 'posts-slug', params: { slug: posts[0].fields.slug }}" >

                          <p class="article__item__title bold">        {{ posts[0].fields.title }}
                          </p>

                          <p class="article__description small">{{ posts[0].fields.description }}</p>
                          <span class="date smallest en-medi">{{
                          ( new Date(posts[0].fields.publishDate).toDateString())
                          }}</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="link">
                    <nuxt-link class="new-posts-link" to="/posts">VIEW MORE</nuxt-link>
                    <div class="bgbar"></div>
                  </div>

                </div>
              </div>
            </div>
            <div class="txt-box bottom-ground pc"
                 data-aos="fade-up"
                 data-aos-duration="3000"
                 data-aos-delay="100"
            >
              <p>植物を中心とした食事に切り替えると、最適な燃料が得られることで、血流が増加し、</p>
              <p>筋肉がより効率的になり、パフォーマンスが大幅に向上し、炎症を抑えることで回復が速くなります。</p>
              <p>これらのメリットはアスリートだけでなく、自分の生活のあらゆる面で力になり、気分を高めます。</p>
              <p>その為に必要なすべてのレシピ、食事計画、ヒント、および疑問への回答をここで入手してください。</p>
            </div>
          </div>
        </div>

      </client-only>


      <div class="main-content">

        <div class="introduction "
             data-aos="fade-up-mini"
             data-aos-duration="500"
             data-aos-delay="0"
        >
          <div class="comp-section-title">
            <h2 class="en-medi section-title">WHAT TO LEARN TODAY?</h2>
            <hr>
            <h3>何をお探しですか？</h3>
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
                <p class="strong"> - どうしてヴィーガンなの？</p>
                <p>病気のリスクを減らし、エネルギッシュで <br>
                  パフォーマンスの高い生活をおくる為には <br>
                  食生活を変えてみましょう。</p>
                <Button link="/posts/why-vegan" text="理由を学ぶ→" color="white" />
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/posts/why-vegan">
          <div class="comp-category-card sp"
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-delay="100"
          >
            <div class="img-box whyvegan-bg">
            </div>
            <div class="content-container sp">
              <div class="txt-box flex column">
                <h3 class="en-medi">WHY VEGAN</h3>
                <p class="strong"> - どうしてヴィーガンなの？</p>
                <p>病気のリスクを減らし、エネルギッシュで <br>
                  パフォーマンスの高い生活をおくる為には <br>
                  食生活を変えてみましょう。</p>
              </div>
            </div>
          </div>
        </nuxt-link>
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
                <p>動物性食品から摂取できる必須栄養素の全ては、<br>
                  植物だけでも摂取できます。<br>
                  神話に騙されないために栄養について学びましょう。</p>
                <Button link="/posts/nutrition" text="栄養に詳しくなる→" color="white" />
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/posts/nutrition">

          <div class="comp-category-card sp"
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-delay="100"
          >
            <div class="img-box nutrition-bg right">
            </div>
            <div class="content-container">
              <div class="txt-box flex column">
                <h3 class="en-medi">NUTRITION</h3>
                <p class="strong">栄養について学ぶ</p>
                <p>動物性食品から摂取できる必須栄養素の全ては、<br>
                  植物だけでも摂取できます。<br>
                  神話に騙されないために栄養について学びましょう。</p>
              </div>

            </div>
          </div>
        </nuxt-link>
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
                <p>チャンピオンのように最適な燃料を自分に供給するために <br>
                  必要なすべてのレシピ、食事計画、ヒント、 <br>
                  および回答を入手してください。</p>
                <Button link="/posts/recipe" text="料理してみる→" color="white" />

              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/posts/recipe">

          <div class="comp-category-card sp"
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-delay="100"
          >
            <div class="img-box recipe-bg left">
            </div>
            <div class="flex-part content-container">
              <div class="txt-box flex column">
                <div class="img-box recipe-icon"></div>
                <h3 class="en-medi">RECIPE</h3>
                <p class="strong">ヴィーガン料理をつくる</p>
                <p>チャンピオンのように最適な燃料を自分に供給するために <br>
                  必要なすべてのレシピ、食事計画、ヒント、 <br>
                  および回答を入手してください。</p>
              </div>
            </div>

          </div>
        </nuxt-link>
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
                <p>ヴィーガン向けの飲食店は日本では <br>
                  まだまだ多くはありません。 <br>
                  わたしたちが見つけた　オススメの店を紹介していきます。</p>
                <Button link="/posts/restaurant" text="食べに行こう→" color="white" />

              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/posts/restaurant">

          <div class="comp-category-card sp"
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-delay="100"
          >
            <div class="img-box restaurant-bg right">
            </div>
            <div class="flex-part content-container">
              <div class="txt-box flex column">
                <div class="img-box restaurant-icon"></div>
                <h3 class="en-medi">RESTAURANT</h3>
                <p class="strong">外でヴィーガン料理を食べる</p>
                <p>ヴィーガン向けの飲食店は日本では <br>
                  まだまだ多くはありません。 <br>
                  わたしたちが見つけた　オススメの店を紹介していきます。</p>
              </div>
            </div>

          </div>
        </nuxt-link>
        <div class="comp-category-card pc"
             data-aos="slide-right"
             data-aos-duration="1000"
             data-aos-delay="50"
        >
          <div class="img-box faq-bg left">
            <div class="flex-part content-container ">
              <div class="txt-box flex column">
                <div class="img-box faq-icon"></div>
                <h3 class="en-medi">FAQ</h3>
                <p class="strong">よくある質問</p>
                <p>タンパク質はどこで入手しますか？<br>
                  肉を食べなくても十分なエネルギーを得ることはできるの？<br>
                  などのよくある質問の問題を解決します。</p>
                <Button link="/posts/faq" text="答えを探す→" color="white" />
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/posts/faq">

          <div class="comp-category-card sp"
               data-aos="fade-up"
               data-aos-duration="2000"
               data-aos-delay="100"
          >
            <div class="img-box faq-bg left">
            </div>
            <div class="flex-part content-container ">
              <div class="txt-box flex column">
                <div class="img-box faq-icon"></div>
                <h3 class="en-medi">FAQ</h3>
                <p class="strong">よくある質問</p>
                <p>タンパク質はどこで入手しますか？<br>
                  肉を食べなくても十分なエネルギーを得ることはできるの？<br>
                  などのよくある質問の問題を解決します。</p>
              </div>
            </div>

          </div>
        </nuxt-link>
      </div>

      <RecentPosts :posts="posts"></RecentPosts>


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

    // const client = createClient();

    export default {
        layout: 'top',

        // head: {
        //     title: 'Home',
        // },
        components: {
            RecentPosts,
            Button,
            Posts,
            Footer
        },
        // mounted: function(){
        //     console.log(process.env.CTF_BLOG_POST_TYPE_ID);
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
                // fetch the owner of the blog
                // client.getEntries({
                //     'sys.id': env.CTF_PERSON_ID
                // }),
                // fetch all blog posts sorted by creation date
                client.getEntries({
                    // 'content_type': 'article',
                    'content_type': env.CTF_BLOG_POST_TYPE_ID,
                    order: '-sys.createdAt'
                })
            ]).then(([posts]) => {
                // return data that should be available
                // in the template
                return {
                    // person: entries.items[0],
                    posts: posts.items
                }
            }).catch(console.error);
        },
    }
</script>

<style lang="scss">





  .main-content{
    background-color: #f2f2f2;
    padding-bottom: get-vh(10px);
    overflow: hidden !important;
  }
  .fv-container {
    position: relative;
    width: 100%;
    height: 156vh;
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
    width: get-vw(1172px);
    /*height: get-vw(804px);*/
    height: 100vh;
    position: relative;
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/sptop.jpg');
      height: get-vh(709px);
      width: 100%;
      background-attachment: scroll;
    }
    h1{
      font-size: get-vw(76px);
      padding-top: get-vh(216px);
      line-height: 1;
      @media screen and (max-width: 768px){
        font-size: get-vh(40px);
        line-height: 1.5;
        padding-top: get-vh(80px);
      }
    }
    .txt-box {
      @media screen and (max-width: 768px){
        width: $sp-contents;
        margin: auto;
      }
      p{
        font-size: get-vh(13px);
        line-height: 2.1;
        letter-spacing: responsive-vw(2.6px);
        text-align: left;
        color: #d5d5d5;
      }
    }
    .sub-title{
      margin-top: get-vh(19px);
      line-height: 1.93;
    }
    .new-posts{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: get-vh(314px);
      @media screen and (max-width: 768px){
        bottom: -15vh;
        height: get-vh(251px);
      }
      &__title{
        margin-bottom: get-vh(32px);
        @media screen and (max-width: 768px){
          margin: get-vh(10px) 0;
        }
      }
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
        width: calc(100% - 11vh);
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
      &__description{
        width: get-vw(368px);
        @media screen and (max-width: 768px){
          margin: get-vh(5px) 0;
          width: 100%;
        }
      }
    }
    .article__item__title{
      margin: 0 0 get-vh(21px) 0;
      font-weight: 600;
      @media screen and (max-width: 768px){
        margin: 0;
      }
    }
    .link{
      width: get-vw(73px);
      height: 100%;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      position: relative;
      @media screen and (max-width: 768px){
        width: responsive-vw(66px);
      }

      .bgbar{
        background-color: $main-color;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.6s;
      }
      &:hover{
        .bgbar{
          height: 0;
        }
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
      @media screen and (max-width: 768px){
        line-height: responsive-vw(66px);
      }

    }
  }
  .date {
    font-size: get-vw(9px);
    @media screen and (max-width: 768px) {
      font-size: responsive-vw(9px);
    }
  }
  .background{
    background-image: url('~assets/img/topbackground.jpg');
    width: 100%;
    height: 156vh;
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
    @media screen and (max-width: 768px){
      width: 100%;
    }
  }

  .bottom-ground{
    width: 100%;
    text-align: center;
    height: 56vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 2.57;
    letter-spacing: 1.4px;
    color: #fff;
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
  .faq-bg{
    background-image: url('~assets/img/faq.jpg');
    @media screen and (max-width: 768px) {
      background-image: url('~assets/img/faq-sp.jpg');
    }

  }
  .introduction{
    padding: get-vh(132px) 0 get-vh(115px);
  }

  .recent-posts{
    .comp-section-title{
      margin: get-vh(85px) 0;
    }
    div.button{
      margin: get-vh(85px) auto;
      border: 1px solid #cbcbcb;
    }
  }

</style>
