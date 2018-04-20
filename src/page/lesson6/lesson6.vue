<template>
<div class="us">
  <h2>嵌套命名路由</h2>
  <div class="us__nav">
    <router-link to="/lesson6/foo">emails</router-link>
    <router-link to="/lesson6/other">profile</router-link>
  </div>
  <router-view class ="us__content"/>
  <router-view name="baz" class="us__content us__content--helper"/>
</div>
</template>
