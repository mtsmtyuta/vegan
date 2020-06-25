<template>
  <div class="loading" :class="{ 'is-finish': dataLoadFinish }">
    <div class="img-box"></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                dataLoadFinish: false
            }
        },
        mounted() {
            window.addEventListener('load', () => {
                this.dataLoadFinish = true
                console.log('premiere chargement fini')
            });
            window.onpageshow = function(event) {
                if (event.persisted) {
                    // window.location.reload();
                    this.dataLoadFinish = true
                }
            };
            this.dataLoadFinish = true
        }
    }
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: black;
    /*background: white;*/
    &.is-finish {
      transition: opacity 1s, z-index 0s 1.01s;
      opacity: 0;
      z-index: -1;
    }
    .img-box{
      background-image: url("/oxlogo.svg");
      /*background-image: url("/loading.svg");*/
      width: get-vh(200px);
      height: get-vh(200px);
    }
  }
</style>
