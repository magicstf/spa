<template>
<div>
  <h2>向路由组件传递props</h2>
  <p>{{id}}</p>
</div>

</template>

<script>
export default {
    name:"lesson8",
    data() {
        return {
            // id:this.$route.params.id
        }
    },
    props: ['id'],
}
</script>