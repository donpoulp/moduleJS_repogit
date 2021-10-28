<template>
<div>
  <div>
    <p v-if="loading">En cours de chargement</p>
    <p v-if="error">{{ error }}</p>
  </div>
  <div>
    <City
    v-for="city in cities" :key="city.id" 
    v-bind:name="city.name"
    v-bind:weather="city.weather[0].description" 
    v-bind:temperature="city.main.temp"
    />
  </div>
</div>
</template>

<script>
import City from "./City";
import axios from "axios";


export default {
  name: "CitiesList",
  components: {
    City,
  },
  data(){
    return{
      cities: [],
      loading: false,
      error: null
    }
  },
  created () {
    axios
      .get('https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=7ab1824780ff60d1b78d8a5146c37ad1')
      .then(response => (this.cities = response.data.list))
      .catch(error => (this.error = error))
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
