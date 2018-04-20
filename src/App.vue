<template>
  <div id="app">
    <!-- <Hello></Hello> -->
    <img src="./assets/logo.png">
    <router-view/>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
