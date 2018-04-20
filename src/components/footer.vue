<template>
  <footer class="copy">
    Copy &copy; stf {{ myid }}
  </footer>
</template>
<script>
export default {
  data() {
    return {
      id:1,
    }
  },
  props:["myid"]
}
</script>