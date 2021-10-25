<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CitiesList/>
  </div>
</template>

<script>
import CitiesList from "./components/CitiesList.vue";

export default {
  name: "App",
  components: {
    CitiesList,
  },
};
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
</style>
