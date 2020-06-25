<template>
  <div>
<!--    <p>{{location.lat}}</p>-->

    <GMap
      ref="gMap"
      :center="{lat: location.lat, lng: location.lon}"
      :zoom="20"
    >
      <GMapMarker
        :position="{lat: location.lat, lng: location.lon}"
        @click="currentLocation = location"
      >
        <GMapInfoWindow>
          <b>{{ name }}</b>
          <br>
          <br>
          <a class="google-link" :href="'https://maps.google.com/?q=' + location.lat  + ',' + location.lon ">Google Mapで見る</a>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>

  </div>

</template>


<script>
    export default {
        props: ['location','name']
    }
</script>

<style lang="scss">
  a.google-link{
    color: #427fed;
  }
  .GMap__Wrapper{
    width: get-vw(290px);
    height: get-vw(224px);
    @media screen and (max-width: 768px){
      width: 100%;
      height: responsive-vw(190px);
    }
  }

</style>
