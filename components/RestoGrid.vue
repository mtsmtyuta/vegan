<template>
  <section>
    <div class="gray">

      <div class="responsive-container post-grid">
        <div v-for="post in posts"
             :key="post.id"
        >
          <nuxt-link :to="{ name: 'restaurants-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
            <div class="slide-content"
                 data-aos="fade-up"
                 data-aos-duration="500"
                 data-aos-delay="0"
                 data-aos-offset="10"
            >
<!--              <div class="img-box"-->
<!--                   v-bind:style="{ backgroundImage: 'url(' + post.fields.thumbnail.fields.file.url +')' }"-->
<!--              ></div>-->
              <img loading="lazy" class="img-box" :src="`${post.fields.thumbnail.fields.file.url}?fit=thumb&q=90&&w=290&h=273`" alt="">

              <p>  {{ post.fields.name }} | <span class="region">{{post.fields.region}}</span></p>
            </div>

          </nuxt-link>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        props: ['posts']
    }
</script>


<style lang="scss" >
  /*.region{*/
  /*  background: black;*/
  /*  color: white;*/
  /*  padding: 5px 10px;*/
  /*  border-radius: 25px;*/
  /*  margin-top: 10px;*/
  /*  display: inline-block;*/
  /*}*/
</style>

