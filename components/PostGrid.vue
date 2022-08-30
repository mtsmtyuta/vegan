<template>
    <section>
        <div class="gray">

            <div class="pc post-grid" v-if="posts">
                <div v-for="post in posts"
                     :key="post.id"
                >
                    <nuxt-link v-if="post.fields.slug" :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
                        <div class="slide-content"
                             data-aos="fade-up"
                             data-aos-duration="500"
                             data-aos-delay="0"
                             data-aos-offset="100"
                        >
                            <!--                 data-aos="fade-up"-->
                            <!--                 data-aos-duration="500"-->
                            <!--                 data-aos-delay="50"-->
                            <!--                 data-aos-offset="10"-->
                            <!--            >-->
                            <!--              <div class="img-box"-->
                            <!--                   v-bind:style="{ backgroundImage: 'url(' + post.fields.thumbnail.fields.file.url +')' }"-->
                            <!--              ></div>-->
                            <img v-if="post.fields.thumbnail.fields.file.url" loading="lazy" class="img-box" :src="`${post.fields.thumbnail.fields.file.url}?fit=thumb&w=572&h=380`" alt="">

                            <p v-if="post.fields.title" class="strong">{{ post.fields.title }} <span v-if="post.fields.region" class="region"> | {{post.fields.region}}</span></p>
                            <!--              <span v-if="post.fields.publishDate" class="date">  {{-->
                            <!--            ( new Date(post.fields.publishDate).toDateString())-->
                            <!--            }}</span>-->

                        </div>

                    </nuxt-link>

                </div>
            </div>

            <PostList class="sp" :post="posts" />
        </div>

    </section>
</template>

<script>
import PostList from "./PostList";
export default {
    components: {PostList},
    props: ['posts']
}
</script>


<style lang="scss" >
.gray{
    padding-top: get-vw(14px);
    /*background-color: #f2f2f2;*/
    /*padding-bottom: get-vw(300px);*/
}

.post-grid{
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 80vw;
    justify-content: center;
    @media screen and (max-width: 767px){
        display: block;
        margin: auto;
    }
    .card-footer-item{
        margin-bottom: get-vw(100px);
    }
    .slide-content{
        margin: 0 get-vw(8px);
        width: get-vw(180px);
        height: get-vw(178px);
        @media screen and (max-width: 767px){
            width: 100%;
            /*height: responsive-vw(350px);*/
            height: unset;
            margin-left: 0;
            margin-right: 0;
            margin-top: responsive-vw(43px);
        }
        .img-box{
            width: get-vw(180px);
            height: get-vw(120px);


            @media screen and (max-width: 767px){
                width: 100%;
                height: unset;


                /*height: responsive-vw(284px);*/
                /*height: auto;*/
            }
        }
    }
}
</style>

