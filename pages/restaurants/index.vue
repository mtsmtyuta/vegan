<template>
  <article>
    <div class="hero-banner restaurant">
      <h1 class="page-title">
        RESTAURANTS
      </h1>
    </div>
    <RestoGrid :posts="restaurants"></RestoGrid>
  </article>
</template>


<script>

    import RestoGrid from "../../components/RestoGrid";
    import client from "../../plugins/contentful";

    export default {
        components: {
            RestoGrid,
        },
        data (){
            return{
                restaurants: []
            }
        },
        asyncData ({env}) {
            return Promise.all([
                client.getEntries({
                    'content_type': env.CTF_RESTAURANTS_POST_TYPE_ID,
                    order: '-sys.createdAt'
                })
            ]).then(([restaurants]) => {
                return {
                    restaurants: restaurants.items
                }
            }).catch(console.error)
        },
        head: {
            title: 'Restaurants',
            description: 'ヴィーガン向けの飲食店は日本ではまだまだ多くはありません。私たちが見つけたオススメのお店を紹介していきます。'
        }
    }
</script>
