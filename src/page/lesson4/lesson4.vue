<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <a v-on:click="wantGo('/foo4/4')">Go to Foo</a>
      <a v-on:click="wantGo('/bar4/4')">Go to Bar</a>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name:'lesson4',
    data() {
      return {
        msg:'this is lesson4',
      }
    },
    methods: {
      wantGo(path) {
        this.$router.push({path:path});
      }
    }
  }
</script>