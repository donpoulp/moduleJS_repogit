<template>
  <div id="app">
    <nav>
  <img alt="Vue logo" src="./assets/Log_Spiruline.png">
  <h2>Que voulez-vous faire ?</h2>
  <router-link :to="'/SuppliersList'">
    <button class="firstButton">Liste des Suppliers</button>
  </router-link>
  <router-link :to="'/SuppliersMap'">
    <button>Map des Suppliers</button>
  </router-link>
  </nav>
  <router-view></router-view>
  </div>
</template>

<script>
// import SuppliersList from './components/SuppliersList.vue';
// import SuppliersMap from './components/SuppliersMap.vue';

export default {
  name: 'App',
  // components: {
  //   // SuppliersList,
  //   SuppliersMap
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  font-size: 3rem;
}
button{
  background-color: #31C522;
  color: blue;
  width: 11rem;
  height: 2.5rem;
    font-size: 1rem;
}
.firstButton{
  text-align: center;
  margin-right: 3.5rem;
}
</style>
