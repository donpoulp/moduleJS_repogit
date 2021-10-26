<template>
  <div class="city">
    <h1>{{ name }}</h1>
    <p>{{ weather }}</p>
    <p>{{ temperature }}</p>
  </div>
</template>

<script>
export default {
  name: "City",
props: [
    'name',
    'weather',
    'temperature'
]
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
